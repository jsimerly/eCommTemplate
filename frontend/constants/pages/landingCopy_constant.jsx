import {
    jbl_white_logo,
    diawa_white_logo,
    nike_white_logo,
    pyzel_white_logo,
    rei_coop_white_logo,
    rtic_white_logo,
    sony_white_logo,
    yeti_white_logo,
}  from "../../src/assets/images/logos"

import { gameOn, layingOut, withKids} from '../../src/assets/images/categories'

import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export const heroMain = {
    title: 'Vacation Made Easy',
    desc: "Rent vacation products to be dropped off and picked up.",
    cta: "Shop Now"
}

export const howToInfo = {
    title: "How To Make Vacation Easy",
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
    title: 'Spend Your Vacation How You Want',
    cats: [
        {
            header: 'You Can Have it All',
            desc:"Whether you're surfing in style or laying out in the sun, we've got what you need.",
            cta1: 'Shop Paddleboards',
            nav:{name:'Other Boards', fe_id:'0709'},
            img: layingOut,
        },
        {
            header: 'Game On',
            desc : 'Trying to stay active or just want to make things competitive on your get away?',
            cta1: 'Shop Games',
            nav:{name:'Games', fe_id:'0402'},
            img: gameOn,
        },
        {
            header: "Don't Kid Yourself",
            desc: 'Keeping the young ones safe and smiling can be stressful, but we can make it easy.',
            cta1: 'Shop Kids',
            nav:{name:'Kids', fe_id:'0500'},
            img: withKids
        }

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

export const easy = {
    header: <>We <span className="text-primary"> Help </span> Make It Easy</>,
    cards : [
    {
        title: 'Update or Cancel an Order',
        desc: 'Make updates to where, when, and what you ordered',
        icon: <EditIcon/>,
        link: '/find-order'
    },
    {
        title: 'Exchange an Item',
        desc: "Change your mind? We'll swap it out",
        icon: <LoopIcon/>,
        link: '/find-order'
    },
    {
        title: 'Contact Support',
        desc: "Need a hand with anything? We're happy to help",
        icon: <HelpCenterIcon/>,
        link: '/contact-support'
    }
]}

export const socialProof = {
    header: "But Don't Take our Word for It"
}