const faqCopy = [
  {
    category: 'Products',
    info: [{
        q: "How do I know I'm going to get a high quality item?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "What happens if I an item is damaged while under my possession?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "How are damages determined?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "What is the cleaning policy?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Can I choose the color of my products?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
    ],
  },
  {
    category: 'Ordering & Payment',
    info: [
      {
        q: "How far in advance can I make a reservation?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Is there a security deposit?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "How do I reserve the items I want for my trip?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Do I have to be a certain age to order from Blue Elf?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "What is your cancelation policy?",
        a: "baby don't hurt me",
        link:'/update-order',
        linkText:'Click here to cancel your order.'
      },
      {
        q: "How long will Blue Elf hold items for once they're in my cart?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "What Payment Methods do you accept?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Can I cancel or make changes to my order?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Will I recieve a notification or a tracking number when my order ships?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Can I buy giftcards?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Where do I enter a PROMO code?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
    ],
  },
  {
    category: 'Drop Off & Pick Up',
    info: [{
        q: "Can I pick up the items I've ordered if I want to?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "How does the delivery actually get to me?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "Will Blue Elf always deliver to me?",
        a: "out of range or low price order",
        link:null,
        linkText:','
      },
      {
        q: "How do I know if where I'm saying is within delivery range?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
    ],
  },
  {
    category: 'Account',
    info: [
      {
        q: "Do I need an account to order from Blue Elf?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "How do I change my password?",
        a: "baby don't hurt me",
        link:null,
        linkText:','
      },
      {
        q: "I forgot my password, how do I change my password?",
        a: "baby don't hurt me",
        link: null,
        linkText:','
      },
      {
        q: "How do I unsubscribe from emails?",
        a: "baby don't hurt me",
        link: null,
        linkText:','
      },
      {
        q: "What is love?",
        a: "baby don't hurt me",
        link: null,
        linkText:','
      },
    ],
  },
]

const FAQ = () => {
  window.scrollTo(0,0)
  return (
    <div className='flex flex-col justify-center items-center text-tertiary'>
      <h1 className='text-[70px] py-10'>FAQ</h1>
      {faqCopy.map((category,i) => (
        <div className="w-2/3" key={i}>
          <h2 className="text-[40px] text-primary font-bold">{category.category}</h2>
          {category.info.map((qna, j) => (
            <div key={i.toString()+"-"+j.toString()}>
              <p className="font-semibold text-[30px]">{qna.q}</p>
              <p className="">{qna.a}</p>
              {qna.link !== null ?
              <a href={qna.link} className="underline cursor-pointer"> {qna.linkText} </a>
              : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default FAQ