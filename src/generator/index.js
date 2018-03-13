const MOCK_DATA = [
  "Rafas mags",
  "Shola on a bike eating an apple",
  "Mandy's mags",
  "Rafa putting his glasses in his pocket, job done lads!",
  "Pardew headbutting David Meyler",
  "Yohan Kebabs",
  "Ben Arfa's goal against Everton",
  "Ben Arfa's goal against Blackburn",
  "Geordie boys"
];

/**
 * Return a random entry from the supplied collection. Use js default
 * Math.random() unless another randomizer function is provided.
 * @param {any[]} arr An arbitrary collection of whatever
 * @param {() => number} rand A randomizer function (returns 0-1)
 */
const randomEntryInArray = (arr = [], rand = Math.random) =>
  arr[Math.floor(rand() * (arr.length - 1))];

const randomCollection = (dict = [], length = 100) =>
  Array.from({ length }).map(() => randomEntryInArray(dict));

const generate = (data = MOCK_DATA, len) =>
  randomCollection(data, len).join(". ");

export { randomEntryInArray, randomCollection, generate };
export default generate;
