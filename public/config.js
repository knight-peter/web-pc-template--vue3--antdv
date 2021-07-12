const baseURL = "";

const WEB_HISTORY_NAME_MAP = {
  0: "hash",
  1: "history",
};

window.config = {
  baseURL,
  webHistory: WEB_HISTORY_NAME_MAP[1],
  tokenKey: {
    localToken: "token",
    sendToken: "token",
  },
};
