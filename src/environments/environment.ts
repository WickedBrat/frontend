// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command

export const environment = {
  production: false,
  version: '1.0.0-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US']
};
export const HASURA_ACCESS_KEY = 'extra_secret';
export const GRAPHQL_URL = 'https://cynthesize-pre-prod.herokuapp.com/v1alpha1/graphql';
export const REALTIME_GRAPHQL_URL = 'wss://cynthesize-back.herokuapp.com/v1alpha1/graphql';

export const firebaseapp = {
  apiKey: 'AIzaSyD2oozKEveW6wK7y17LW2UHnkvF5_Efa14',
  authDomain: 'cynthesize-dev.firebaseapp.com',
  databaseURL: 'https://cynthesize-dev.firebaseio.com',
  projectId: 'cynthesize-dev',
  storageBucket: 'cynthesize-dev.appspot.com',
  messagingSenderId: '733243062921'
};
