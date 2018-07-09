const config = {
  production: {
    GQL_URL: 'https://alert-backend.herokuapp.com',
  },
  development: {
    GQL_URL: 'http://localhost:8080/graphql',
  },
};

const currentEnv = process.env.NODE_ENV === 'development' ? 'development' : 'production';

export default config[currentEnv];
