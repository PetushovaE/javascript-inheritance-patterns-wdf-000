// Rectangle constructor
function Rectangle(sides, width, height) {
  this.sides = sides;
  this.width = width;
  this.height = height;
  this.area = function() {
    return this.width * this.height;
  }
  this.perimeter = function() {
    return (this.width + this.height) * 2;
  }
}