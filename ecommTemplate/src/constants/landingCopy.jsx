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

import { gameOn, layingOut, withKids, sheltered } from '../assets/images/categories'

import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export const heroMain = {
    title: 'Vacation Made Easy',
    desc: "Rent products to be dropped off and picked up on your next vacation.",
    cta: "Shop Now"
}

export const howToInfo = {
    title: "Doing Nothing has Never been this Easy",
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
    title: 'Spend Your Vacation How You Want To',
    cats: [
        {
            header: 'Laying Out',
            img: layingOut,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'Game On',
            img: gameOn,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'With the Kids',
            img: withKids,
            bg_color: '#ffffff',
            link: '',
        },
        {
            header: 'Staying Cool',
            img: sheltered,
            bg_color: '#ffffff',
            link: '',
        },
    ]
}

export const quality = {
    title: <> 
                <span className="text-primary"> 100% </span>Quality Guarantee
            </>,
    paragraph: <>
                We only work with the best products. If you are not satisfied with the quality, we will give you a full refund or replacement for  <span className="text-primary font-bold"> Free. </span> 
                </>,
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