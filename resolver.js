const people=require("./people.json").people
const location=require("./location.json").location
const resolver = {
    Query: {
      people: () => {
        return people; // Return an object with a `people` property
      },
      person:(_,args)=>{
        return people.find((person)=>person.id===parseInt(args.id))
      },
      locations:()=>{
        return location
      },
      location:(_,args)=>{
        return location.find((location)=>location.id===parseInt(args.id))
      },
      people:()=>{
        location:(parent)=>{
            return location.find((area)=>{
                return area.id===parent.id

            })
        }
      }
    },
    Mutation:{
        deleteUser:(_,args)=>{
            const index = people.findIndex((user) => user.id === parseInt(args.id));
      if (index!== -1) {
        const deletedUser = people.splice(index, 1)[0];
        return deletedUser;
      } else {
        return null;
      }
      
            },
            addUser:(_,args)=>{
                const newUser={
                    id:people.length+1,
                    name:args.name,
                    age:args.age
                }
                people.push(newUser)
                return newUser
              }
        }
    }
  ;
  module.exports=resolver