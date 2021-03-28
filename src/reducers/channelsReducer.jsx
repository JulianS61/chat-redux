const channelsReducer = (state, action) => {
  if (state === undefined) return null;

  switch (action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
};

export default channelsReducer;
