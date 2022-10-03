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
        website: 'https://getbootstrap.com/',
        image: BootstrapLogo
    },
    {
        id: '2',
        name: 'CSS3',
        website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        image: CSS3Logo
    },
    {
        id: '3',
        name: 'ChromeDevTools',
        website: 'https://developer.chrome.com/docs/devtools/',
        image: ChromeDevToolsLogo
    },
    {
        id: '4',
        name: 'Express',
        website: 'https://expressjs.com/',
        image: ExpressLogo
    },
    {
        id: '5',
        name: 'Git',
        website: 'https://git-scm.com/',
        image: GitLogo
    },
    {
        id: '6',
        name: 'HTML5',
        website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        image: HTML5Logo
    },
    {
        id: '7',
        name: 'JavaScript',
        website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: JavaScriptLogo
    },
    {
        id: '8',
        name: 'jQuery',
        website: 'https://jquery.com/',
        image: jQueryLogo
    },
    {
        id: '9',
        name: 'MongoDB',
        website: 'https://www.mongodb.com/',
        image: MongoDBLogo
    },
    {
        id: '10',
        name: 'Node',
        website: 'https://nodejs.org/en/',
        image: NodeLogo
    },
    {
        id: '11',
        name: 'React',
        website: 'https://reactjs.org/',
        image: ReactLogo
    },
    {
        id: '12',
        name: 'TailwindCSS',
        website: 'https://tailwindcss.com/',
        image: TailwindCSSLogo
    },
    {
        id: '13',
        name: 'Markdown',
        website: 'https://www.markdownguide.org/',
        image: MarkdownLogo
    },
    {
        id: '14',
        name: 'MySQL',
        website: 'https://www.mysql.com/',
        image: MySQLLogo
    },
];

const TechnologyList = () => {
    return (
        <section className='z-10 max-h-min font-League flex flex-col justify-center items-center p-10 overflow-hidden mt-20'>
            <h2 className='font-bold text-7xl'>Technologies</h2>
            <div className='w-full grid grid-cols-3 place-items-center gap-10 max-w-xl mt-20'>
                {data.map(({ id, name, website, image }) => (
                    <div key={id} className=''>
                        <a href={website} alt={name} target="_blank">
                            <img
                                key={id}
                                src={image}
                                alt={name}
                                className=''
                                style={{ width: '100px', height: '100px' }}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default TechnologyList;