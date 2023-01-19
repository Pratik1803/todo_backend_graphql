const { buildSchema, graphql } = require("graphql");

const typeDefs = buildSchema(`
    type Task{
        id:ID
        title: String!
        uid: ID!
        completed: Boolean!
    }

    type User{
        id:ID!
        username:String!
        email:String!
        password:String!
    }

    input CreateUserInput{
        username:String!
        email:String!
        password:String!
    }

    input LoginUserInput{
        username: String!
        password: String!
    }

    input CreateTaskInput{
        title:String!
        uid:String!
        completed: Boolean = false
    }

    input CompleteTask{
        taskID:String!
    }

    type Query{
        greet(msg:String!): String
        createUser(userDetails:CreateUserInput!):User
        loginUser(input: LoginUserInput!): User
        createTask(task:CreateTaskInput): Task
        getTasks(uid:String!): [Task!] 
        completeTask(taskID:String!): Task
    }
`);

module.exports = { typeDefs };
