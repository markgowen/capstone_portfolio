import Link from 'next/link'

export default function ContactMe() {
    return (
        <div className="mx-auto text-center mb-40 max-w-2xl">
            <h1 className="text-salmon text-4xl mb-6 font-bold">Reach Out</h1>
            <p className="text-silver text-xl">I'm always looking for new opportunities. If you have any questions or would like to work together, please feel free to reach out!</p>
            <button className="px-8 py-2 mt-10 border border-mustard text-mustard"><Link href="/contact">Say Hello</Link></button>
        </div>
    )
}