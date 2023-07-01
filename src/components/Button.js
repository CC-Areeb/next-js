const Button = ({ type, onClick, customClass, value }) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110 ${customClass}`}
            >
                {value}
            </button>
        </>
    );
}
export default Button;