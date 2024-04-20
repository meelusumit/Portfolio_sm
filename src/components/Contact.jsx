import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-500 flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/qbloqxga" className='flex flex-col max-w-[600px] w-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>Contact</p>
          <p className='text-purple-500 py-4 '>Submit form below or email at meelusumit45@gmail.com</p>
        </div>

        <input className='bg-slate-400 border-2 border-slate-300 ' type='text' placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-slate-400' type='email' placeholder='Email' name='email'/>
        <textarea className='bg-slate-400 p-2 ' name='message'  rows='10'>
        </textarea>

        <div className='flex justify-center text-center'>
        <button className='text-yellow-100 border-2 hover:bg-red-400 duration-500 px-4 py-4 my-4 mx-auto flex items-center'>
          Let's Talk
        </button>

        <button type="reset" className='text-yellow-100 border-2 hover:bg-red-400 duration-500 px-2 py-2 my-4 mx-auto flex items-center'>
        Reset
       </button>
       <div></div>
       </div>
      </form>
    </div>
  )
}

export default Contact