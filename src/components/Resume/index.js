import React from 'react';
import Modal from '../Modal';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
import resumePDF from '../../assets/images/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function Resume() {
    return (
        <section id='resume' className='w-100'>
            <Modal></Modal>
            <Document file={resumePDF}>
                <Page pageNumber={1} />

            </Document>


        </section>
    );
};

export default Resume;