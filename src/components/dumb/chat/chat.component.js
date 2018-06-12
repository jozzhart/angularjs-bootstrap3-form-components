import ChatTemplate from './chat.component.html';

class ChatController {

  constructor() {
    this.minimised = true;
    this.insightsCount = null;
  }

  $onInit() {
    this.insightsCount = this.insights.length;
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

  //  TODO - implement
  insightSeen(){
    // Once seen remove from array?
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