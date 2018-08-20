// 'https://mojvix-testing.sarkcelerator.com';
const API_URL = 'http://mojvix-testing.sarkcelerator.com';
const WS_URL = 'ws://mojvix-testing.sarkcelerator.com/subscriptions';
export const environment = {
  production: false,
  apiUrl: API_URL,
  wsUrl: WS_URL,
  graphqlUrl: API_URL + '/graphql',
  loginUrl: API_URL + '/auth/login',
  registerUrl: API_URL + '/auth/register'
};
