import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import HandshakeIcon from '@mui/icons-material/Handshake';

export const helpButtons = [
    {
        title: 'Contact Support', 
        desc:"Need a hand with anything? We're happy to help", 
        icon:<HelpCenterIcon/>, 
        link:'/contact-support'
    },
    {
        title: 'Update or Cancel an Order', 
        desc: 'Make updates to where, when, and what you ordered', 
        icon:<EditIcon/>, 
        link:'/find-order'
    },
    {
        title: 'Exchange an Item', 
        desc: "Change your mind? We'll swap it out", icon:<LoopIcon/>, 
        link:'/find-order'
    },
    {
        title: 'Dispute Damages', 
        desc:"Were you charged for item damages that you did not cause? Dispute them here", icon:<BrokenImageIcon/>,
        link:'/find-order'
    },
    {
        title: 'Give Us Feedback', 
        desc:'Leave suggestions, reviews, and general feedback for us!', icon:<FeedbackIcon/>,
        link:'/feedback'
    },
    {
        title: 'FAQs', 
        desc:'Frequently asked Questions', icon:<QuestionAnswerIcon/>,
        link:'/FAQ'
    },
    {
        title:'Become a Partner', 
        desc:'Partner with us at Blue Elf for special benefits and positioning.', icon:<HandshakeIcon/>,
        link:'/partner'
    }
]

