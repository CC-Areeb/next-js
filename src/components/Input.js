const Input = ({ type, name, value, customClass, onChange, placeholder }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`${customClass}`}
                id={name}
                placeholder={placeholder}
            />
        </>
    );
}
export default Input;