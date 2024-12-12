/* eslint-disable react/prop-types */
function InitialValue({ value, onChange }) {
    const handleChange = e => {
        const newValue = e.target.value;

        // Atualiza o valor se estiver dentro do intervalo ou se estiver vazio
        if (newValue === "" || (newValue >= 1 && newValue <= 1000)) onChange(e);
    };

    return (
        
        <div>
            <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
                Valor inicial
            </label>

            <div className="mt-2">
                <input
                    id="InitialValue"
                    value={value}
                    onChange={handleChange}
                    type="text"
                    pattern="[0-9]" 
                    required
                    placeholder='R$00,00'
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" 
                />
            </div>
        </div>
    )
}

export default InitialValue;