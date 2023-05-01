import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FeedbackIcon from '@mui/icons-material/Feedback';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LockResetIcon from '@mui/icons-material/LockReset';
import AddCardIcon from '@mui/icons-material/AddCard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PsychologyIcon from '@mui/icons-material/Psychology';

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

export const accountButtons = [
    {
        title: 'Change Account Information', 
        desc:"Update account information like your name, number, email, etc.", 
        icon:<ManageAccountsIcon/>, 
        link:'/account-information'
    },
    {
        title: 'Change Password', 
        desc: 'Make updates to your password.', 
        icon:<LockResetIcon/>, 
        link:'/account-information'
    },
    {
        title: 'Update Payment', 
        desc: 'Add, delete, or update your payment or credit card information.', 
        icon:<AddCardIcon/>, 
        link:'/find-order'
    },
    {
        title: 'Order management', 
        desc: 'Manager your current and previous orders from here.', 
        icon:<ProductionQuantityLimitsIcon/>, 
        link:'/find-order'
    },

    {
        title: 'Preferences', 
        desc: 'Change your account preferences including, cookies, emailing, and prefered communication methods.', 
        icon:<PsychologyIcon/>, 
        link:'/account-information'
    },


]

