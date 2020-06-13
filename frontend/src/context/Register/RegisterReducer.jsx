export default (state, action) => {
  switch (action.type) {
    case "RELOAD_LOGIN":
    case "LOGIN":
      const { user, socket } = action.content;
      return {
        ...state,
        user,
        socket,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        warnings: action.content,
      };
    case "CREATE_ACCOUNT":
      return {
        ...state,
        warnings: {
          text: "Conta criada com sucesso",
          type: "success",
        },
      };
    case "CREATE_ACCOUNT_ERROR":
      return {
        ...state,
        warnings: action.content,
      };
    case "REMOVE_WARNINGS":
      return {
        ...state,
        warnings: null,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        socket: null,
        warnings: null,
      };
    default:
      return state;
  }
};
