import { GetServerSideProps } from "next"
import { useEffect, useState } from "react";

interface Repo {
    name:string
}


export default function MyProject(){
    const [repos,setRepos]=useState([])


    async function getUserRepos(username:string) {
        const repos = await fetch(`https://api.github.com/users/${username}/repos`);
        return repos;
     }
     useEffect(()=>{
        getUserRepos("WidyaKusuma")
     .then(response => response.json())
     .then(data => {
        setRepos(data) 
     });

     },[])
       

    return (
        <div>
            <h1>My Project</h1>

            <ul>
                {
                    repos.map((repo:Repo) => 
                    (<li key={repo.name}>{repo.name}</li>)
                    )
                }
            </ul>
        </div>

    )
}

 
////////////////API
// async function getUserRepos(username:string) {
//     const repos = await fetch(`https://api.github.com/users/${username}/repos`);
//     return repos;
//  }
//  let array: string[];
//  getUserRepos("WidyaKusuma")
//  .then(response => response.json())
//  .then(data => {
//     for (const key in data){
//        array = (data[key].name)
//     }
//  });  
//      return repos;
// export const getServerSideProps: GetServerSideProps = async () => (){
//     const res = await fetch('')
// }