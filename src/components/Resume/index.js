import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = ({ onClose }) => {
    return (
        <section id='resume' className='z-50 min-h-screen flex justify-center items-center bg-c-tblack w-full font-League fixed top-0 right-0 bottom-0 left-0'>
            <div id='resumeContainer' className='bg-c-blue max-h-screen max-w-screen px-5 flex flex-col justify-center items-center'>
                <button
                    type='button'
                    onClick={onClose}
                    className='font-bold text-2xl text-c-gray flex justify-end my-5 w-full hover:text-c-black active:text-c-red'>
                    X
                </button>
                <Document file={ResumePDF} className={'custom-scroll'}>
                    <Page pageNumber={1} scale={1.0} />
                </Document>
                <div className="bg-c-white hover:bg-c-gray hover:text-c-red font-bold text-xl my-5 p-2 rounded-md">
                    <a
                        href='https://drive.google.com/file/d/14pWkHgmXBEBiEWw61Qw-dj4jMdJHQOv7/view?usp=sharing'
                        target='_blank'
                        className=''>View PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;