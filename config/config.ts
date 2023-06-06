import { defineConfig } from 'alita';
import routes from '../src/routes';

export default defineConfig({
  appType: 'pc',
  keepalive: [],
  aconsole: {
    // console: {},
    inspx: {},
  },
  mfsu: {},
  antd: {},
  hash: false,
  tabsLayout: {
    hasCustomTabs: true,
    hasDropdown: true,
    hasFixedHeader: true,
  },
  routes,
  /**
   * 一个全局的初始数据流，可以用它在插件之间共享数据
   * @description 可以用来存放一些全局的数据，比如用户信息，或者一些全局的状态，全局初始状态在整个 Umi 项目的最开始创建。
   * @doc https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
   */
  initialState: {},

  npmClient: 'npm',
});
