'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cssDeclarationSorter = require('css-declaration-sorter');

var _postcssDiscardComments = require('postcss-discard-comments');

var _postcssReduceInitial = require('postcss-reduce-initial');

var _postcssMinifyGradients = require('postcss-minify-gradients');

var _postcssSvgo = require('postcss-svgo');

var _postcssReduceTransforms = require('postcss-reduce-transforms');

var _postcssConvertValues = require('postcss-convert-values');

var _postcssColormin = require('postcss-colormin');

var _postcssOrderedValues = require('postcss-ordered-values');

var _postcssMinifySelectors = require('postcss-minify-selectors');

var _postcssMinifyParams = require('postcss-minify-params');

var _postcssNormalizeCharset = require('postcss-normalize-charset');

var _postcssMinifyFontValues = require('postcss-minify-font-values');

var _postcssNormalizeUrl = require('postcss-normalize-url');

var _postcssMergeLonghand = require('postcss-merge-longhand');

var _postcssDiscardDuplicates = require('postcss-discard-duplicates');

var _postcssDiscardOverridden = require('postcss-discard-overridden');

var _postcssNormalizeRepeatStyle = require('postcss-normalize-repeat-style');

var _postcssMergeRules = require('postcss-merge-rules');

var _postcssDiscardEmpty = require('postcss-discard-empty');

var _postcssUniqueSelectors = require('postcss-unique-selectors');

var _postcssNormalizeString = require('postcss-normalize-string');

var _postcssNormalizePositions = require('postcss-normalize-positions');

var _postcssNormalizeWhitespace = require('postcss-normalize-whitespace');

var _postcssNormalizeUnicode = require('postcss-normalize-unicode');

var _postcssNormalizeDisplayValues = require('postcss-normalize-display-values');

var _postcssNormalizeTimingFunctions = require('postcss-normalize-timing-functions');

var _cssnanoUtilRawCache = require('cssnano-util-raw-cache');

const defaultOpts = {
  convertValues: {
    length: false
  },
  normalizeCharset: {
    add: false
  },
  cssDeclarationSorter: {
    exclude: true
  }
};

function miniappPreset(opts = {}) {
  const options = Object.assign({}, defaultOpts, opts);

  const plugins = [[_postcssDiscardComments, options.discardComments], [_postcssMinifyGradients, options.minifyGradients], [_postcssReduceInitial, options.reduceInitial], [_postcssSvgo, options.svgo], [_postcssNormalizeDisplayValues, options.normalizeDisplayValues], [_postcssReduceTransforms, options.reduceTransforms], [_postcssColormin, options.colormin], [_postcssNormalizeTimingFunctions, options.normalizeTimingFunctions], [_postcssConvertValues, options.convertValues], [_postcssOrderedValues, options.orderedValues], [_postcssMinifySelectors, options.minifySelectors], [_postcssMinifyParams, options.minifyParams], [_postcssNormalizeCharset, options.normalizeCharset], [_postcssDiscardOverridden, options.discardOverridden], [_postcssNormalizeString, options.normalizeString], [_postcssNormalizeUnicode, options.normalizeUnicode], [_postcssMinifyFontValues, options.minifyFontValues], [_postcssNormalizeUrl, options.normalizeUrl], [_postcssNormalizeRepeatStyle, options.normalizeRepeatStyle], [_postcssNormalizePositions, options.normalizePositions], [_postcssNormalizeWhitespace, options.normalizeWhitespace], [_postcssMergeLonghand, options.mergeLonghand], [_postcssDiscardDuplicates, options.discardDuplicates], [_postcssMergeRules, options.mergeRules], [_postcssDiscardEmpty, options.discardEmpty], [_postcssUniqueSelectors, options.uniqueSelectors], [_cssDeclarationSorter, options.cssDeclarationSorter], [_cssnanoUtilRawCache, options.rawCache]];

  return { plugins };
}

exports.default = miniappPreset;