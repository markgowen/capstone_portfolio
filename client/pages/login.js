import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import UserContext from '../contexts/userContext'

export default function Login() {
    const [_user, setUser] = useContext(UserContext)
    const [_errors, setErrors] = useState([])
    const [form, setForm] = useState({
        username: '',
        password: '',
    })
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }).then(res => {
            if (res.ok) {
                res.json().then((user) => setUser(user)).then(router.push('/dashboard'))
            } else {
                res.json().then((error) => setErrors(error.errors))
            }
        })
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-base tracking-tight text-salmon">Sign in to your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-steel py-8 px-4 shadow sm:rounded-none sm:px-10">
                        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="text"
                                        required
                                        value={form.username}
                                        onChange={handleChange}
                                        className="block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-aqua">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={form.password}
                                        onChange={handleChange}
                                        className="block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded-none border-steel text-aqua focus:ring-aqua"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-aqua    ">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-salmon hover:text-aqua">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-none border border-transparent bg-lime py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-salmon focus:outline-none focus:ring-2 focus:ring-salmon focus:ring-offset-2"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="mt-6 ">
                                <div>
                                    <a
                                        href="#"
                                        className="inline-flex w-full justify-center rounded-none bg-aqua py-2 px-4 text-sm font-medium text-steel shadow-sm hover:bg-salmon"
                                    >
                                        <span className="sr-only">Sign in with GitHub</span>
                                        <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
