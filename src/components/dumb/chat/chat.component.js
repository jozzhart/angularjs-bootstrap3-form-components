import ChatTemplate from './chat.component.html';

class ChatController {

  constructor() {
    this.minimised = true;
    this.insightsCount = 1;
  }

  $onInit() {
    console.log('chat component initialised');
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

  
  also(){
    this.insightsCount = null;
    console.log()
  }
}

let ChatComponent = {
  template: ChatTemplate,
  bindings: {
    content: '@'
  },
  controller: ChatController
}

export default ChatComponent;