const {
  tokenKey: { localToken },
} = window.config;

/* 获取token */
export function getToken() {
  return localStorage.getItem(localToken);
}
/* 设置token */
export function setToken(token) {
  return localStorage.setItem(localToken, token);
}
/* 删除token */
export function removeToken() {
  return localStorage.removeItem(localToken);
}
/* 兼容ssr的provide */
export function createProvider(funcMap) {
  return {
    install(app) {
      const keys = Object.getOwnPropertySymbols(funcMap);
      keys.forEach((injectKey) => {
        const func = funcMap[injectKey];
        app.provide(injectKey, func());
      });
    },
  };
}
