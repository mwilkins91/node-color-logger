'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var colorMap = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m'
};
var reset = colorMap.reset;

var Logger = function () {
  function Logger(color) {
    var logTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log;

    _classCallCheck(this, Logger);

    this.color = Logger.getConsoleColor(color);
    this.logTo = logTo;
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log(text) {
      this.logTo(this.color, text, reset);
      return this;
    }
  }, {
    key: 'line',
    value: function line() {
      var numberOfLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      for (var i = 0; i < numberOfLines; i++) {
        this.logTo(this.color, '----------', reset);
      }
      return this;
    }
  }, {
    key: 'changeColorTo',
    value: function changeColorTo(newColor) {
      this.color = Logger.getConsoleColor(newColor);
      return this;
    }
  }], [{
    key: 'getConsoleColor',
    value: function getConsoleColor(color) {
      var normalizedColor = color.trim().toLowerCase();
      if (!colorMap[normalizedColor]) {
        throw new Error('That is not a recognized color. Please use one of: ' + Object.keys(colorMap).join(', '));
      }
      return colorMap[normalizedColor];
    }
  }, {
    key: 'color',
    value: function color(_color) {
      var encodedColor = Logger.getConsoleColor(_color);
      return new Logger(_color);
    }
  }]);

  return Logger;
}();

module.exports = Logger;

//# sourceMappingURL=index.js.map