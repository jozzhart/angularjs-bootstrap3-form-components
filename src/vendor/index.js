let vendorModule = {};

angular.module('app.sapient', [HygieiaConfig.module, HygieiaConfig.module + '.core'])
//  Declare modules used in the sapient app
angular.module(HygieiaConfig.module, []);
angular.module(HygieiaConfig.module + '.core', [])

export default vendorModule;



