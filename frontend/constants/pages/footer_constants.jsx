import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export const footerInfo = [
    {
        title: 'Cities',
        links: [
            { name: 'Virgina Beach, VA'},
            { name: 'Myrtle Beach, SC'},
            { name: 'St. Augustine, FL'},
            { name: 'Daytona Beach, FL'},
            { name: 'Outer Banks, NC'},
            { name: 'Hilton Head Island, SC'},
        ]
    },
    {
        title: 'Quick Links',
        links: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About Us',
                link:'/about-us'
            },
            {
                name: 'Shop Now',
                link: '/shopping/'
            },
            {
                name: 'Careers',
                link: '/'
            },
        ],         
    },
    {
        title: 'Community',
        links: [
            {
                name: 'Blog',
                link: '/blogs'
            },
            {
                name: 'Feedback',
                link: '/feedback'
            },
            {
                name: 'Contact Us',
                link: '/contact-support'
            },            {
                name: 'Support',
                link: '/help'
            },
        ]
    },
    // {
    //     title: 'Partner',
    //     links: [
    //         {
    //             name: 'Partner Benefits',
    //             link: 'https://http://127.0.0.1:5173/'
    //         },            
    //         {
    //             name: 'Become a Partner',
    //             link: 'https://http://127.0.0.1:5173/'
    //         },
    //     ]
    // }
];

export const footerSocialIcons = [
    {
        icon: <InstagramIcon/>,
        link: '',
    },
    {
        icon: <FacebookIcon/>,
        link: '',
    },
    {
        icon: <TwitterIcon/>,
        link: '',
    },
]

export const footerSubscribe = {
    title: 'Stay Connected',
    placeholder: 'Email',
    desc: 'The Blue Elf newsletter is only twice monthly and we send special news letter only discounts. We also update you on new products, deals, and expansion cities.'
}