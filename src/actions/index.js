/* eslint-disable arrow-parens */
// TODO: add and export your own actions

const fetchMessages = (channel) => {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then((response) => response.json())
    .then((data) => {
      return data.messages;
    });

  return {
    type: "SET_MESSAGES",
    payload: promise,
  };
};

const createMessage = (channel, author, content) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const body = {
    author,
    content,
  };
  const promise = fetch(
    `https://wagon-chat.herokuapp.com/${channel}/messages`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  ).then((response) => response.json());

  return {
    type: "UPDATE_MESSAGES",
    payload: promise,
  };
};

export { fetchMessages, createMessage };
