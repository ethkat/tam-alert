const config = {
  production: {
    GQL_URL: 'https://alert-backend.herokuapp.com/graphql',
  },
  development: {
    GQL_URL: 'https://alert-backend.herokuapp.com/graphql',
  },
};

const currentEnv = process.env.NODE_ENV === 'development' ? 'development' : 'production';

export default config[currentEnv];
