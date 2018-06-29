import ChatTemplate from './chat.component.html';

class ChatController {

  constructor($http, $sce, $timeout) {
    'ngInject';
    this.$http = $http;
    this.minimised = false;
    this.insightsCount = null;
    this.$sce = $sce;
    this.$timeout = $timeout;
  }

  $onInit() {

  }

  $onChanges() {
    console.log('chat component changed');
  }

  $onDestroy() {
    console.log('chat component destroyed');
  }

  showHide() {
    this.minimised = !this.minimised;
  }

  insightSeen() {
    // Once seen remove from array?
    this.insights = [];
    this.minimised = true;
  }

  tellMeMore() {

    var payload = {
      "currentNode": "",
      "complete": null,
      "context":{},
      "parameters": [],
      "extractedParameters": {},
      "speechResponse": "",
      "intent": {},
      "input": "How do I improve my happiness",
      "missingParameters": []
    };

    this.$http.post('http://localhost:8080/gateway/api/v1', payload)
      .then(res => {
        this.insights.push({
          type: "answer", 
          message: this.$sce.trustAsHtml(res.data.speechResponse[0])
        });

        this.$timeout(function() {
          var scroller = $(".panel-body")[0];
          console.log('tata', scroller)
          scroller.scrollTop = scroller.scrollHeight;
        }, 0, false);
      })
  }

  sendQuestion() {

    this.insights.push({
      type: "question", 
      message: this.$sce.trustAsHtml(this.question)
    });

    var payload = {
      "currentNode": "",
      "complete": null,
      "context":{},
      "parameters": [],
      "extractedParameters": {},
      "speechResponse": "",
      "intent": {},
      "input": this.question,
      "missingParameters": []
    };

    this.$http.post('http://localhost:8080/gateway/api/v1', payload)
      .then(res => {

        this.insights.push({
          type: "answer", 
          message: this.$sce.trustAsHtml(res.data.speechResponse[0])
        });

        this.$timeout(function() {
          var scroller = $(".panel-body")[0];
          console.log('tata', scroller)
          scroller.scrollTop = scroller.scrollHeight;
        }, 0, false);

      });
  }
}

let ChatComponent = {
  template: ChatTemplate,
  bindings: {
    insights: '<'
  },
  controller: ChatController
}

export default ChatComponent;
