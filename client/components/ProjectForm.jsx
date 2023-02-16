import { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function ProjectForm() {
    const [show, setShow] = useState(false)
    const [editing, setEditing] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        desc: '',
        frameworks: '',
        website: '',
        github: '',
    });

    const router = useRouter()
    const projectId = router.asPath.split("=")[1]

    useEffect(() => {
        if (projectId) {
            setEditing(true)
            fetch(`/api/projects/${projectId}`)
                .then((res) => res.json())
                .then((data) => {
                    setFormValues(data)
                })
        }
    }, [projectId])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleReset = (e) => {
        setFormValues({
            name: '',
            desc: '',
            frameworks: '',
            website: '',
            github: '',
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            fetch(`/api/projects/${projectId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues)
            })
                .then((res) => res.json())
                .then((data) => {
                    setFormValues({
                        name: '',
                        desc: '',
                        frameworks: '',
                        website: '',
                        github: '',
                    });
                    setShow(true)
                })
        } else {
            fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues)
            })
                .then((res) => res.json())
                .then((data) => {
                    setFormValues({
                        name: '',
                        desc: '',
                        frameworks: '',
                        website: '',
                        github: '',
                    });
                    setShow(true)
                })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-salmon">{editing ? "Edit" : "Add"} Project</h3>
                            <p className="mt-1 text-sm text-silver">
                                This information will be displayed publicly so be careful what you share.
                            </p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-mustard">Project Details</h3>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                    Project Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        autoComplete="text"
                                        className="block w-full rounded-none border-gray-300 shadow-sm focus:border-ring-lime focus:ring-lime sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="textarea" className="block text-sm font-medium text-aqua">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="desc"
                                        name="desc"
                                        type="text"
                                        value={formValues.desc}
                                        onChange={handleChange}
                                        autoComplete="text"
                                        className="block w-full rounded-none border-gray-300 shadow-sm focus:border-lime focus:ring-lime sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                    Frameworks
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="frameworks"
                                        name="frameworks"
                                        type="text"
                                        value={formValues.frameworks}
                                        onChange={handleChange}
                                        autoComplete="text"
                                        className="block w-full rounded-none border-gray-300 shadow-sm focus:border-lime focus:ring-lime sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                    Website
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        value={formValues.website}
                                        onChange={handleChange}
                                        className="block w-full rounded-none border-gray-300 shadow-sm focus:border-ring-lime focus:ring-lime sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                    Github
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="github"
                                        id="github"
                                        value={formValues.github}
                                        onChange={handleChange}
                                        autoComplete="street-address"
                                        className="block w-full rounded-none border-gray-300 shadow-sm focus:border-ring-lime focus:ring-lime sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="rounded-none border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-aqua shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center rounded-none border border-transparent bg-lime py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={show}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="pointer-events-auto mt-6 w-full max-w-sm overflow-hidden rounded-none bg-steel shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CheckCircleIcon className="h-6 w-6 text-lime" aria-hidden="true" />
                                </div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-lime">Successfully saved!</p>
                                </div>
                                <div className="ml-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => {
                                            setShow(false)
                                        }}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )
}
