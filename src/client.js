import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink as CreateUploadLink } from 'apollo-upload-client';
import config from './config';

export default new ApolloClient({
  link: CreateUploadLink({ uri: config.GQL_URL }),
  cache: new InMemoryCache(),
});
