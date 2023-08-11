export const isStringMatch = (query: string | undefined, target: string): boolean => {
  const queryLowerCase = query?.toLowerCase();
  return queryLowerCase ? target.toLowerCase().includes(queryLowerCase) : false;
};
