export default (state, action) => {
  switch (action.type) {
    case "LOAD_ALL_MESSAGES":
      return {
        ...state,
        messages: action.content,
      };
    case "LOAD_NEW_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.content],
      };
    default:
      return state;
  }
};
