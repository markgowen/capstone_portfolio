/* eslint-disable @next/next/no-img-element */
import { CameraIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Portait from '../public/images/mark.jpeg'
import Link from 'next/link'

export default function Example() {
    return (
        <div className="mx-auto overflow-hidden max-w-6xl mt-48">
            <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
                <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                        <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-salmon sm:text-4xl">About Me</h3>
                    </div>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-2 lg:row-start-1">
                        <svg
                            className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={2} height={2} className="text-mustard" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div className="drop-shadow-xl aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <Image
                                        className="rounded-none object-cover object-center"
                                        src={Portait}
                                        alt="Portrait of Mark Gowen"
                                        width={1184}
                                        height={1376}
                                    />
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="mx-auto max-w-prose text-base lg:max-w-none">
                            <p className="text-lg text-silver">
                                Hello! My name is Mark, and I am a passionate and creative web developer. My journey in the tech world began in 2012 when I took my first web development course at a community college. It was there where I discovered my love for coding and my interest in building beautiful and user-friendly web applications.
                            </p>
                        </div>
                        <div className="prose prose-indigo mx-auto mt-5 text-silver lg:col-start-1 lg:row-start-1 lg:max-w-none">
                            <p>
                                I have always had a passion for creating things, whether it be with my camera, my hands or crafting web applications. This led me to further my education and skills by attending <Link href="https://flatironschool.com/" rel="noopener noreferrer" target="_blank" className='text-aqua not-italic no-underline'>Flatiron School</Link> where I graduated as a full-stack web developer.
                            </p>
                            <p>
                                I am now on the lookout for new and exciting opportunities to showcase my skills and continue growing as a developer. My favorite frameworks include <em className='text-aqua not-italic'>React, TailwindCSS, and Next.js</em>. I love the versatility and power that these tools bring to web development and the endless possibilities they offer.
                            </p>
                            <p>
                                In my free time, I enjoy experimenting with new technologies, photography, and DIY projects. I am always eager to learn something new and am dedicated to delivering high-quality work. I believe in the power of collaboration and enjoy working with a team to bring ideas to life. If you are looking for a driven and dedicated web developer, I would love the opportunity to chat with you further.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
