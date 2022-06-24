import {Rectangle} from "../geometry/rectangle";

describe("is rectangle adjacent", () => {
  let sut;

  beforeEach(() => {
    sut = require("./adjacency").isRectangleAdjacent;
  });

  it("should return true if rectangles are sub-line adjacent", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(2, 4, 3, 5);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if rectangles are proper adjacent", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(1, 4, 4, 6);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if rectangles are partial adjacent along right", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(4, 1, 6, 6);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if rectangles are in the same positions", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(1, 1, 4, 4);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return false if rectangles are not adjacent", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(5, 5, 6, 6);

    expect(sut(r1, r2)).toBe(false);
  });

  it("should return false if rectangle fully contained within", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(2, 2, 3, 3);

    expect(sut(r1, r2)).toBe(false);
  });
});
