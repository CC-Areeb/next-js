const Button = ({ type, onClick, customClass, value }) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`${customClass}`}
            >
                {value}
            </button>
        </>
    );
}
export default Button;