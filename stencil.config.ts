import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'appcomponents',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
