import { GetServerSideProps } from "next"
import { useEffect, useState } from "react";
import Image from 'next/image'


interface Repo {
    name:string;
    html_url:string;
    description:string;
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
        <main className="bg-gray-800 py-6 text-white">
            <div className="font-semibold mx-20 py-16">
                <h1 className="font-bold text-3xl pb-6">MY PROJECT ON GITHUB</h1>
                    {/*RepoListCard*/}
                    <ul className="pl-6 pb-6">
                        {   
                            //RepoList 
                            repos.map((repo:Repo) => 
                            (<li key={repo.name}> 
                                {/*RepoLinkInteract*/}
                                <a href={repo.html_url} target="blank" className="flex flex-col justify-center items-center text-center">
                                    <div className="bg-indigo-900 max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5">
                                    <Image
                                        className="w-full" alt="Github Card"
                                        src="/assests/img/Background.jpg"
                                        width="800" height="500"
                                    />
                                    {/*RepoDescription*/}
                                        <div className="px-6 py-4">
                                            <h1 className="font-bold text-xl mb-2"> {repo.name}</h1>
                                            <p>{repo.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            ))
                        }
                    </ul>
                
            </div>    
        </main>
    )
}


                {/* BACKUP CALL API */}
                    {/* <ul className="pl-6 pb-6">
                        {
                            repos.map((repo:Repo) => 
                            (<li key={repo.name}> 
                            <p>OE</p>
                            {repo.name}</li>))
                        }
                    </ul> */}

                {/* BACKUP CARD */}
                {/* <div className="bg-rose-200 flex justify-center items-center">
                        
                        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5">
                        <Image
                            className="w-full"
                            src="/assests/img/Background.jpg"
                            width="800"
                            height="500"
                            alt="test"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Title </div>
                            <p className="text-grey-darker text-base">
                            Lorem ipsum.
                            </p>
                        </div>
                        </div>
                        
                        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5">
                        <Image
                            className="w-full"
                            src="/assests/img/Background.jpg"
                            width="800"
                            height="500"
                            alt="test"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Title</div>
                            <p className="text-grey-darker text-base">
                            Lorem ipsum.
                            </p>
                        </div>
                    </div>
                </div> */}

 
////////////////TEST API
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