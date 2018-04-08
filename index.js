const colorMap = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
};
const reset = colorMap.reset;

class Logger {
  constructor(color, logTo = console.log) {
    this.color = Logger.getConsoleColor(color);
    this.logTo = logTo;
  }
  static getConsoleColor(color) {
    const normalizedColor = color.trim().toLowerCase();
    if (!colorMap[normalizedColor]) {
      throw new Error(
        'That is not a recognized color. Please use one of: ' +
          Object.keys(colorMap).join(', ')
      );
    }
    return colorMap[normalizedColor];
  }
  log(text) {
    this.logTo(this.color, text, reset);
    return this;
  }
  line(numberOfLines = 1) {
    for (let i = 0; i < numberOfLines; i++) {
      this.logTo(this.color, '----------', reset);
    }
    return this;
  }
  changeColorTo(newColor) {
    this.color = Logger.getConsoleColor(newColor);
    return this;
  }
  static color(color) {
    const encodedColor = Logger.getConsoleColor(color);
    return new Logger(color);
  }
}

module.exports = Logger;
