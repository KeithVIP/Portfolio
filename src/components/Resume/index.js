import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry';
import ResumePDF from '../../assets/images/resume2.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = ({ onClose }) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const screenSizes = [
        {
            mobile: 360
        },
        {
            tablet: 575
        },
        {
            laptop: 1024
        },
        {
            desktop: 1280
        }
    ];
    const [pdfScale, setPdfScale] = useState(1);
    const onPDFLoadSuccess = ({ screenSizes }) => {
        const { mobile, tablet, laptop, desktop } = screenSizes;
        let currentScreenSize = window.innerWidth;

        if (screenSize >= 1280) {
            setPdfScale(2);
        }
        else if (screenSize >= 575) {
            setPdfScale(1.5);
        }
        else if (screenSize >= 575) {
            setPdfScale(1.0);
        }
        else {
            setPdfScale(0.5)
        }
    };
    return (
        <section id='resume' className='z-50 font-League flex justify-center items-center bg-c-tblack fixed top-0 right-0 bottom-0 left-0'>
            <div id='resumeContainer' className='bg-c-shade max-h-screen flex flex-col items-center'>
                <button
                    type='button'
                    onClick={onClose}
                    className='font-bold text-2xl bg-c-white text-c-black flex justify-end w-full hover:text-c-blue active:text-c-white'>
                    <span className='w-48 flex justify-end'>X</span>
                </button>
                <Document file={ResumePDF} className={'custom-scroll'}>
                    <Page scale={onPdfLoadSuccess} />
                </Document>
                <div className='bg-c-yellow hover:bg-c-gray hover:text-c-red my-5 p-2 rounded-md'>
                    <a href='https://drive.google.com/file/d/14pWkHgmXBEBiEWw61Qw-dj4jMdJHQOv7/view?usp=sharing' target='_blank' rel='noreferrer'>View PDF</a>
                </div>
            </div>
        </section>
    );
};

export default Resume;