import { company } from "../company_constants"

export const privacyCopy = [
    {
      header:' Privacy Policy',
      text: 'This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users (each, a "User") of our website ("Site"). This privacy policy applies to the Site and all products and services offered by us.'  
    },
    {
      header:'Personal identification information',
      text: 'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site-related activities.'  
    },
    {
      header:'Non-personal identification information',
      text: "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service provider's utilized and other similar information.",  
    },
    {
      header:'Web browser cookies',
      text: "Our Site may use 'cookies' to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.",  
    },
    {
      header:'How We Use Collected Information',
      text: "We collect and use Users' personal information for the following purposes:" ,
      list: [
        'To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.',
        'To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.',
        'To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.',
        'To send periodic emails: We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.',
      ]
    },
    {
      header:'How we protect your information',
      text: 'We adopt appropriate data collection, storage, and processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.'  
    },
    {
      header:'Sharing your personal information',
      text: "We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above."  
    },
    {
      header:'Changes to this privacy policy',
      text: 'We have the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.'  
    },
    {
      header:'Your acceptance of these terms',
      text: 'By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site.'  
    },
  ]

export const cookiesCopy = {
    effective_date: '5/1/2023',
    intro: [
        `This Cookie Policy outlines the use of cookies and other similar technologies (collectively, "Cookies") by ${company.name} (hereinafter referred to as "we", "us", or "our") on our website ${company.url} and any other services that may be provided by us (collectively, the "Services").`,

        'Please read this Cookie Policy carefully to understand how we use Cookies and how you can manage your preferences. By using our Services, you agree to the use of Cookies in accordance with this Cookie Policy.'
    ],
    body : [
        {
            header: 'What are Cookies',
            text: "Cookies are small text files that are placed on your device (computer, smartphone, or other internet-enabled devices) when you visit a website. They are used to store information about your preferences, usage patterns, and other relevant data, which can be accessed by the website during your subsequent visits."
        },
        {
            header: 'Types of cookies we use',
            text: 'We use the following types of Cookies on our Services:',
            bullets:[
                'Strictly Necessary Cookies: These Cookies are essential for the proper functioning of our Services, such as enabling you to log in, navigating the website, and using its features.',
                'Performance Cookies: These Cookies collect information about how visitors use our Services, including the pages visited, the duration of the visit, and any errors encountered. The information is used to improve the performance and functionality of our Services.',
                'Functionality Cookies: These Cookies allow our Services to remember choices you have made (such as language or regional preferences) and provide enhanced, personalized features.',
                'Third-party Cookies: Some of the Cookies on our Services are set by third parties, such as social media platforms, analytics services, or advertising partners. These Cookies are governed by the respective third-party privacy policies.'
            ]
        },
        {
            header: 'How we use cookies',
            text: 'We use Cookies to:',
            bullets:[
                'Improve the functionality and performance of our Services.',
                'Personalize your experience on our Services, remembering your preferences and settings.',
                'Provide relevant content and recommendations.',
                'Monitor and analyze usage trends and patterns.',
                'Enhance the security of our Services.',
            ]
        },
        {
            header: 'Managing your cookie preferences',
            text: "Most web browsers automatically accept Cookies but provide settings that allow you to control or block the use of Cookies. To manage your Cookie preferences, please refer to the documentation or help files for your specific browser. Please note that disabling or blocking certain Cookies may affect the functionality and performance of our Services."
        },
        {
            header: 'Changes to this Cookie Policy',
            text: 'We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will provide notice of any significant changes by updating the Effective Date at the beginning of this policy.'
        },
        {
            header: 'Contact Us',
            text: 'If you have any questions or concerns about this Cookie Policy or our use of Cookies, please contact us at:',
            bullets: [
                company.name,
                company.support_email,
                company.support_phone_number
            ]
        }
    ],
    last_updated: '5/01/2023'
}