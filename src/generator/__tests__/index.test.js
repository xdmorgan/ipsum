import { randomEntryInArray, randomCollection, generate } from "../";

describe("randomEntryInArray()", () => {
  it("works with valid input", () => {
    expect(randomEntryInArray(["one"], () => 0)).toEqual("one");
    expect(randomEntryInArray(["one"], () => 0.5)).toEqual("one");
    expect(randomEntryInArray(["one"], () => 1)).toEqual("one");
    expect(randomEntryInArray(["one", "two"], () => 0)).toEqual("one");
    expect(randomEntryInArray(["one", "two"], () => 1)).toEqual("two");
    expect(randomEntryInArray(["one", "two", "three"], () => 0.5)).toEqual(
      "two"
    );
    expect(randomEntryInArray(["one", "two", "three"], () => 1)).toEqual(
      "three"
    );
  });
  it("works with invalid input", () => {
    expect(randomEntryInArray()).toBeUndefined();
    expect(randomEntryInArray([])).toBeUndefined();
    expect(randomEntryInArray([], () => 0)).toBeUndefined();
    expect(randomEntryInArray([], () => 10)).toBeUndefined();
  });
});

describe("randomCollection()", () => {
  it("works with valid input", () => {
    expect(randomCollection(["test"], 1)).toEqual(["test"]);
    expect(randomCollection(["test"], 2)).toEqual(["test", "test"]);
    expect(randomCollection(["one", "two", "three"], 3)).toHaveLength(3);
    expect(randomCollection(["one", "two", "three"])).toHaveLength(100);
  });
});
