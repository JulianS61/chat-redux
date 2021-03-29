const messagesReducer = (state, action) => {
  if (state === undefined) return [];

  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload;
    case 'UPDATE_MESSAGES':
      console.log(state);
      return [...state.messages, action.payload];
    default:
      return state;
  }
};

export default messagesReducer;
