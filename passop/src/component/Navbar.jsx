import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="myconatiner flex justify-between items-center px-4  py-5 h-14">

        <div className="logo font-bold text-2xl">
          <span className='text-green-700'>  &lt;</span>
          Pass
          <span className='text-green-700'>OP/ &gt;</span>

        </div>
        <ul>
          <li className='flex gap-11 pl-200'>
            <a className='hover:font-bold ' href='/'>Home</a>
            <a className='hover:font-bold ' href='/'>Contact</a>
            <a className='hover:font-bold ' href='/'>About</a>
          </li>
        </ul>
        <button className=''>
          <a href='https://github.com/Rishikashyapmourya' target='_blank'>
          <img  className='invert p-4 w-17 cursor-pointer' src='icons/github.png' alt='github logo' />
          </a>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
