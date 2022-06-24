import prompts from "prompts";
import {Rectangle} from "./geometry/rectangle";
import {
  isRectangleAdjacent,
  rectangleContains,
  rectangleHasIntersection,
} from "./algorithms";

const validate = (value) =>
  value < 0 || value > Number.MAX_SAFE_INTEGER
    ? "Number must be an integer >= 0"
    : false;

const questions = [
  {
    type: "number",
    name: "r1x1",
    message: "Rectangle 1: top left x",
    validate,
  },
  {
    type: "number",
    name: "r1y1",
    message: "Rectangle 1: top left y",
    validate,
  },
  {
    type: "number",
    name: "r1x2",
    message: "Rectangle 1: bottom left x",
    validate,
  },
  {
    type: "number",
    name: "r1y2",
    message: "Rectangle 1: bottom left y",
    validate,
  },
  {
    type: "number",
    name: "r2x1",
    message: "Rectangle 2: top left x",
    validate,
  },
  {
    type: "number",
    name: "r2y1",
    message: "Rectangle 2: top left y",
    validate,
  },
  {
    type: "number",
    name: "r2x2",
    message: "Rectangle 2: bottom left x",
    validate,
  },
  {
    type: "number",
    name: "r2y2",
    message: "Rectangle 2: bottom left y",
    validate,
  },
];

const start = async () => {
  const res = await prompts(questions);

  const r1 = new Rectangle(res.r1x1, res.r1y1, res.r1x2, res.r1y2);
  const r2 = new Rectangle(res.r2x1, res.r2y1, res.r2x2, res.r2y2);

  console.log("Intersection: ", rectangleHasIntersection(r1, r2));
  console.log("Contains: ", rectangleContains(r1, r2));
  console.log("Adjacent: ", isRectangleAdjacent(r1, r2));
};

start();
