// Define your Redux actions for managing search history here.

export const addToHistory = (word) => ({
  type: 'ADD_TO_HISTORY',
  payload: word,
});
