import { isTriplet } from "./pythagoras.js";

test("check valid Pythagorean triplet", () => {
  expect(isTriplet(3, 4, 5)).toBe(true);
});

test("check invalid Pythagorean triplet", () => {
  expect(isTriplet(5, 5, 5)).toBe(false);
});