import Image from 'next/image'

export default function AboutMe(){
    return (
        <main className="bg-gray-800 pb-16 text-white
        border-t-8 rounded-t-3xl border-blue-600">

            {/*MyDescription*/}
            <div className="font-semibold mx-20 py-16">
                <h1 className="font-bold text-3xl pb-6">ABOUT ME</h1>
                <p className="pl-6 indent-8">
                    Learn programming since 2017, Looking for more experience so I can build my own personal websites. <br/>
                    Like to modification stuff that I have never try. Self-Motivation person. Love playing RPG Video Game. <br/>
                    Like to listen most of genre music especially Japanese Acoustic Song. Still chasing graduation.
                </p>
            </div>

            {/* Card */}
            <div className=" flex justify-center items-center mx-16 py-16
            font-semibold">
                {/* First card */}
                <h3 className='mx-6'>SKILL I LEARN <br/>THIS MONTH</h3>
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5
                    flex flex-col justify-center items-center">
                    <Image src="/figmalog.png" alt="figma icon"
                        width="75" height="75"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2">FIGMA</div>
                        {/* <p className="text-grey-darker text-base">
                        Lorem ipsum.
                        </p> */}
                    </div>
                </div>
                {/* Second card */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5
                    flex flex-col justify-center items-center">
                    <Image src="/nextlog.png" alt="next js icon"
                        width="75" height="75"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2">NEXT.JS</div>
                        {/* <p className="text-grey-darker text-base">
                        Lorem ipsum.
                        </p> */}
                    </div>
                </div>
                {/* Third card */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5
                    flex flex-col justify-center items-center">
                    <Image src="/reactlog.png" alt="react icon"
                        width="75" height="75"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2">REACT</div>
                        {/* <p className="text-grey-darker text-base">
                        Lorem ipsum.
                        </p> */}
                    </div>
                </div>
                {/* Fourth card */}
                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2.5
                    flex flex-col justify-center items-center">
                    <Image src="/tslog.png" alt="typescript icon"
                        width="75" height="75"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2">TYPESCRIPT</div>
                        {/* <p className="text-grey-darker text-base">
                        Lorem ipsum.
                        </p> */}
                    </div>
                </div>


            </div>
        </main>
    )
}