import MenuIcon from '../components/MenuIcon';

export const menuItems = [
    {
        icon: <MenuIcon />,
        submenu: [
            {
                title: 'About',
                url: '/',
                target: '_self',
                relation: 'no-refresher'
                /* function: aboutHandler */
            },
            {
                title: 'Portfolio',
                url: '/portfolio',
                target: '_self',
                relation: 'no-refresher'
                /* function: portfolioHandler */
            },
        ]
    }
];