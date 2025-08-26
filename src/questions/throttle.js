const array = [1, [2, 3], [4, [5, 6]], [7, [8, [9, 10]]]];

const flattenArr = (arr) =>
  arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flattenArr(item) : item),
    []
  );

console.log(flattenArr(array));
