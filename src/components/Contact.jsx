import React from 'react'
import { LuMessageSquare } from 'react-icons/lu'

const Contact = () => {
    return (
        // <div className='text-center text-2xl my-10 max-w-[600px] flex flex-col justify-center m-auto' id='contact'>
        //     <h2 id='contact' className='text-center text-3xl'>Contact Me</h2>
        //     <p>
        //         Submit the form below to get in touch with me.
        //     </p>
        //     <form className='flex flex-col gap-2 '>
        //         <input type='text' placeholder='Name' className='block w-full p-2 my-2 border border-gray-300 rounded-md' />
        //         <input type='email' placeholder='Email' className='block w-full p-2 my-2 border border-gray-300 rounded-md' />
        //         <textarea placeholder='Message' className='block w-full p-2 my-2 border border-gray-300 rounded-md'></textarea>
        //     </form>
        //         <button type='submit' className='block w-full p-2 my-2 bg-[#854CE6] px-5 text-white rounded-md'>Submit</button>
        // </div>
        <div id='contact' className=' mt-8 pb-16'>
            <div className='gap-7 flex flex-col text-4xl text-center pb-4'>
                <h3 className='flex flex-row gap-7 justify-center'>
                    <LuMessageSquare className='' />
                    Contact Me
                </h3>
                <p className='text-2xl text-gray-400'>
                    Submit the form below to get in touch with me.
                </p>
            </div>
            <div>
                <form action="https://getform.io/f/qbloonza" method='POST' className='flex flex-col justify-center items-center gap-5'>

                    <input type="text" name='name' placeholder='Enter your name' className='bg-transparent border py-2 px-4 w-[50%]'/>
                    <input type="email" name='email' placeholder='Enter your email' className='bg-transparent border py-2 px-4 w-[50%]'/>
                    <textarea placeholder='Enter your message' name="message" id="" rows={5} className='bg-transparent border py-2 px-4 w-[50%]'>

                    </textarea>
                    <button className='w-fit border px-6 py-3'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact  