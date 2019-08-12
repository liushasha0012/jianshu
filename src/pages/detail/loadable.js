import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading() {
    return <div>正在加载...</div>
  }, //加载过程中现实的临时的内容
});

export default () => <LoadableComponent/>;