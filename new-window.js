/**
 * Will open a new window when element is clicked
 *
 * @module nag.newWindow
 * @ngdirective nagNewWindow
 */
angular.module('nag.newWindow', [])
.directive('nagNewWindow', [
    function() {
        return {
            restrict: 'A',
            priority: 0,
            compile: function(element, attributes, transclude) {
                return {
                    post: function(scope, element, attributes) {
                        element.click(function(event) {
                            window.open(attributes.nagNewWindow, attributes.windowName);
                        })
                    }
                };
            }
        }
    }
]);
