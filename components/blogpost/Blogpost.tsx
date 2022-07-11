import { GetServerSideProps } from "next"
import { useEffect, useState} from "react"
import { format} from 'date-fns'
import Link from 'next/link'

interface Blog { 
    id : number
    title : string
    content : string
    publish_at : Date
    directlink : string;
}

export default function Blogpost(){
    const [blogs,setBlogs]=useState([])


    async function getUserBlogs() { 
        const blogs = await fetch(`/api/blogprisma`);
        return blogs;
    }

    useEffect(()=>{
        getUserBlogs()
        .then(response =>response.json())
        .then(data => {
            setBlogs(data.posts) 
        });

    },[]) 

    return (
        <main className='bg-gray-800 text-white
        pt-10 pb-16'>
            <div className="mx-20 pb-16">
            <h1 className="font-bold text-3xl pb-6">BLOGPOST</h1>
            <ul className="pl-6 indent-8">
                {
                    blogs.map((blog:Blog) => 
                    (<li key={blog.id}><>
                    <div className="mt-12 text-xl font-medium"> {blog.title} </div>
                    <p className="indent-1 text-justify mt-2 mb-4 font-light"> {blog.content} </p>
                    <a href={blog.directlink}>CLICK FOR READ MORE</a>
                    <p className="mb-16 text-sm text-end font-hairline"> {format(new Date(blog.publish_at),'dd-MM-yyyy')}</p>
                    
                    {/* <Link href={blog.directlink}><a></a></Link> */}
                    </></li>)
                    )
                }
            </ul>
            </div>

        </main>

    )
}

