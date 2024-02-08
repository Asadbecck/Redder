const CustomBtn = ({ title, containerStyles, handleClick, btnType, id, children, styleBtn }) => {
    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            style={styleBtn}
            id={id}
        >
            {children}
            <span className={`flex-1`}>{title}</span>
        </button>
    );
};

export default CustomBtn;
