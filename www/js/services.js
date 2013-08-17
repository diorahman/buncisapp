angular.module('buncisApp.services', []).value('version', '0.1');

app.factory('navigation', function($navigate) {
  return {
    push: function (path) {
        $navigate.go(path, 'stack', false);
    },
    pop: function () {
        $navigate.back();
    },
    clear: function(){
        $navigate.eraseHistory();
    }
  }
});

app.factory('gapready', function() {
    return function (fn) {
        var queue = [];
        var impl = function () {
        queue.push(Array.prototype.slice.call(arguments));
    };
              
    document.addEventListener('deviceready', function () {
        queue.forEach(function (args) {
            fn.apply(this, args);
        });
        impl = fn;
    }, false);
              
    return function () {
        return impl.apply(this, arguments);
        };
    };
});

app.factory('actionbars', function(){
  return {
    checkActionOverflow : checkActionOverflow
  }
})

app.factory('dispatch', function($location){
  


})