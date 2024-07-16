const { ApolloServer } =require('@apollo/server');
const { startStandaloneServer } =require('@apollo/server/standalone');
const typedef=require("./types.js")
const resolver=require("./resolver.js")
const server=new ApolloServer({
    typeDefs:typedef,
    resolvers:resolver
})
startStandaloneServer(server, {
    listen: { port: 5000 }
  }).then(({ url }) => {
    console.log(`Server listening on ${url}`);
  });