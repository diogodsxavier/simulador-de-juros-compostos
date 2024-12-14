// eslint-disable-next-line react/prop-types
function Button({ result }) {
    return (
        <div>
            <button
                type="submit"
                onClick={result}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Calcular
            </button>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p> */}
        </div>
    )
}

export default Button;