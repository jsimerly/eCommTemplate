import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
    jbl_white_logo,
    diawa_white_logo,
    nike_white_logo,
    pyzel_white_logo,
    rei_coop_white_logo,
    rtic_white_logo,
    sony_white_logo,
    yeti_white_logo,
}  from "../assets/images/logos"
import { fun, electronics, kids, leisure } from '../assets/images/categories'

// Copy 

//------- All --------------------------------------------------------------------------------------------------

export const allCategories = [
    {
        name:'Chairs', 
        link:'',
        type:'full',
        id:'0100',
        sub: [
            {name:'Luxury Chairs', link:'', type:'sub', id:'0101'},
            {name:"Kid's Chairs", link:'', type:'sub', id:'0102'},
            {name:"Hammocks", link:'', type:'sub', id:'0105'},
            {name:'Canopy Chairs', link:'', type:'sub', id:'0103'},
            {name:'Chair Accessories', link:'', type:'sub', id:'0104'},
        ]
    },
    {
        name: 'Shelters',
        link: '',
        type:'full',
        id:'0200',
        sub: [
            {name:'Canopies', link:'', type:'sub', id:'0201'},
            {name:'Umbrellas', link:'', type:'sub', id:'0202'},
            {name:'Tents', link:'', type:'sub', id:'0203'},
            {name:'Attachable', link:'', type:'sub', id:'0204'},

        ]
    },
    {
        name: 'On the Beach',
        link: '',
        type:'full',
        id:'0300',
        sub: [
            {name:'Wagons', link:'', type:'sub', id:'0301',},
            {name:'Coolers', link:'', type:'sub', id:'0302'},
            {name:'Beach & Dry Bags', link:'', type:'sub', id:'0303'},
            {name:'Mats', link:'', type:'sub', id:'0305'},
            {name:'Shovels & Buckets', type:'sub', id:'0306'},
            {name:'Tables', id:'0307'}
        ]
    },
    {
        name:'Fun', 
        link:'',
        type:'full',
        id:'0400',
        sub: [
            {name:'Sports' , link:'', type:'sub', id:'0401'},
            {name:'Games' , link:'', type:'sub', id:'0402'},
            {name:'Sandcastles' , link:'', type:'sub', id:'0403'},
            {name:'Bikes' , link:'', type:'sub', id:'0404'},
            {name:'Bonfires', link:'', type:'sub', id:'0405'},
            {name:'Fishing', link:'', type:'sub', id:'0406'},
            {name:'Party' , link:'', type:'sub', id:'0407'},
        ]
    
    },
    {
        name:'Kids', 
        link:'',
        type:'full',
        id:'0500',
        sub:[
            {name: 'Infant', links:'', type:'sub', id:'0501'},
            {name: 'Toddlers', links:'', type:'sub', id:'0502'},
            {name: 'Stroller & Carriers ', type:'sub', id:'0504'},
            {name: 'Changing Stations', links:'', type:'sub', id:'0505'},
        ]
    
    },
    {
        name:'Electronics', 
        link:'',
        type:'full',
        id:'0600',
        sub: [
            {name: 'Speakers', link:'', type:'sub', id:'0601'},
            {name: 'Cameras', link:'', type:'sub', id:'0602'},
            {name: 'Hobby', links:'', type:'sub', id:'0604'},
        ]

    },
    {
        name:'Water & Pool', 
        link:'',
        type:'full',
        id:'0700',
        sub: [
            {name: 'Surfboards', link:'', type:'sub', id:'0701'},
            {name: 'Other Boards', link:'', type:'sub', id:'0709' },
            {name: 'Kayaks & Boats', link:'', type:'sub', id:'0704'},
            {name: 'Inflatables & Mats', link:'', type:'sub', id:'0705'},
            {name: 'Water Toys', link:'', type:'sub', id:'0707'},
            {name: 'Swim Accessories', link:'', type:'sub', id:'0708'}
        ]

    },
    {
        name:'Home', 
        link:'',
        type:'full',
        id:'0800',
        sub:[
            {name: 'Kitchen', link:'', type:'sub', id:'0801'},
            {name: 'Bedroom', link:'', type:'sub', id:'0802'}, 
            {name: 'Forgot at Home', links:'', type:'sub', id:'0803'},
            {name: 'Entertainment', links:'', type:'sub', id:'0804'}, //board games etc
            {name: 'Pets', link:'', type:'sub', id:'0805'},
        ]
    
    },

    {
        name:'All Categories',
        link:'',
        type:'All Categories',
        id:'0000'
    }
]

//----------- Footer --------------------------------------------------------------------
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
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Our Vision',
                link:'1'
            },
            {
                name: 'Shop Now',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'FAQ',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Careers',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Company',
                link: ''
            }
        ],         
    },
    {
        title: 'Community',
        links: [
            {
                name: 'Support',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Blog',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Newsletters',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Reviews',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Feedback',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Contact Us',
                link: 'https://http://127.0.0.1:5173/'
            },
        ]
    },
    {
        title: 'Partner',
        links: [
            {
                name: 'Our Partners',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Become a Partner',
                link: 'https://http://127.0.0.1:5173/'
            },
            {
                name: 'Partner Benefits',
                link: 'https://http://127.0.0.1:5173/'
            },
        ]
    }
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
    title: 'Subscribe',
    placeholder: 'Email',
    desc: 'The Blue Elf newsletter is only twice monthly and we send special news letter only discounts. We also update you on new products, deals, and expansion cities.'
}


//--------------------- LANDING PAGE ----------------------------------------------------------------------------------------------

export const heroMain = {
    title: <h1 className=' text-[36px] sm:text-[56px] font-extrabold py-6 px-0     sm:px-6 leading-none'>
                Vacation Made Easy
            </h1>,
    desc: "Rent products to be dropped off and picked up on your next vacation.",
    cta: "Shop Now"
}


export const howToInfo = {
    title: " Your Vacation Made Easy",
    steps: [
        {
            title: "Tell Us Where",
            paragraph: "No need to leave the condo, just let us know where to go.",
        },
        {
            title: "Tell Us When",
            paragraph: "Taking a long weekend or extended getaway? We'll make sure it's time well spent",
        },
        {
            title: "Tell Us What",
            paragraph: "Need a hammock, canopy, and surfboard? We've got you covered.",
        },
        {
            title: "Enjoy",
            paragraph: "Enjoy your hassle free vacation.",
        }
    ]
}

export const categories = {
    title: 'Something for Any',
    cats: [
        {
            header: 'Leisure',
            img: leisure,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'Fun',
            img: fun,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'Kids',
            img: kids,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'Electronics',
            img: electronics,
            bg_color: '#ffffff',
            link: '',
        },
    ]
}

export const quality = {
    title: <h1 className="text-[28px] md:text-[40px] text-center font-bold"> 
                <span className="text-primary"> 100% </span>Quality Guarantee
            </h1>,
    paragraph: <p className="text-center md:text-[20px]">
                    We only work with the best products. If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> Free. </span> 
                </p>,
    logos: [
        yeti_white_logo, sony_white_logo, diawa_white_logo, rtic_white_logo,
        nike_white_logo, jbl_white_logo, pyzel_white_logo, rei_coop_white_logo
    ]
}


export const easy = [
    {
        title: 'Update or Cancel an Order',
        desc: 'Make updates to where, when, and what you ordered',
        icon: <EditIcon/>,
        link: ''
    },
    {
        title: 'Exchange an Item',
        desc: "Change your mind? We'll swap it out",
        icon: <LoopIcon/>,
        link: ''
    },
    {
        title: 'Contact Support',
        desc: "Need a hand with anything? We're happy to help",
        icon: <HelpCenterIcon/>,
        link: ''
    }
]



