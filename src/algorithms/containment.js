/**
 * Check if rect2 is contained within rect1
 *
 * rect1 - first rectangle
 * rect2 - second rectangle
 *
 * returns true if rect2 is contained within rect1, false otherwise
 */
export const rectangleContains = (rect1, rect2) =>
  rect1.x1 <= rect2.x1 &&
  rect2.x2 <= rect1.x2 &&
  rect1.y1 <= rect2.y1 &&
  rect2.y2 <= rect1.y2;
