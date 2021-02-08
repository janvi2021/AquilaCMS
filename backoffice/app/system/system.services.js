const SystemServices = angular.module('aq.system.services', ['ngResource']);

SystemServices.factory('System', ['$resource', function ($resource) {
    return $resource('/v2/system/:tab/:action', {}, {
        getFilesLogAndErrorRoute : {method: 'POST',  params: {tab: 'log',  action: 'file'}},
        getNextVersionRoute      : {method: 'GET',  params: {tab: 'next', action: 'get'}},
        changeNextVersionRoute   : {method: 'POST', params: {tab: 'next', action: 'change'}},
        getContentPolicy         : {method: 'GET', params: {tab: 'contentPolicy', action: 'get'}},
        setContentPolicy         : {method: 'POST', params: {tab: 'contentPolicy', action: 'set'}},
    });
}]);

SystemServices.service('EnvBlocks', function () {
    return [];
});
