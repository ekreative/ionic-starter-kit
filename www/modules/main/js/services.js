angular.module('starter')
    .factory('API', function ($http, $q, config) {
        return {
            get: function (url, headers) {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers || {}
                    };

                $http.get(config.apiServer + url, configObj).then(function (data) {
                    deferred.resolve(data);
                }, function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            post: function (url, data, headers) {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers || {}
                    };

                $http.post(config.apiServer + url, data, configObj).then(function (result) {
                    deferred.resolve(result);
                }, function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            put: function (url, data, headers) {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers || {}
                    };

                $http.put(config.apiServer + url, data, configObj).then(function (result) {
                    deferred.resolve(result);
                }, function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            delete: function (url, headers) {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers || {}
                    };

                $http.delete(config.apiServer + url, configObj).then(function (result) {
                    deferred.resolve(result);
                }, function (err) {
                    deferred.reject(err);
                });

                return deferred.promise;
            }

        }
    });
