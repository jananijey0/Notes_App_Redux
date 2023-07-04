

  const initialState = {
    notes: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload]
        };
      case 'REMOVE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((note, index) => index !== action.payload)
        };
      case 'UPDATE_NOTE':
        return {
          ...state,
          notes: state.notes.map((note, index) => {
            if (index === action.payload.id) {
              return {
                ...note,
                title: action.payload.title,
                content: action.payload.content
              };
            } else {
              return note;
            }
          })
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  