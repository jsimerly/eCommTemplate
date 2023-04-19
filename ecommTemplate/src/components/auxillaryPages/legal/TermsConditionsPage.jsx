const termsCopy = [
  {
    header:'Use of Site',
    text:"Our e-commerce site is provided for your personal and non-commercial use only. You may not use our site for any other purpose, including any commercial purpose, without our express prior written consent. By using our site, you agree to use it only for lawful purposes and in a manner that does not infringe upon or violate the rights of any third party. You may not use any software or device that interferes with the proper functioning of our site or attempt to gain unauthorized access to our site or any of its contents.",
  },
  {
    header:'Product Information',
    text:"We strive to provide accurate and up-to-date information on our site, including product descriptions, pricing, and availability. However, we do not guarantee that the information on our site is accurate, complete, or current. We reserve the right to correct any errors or omissions, and to change or update information at any time without prior notice. We also reserve the right to limit the quantity of items purchased per person, per household, or per order.",
  },
  {
    header:'Ordering and Payment',
    text:"All orders placed through our site are subject to our acceptance, which we may withhold or delay for any reason. We reserve the right to refuse any order for any reason, including without limitation, if the product or service is unavailable, if there is an error in the description or price of the product or service on our site, or if we suspect fraudulent or illegal activity. Payment for all orders must be made in full at the time of purchase, and we accept payment by credit card or other payment methods that we may offer from time to time.",
  },
  {
    header:'Shipping and Delivery',
    text:"We will make every effort to ship your order as quickly as possible, but we cannot guarantee any specific delivery dates or times. We are not responsible for any delays or damages caused by third-party shipping carriers. We may offer various shipping options, such as standard or expedited shipping, and we may charge additional fees for certain shipping options. We will provide you with an estimated delivery date at the time of purchase, but this date is only an estimate and may be subject to change.",
  },
  {
    header:'Returns and Refunds',
    text:"If you are not satisfied with your purchase, you may return it to us within 30 days of receipt for a refund or exchange. All returned items must be in their original condition and packaging. We reserve the right to refuse any returns that do not meet these criteria. We will refund the purchase price of the item(s), less any applicable shipping charges or restocking fees, within a reasonable time after receiving the returned item(s). We may also offer exchanges for certain items, subject to availability.",
  },
  {
    header:'Intellectual Property',
    text:"All content on our site, including text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by U.S. and international copyright laws. You may not reproduce, modify, distribute, or display any of our content without our express prior written consent. You may not use any of our trademarks, trade names, or logos without our express prior written consent. We reserve all rights not expressly granted to you in these terms and conditions.",
  },
  {
    header:'Disclaimer of Warranties',
    text:'Our site and all content, products, and services provided through our site are provided "as is" and without warranties of any kind, either express or implied. We do not warrant that our site or any content, products, or services will be uninterrupted or error-free, or that defects will be corrected. We do not warrant or make any representations regarding the use or the results of the use of our site or any content, products, or services provided through our site in terms of their correctness, accuracy, timeliness, reliability, or otherwise.',
  },
  {
    header:'Limitation of Liability',
    text:"In no event shall our company or its officers, directors, employees, or agents be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of our site or any content, products, or services provided through our site, whether based on contract, tort, strict liability, or otherwise, even if our company has been advised of the possibility of such damages.",
  },
  {
    header:'Governing Law',
    text:"These terms and conditions shall be governed by and construed in accordance with the laws of the state of Delaware, without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or in connection with these terms and conditions or our site shall be brought exclusively in the state or federal courts located in Dover, Delaware, and you hereby consent to the jurisdiction of such courts.",
  },
  {
    header:'Changes to Terms and Conditions',
    text:"We reserve the right to change these terms and conditions at any time, without prior notice. Any changes will be effective immediately upon posting to our site. Your continued use of our site following the posting of any changes to these terms and conditions constitutes your acceptance of those changes. We recommend that you review these terms and conditions regularly to stay informed of any changes.",
  },
  {
    header:'',
    text:"",
  },
]

const TermsConditionsPage = () => {
  window.scrollTo(0,0)
  return (
    <div className="flex flex-col p-6 w-full justify-center items-center text-tertiary">
    <h1 className="text-[70px] w-full text-center"> Terms and Conditions </h1>
    <ol className="w-2/3">
      {termsCopy.map((terms,i) => (
        <div className="my-3">
          <h2 className="text-[20px] py-3">{terms.header}</h2>
          <p>{terms.text}</p>
          {'list' in terms ? policyList(policy.list) : ''}
        </div>
      ))}
    </ol>

  </div>
  )
}

export default TermsConditionsPage