// you maynot be using this one but rather then index.js
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

// schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => "Hello graphql"
    }
}

const server = new ApolloServer({
    typeDefs, resolvers
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => {
    console.log("Server runnning at localhost:3000" + server.graphqlPath)
})