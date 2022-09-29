import React from 'react';
import BootstrapLogo from '../../assets/technologies/bootstrap.svg';
import CSS3Logo from '../../assets/technologies/CSS3.svg';
import ChromeDevToolsLogo from '../../assets/technologies/ChromeDevTools.svg';
import ExpressLogo from '../../assets/technologies/Express.svg';
import GitLogo from '../../assets/technologies/Git.svg';
import HTML5Logo from '../../assets/technologies/HTML5.svg';
import JavaScriptLogo from '../../assets/technologies/JavaScript.svg';
import jQueryLogo from '../../assets/technologies/jQuery.svg';
import MongoDBLogo from '../../assets/technologies/MongoDB.svg';
import NodeLogo from '../../assets/technologies/Node.svg';
import ReactLogo from '../../assets/technologies/React.svg';
import TailwindCSSLogo from '../../assets/technologies/TailwindCSS.svg';
import MarkdownLogo from '../../assets/technologies/Markdown.svg';
import MySQLLogo from '../../assets/technologies/MySQL.svg';


const data = [
    {
        id: '1',
        name: 'Bootstrap',
        description: '',
        image: BootstrapLogo
    },
    {
        id: '2',
        name: 'CSS3',
        description: '',
        image: CSS3Logo
    },
    {
        id: '3',
        name: 'ChromeDevTools',
        description: '',
        image: ChromeDevToolsLogo
    },
    {
        id: '4',
        name: 'Express',
        description: '',
        image: ExpressLogo
    },
    {
        id: '5',
        name: 'Git',
        description: '',
        image: GitLogo
    },
    {
        id: '6',
        name: 'HTML5',
        description: '',
        image: HTML5Logo
    },
    {
        id: '7',
        name: 'JavaScript',
        description: '',
        image: JavaScriptLogo
    },
    {
        id: '8',
        name: 'jQuery',
        description: '',
        image: jQueryLogo
    },
    {
        id: '9',
        name: 'MongoDB',
        description: '',
        image: MongoDBLogo
    },
    {
        id: '10',
        name: 'Node',
        description: '',
        image: NodeLogo
    },
    {
        id: '11',
        name: 'React',
        description: '',
        image: ReactLogo
    },
    {
        id: '12',
        name: 'TailwindCSS',
        description: '',
        image: TailwindCSSLogo
    },
    {
        id: '13',
        name: 'Markdown',
        description: '',
        image: MarkdownLogo
    },
    {
        id: '14',
        name: 'MySQL',
        description: '',
        image: MySQLLogo
    },
];

const TechnologyList = () => {
    return (
        <section className='h-full font-League flex flex-col justify-top items-center p-10'>
            <h2 className='bg-c-gray font-bold text-7xl'>Technologies</h2>
            <div className='bg-c-blue w-full grid grid-cols-3 place-items-center gap-5 max-w-xl'>
                {data.map(({ id, name, image }) => (
                    <div key={id} className=''>
                        <img
                            key={id}
                            src={image}
                            alt={name}
                            className=''
                            style={{ width: '100px', height: '100px' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};


export default TechnologyList;