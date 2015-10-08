angular.module('starter')
    .factory('API', ($http, $q, config) => {
        return {
            get: (url, headers) => {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers || {}
                    };

                $http.get(config.apiServer + url, configObj).then((data) => {
                    deferred.resolve(data);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            post: (url, data, headers) => {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers
                    };

                $http.post(config.apiServer + url, data, configObj).then((result) => {
                    deferred.resolve(result);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            put: (url, data, headers) => {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers
                    };

                $http.put(config.apiServer + url, data, configObj).then((result) => {
                    deferred.resolve(result);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            },

            delete: (url, headers) => {
                var deferred = $q.defer(),
                    configObj = {
                        headers: headers
                    };

                $http.delete(config.apiServer + url, configObj).then((result) => {
                    deferred.resolve(result);
                }, (err) => {
                    deferred.reject(err);
                });

                return deferred.promise;
            }

        }
    })

    .factory('Pushes', () => {
        return {
            run: (senderID) => {
                var push = PushNotification.init({ 'android': {'senderID': senderID},
                    'ios': {'alert': 'true', 'badge': 'true', 'sound': 'true'}, 'windows': {} } );

                push.on('registration', (data) => {
                    // data.registrationId
                });

                push.on('notification', (data) => {
                    // data.message,
                    // data.title,
                    // data.count,
                    // data.sound,
                    // data.image,
                    // data.additionalData
                });

                push.on('error', (e) => {
                    // e.message
                });
            }
        }
    });
