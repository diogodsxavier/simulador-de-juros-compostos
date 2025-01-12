/* eslint-disable react/prop-types */
function ResultStyle({ dd, dt }) {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <dt className="text-base text-gray-600 sm:text-lg">
                {dt}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {dd}
            </dd>
        </div>
    );
}

export default ResultStyle;