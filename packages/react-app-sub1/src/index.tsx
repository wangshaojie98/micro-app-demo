import React from 'react';
import ReactClientDOM from 'react-dom/client';
import './index.css';
import App from './App';

declare const window : {
  __POWERED_BY_QIANKUN__: boolean
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}

declare let __webpack_public_path__: string

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export {}

const root = ReactClientDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

type RenderPropsType = {
  /** react container*/
  container?: any
  /** 路由 basePath */
  basePath?: string
}
function render(props: RenderPropsType) {
  const { container } = props;
  const root = ReactClientDOM.createRoot(
    container ? container.querySelector('#root') : document.querySelector('#root') as HTMLElement
  );
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props: RenderPropsType) {
  render(props);
}

export async function unmount() {
  root.unmount()
}