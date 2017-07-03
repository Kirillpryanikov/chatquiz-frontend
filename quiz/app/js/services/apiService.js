(function () {
    'use strict';

    angular
        .module('App')
        .factory('ApiService', ['$http', '$q','$window','$state', 'BaseURL', ApiService])
        .factory('StorageService', ['$window', StorageService]);
        function StorageService($window) {
          var me={};
          me.setAuthData = function (value) {
            $window.localStorage['_user'] = JSON.stringify(value);

          }

          me.getAuthData = function() {
            return JSON.parse($window.localStorage['_user'] || '{}');
          }

          return me;
        };
    function ApiService($http, $q, $window,$state, BaseURL) {
        var me = {};
        var apiUrl = BaseURL;
        console.log(BaseURL);
        me.login = function(data){
          var endpoint = "auth/"
          return $http({
            method: 'POST',
            url: apiUrl+endpoint,
            data: data,
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
          });
        }
        me.logOut = function () {
          $window.localStorage['_user'] = false;
          $state.go('login');
        }
        me.getQuizs = function(listId) {
          var endpoint = listId+"/quiz/";
          return $http.get(apiUrl+endpoint);
        }
        me.setQuizs = function(data,listId){
          console.log(data,listId);
          var endpoint = listId+"/quiz/"
          return $http({
            method: 'POST',
            url: apiUrl+endpoint,
            data: data,
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            }
          });
        }

        me.getMockQuizs = function () {
          return [
              {
            "id": 1,
            "title": "domanda 1",
            "multipleSelect": true,
            "answers": [
                {
                    "id": 1,
                    "text": "rispostaf a"
                },
                {
                    "id": 2,
                    "text": "risposta b"
                },
                {
                    "id": 3,
                    "text": "risposta c"
                }
            ]
        },
        {
            "id": 2,
            "title": "domanda 2",
            "multipleSelect": false,
            "answers": [
                {
                    "id": 1,
                    "text": "risposta a"
                },
                {
                    "id": 2,
                    "text": "risposta b"
                },
                {
                    "id": 3,
                    "text": "risposta c"
                }
            ]
        },
        {
            "id": 3,
            "title": "domanda 3",
            "multipleSelect": true,
            "answers": [
                {
                    "id": 1,
                    "text": "risposta a"
                },
                {
                    "id": 2,
                    "text": "risposta b"
                },
                {
                    "id": 3,
                    "text": "risposta c"
                }
            ]
          }]
        };

        return me;
    }

})();
