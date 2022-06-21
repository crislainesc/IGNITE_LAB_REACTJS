import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o84xs513ai01z72v5gene9/master',
    cache: new InMemoryCache(),
});
