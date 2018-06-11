angular.module('example.components').component('exampleSettings', {
  template: `
  <div class="container"> 
  <h1 class="page-header">Settings</h1>
  <uib-tabset active="active" class="tabs">
    <uib-tab>
      <uib-tab-heading>
        JIRA
      </uib-tab-heading>
      <div ng-repeat="(key, value) in $ctrl.properties">
        <spdy-input-text ng-if="value.inputType === 'text' && (value.technical === undefined || value.technical === 'false')" name="{{value.label}}" description="{{value.description}}" value="ctrl.data[key]" required="{{value.required}}"></spdy-input-text>
        <spdy-input-number ng-if="value.inputType === 'number' && (value.technical === undefined || value.technical === 'false')" name="{{value.label}}" description="{{value.description}}" value="ctrl.data[key]"></spdy-input-number>
        <spdy-input-textarea ng-if="value.inputType === 'textarea' && (value.technical === undefined || value.technical === 'false')" name="{{value.label}}" description="{{value.description}}" value="ctrl.data[key]"></spdy-input-textarea>
      </div>
    </uib-tab>
    <uib-tab heading="Dashboard">
        <br />
      Dashboard
    </uib-tab>  
    <uib-tab heading="Sonar">
        <br />
      Sonar
    </uib-tab>  
  </uib-tabset>
  <div class="row">
    <div class="col-md-12">
    <input class="btn btn-default" type="submit" value="Save">
  </div>
  </div>
</div>
  `,
  bindings: {
    hero: '='
  },
  controller: function($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.properties = {
      "storyFirstStatus": {
        "type": "string",
        "inputType": "text",
        "technical": "false",
        "label": "First Status of Story",
        "description": "When you create a new issue, the issue gets created with a default status. Provide that value against this property. By Default, it should be Open."
      },
      "jiraIssueTypeNames": {
        "type": "array",
        "inputType": "text",
        "technical": "false",
        "label": "JIRA issue types being used in the project",
        "description": "In JIRA, general IssueType IDs are associated with various 'Issue' attributes. However, there is one attribute which the JIRA collector's queries rely on that varies from one JIRA instance to another. Provide a string name reference to your instance's IssueType, for the lowest level of Issues (e.g User Story) specific to your JIRA instance."
      },
      "jiraSprintDataFieldName": {
        "type": "string",
        "inputType": "text",
        "technical": "false",
        "label": "JIRA field that captures Sprint Name",
        "description": "In JIRA, your instance should have its own custom field created for 'Sprint' or 'Timebox' details. This field allows you to specify the data field for your instance of JIRA. You can retrieve your instance's Sprint data field name via the following URI: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name]. You can look for a package name com.atlassian.greenhopper.service.sprint.Sprint and identify the custome field name.Example: Provide the URI https://jira.devops.lloydsbanking.com/rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the package com.atlassian.greenhopper.service.sprint.Sprint. Use the value for this parameter"
      },
      "jiraEpicIdFieldName": {
        "type": "string",
        "inputType": "text",
        "technical": "false",
        "label": "JIRA field that captures Epic Name",
        "description": "In JIRA, your instance will have its own custom field created for 'Super Story' or 'Epic' back-end ID. This field allows you to specify the data field for your instance of JIRA. You can retrieve your instance's Epic ID field name via the following URI, where your queried User Story Issue has a Super Issue (e.g., Epic) tied to it. Your custom field name describes the Epic Value you expect to see, and is the only field that does this for a given issue: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name]Example: Provide the URI https://jira.devops.lloydsbanking.com/rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the Epic name. Use the value for this parameter"
      },
      "jiraStoryPointsFieldName": {
        "type": "string",
        "inputType": "text",
        "technical": "false",
        "label": "JIRA field that captures Story Points",
        "description": "In JIRA, your instance will have its own custom field created for 'Story Points.' This field allows you to specify that data field for your instance of JIRA. You can retrieve your instance's Story Points ID field name via the following URI, where your queried User Story Issue has Story Points set on it. Your custom field name describes the Story Points value you expect to see: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name] Example: Provide the URI https://jira.devops.lloydsbanking.com//rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the Story Ponits. Use the value for this parameter"
      },
      "jiraProjectNames": {
        "type": "array",
        "inputType": "text",
        "technical": "false",
        "label": "JIRA Project Name",
        "description": "Add JIRA Project Name to fetch data for a particular Project from JIRA.The property supports multiple project names as well and for the same add project names separated by a comma. If this property field is left blank then data for all projects from JIRA will be fetched.",
        "required": "true"
      }
    };

  }
});