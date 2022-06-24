import {Rectangle} from "../geometry/rectangle";

describe("is rectangle contained", () => {
  let sut;

  beforeEach(() => {
    sut = require("./containment").rectangleContains;
  });

  it("should return true if rectangle 1 contains rectangle 2", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(2, 2, 3, 3);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return true if rectangle 2 is in the same position as rectangle 1", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(1, 1, 4, 4);

    expect(sut(r1, r2)).toBe(true);
  });

  it("should return false if rectangle 1 does contain rectangle 2", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(5, 5, 7, 7);

    expect(sut(r1, r2)).toBe(false);
  });

  it("should return false if rectangle 2 is partially contained within rectangle 1", () => {
    const r1 = new Rectangle(1, 1, 4, 4);
    const r2 = new Rectangle(3, 3, 7, 7);

    expect(sut(r1, r2)).toBe(false);
  });
});
