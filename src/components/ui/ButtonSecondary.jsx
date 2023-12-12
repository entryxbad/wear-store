const ButtonSecondary = ({ children, onSubjectAction, className, ...props }) => {
    return (
        <button
            className={`bg-white w-[350px] p-2 text-black rounded-full cursor-pointer ${className}`}
            {...props}
            onClick={onSubjectAction}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary
