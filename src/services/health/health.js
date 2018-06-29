'use strict'

class HealthService {

  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  collectors() {
    return this.$http.get('/api/speedy/health')
    .then(response => response.data);
  }
}

export default HealthService;
