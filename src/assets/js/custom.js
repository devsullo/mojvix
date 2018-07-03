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
