import React from 'react'


function SkillComponent(props) {
    return (
        <div className='shadow-md bg-gray-700 hover:scale-110 duration-500 items-center'>
            <div className="p-4">
                <img className='size-14 mx-auto' src={props.src} alt="HTML" />
                <p className='mt-4 text-white'>{props.title}</p>
            </div>
        </div>
    )
}

export default SkillComponent