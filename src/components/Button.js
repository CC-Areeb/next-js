const Button = ({ type, onClick, customClass, value }) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110 ${customClass}`}
            >
                {value}
            </button>
        </>
    );
}
export default Button;