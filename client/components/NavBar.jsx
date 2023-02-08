/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState, useContext } from 'react'
import UserContext from '@/contexts/userContext';
import Link from 'next/link'

export default function NavBar() {
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        fetch("/api/me").then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    setUser(data)
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='grid grid-cols-4'>
            <p className='z-10 col-span-3 mt-5 text-base px-10 place-content-start text-aqua'><Link href="/">Mark Gowen</Link></p>
            <ul className="flex items-center place-content-end mt-5 px-20 text-sm text-aqua">
                <li className="px-5 hover:text-silver"><Link href="/"><em className='text-salmon mr-2'>//</em>About</Link></li>
                <li className="px-5 hover:text-silver"><Link href="/"><em className='text-salmon mr-2'>//</em>Work</Link></li>
                <li className="px-5 hover:text-silver"><Link href="/"><em className='text-salmon mr-2'>//</em>Projects</Link></li>
                <li className="px-5 hover:text-silver"><Link href="/contact"><em className='text-salmon mr-2'>//</em>Contact</Link></li>
                {!user ? <button className="ml-5 px-5 py-1 border border-aqua rounded-none hover:text-silver hover:border-silver"><Link href="/login">Admin</Link> </button> : null}
            </ul>
        </div>
    )
}