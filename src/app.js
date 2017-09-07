(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'about-me',
      'about-us',
      'overview',
      'target',

      'intro/title',
      'intro/what-is-it',
      'intro/how-to-rate',
      'intro/non-functional-requirements',
      'intro/imho',
      'intro/angular',
      'intro/style-guide',
      'intro/building-blocks',

      'services/title',
      'services/service',
      'services/di',
      'services/demo',

      'components/title',
      'components/overview',
      'components/smart-vs-dumb',
      'components/demo',

      'modules/title',
      'modules/ecmascript',
      'modules/ecmascript-demo',
      'modules/angular',
      'modules/angular-components',
      'modules/angular-shared-providers',
      'modules/angular-core',
      'modules/angular-core-fail',
      'modules/npm',

      'routing/title',
      'routing/overview',
      'routing/features',
      'routing/nested',
      'routing/demo',
      'routing/lazy-loading',
      'routing/angular-core',
      'routing/angular-core-lazy',
      'routing/angular-core-lazy-injector',
      'routing/angular-core-lazy-solution-1',
      'routing/angular-core-lazy-solution-2',

      'data-flow/title',

      'testing/title',
      'testing/overview',

      'summary',
      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
   SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
