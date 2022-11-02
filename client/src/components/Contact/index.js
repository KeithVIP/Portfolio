import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from '../../utils/contact.js';

const Contact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;

        /* service_xxx is the service ID, */
        emailjs.sendForm('service_aoparqz', 'contact_form', form.current, '5a48CjgDlTYLlh1e4')
            .then((result) => {
                console.log('SUCCESS', result.status, result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <form id='contact-form' ref={form} onSubmit={sendEmail} className='h-screen flex flex-col justify-center items-center'>
            <h2 className='font-bold text-3xl tablet:text-5xl laptop:text-6xl desktop:text-7xl'>Contact Form</h2>
            <div className='bg-c-yellow rounded-lg p-4 drop-shadow-shade flex flex-col space-y-2 w-full max-w-sm'>
                <input type="hidden" name="contact_number" />
                {contact.map((info, index) => (
                    <div key={index} className='flex justify-start items-center'>
                        <label className='w-1/4'>{info.label}</label>
                        <input type={info.type} name={info.name} placeholder={info.placeholder}
                            className='flex flex-wrap text-center rounded-lg w-4/5' />
                    </div>
                ))}
                <textarea type='text' name='message' placeholder="What's your message?" className='rounded-lg p-2'></textarea>
                <button value="Send" className='bg-c-red hover:bg-c-blue active:bg-c-white' >Send</button>
            </div>
        </form>
    );
};

export default Contact;