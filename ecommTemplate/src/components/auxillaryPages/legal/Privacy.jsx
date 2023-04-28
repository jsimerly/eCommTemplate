const privacyCopy = [
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

const policyList = (list) => (
  
  <ul className="list-disc w-2/3 ml-10">
    {list.map((pol, i) => (
      <li>{pol}</li>
    ))}
  </ul>
)

const Privacy = () => {
  window.scrollTo(0,0)
  return (
    <div className="flex flex-col p-6 w-full justify-center items-center text-tertiary">
      <h1 className="text-[70px] w-full text-center"> Privacy </h1>
      <div className="sm:w-2/3">
        {privacyCopy.map((policy,i) => (
          <div className="my-3">
            <h2 className="text-[20px] py-3">{policy.header}</h2>
            <p>{policy.text}</p>
            {'list' in policy ? policyList(policy.list) : ''}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Privacy