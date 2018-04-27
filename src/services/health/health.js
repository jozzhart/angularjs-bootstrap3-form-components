'use strict'

class HealthService {

  constructor($http) {
    console.log('constructor')
    'ngInject';
    this.$http = $http;
  }

  collectors() {
    return this.$http.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.data);
  }
}

export default HealthService;
