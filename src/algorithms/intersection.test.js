import {Rectangle} from "../geometry/rectangle";

let sut;

describe("rectangle has intersection", () => {
  beforeEach(() => {
    sut = require("./intersection").rectangleHasIntersection;
  });

  it("should return true if an intersection exists along edge", () => {
    const r1 = new Rectangle(1, 1, 4, 3);
    const r2 = new Rectangle(2, 2, 3, 5);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if an intersection exists along corner", () => {
    const r1 = new Rectangle(1, 1, 3, 3);
    const r2 = new Rectangle(2, 2, 4, 4);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if a rectangle contains another rectangle", () => {
    const r1 = new Rectangle(1, 1, 3, 3);
    const r2 = new Rectangle(2, 2, 3, 3);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return false if an intersection does not exist", () => {
    const r1 = new Rectangle(1, 1, 3, 3);
    const r2 = new Rectangle(5, 1, 7, 3);

    expect(sut(r1, r2)).toBe(false);
  });

  it("should return false for adjacency", () => {
    const r1 = new Rectangle(1, 1, 3, 3);
    const r2 = new Rectangle(3, 1, 5, 3);

    expect(sut(r1, r2)).toBe(false);
  });

  it("should return false for adjacent corners", () => {
    const r1 = new Rectangle(1, 1, 3, 3);
    const r2 = new Rectangle(3, 3, 5, 5);

    expect(sut(r1, r2)).toBe(false);
  });
});
