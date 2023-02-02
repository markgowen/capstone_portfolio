import Link from 'next/link'

export default function NavBar() {
    return (
        <div className='grid grid-cols-4 text-sm'>
            <p className='col-span-3 mt-5 px-10 place-content-start text-aqua'>
                Mark Gowen
            </p>
            <ul className="flex place-content-end mt-5 px-10 text-aqua">
                <li className="px-5"><Link href="/">About</Link></li>
                <li className="px-5"><Link href="/">Work</Link></li>
                <li className="px-5"><Link href="/">Projects</Link></li>
                <li className="px-5"><Link href="/">Contact</Link></li>
                <li className="px-5"><Link href="/">Admin</Link></li>
            </ul>
        </div>
    )
}