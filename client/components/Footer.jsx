import Link from "next/link"

export default function Footer() {
    return (
        <footer className="text-center text-aqua">
            <div>
                <Link href="https://github.com/markgowen/capstone_portfolio" rel="noopener noreferrer" target="_blank" className="pb-16 hover:text-salmon">Built and Designed by Mark Gowen &copy;2023</Link>
            </div>
        </footer>
    )
}
