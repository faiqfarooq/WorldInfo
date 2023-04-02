export const addCommonsTothePopulation = (data) => {
  const number = data;
  if (number === undefined) {
    return number;
  } else {
    const output = number.toLocaleString("en-US");
    return output;
  }
};
