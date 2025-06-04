


const Friends = [
    {
        name: "John",
        age: 20,
        gender: "male"
    },
    {
        name: "Mary",
        age: 21,
        gender: "female"
    },
    
];
Friends.push({
    name: "Bob",
    age: 22,
    gender: "male"
});

const newFriends = Friends;

newFriends.push({
    name: "Sue",
    age: 23,
    gender: "female"});

    console.log(newFriends);
    console.log(Friends);
    
   
    
    