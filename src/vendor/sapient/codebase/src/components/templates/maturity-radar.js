/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('MaturityRadarController', MaturityRadarController);

    MaturityRadarController.$inject = ['$http'];
    function MaturityRadarController($http) {
        var ctrl = this,
            data;
        
        //only use for on load for spinning
        data = {
          "textLines": [
            "......"
          ],
          "groups": [
            {
              "textLines": [
                "Speed"
              ],
              "bars": [
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
              ]
            },
            {
              "textLines": [
                "Quality"
              ],
              "bars": [
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
              ]
            },
            {
              "textLines": [
                "People"
              ],
              "bars": [
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
                {
                  "textLines": [
                    "......"
                  ],
                  "value": 0
                },
              ]
            }
          ]
        }

        ctrl.isSpinerLoading = true;
        //only use for on load
        d3.select(".maturity-radar").datum(data).call(sunburstBarChart().edge(600).maxBarValue(5).rotation(-95 * Math.PI / 180));
        
        $http.get('api/maturitylevels').then(function (response) {        
          d3.select(".maturity-radar").select("svg").remove();
          data = response.data;
          ctrl.isSpinerLoading = false;
          d3.select(".maturity-radar").datum(data).call(sunburstBarChart().edge(600).maxBarValue(5).rotation(-95 * Math.PI / 180));
        });
        var div = d3.select(".maturity-radar").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
        
        function sunburstBarChart() {
          var edge = 400,
              maxBarValue = 5,
              rotation = -95 * Math.PI / 180;

          var radius = edge / 2,
              effectiveEdge = edge * 1.2,
              scale = d3.scale.linear().domain([0,maxBarValue + 2]);

          var partition = d3.layout.partition()
              .sort(null)
              .size([2 * Math.PI, radius * radius])
              .value(function(d) { return 1; }); 
              

          var arc = d3.svg.arc()
              .startAngle(function(d) { return d.x + rotation; })
              .endAngle(function(d) { return d.x + d.dx + rotation; })
              .innerRadius(function(d) {
                if(d.depth == 0) {
                  d.yi = Math.sqrt(d.y);
                } else {
                  d.yi = scale.range([Math.sqrt(d.dy), edge / 2.15])(d.depth);
                }
                return d.yi;
              })
              .outerRadius(function(d) { 
                if(d.depth == 0) {
                  d.yo = Math.sqrt(d.y + d.dy);
                } else if(d.depth == maxBarValue + 1) {
                  d.yo = edge / 2;
                } else {
                  d.yo = scale.range([Math.sqrt(d.y + d.dy), edge / 2.15])(d.depth);
                }
                return d.yo;
              });

          var labelArc = d3.svg.arc()
              .startAngle(function(d) { return d.x + rotation; })
              .endAngle(function(d) { return d.x + d.dx + rotation; })
              .innerRadius(function(d, i) {
                return d3.scale.linear().domain([-1, d.textLines.length]).range([d.yi, d.yo])(i);
              })
              .outerRadius(function(d, i) { 
                return d3.scale.linear().domain([-1, d.textLines.length]).range([d.yi, d.yo])(i);
              });

          var oArc = d3.svg.arc()
              .startAngle(function(d) {
                return d.values[0].x + rotation;
              })
              .endAngle(function(d) {
                return d.values[d.values.length - 1].x + d.values[d.values.length - 1].dx + rotation;
              })
              .innerRadius(function(d) { d.yi = edge / 2; return d.yi; })
              .outerRadius(function(d) { d.yo = effectiveEdge * 0.96 / 2; return d.yo; });

          var outerLabelArc = d3.svg.arc()
              .startAngle(function(d) {
                return d.values[0].x + rotation;
              })
              .endAngle(function(d) {
                return d.values[d.values.length - 1].x + d.values[d.values.length - 1].dx + rotation;
              })
              .innerRadius(function(d, i) { 
                return d3.scale.linear().domain([0, d.values[0].textLines.length - 1]).range([d.yi * 1.05, d.yo * 0.9])(i);
              })
              .outerRadius(function(d, i) {
                //(edge / 2) + ((effectiveEdge - edge) * 0.12)
                return d3.scale.linear().domain([0, d.values[0].textLines.length - 1]).range([d.yi * 1.05, d.yo * 0.9])(i);
              });

          var chart = function(selection) {
            selection.each(function(data) {
              var root = getRoot(data);

              var svg = d3.select(this).append("svg")
                .attr("width", effectiveEdge)
                .attr("height", effectiveEdge)
                .append("g")
                .attr("transform", "translate(" + (effectiveEdge / 2) + "," + (effectiveEdge / 2) + ")");

              // Inner nodes including the last node for names
              var g = svg.datum(root).selectAll("g")
                  .data(partition.nodes)
                  .enter()
                  .append("g");
              
              g.append("path")
                .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
                .attr("d", arc)
                .on("mouseover", function(d) {
                  div.transition()
                  .duration(200)
                  .style("opacity", .9);                
                  div.html(d.maturityLevelsToolTip);  
                  })
              .on("mouseout", function(d) {
                  div.transition()
                  .duration(500)
                  .style("opacity", 0);
                  })
                .attr("class", function(d) { 
                  var styleClass = "nodesBorder";
                  if(d.depth && d.depth <= maxBarValue) {
                    styleClass += " group-" + d.group + (d.on ? "-on" : "-off");
                  } else if(d.depth == maxBarValue + 1) {
                    styleClass += " labelTextBackground";
                  }
                  return styleClass;
                })
                .attr("fill-rule", "evenodd");

              // Add labels to the last arc
              g.filter(function(d) { return d.depth == maxBarValue + 1; })
                .selectAll(".labelPath")
                .data(function(d, i) { d.i = i; return _.fill(Array(d.textLines.length), d); })
                .enter()
                .append("path")
                .attr("fill", "none")
                .attr("stroke", "none")
                .attr("id", function (d, i) {
                  return "arc-label" + d.i + "-" + i;
                })
                .attr("d", labelArc);
              
              g.filter(function(d) { return d.depth == maxBarValue + 1; })
                .selectAll(".labelText")
                .data(function(d, i) { d.i = i; return _.fill(Array(d.textLines.length), d); })
                .enter()
                .append("text")
                .attr("text-anchor", "middle")
                .append("textPath")
                .attr("class", "labelText")
                .attr("startOffset", "25%")
                .attr("xlink:href", function(d, i) {
                  return "#arc-label" + d.i + "-" + i;
                })
                .text(function(d, i) {
                  return d.textLines[d.textLines.length - 1 - i];
                });

              // Groups data for outer circle
              var groups = d3.nest()
                  .key(function(d) { return d.group; })
                  .entries(root.children);

              var og = svg.selectAll(".outerLabels")
                  .data(groups, function(d, i) { return i; })
                  .enter()
                  .append("g");

              // Outer circle
              og.append("path")
                .attr("d", oArc)
                .attr("class", function(d, i) { return "outerCircleBorder group-" + (i + 1) + "-on";});

              // Outer labels
              og.selectAll(".outerLabelPath")
                .data(function(d, i) { d.i = i; return _.fill(Array(d.values[0].textLines.length), d); })
                .enter()
                .append("path")
                .attr("fill", "none")
                .attr("stroke", "none")
                .attr("id", function (d, i) {
                  return "outer-arc-label" + d.i + "-" + i;
                })
                .attr("d", outerLabelArc);
              
              og.selectAll(".outerLabelText")
                .data(function(d, i) { d.i = i; return _.fill(Array(d.values[0].textLines.length), d); })
                .enter()
                .append("text")
                .attr("text-anchor", "middle")
                .attr("class", "outerLabelText")
                .append("textPath")
                .attr("startOffset", "25%")
                .attr("xlink:href", function(d, i) {
                  return "#outer-arc-label" + d.i + "-" + i;
                })
                .text(function(d, i) {
                  return d.values[0].textLines[d.values[0].textLines.length - 1 - i];
                  return d.key;
                });

              // Center labels
              var cg = svg.append("g");
              var yScale = d3.scale.linear().domain([-1, root.textLines.length]).range([-root.yo * 0.5, root.yo * 0.8]);

              cg.selectAll(".centerLabelText")
                .data(root.textLines)
                .enter()
                .append("text")
                .attr("x", 0)
                .attr("y", function(d, i) { return yScale(i); })
                .attr('text-anchor', 'middle')
                .attr("class", "centerLabelText")
                .text(function(d) { return d; });
           
           
              });

            
              
          };

          chart.edge = function(_) {
            if(arguments.length) {
              effectiveEdge = _;
              edge = effectiveEdge * 0.833333;
              radius = edge / 2;
            }
            return chart;
          };

          chart.maxBarValue = function(_) {
            if(arguments.length) {
              maxBarValue = _;
              scale = d3.scale.linear().domain([0, maxBarValue + 2]);
            }
            return chart;
          };

          chart.rotation = function(_) {
            if(arguments.length) {
              rotation = _;
            }
            return chart;
          };

          d3.select(".maturity-radar")
         

          function appendChild(parent, g, b, i, j) {
            var child = {};
            child.group = i + 1;
            child.textLines = g.textLines;   
           
            //for display description and M1 -M5  data on mouse hover            
            child.maturityLevelsToolTip = maturityLevelTooltip(b);

            if(j < b.value) {
              child.on = true;
            }
            parent.children = parent.children || [];
            parent.children.push(child);

            if(j < maxBarValue) {
              appendChild(parent.children[parent.children.length - 1], g, b, i, j+1);
            } else {
              child.textLines = b.textLines;
            }
          }

          function getRoot(data) {
            var root = {};

            root.textLines = data.textLines;
            root.children = [];

            data.groups.forEach(function(g, i) {
              g.bars.forEach(function(b) {
                appendChild(root, g, b, i, 0);
              });
            });

            return root;
          }

          return chart;
        }
        
        function maturityLevelTooltip(maturityLevelData) {
          var textLinesString = maturityLevelData.textLines.toString().replace(/[, ]+|/g ,'').trim();
          //currently we are using static descriptio  for display tooltip, when descrioption is available in JSON then remove below function 'getMaturityLevelDescription
                        
          var maturityLevelTooltipData = maturityLevelData.maturityLevels ?  maturityLevelData : getMaturityLevelDescription(textLinesString.toLowerCase());
          var textLine = maturityLevelData.textLines && maturityLevelData.textLines.toString().replace(/,/g ,' ');
         // var maturityLevel = d.maturityValue == 0 ? ' Not Available' : d.maturityValue;         
          var renderDescription =
              '<div class="table-wrap">'+
              '<p> <strong>Leading KPI : </strong> '+ textLine +' </p>'+ 
              '<p> <strong>Description : </strong>   '+ maturityLevelTooltipData.description +'</p>'
              
          if(maturityLevelTooltipData.maturityLevels) {
            renderDescription += '<div class="maturity-level-header col-md-12"><span class="maturity-level-column col-md-2"><strong>Maturity Level :</strong></span>'
            
              if(maturityLevelTooltipData.maturityLevels && maturityLevelTooltipData.maturityLevels.M1) {
                renderDescription += '<span class="col-md-2"><strong>M1</strong></br><sub>'+ maturityLevelTooltipData.maturityLevels.M1 +'</sub></span>'
              }
              if(maturityLevelTooltipData.maturityLevels && maturityLevelTooltipData.maturityLevels.M2) {
                renderDescription += '<span class="col-md-2"><strong>M2</strong></br><sub>'+ maturityLevelTooltipData.maturityLevels.M2 +'</sub></span>'
              }
              if(maturityLevelTooltipData.maturityLevels && maturityLevelTooltipData.maturityLevels.M3) {
                renderDescription +='<span class="col-md-2"><strong>M3</strong></br><sub>'+ maturityLevelTooltipData.maturityLevels.M3 +'</sub></span>'
              }
              if(maturityLevelTooltipData.maturityLevels && maturityLevelTooltipData.maturityLevels.M4) {
                renderDescription += '<span class="col-md-2"><strong>M4</strong></br><sub>'+ maturityLevelTooltipData.maturityLevels.M4 +'</sub></span>'
              }
              if(maturityLevelTooltipData.maturityLevels && maturityLevelTooltipData.maturityLevels.M5) {
                renderDescription += '<span class="col-md-2"><strong>M5</strong></br><sub>'+ maturityLevelTooltipData.maturityLevels.M5 +'</sub></span>'
              }
            renderDescription += '</div>'
          }
          renderDescription += '</div>'         
          return renderDescription;
        }

        function getMaturityLevelDescription(description){
          if(description === 'codebuildtime') {
            return {
              description :'Time required to build the deployable packet, passing all gates of CI  (incl. code quality, sanity etc.)',
              maturityLevels : {
                M1:'> 6 hrs',
                M2:'4-6 hrs',
                M3:'2-4 hrs',
                M4:'< 2 hrs',
                M5:'<= 10 min',
              }
            }
          }
          else if (description === 'happinessindex'){
            return {
              description :'Rating provided by the team against 4 parameters: (Work life balance, Recognition, Learning & Innovation) in the standup',
              maturityLevels : {
                M1:'<=1/5',
                M2:'<2/5',
                M3:'<3/5',
                M4:'<4/5',
                M5:'=5/5',
              }
            }
          }
          else if(description === 'completedstorydemonstratedtoproductowner'){           
            return {
              description :'Demonstration to Product owner',
              maturityLevels : {
                M1:'End of Sprint',
                M2:'Twice in a Sprint',
                M3:'Every Week',
                M4:'Twice a Week',
                M5:'Every Day',
              }
            }
          }
          else if(description === 'improvement'){
            return {
              description :'Kaizen Mindset - Retrospectives regularly held and action items recorded and progressed',
              maturityLevels : {
                M1:'No Retrospectives',
                M2:'No actions Tracked',
                M3:'Tracked but consistently > 50% open',
                M4:'Tracked but consistently <50% open',
                M5:'100% actions items closed & Proactively improving',
              }
            }
          }
          else if(description === 'automatedtest%'){
            return {
              description :'Percent of automated tests (functional and Non functional) over Total tests',
              maturityLevels : {
                M1:'0-20%',
                M2:'20-40%',
                M3:'40-60%',
                M4:'60-80%',
                M5:'>= 80%',
              }
            }
          }
          else if(description === 'jsunitcoverage&pass%'){
            return {
              description :'Code coverage over number of lines of JS code and percentage of test cases getting passed',
              maturityLevels : {
                M1:'< 20%',
                M2:'< 40%',
                M3:'< 60%',
                M4:'< 80%',
                M5:'> 99%',
              }
            }
          }
          else if(description === 'junitcoverage&pass%'){
            return {
              description :'Code coverage over number of lines of Java code and percentage of test cases getting passed',
              maturityLevels : {
                M1:'< 20%',
                M2:'< 40%',
                M3:'< 60%',
                M4:'< 80%',
                M5:'> 99%',
              }
            }
          }
          else if(description === 'codequality'){
            return {
              description :'Sonar SQALE rating',
              maturityLevels : {
                M1:'SQALE Rating E',
                M2:'SQALE Rating D',
                M3:'SQALE Rating C',
                M4:'SQALE Rating B',
                M5:'SQALE Rating A',
              }
            }
          }
          else if(description === 'flowefficiency'){
            return {
              description :'Value added time versus overall time',
              maturityLevels : {
                M1:'0-20%',
                M2:'20-40%',
                M3:'40-60%',
                M4:'60-80%',
                M5:'>= 80%',
              }
            }
          }
          else if(description === 'functionaltestexecutiontime'){
            return {
              description :'Time taken to execute the testing',
              maturityLevels : {
                M1:'> 4 weeks',
                M2:'2-4 weeks',
                M3:'1-2 weeks',
                M4:'1-4 days',
                M5:'<= 2 hours',
              }
            }
          }
          else if(description === 'sprintpredictability'){
            return {
              description :'The average story points delivered in the last n sprints divided by the average story points committed in the last n sprints',              
              maturityLevels : {
                M1:'<25%',
                M2:'25-50%',
                M3:'50-75%',
                M4:'75-100%',
                M5:'100%',
              }
            }
          }
          else if(description === 'dortodod'){
            return {
              description :'Time taken from Ready To Start to Development & Test Complete',
              maturityLevels : {
                M1:'>24 Weeks',
                M2:'24-12 weeks',
                M3:'4-12 Weeks',
                M4:'2-4 Weeks',
                M5:'<2 weeks',
              }
            }
          }
          else if(description === 'timetofixabrokenbuild'){
            return {
              description :'Time lag between broken (including compilation or quality gate failure) build to the fixed build',
              maturityLevels : {
                M1:'> 1 day',
                M2:'> 1 hr',
                M3:'< 45 min',
                M4:'< 30 min',
                M5:'< 10 min',
              }
            }
          }
          else if(description === 'releaseanddeploytime'){
            return {			
              description :'Time required to release the packet on Prod like cluster and  bringing the services back for use',
              maturityLevels : {
                M1:'> 2 hrs',
                M2:'< 2 hrs',
                M3:'< 1 hr',
                M4:'< 30 min',
                M5:'< 10 min',
              }
            }
          }
          else if(description === 'numberofcheck-insperdayinmaster'){
            return {
              description :'Number of check-ins and builds per day on the master branch',
              maturityLevels : {
                M1:'lack of daily check-in & build',
                M2:'One merge and one build per day',
                M3:'1 to 2 checks in per developer and build every few hours',
                M4:'1 to 2 check-in per developer and build per checkin',
                M5:'8 to 32 check-in per day per dev and build per checkin',
              }
            }
          }
          else if(description === 'dodtolive'){
            return {		
              description :'Time taken from Development & Test Complete to Live',
              maturityLevels : {
                M1:'>12 weeks',
                M2:'6-12 weeks',
                M3:'2-6 weeks',
                M4:'< 2 weeks',
                M5:'< 2 days',
              }
            }
          }
          else if(description === 'dortolive'){
            return {
              description :'End to end time from DOR to Live including waste',
              maturityLevels : {
                M1:'>24 weeks',
                M2:'24-12 weeks',
                M3:'4-12 weeks',
                M4:'2-4 weeks',
                M5:'< 2 weeks',
              }
            }
          }
          else if(description === 'defectinjectionrate'){
            return {
              description :'Number of defects identified post done (pre-live) over story count',
              maturityLevels : {
                M1:'> 30%',
                M2:'10-30%',
                M3:'5-10%',
                M4:'2-5%',
                M5:'< 2%',
              }
            }
          }
          else if(description === 'assignedvalue'){
            return {
              description :'Percentage of stories that have assigned value over overall stories in the Sprint',
              maturityLevels : {
                M1:'0-20%',
                M2:'20-40%',
                M3:'40-60%',
                M4:'60-80%',
                M5:'>= 80%',
              }
            }
          }
          else if(description === 'backloghealth'){
            return {
              description :'Total number of stories in Product backlog status at the end od last sprint divided by average number of stories delivered in last 3 sprints',
              maturityLevels : {
                M1:'0-20',
                M2:'20-40',
                M3:'40-60',
                M4:'60-80',
                M5:'>= 80',
              }
            }
          }
          else if(description === 'assignedvaluetrend'){
            return {
              description :'Trend of assigned value over multiple sprints',
              maturityLevels : {
                M1:'0-20%',
                M2:'20-40%',
                M3:'40-60%',
                M4:'60-80%',
                M5:'>= 80%',
              }
            }
          }
          else if(description === 'techdebt'){
            return {
              description :'Total Story Points of all Technical issues',
              maturityLevels : {
                M1:'-60',
                M2:'60-30',
                M3:'30-10',
                M4:'10-2',
                M5:'2-',
              }
            }
          }
          else if(description === 'commitmentreliability'){
            return {
              description :'Number of committed stories delivered / Total number of committed stories',
              maturityLevels : {
                M1:'0-20%',
                M2:'20-40%',
                M3:'40-60%',
                M4:'60-80%',
                M5:'>= 80%',
              }
            }
          }
          else if(description === 'timetocreateanewenvironment'){
            return {
              description :'Time it takes to new environment for Dev / QA',
              maturityLevels : {
                M1:'> 8 hrs',
                M2:'< 4 hrs',
                M3:'< 2 hrs',
                M4:'< 30 min',
                M5:'< 10 min',
              }
            }
          }
          else if(description === 'backlogtodor'){
              return {
                description :'Time taken from backlog to Ready To Start to Development',
                maturityLevels : {
                	 M1:'>12 weeks',
                     M2:'6-12 weeks',
                     M3:'2-6 weeks',
                     M4:'< 2 weeks',
                     M5:'< 2 days',
                }
              }
            }
          else if(description === 'leadtime'){
              return {
                description :'Time taken from backlog to Live',
                maturityLevels : {
                	 M1:'>12 weeks',
                     M2:'6-12 weeks',
                     M3:'2-6 weeks',
                     M4:'< 2 weeks',
                     M5:'< 2 days',
                }
              }
            }
          else if(description === 'defectinjectionratepostlive'){
              return {
                description :'Number of defects identified post live ',
                maturityLevels : {
                  M1:'> 30',
                  M2:'10-30',
                  M3:'5-10',
                  M4:'2-5',
                  M5:'< 2',
                }
              }
            }
          else {
            return {
              description :'Not Available',
              M1:'-',
              M2:'-',
              M3:'-',
              M4:'-',
              M5:'-',
            }
          }
        }
    }
})();