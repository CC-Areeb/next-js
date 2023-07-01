const Input = ({ type, name, value, customClass, onChange }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={customClass}
                id={name}
            />
        </>
    );
}
export default Input;