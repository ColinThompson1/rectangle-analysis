/**
 * Checks if a rectangle is adjacent to another rectangle.
 *
 * rect1 - first rectangle
 * rect2 - second rectangle
 *
 * returns true if rectangles are subline, proper or partially adjacent, false otherwise.
 */
export const isRectangleAdjacent = (rect1, rect2) => {
  const hasCommonY =
    new Set([rect1.y1, rect1.y2, rect2.y1, rect2.y2]).size !== 4;
  const hasCommonX =
    new Set([rect1.x1, rect1.x2, rect2.x1, rect2.x2]).size !== 4;

  if (hasCommonY) {
    return rect1.x1 <= rect2.x2 && rect2.x1 <= rect1.x2;
  }

  if (hasCommonX) {
    return rect1.y1 <= rect2.y2 && rect2.y1 <= rect1.y2;
  }

  return false;
};
