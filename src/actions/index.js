// TODO: add and export your own actions

const fetchMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    // eslint-disable-next-line arrow-parens
    .then((response) => response.json())
    .then((data) => {
      return data.messages;
    });

  return {
    type: "SET_MESSAGES",
    payload: promise,
  };
};

export default fetchMessages;
