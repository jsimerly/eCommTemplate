import { privacyCopy } from "../../../../constants/pages/legal_copy"

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
    <div className="flex flex-col p-6 w-full justify-center items-center text-neutralDark">
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