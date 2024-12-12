// eslint-disable-next-line react/prop-types
function DeleteButton({ clearFiels }) {
    return (
        <div>
            <button
                type="submit"
                onClick={clearFiels}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                limpar
            </button>
        </div>
    )
}
export default DeleteButton;
