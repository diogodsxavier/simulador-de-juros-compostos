// eslint-disable-next-line react/prop-types
function Period({ value, onChange }) {
    const handleChange = (e) => {
        let newValue = e.target.value.replace(/\D/g, "");

        onChange(newValue);

        if (newValue > 116) {
            alert('Valor não pode ser maior do que 116 anos.');
            onChange(1);
            return
        }
    };

    return (
        <div>
            <label htmlFor="Perios" className="block text-sm/6 font-medium text-gray-900">Período (ano)</label>
            <div className="mt-2">
                <input
                    id="InitialValue"
                    value={value}
                    onChange={handleChange}
                    type="text"
                    pattern="[0-9]"
                    required
                    placeholder='1'
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
            </div>
        </div>
    )
}

export default Period;