import React from 'react'

const Button = ({ buttonTitle, handleClick, isDisabled=false }) => {
    return (
        <div
            className={`cursor-pointer rounded-full border-[1px] border-[#606170] text-white
                 px-[10px] py-[5px] w-[90px] text-center ${isDisabled&& 'pointer-events-none opacity-50 cursor-not-allowed'}`}
            onClick={handleClick}
        >
            {buttonTitle}
        </div>
    )
}

export default Button
