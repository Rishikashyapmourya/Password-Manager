import React, { useEffect } from 'react'
import addIcon from "../assets/apps-add.svg";
import { useRef, useState} from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site:"", username:"", password:""})
     const  [passwordArry, setpasswordArry] = useState([])

     useEffect(() => {
         let passwords = localStorage.getItem ("passwords")
         let passwordArry;
        if(passwords){
            setpasswordArry(Json.parse(password))
        }
     },[])
    const showPassword = () => {
      alert("show the password");
      if( ref.current.src.includes = ("icons\hidden.png") ){
      ref.current.src ="icons\eye.png"
      }
      else{
        ref.current.src ="icons\hidden.png"
      }
    }
    
    const savePassword = () => {
        setpasswordArry([...passwordArry,form])
        localStorage.setItem("password", JSON.stringify([...passwordArry,form]))
        console.log([...passwordArry,form])
    }
    const handleChange = (e) => {
      setform({...form,[e.target.name]: e.target.value})
    }
    
    
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="   mx-auto px-40 py-16  mycontainer">

                <h1 className=' text-4xl text font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

                </h1>
                <p className=' text-green-700 text-lg text-center'> Your Own Passward Manager </p>


                <div className=" flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='site' id='' />
                    <div className="flex w-full justify-between gap-8">

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='username' id='' />

                        <div className="ralative">

                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='text' name='password' id='' />
                            <span className='absolute right-45 top-69 cursor-pointer' onClick={showPassword}>
                                 <img  ref={ref} className=' p-1' width={26}  src="icons\eye.png " alt='eye' />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-500 hover:bg-green-600  cursor-pointer rounded-full px-4 py-2 w-fit  border-1 border-black'>
                        <img src={addIcon} alt="add" className="w-5 h-5 " />
                        Add Passward</button>
                </div>
            </div>
        </>
    )
}

export default Manager
