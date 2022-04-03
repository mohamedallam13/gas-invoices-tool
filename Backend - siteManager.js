; (function (root, factory) {
  root.SITE_PAGES_MANAGER = factory()
})(this, function () {

  var SITE_PAGES_MANAGER = {};

  var Route = {
    index: true,
    forbidden: true
  }

  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }

  function render(page, variables) {
    var tmp = HtmlService.createTemplateFromFile(page);
    if (variables) {
      tmp = Object.assign(tmp, variables);
    }
    return tmp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }

  SITE_PAGES_MANAGER.Route = Route;
  SITE_PAGES_MANAGER.render = render;
  SITE_PAGES_MANAGER.include = include;

  return SITE_PAGES_MANAGER;

})