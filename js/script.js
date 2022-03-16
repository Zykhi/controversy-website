// You can comment this JS out and the app will still work.
(function () {
  var app = {
    routes: {
      page1: {
        rendered: function () {
          console.log('view currently showing is "page1"');
          app.preventScroll();
        },
      },
      page2: {
        rendered: function () {
          console.log('view currently showing is "page2"');
          app.preventScroll();
        },
      },
      page3: {
        rendered: function () {
          console.log('view currently showing is "page3"');
          app.preventScroll();
        },
      },
      page4: {
        rendered: function () {
          console.log('view currently showing is "page4"');
          app.preventScroll();
        },
      },
      "the-default-view": {
        rendered: function () {
          console.log('view currently showing is "the-default-view"');
          app.preventScroll();
        },
      },
    },
    default: "the-default-view",
    preventScroll: function () {
      document.querySelector("html").scrollTop = 0;
      document.querySelector("body").scrollTop = 0;
    },
    routeChange: function () {
      app.routeID = location.hash.slice(1);
      app.route = app.routes[app.routeID];
      app.routeElem = document.getElementById(app.routeID);
      app.route.rendered();
    },
    init: function () {
      window.addEventListener("hashchange", function () {
        app.routeChange();
      });
      if (!window.location.hash) {
        window.location.hash = app.default;
      } else {
        app.routeChange();
      }
    },
  };
  window.app = app;
})();

app.init();
