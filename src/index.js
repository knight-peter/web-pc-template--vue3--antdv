import { tools } from '@biaodian-web/basic';
import routesMap from './routes';
import { globalHooks } from './hooks';
export { globalHookKeyMap } from './hooks';
import * as selfComponents from './components';
import './assets/less/reset.less';

export * from './components';
const { returnRegister } = tools;

const importPackages = [
  /* import("npm包名") */
];
export async function registerComponent() {
  const components = {
    antDesignVue: {
      component: await import('ant-design-vue'),
    },
  };
  const ret = await returnRegister({
    importPackages,
    registerType: 'registerComponent',
    defaultRegister: components,
  });
  return ret;
}

export async function registerStore() {
  const store = {
    // test: (await import("./store")).default
  };
  const ret = await returnRegister({
    importPackages,
    registerType: 'registerStore',
    defaultRegister: store,
  });
  return ret;
}

export async function registerRoute() {
  const routes = {
    ...routesMap,
  };
  const ret = await returnRegister({
    importPackages,
    registerType: 'registerRoute',
    defaultRegister: routes,
  });
  return ret;
}

export async function registerHook() {
  const hooks = { ...globalHooks };
  const ret = await returnRegister({
    importPackages,
    registerType: 'registerHook',
    defaultRegister: hooks,
  });
  return ret;
}

export default selfComponents;
