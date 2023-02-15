import { useState, useEffect } from 'react';
import Employer from './Employer';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Employers() {
    const [employers, setEmployers] = useState([]);
    const [employerID, setEmployerID] = useState(5);

    const employer = employers.find((employer) => employer.id === employerID);

    const initialEmployer = employers[0];
    console.log();

    useEffect(() => {
        fetch('/api/employers')
            .then((res) => res.json())
            .then((data) => {
                setEmployers(data);
            });
    }, []);

    return (
        <div id="work" className="mx-auto mt-28 pb-48 max-w-3xl grid grid-cols-4 sm:px-6 lg:px-8">
            <div className="max-w-max col-span-1 overflow-y-auto pt-5 pb-4">
                <div className="mt-5 items-center flex flex-grow flex-col">
                    <nav className="flex-1" aria-label="Sidebar">
                        {employers.map((employer) => (
                            <div
                                onClick={() => setEmployerID(employer.id)}
                                key={employer.name}
                                className={classNames(
                                    employer.id == employerID
                                        ? ' border-salmon bg-salmon/10 text-salmon hover:border-l-salmon hover:bg-salmon/10 hover:text-salmon'
                                        : 'border-silver/10 text-silver hover:bg-salmon/10 hover:text-salmon',
                                    'group flex px-5 py-2 text-sm font-medium border-l-4'
                                )}
                            >
                                {employer.name}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
            <div className='grid-span-1 mt-12'>
                {employer ? <Employer employer={employer} /> : <Employer employer={initialEmployer} />}
            </div>
        </div>

    )
}
