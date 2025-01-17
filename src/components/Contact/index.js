import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        /* service_xxx is the SERVICE ID,  */
        emailjs.sendForm('service_aoparqz', 'contact_form', form.current, '5a48CjgDlTYLlh1e4')
            .then((result) => {
                toast.success('Your e-mail was sent!', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // empty useState
                setName('');
                setEmail('');
                setMessage('');

                console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
                toast.error('Your e-mail was not sent!', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // empty useState
                setName('');
                setEmail('');
                setMessage('');

                console.log('FAILED...', error);
            });
    };

    return (
        <form id='contact-form' ref={form} onSubmit={sendEmail} className='h-screen flex flex-col justify-center items-center'>
            <h2 className='font-Cutive font-bold text-5xl tablet:text-5xl laptop:text-6xl desktop:text-7xl'>Contact</h2>
            <div className='bg-c-blue rounded-lg p-4 drop-shadow-shade flex flex-col space-y-2 w-full max-w-sm'>
                <input type="hidden" name="contact_number" />
                <div className='flex justify-start items-center'>
                    <label className='w-1/5 text-c-white font-bold'>Name</label>
                    <input type='text' name='user_name' placeholder="What's your name?" value={name} onInput={(e) => setName(e.target.value)} className='flex flex-wrap text-center rounded-lg w-4/5' />
                </div>
                <div className='flex justify-start items-center'>
                    <label className='w-1/5 text-c-white font-bold'>E-mail</label>
                    <input type='email' name='user_email' placeholder="What's your e-mail?" value={email} onInput={(e) => setEmail(e.target.value)} className='flex flex-wrap text-center rounded-lg w-4/5' />
                </div>
                <textarea type='text' name='message' placeholder="What's your message?" value={message} onChange={(e) => setMessage(e.target.value)} className='rounded-lg p-2' />
                <button value="Send" className='bg-c-black hover:font-black hover:text-c-white hover:bg-c-red active:text-c-black text-c-white font-bold rounded-md'>Send</button>
            </div>
        </form>
    );
};

export default Contact;