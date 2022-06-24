/**
 * Check if two rectangles intersect
 *
 * rect1 - first rectangle
 * rect2 - second rectangle
 *
 * returns true if the rectangles intersect, false otherwise
 */
export const rectangleHasIntersection = (rect1, rect2) => {
  // Calculate the area of intersection
  const width = Math.min(rect1.x2, rect2.x2) - Math.max(rect1.x1, rect2.x1);
  const height = Math.min(rect1.y2, rect2.y2) - Math.max(rect1.y1, rect2.y1);

  const area = width * height;

  return area > 0;
};
