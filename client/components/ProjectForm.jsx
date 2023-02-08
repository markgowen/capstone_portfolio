import { useState } from 'react';

export default function EmployerForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        desc: '',
        framework_1: '',
        link: '',
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    framework_1: '',
                    link: '',
                });
            })
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
                <div>
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-salmon">Add Project</h3>
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

                        <div className="sm:col-span-4">
                            <label htmlFor="text" className="block text-sm font-medium text-aqua">
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
                                    id="framework_1"
                                    name="framework_1"
                                    type="text"
                                    value={formValues.framework_1}
                                    onChange={handleChange}
                                    autoComplete="text"
                                    className="block w-full rounded-none border-gray-300 shadow-sm focus:border-lime focus:ring-lime sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="text" className="block text-sm font-medium text-aqua">
                                Link
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="link"
                                    id="link"
                                    value={formValues.link}
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
        </form>
    )
}
