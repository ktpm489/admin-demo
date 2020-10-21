var MrFrontendModule = (function() {
  let mrFrontendMethods = {};
  let title = 'The Mr Frontend JavaScript Module';

  let addEmoticon = function() {
    return title + ' ';
  }

  mrFrontendMethods.getTitle = function() {
    return addEmoticon();
  }

  return mrFrontendMethods;
})();
