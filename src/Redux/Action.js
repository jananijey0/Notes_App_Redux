export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note
  };
};

export const removeNote = (index) => {
  return {
    type: 'REMOVE_NOTE',
    payload: index
  };
};

export const updateNote = (note) => {
  return {
    type: 'UPDATE_NOTE',
    payload: note
  };
};
