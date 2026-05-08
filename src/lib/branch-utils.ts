/**
 * Utility to check if the Second Branch (G.N. Chetty Rd) is already opened.
 * Opening Date: June 11, 2026
 */
export const isNungambakkamOpened = () => {
  const openingDate = new Date('2026-06-11T00:00:00');
  const now = new Date();
  return now >= openingDate;
};

export const getBranchStatus = () => {
  return isNungambakkamOpened() ? "NOW OPEN" : "OPENING JUNE 11";
};

export const getBranchArrivalText = () => {
  return isNungambakkamOpened() ? "180 has arrived in" : "180 arrives in";
};
