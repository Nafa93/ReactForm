export const isEmpty = (value: string) => {
  return value === "";
};

export const containsNumber = (value: string) => {
  return /\d/.test(value);
};

export const isEqual = (lhs: string, rhs: string) => {
  return lhs === rhs;
};
