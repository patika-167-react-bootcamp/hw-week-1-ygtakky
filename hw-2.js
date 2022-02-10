// Case insensitive includes function for arrays
Array.prototype.includesCi = function (element, start = 0) {
  const array = this.slice(start); // Starting search from start index input
  return array.some((item) => {
    if (typeof element === "string" && typeof item === "string")
    {
      return (
        element.toLowerCase() === item.toLowerCase() // transform both the search value and the array item to lower case for case insensitive searching
      );
    } else { // for searching other data types
      return element === item;
    }
  });
};