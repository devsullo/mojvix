Element.prototype.documentOffsetTop = function() {
  return (
    this.offsetTop +
    (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0)
  );
};

Number.prototype.pad = function () {
  var n = this;
  if (n < 10) {
    return "0" + n;
  } else {
    return String(n);
  }
}

function setDebug(isDebug) {
  if (isDebug) {
    window.debug = {
      log: console.log.bind(console),
      error: console.error.bind(console),
      info: console.info.bind(console),
      warn: console.warn.bind(console)
    };
  } else {
    var __no_op = function () { };
    window.debug = {
      log: __no_op,
      error: __no_op,
      warn: __no_op,
      info: __no_op
    }
  }
}
setDebug(true);
