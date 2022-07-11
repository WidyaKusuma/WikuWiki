import Image from 'next/image'
import Link from 'next/link'

export default function Contact(){
    return (
        <main className="bg-gray-800 text-white
        px-96 hover:py-8
        border-t-8 rounded-t-3xl border-blue-600">
            <div>
                <h1 className="font-bold text-3xl pb-6">CONTACT</h1>
                <h4>CALL</h4>
                <h5>+62 8125-5828-4371</h5><br/>
                <h4>EMAIL</h4>
                <h5>widyakusuma1109@gmail.com</h5>
            </div>
            {/* <Link href={url}>
            <a target="_blank">Click this link</a>
            </Link> */}


            <h5 className='flex flex-center
            items-center py-16
            font-semibold'>
                <p className='my-2 mx-4'>
                    <a href="https://www.linkedin.com/in/wiku1109">
                        <Image src="/social-linkedin.png" alt="icon"
                        width="41" height="41"/>
                    </a>
                </p>


                <p className='my-2 mx-4'>
                    <a href="https://instagram.com/wdyksm11">
                        <Image src="/social-instagram.png" alt="icon"
                        width="41" height="41"/>
                    </a>
                </p>

                <p className='my-2 mx-4'>
                    <a href="https://github.com/WidyaKusuma">
                        <Image src="/social-github.png" alt="icon"
                        width="41" height="41"/>
                    </a>
                </p>
            </h5>
        </main>
        
    )
}