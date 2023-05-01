import { cookiesCopy } from "../../../../constants/pages/legal_copy"

const policyList = (list) => (
  
  <ul className="list-disc w-4/5 ml-10">
    {list.map((pol, i) => (
      <li>{pol}</li>
    ))}
  </ul>
)

const Cookies = () => {
  window.scrollTo(0,0)
  return (
    <div className="flex flex-col p-6 w-full justify-center items-center text-tertiary">
      <h1 className="text-[70px] w-full text-center">Cookies</h1>
      <div className="max-w-[1000px]">
        Effective Date: {cookiesCopy.effective_date}
        <br/><br/>
        {cookiesCopy.intro}
        {cookiesCopy.body.map((policy, i) => (
          <div className="my-3">
            <h2 className="text-[20px] py-3">{policy.header}</h2>
            <p>{policy.text}</p>
            {'bullets' in policy ? policyList(policy.bullets) : ''}
          </div>
        ))}
      </div>
      <h2>Last Updated: {cookiesCopy.last_updated}</h2>
    </div>

  )
}

export default Cookies