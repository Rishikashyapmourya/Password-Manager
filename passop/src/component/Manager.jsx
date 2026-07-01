import React, { useEffect } from 'react'
import addIcon from "../assets/apps-add.svg";
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArry, setpasswordArry] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArry(Json.parse(password))
        }
    }, [])

    const copyText = (text) => {
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }



    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("/icons/hide.png")) {
            ref.current.src = "/icons/eye.png"
            passwordRef.current.type = "password"
        }
        else {
            passwordRef.current.type = "text"
            ref.current.src = "/icons/hide.png"
        }
    }

    const savePassword = () => {
        setpasswordArry([...passwordArry, {...form,id: uuidv4()}])
        localStorage.setItem("password", JSON.stringify([...passwordArry, {...form,id: uuidv4()}]))
        console.log([...passwordArry, form])
        setform({ site: "", username: "", password: "" })
    }

    const deletePassword = (id) => {
        console.log("deleting password with id ",id)
        let c = confirm("Do you really want to delete this password?")
        if(c){
     setpasswordArry(passwordArry.filter(item=>item.id!==id))
      localStorage.setItem("password", JSON.stringify(passwordArry.filter(item=>item.id!==id)))
    }
}

    const editPassword = (id) => {
        console.log("editing password with id ",id)
        setform(passwordArry.filter(item=>item.id===id)[0])
        setpasswordArry(passwordArry.filter(item=>item.id!==id))
    }


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
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

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className=' rounded-full border border-green-700  w-full p-4 py-1 ' type='password' name='password' id='' />
                            <span className='absolute right-45 top-69 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className=' p-1' width={26} src="icons\eye.png " alt='eye' />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-500 hover:bg-green-600  cursor-pointer rounded-full px-4 py-2 w-fit  border-1 border-black'>
                        <img src={addIcon} alt="add" className="w-5 h-5 " />
                        Save </button>
                </div>

                <div className="passwords">
                    <h2 className=' font-bold text-2xl py-4'>Your passwords </h2>
                    {passwordArry.length == 0 && <div>No password to show</div>}
                    {passwordArry.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden ">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className=' py-2  '>Site </th>
                                <th className=' py-2  '>Username</th>
                                <th className=' py-2  '>Password</th>
                                <th className=' py-2  '>Action</th>

                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArry.map((item, index) => {

                                return <tr key={index}>
                                    <td className='  justify-center py-2 border-white   text-center '>
                                        <div className='flex items-center justify-center'>

                                            <a href={item.site} target='_blank'> {item.site}</a>

                                            <div className=' iconcopy cursor-pointer w-3 h-3 mx-2' onClick={() => { copyText(item.site) }}>
                                                <img src='/icons/copy.png' />
                                            </div>
                                        </div>

                                    </td>

                                    <td className=' justify-center py-2 border-white   text-center '>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className=' iconcopy cursor-pointer w-3 h-3 mx-2' onClick={() => { copyText(item.username) }}>
                                                <img src='/icons/copy.png' />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' justify-center py-2 border-white   text-center '>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <div className=' iconcopy cursor-pointer w-3 h-3 mx-2' onClick={() => { copyText(item.password) }}>
                                                <img src='/icons/copy.png' />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' justify-center py-2 border-white text-center flex '>
                                        <span className=' cursor-pointer  '  onClick={()=>{editPassword(item.id)}}>
                                        <img className='w-5 h-5' src='icons/edit-text.png'/>
                                         </span>
                                      <span className='cursor-pointer mx-5' onClick={()=>{deletePassword(item.id)}}>
                                         <img className='w-4 h-4' src='icons/Delete.png'/>
                                      </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>

            </div>
        </>
    )
}

export default Manager
