import axios from "axios";

async function getUser(number){
    const {data : users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)

    const {data: post} = await axios( `https://jsonplaceholder.typicode.com/posts/${number}`)

    try {
     console.log(users, post)
    } catch (error) {
    console.log(error)
    }
    
}


export default getUser;