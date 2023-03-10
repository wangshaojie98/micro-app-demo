import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-app-sub1',
    entry: '//localhost:6051',
    container: '#sub1',
    activeRule: '/child/Sub1',
    props: {
      // 向子应用传递数据
      basePath: `/child`,
    },
  },
  {
    name: 'react-app-sub2',
    entry: '//localhost:6052',
    container: '#sub2',
    activeRule: '/child/Sub2',
    props: {
      // 向子应用传递数据
      basePath: `/child`,
    },
  },
]);
// 启动 qiankun
start({
  sandbox: {
    strictStyleIsolation: true,
    experimentalStyleIsolation: true
  },
  prefetch: false
});