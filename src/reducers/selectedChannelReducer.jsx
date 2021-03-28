const selectedChannelReducer = (state, action) => {
  if (state === undefined) return null;

  switch (action.type) {
    case 'SELECTED_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;
