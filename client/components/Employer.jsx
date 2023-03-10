export default function Employer({ employer }) {
    return (
        <div className="sm:px-6 lg:px-8">
            <h1 className="text-silver max-w-prose text-2xl w-96">{employer?.role} <em className="text-aqua not-italic">@ {employer?.name}</em></h1>
            <p className="w-max text-sm text-silver pt-2">{employer?.time_employed}</p>
            <div className="w-max">
                <div className="mt-6 flex grid-cols-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-aqua col-span-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p className="text-silver max-w-prose text-sm col-span-3 pl-4">{employer?.desc_1}</p>
                </div>
                <div className="pt-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-aqua">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p className="text-silver max-w-prose text-sm inline-block pl-4">{employer?.desc_2}</p>
                </div>
                <div className="pt-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-aqua">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                    <p className="text-silver max-w-prose text-sm pl-4">{employer?.desc_3}</p>
                </div>
            </div>
        </div>
    );
}