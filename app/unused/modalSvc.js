'use strict';

angular.module('ahealthynetworkApp')
  .config(function(ngModalDefaultsProvider) {
          return ngModalDefaultsProvider.set({
            closeButtonHtml: "<i class='fa fa-times'></i>"
          });
      });
   app.provider('ngModalDefaults', function() {
      return {
        options: {
          closeButtonHtml: '<span class='ng-modal-close-x'></span>'
        },
        $get: function() {
          return this.options;
        },
        set: function (keyOrHash, value) {
          var key, value, _results;
          if (typeof keyOrHash === 'object') {
            _results = [];
            for (key in keyOrHash) {
              value = keyOrHash[key];
              _results.push(this.options[key] = value);
            }
            return _results.push(this.options[k] = v);
          }
          return _results;
        } else {
          return this.options[keyOrHash] = value;
        }
      }
    };
   });