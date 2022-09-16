import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
import ResumePDF from '../../assets/images/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = () => {
    return (
        <section id='resume' className='min-h-screen bg-c-black flex justify-center items-center'>
            <div id='resumeContainer' className='px-5'>
                <button type='button' className='flex justify-end m-5 w-full'>
                    ❌
                </button>
                <h3 className='modalTitle text-7xl text-c-white flex justify-center'>Resume</h3>
                <Document file={ResumePDF} className='w-full'>
                    <Page pageNumber={1} />
                </Document>
            </div>
        </section>
    );
};

export default Resume;