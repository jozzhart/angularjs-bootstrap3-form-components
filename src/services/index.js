let servicesModule = angular.module('app.services', [])

import HealthService from './health/health'
servicesModule.service('HealthService', HealthService);

export default servicesModule;