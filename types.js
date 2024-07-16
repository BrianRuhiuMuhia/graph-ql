const typedef = `
  type People {
    id: ID!
    name: String!
    age: Int,
  
  }
    type Location{
    id:ID!
    name:String!
    }

  type Query {
    people: [People]!,
    person(id:ID!):People!,
    locations:[Location]!,
    location(id:ID!):Location
  }
type Mutation{
deleteUser(id:ID!):People
addUser(name:String!,age:Int!):People
updateUser(id:ID!):People
}
`;
module.exports=typedef