/**
 * A rectangle shape
 * (x1, y1) and (x2, y2) are the top-left and bottom-right verticies, respectively.
 *
 * x1 - top left x position
 * y1 - top left y position
 * x2 - bottom right x position
 * y2 - bottom right y position
 */
export function Rectangle(x1, y1, x2, y2) {
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;
}
