/* eslint-disable react/prop-types */
function InitialValue({ value, onChange }) {
    const handleChange = (e) => {
        let rawValue = e.target.value.replace(/\D/g, "");

        if (rawValue > 40000000000000) {
            alert('Valor não pode ser maior que R$400.000.000.000,00');
            onChange(100000);
            return
        }

        const numericValue = parseInt(rawValue, 10) || 0;
        onChange({ target: { value: numericValue } });
    };

    const formattedValue =
        value
            ? new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
            }).format(value / 100)
            : '';

    return (
        <div>
            <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">
                Valor inicial
            </label>
            <div className="mt-2">
                <input
                    id="InitialValue"
                    value={formattedValue}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="R$10,00"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    );
}

export default InitialValue;
