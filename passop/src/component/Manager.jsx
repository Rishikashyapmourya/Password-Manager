import React from 'react'
import addIcon from "../assets/apps-add.svg";

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="   mx-auto px-40 py-16  mycontainer">

                <h1 className=' text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span><span className='text-green-700'>OP/&gt;</span>

                </h1>
                <p className=' text-green-700 text-lg text-center'> Your Own Passward Manager </p>


                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='' id='' />
                    <div className="flex w-full justify-between gap-8">

                        <input className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='' id='' />
                        <input className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='' id='' />
                    </div>

                    <button className='flex justify-center gap-2 items-center bg-green-500 hover:bg-green-600  rounded-full px-4 py-2 w-fit '>
                        <img src={addIcon} alt="add" className="w-5 h-5 " />
                        Add Passward</button>
                </div>
            </div>
        </>
    )
}

export default Manager
