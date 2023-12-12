const ButtonPrimary = ({ children, onSubjectAction, className, ...props }) => {
    return (
        <button
            className='bg-black px-[67px] py-[15px] text-white rounded-full w-[210px] cursor-pointer'
            {...props}
            onClick={onSubjectAction}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary
