export default (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      const { text, type } = action.content;
      return {
        ...state,
        alerts: [
          {
            text,
            type,
          },
        ],
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        alerts: [],
      };
    default:
      return state;
  }
};
