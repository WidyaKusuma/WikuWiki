import type { NextPage } from 'next'
import type { NextComponentType, NextPageContext } from "next";
import type { linkProps } from "../../@types/prop.types";

//Permission
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from "next/head"


//File
import About from '../components/about/About'
import Blogpost from '../components/blogpost/Blogpost'
import Contact from '../components/contact/Contact'
import MyProject from '../components/myproject/MyProject'
import { NavbarLink } from 'flowbite-react/lib/esm/components/Navbar/NavbarLink'

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

//Home
const Home: NextPage = () => {
  return (
    <main className='bg-top bg-cover bg-no-repeat bg-fixed w-screen h-full'
      style={{backgroundImage : 'url(/assests/img/Background2.jpg)'}}>
      
      {/*Title*/}
      <title>Wiku Wiki</title>
      <link rel="icon" href="/favicon.ico" />

      {/*Header*/}
      <header>
      <header className="w-full h-16 border-b border-gray-900 flex items-center justify-center">
          <div className='md:w-full max-w-3xl flex flex-row justify-between'>
            <h4 className="text-2xl font-bold">ABOUT</h4>
            {/* <Link href="#About"></Link>
            <NavLink></NavLink> */}
            <h4 className="text-2xl font-bold">MY PROJECT</h4>
            <h4 className="text-2xl font-bold">BLOGPOST</h4>
            <h4 className="text-2xl font-bold">CONTACT</h4>
          </div>
        </header>
      </header>


      {/*Padding*/}
      <div className='px-2 sm:px-8 md:px-10 lg:px-48 xl:px-50'>

        {/*Profile*/}
        <div className="min-h-screen flex flex-col justify-center items-center mx-2">
          <Image
            src="/assests/img/MyFace.png"
            width="220"
            height="220"
            alt="avatar"
          />
           {/* text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-purple-800 */}
          <div className='
            px-9 py-9 
            text-center font-semibold text-3xl 
            border-2 border-black
            '>
              <h1 className=' mb-4
              text-5xl font-bold 
              '>DEWA MADE WIDYA KUSUMA</h1>
              <h3 className=' font-semibold
              overline-offset-4 overline decoration-black decoration-4
              '>Front-End Trainee at Taksu Teknologi Bali</h3>
          </div>
        </div>


        {/*Components*/}
        <div>
        <About></About>
        <MyProject></MyProject>
        <Blogpost></Blogpost>
        </div>


      </div>

      <footer>
        <Contact></Contact>
        {/* <div className='text-center'>
          <h1>Powered by </h1>
        </div> */}
      </footer>
    </main>
    

  )
}

export default Home
