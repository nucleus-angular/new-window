/**
 * # New Window
 *
 * Opens a new window with window.open().
 *
 * ```html
 * <button nag-new-window="https://www.example.com/">new window</button>
 * ```
 *
 * If you need to be able to access the new window whether through javascript or for testing, you can pass the data-window-name attribute.
 *
 * ```html
 * <button nag-new-window="https://www.example.com/" data-window-name="my-window">new window</button>
 * ```
 *
 * @module nag.newWindow
 * @ngdirective nagNewWindow
 *
 * @nghtmlattribute {string} nag-new-window The url of where the new window should go
 * @nghtmlattribute {string} [data-window-name] The name of the window that case be used to access it through javascript
 */
angular.module('nag.newWindow')
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
