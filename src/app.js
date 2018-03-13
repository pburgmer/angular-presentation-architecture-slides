(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'about-me',
      'about-us',
      'overview',

      'intro/title',
      'intro/what-is-it',
      'intro/non-functional-requirements',
      'intro/angular',
      'intro/style-guide',

      'services/title',
      'services/service',
      'services/di',

      'components/title',
      'components/overview',
      'components/demo-1',
      'components/context-and-presentation',
      'components/demo-2',

      'modules-routing/title',
      'modules-routing/ecmascript',
      'modules-routing/angular',
      'modules-routing/routing',
      'modules-routing/demo',

      'data-flow/title',
      'data-flow/overview',
      'data-flow/demo-problem',
      'data-flow/mutability',
      'data-flow/frp',
      'data-flow/flux',
      'data-flow/redux',
      'data-flow/tydux',
      'data-flow/demo-tydux',

      'modules-encapsulation/title',
      'modules-encapsulation/angular-components-1',
      'modules-encapsulation/angular-components-2',
      'modules-encapsulation/angular-components-3',
      'modules-encapsulation/angular-components-4',
      'modules-encapsulation/angular-providers-1',
      'modules-encapsulation/angular-providers-2',
      'modules-encapsulation/angular-providers-3',
      'modules-encapsulation/angular-providers-4',
      'modules-encapsulation/angular-providers-5',

      'packages/title',
      'packages/overview',
      'packages/demo',
      'packages/build',

      'testing/title',
      'testing/overview',
      'testing/angular',

      'lazy-loading/title',
      'lazy-loading/overview',
      'lazy-loading/angular-lazy-loading-0',
      'lazy-loading/angular-lazy-loading-1',
      'lazy-loading/angular-lazy-loading-2',
      'lazy-loading/angular-lazy-loading-3',

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
