const CustomInput = ({
    inputStyle,
    placeholder,
    error,
    disabled,
    name,
    label,
    value,
    inputType,
    handleChange,
    SpanValue,
    spanStyle,
}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={disabled}
                className={inputStyle}
            />
            <span className={spanStyle}>{SpanValue}</span>
            {error && <p className="">Input filed can`t be empty!</p>}
        </div>
    );
};

export default CustomInput;
