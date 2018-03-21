// @flow

/**
 * Return a random entry from the supplied collection. Use js default
 * Math.random() unless another randomizer function is provided.
 * @param {*} arr An arbitrary collection of whatever
 * @param {*} rand A randomizer function (returns 0-1)
 */
const randomEntryInArray = (
  arr: any[] = [],
  rand: () => number = Math.random
) => arr[Math.floor(rand() * (arr.length - 1))];

/**
 *
 * @param {*} dict A dictionary of strings to select from
 * @param {*} length How many entries to randomly select
 */
const randomCollection = (dict: string[] = [], length: number = 100) =>
  Array.from({ length }).map(() => randomEntryInArray(dict));

/**
 *
 * @param {*} data A dictionary of strings to select from
 * @param {*} length How many entries to randomly select
 */
const generate = (data: string[], length: number) =>
  randomCollection(data, length).join(". ");

export { default as GeneratedText } from "./GeneratedText";
export { randomEntryInArray, randomCollection, generate };
export default generate;
