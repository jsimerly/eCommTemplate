import { company } from "../../../constants/company_constants"

const damagesReturns = {
  damages: [
    'The renter is responsible for any damage or losses caused to the rented item during the rental period.',
    "Any damages or loss incurred will be charged to the renter's credit card on file, up to the full retail value of the item. Damages will be pursued even if the credit card on file has been cancelled.",
    "Out of fairness to our customers, we will generally discount the damages to the current value of the used item, not the full retail item unless the item is new.",
    `Accidents happen, therefore we retain the right to waive all damage expenses in situations where we feel the customer was behaving responsibly.",
    "Damages or loss should be reported immediately to ${company.name} by contacting us at [phone number or email address].`
  ],
  returns: [
    `The rented item must be ready for pick up or returned to ${company.name} by the agreed-upon return date and time.',
    'Failure to return the rented item on time will result in a late fee of [insert late fee amount]`,
    `If the rented item is not returned within 48 hours of the agreed-upon return date and time, ${company.name} will consider the item lost and charge the renter's credit card on file the full retail value of the item.`,
    `If the renter needs to extend the rental period, they must contact ${company.name} at least 24 hours prior to the agreed-upon return date and time to make arrangements. Out of fairness to other rents who may be using the item after you, there is no guarantee on rental extensions.`,
    "The renter must return the rented item in the same condition it was in when it was rented beyond any reasonable wear. If the item is returned damaged, the renter will be responsible for any repair or replacement costs, as outlined in the damages section of this policy."
  ]
}

const ReturnDamage = ({context}) => {
  return (
    <div className="bg-tertiaryTone-100 sm:p-10 mx-1 flex flex-col justify-center items-center rounded-md">
      <h1 className="mb-6 font-semibold">Damages & Returns Policy</h1>
      <h2>We understand that accidents can happen during the rental period. To ensure a fair and consistent policy, we have outlined the following rental damages and returns policy.
      </h2>
      <div className="w-3/4 my-2">
        <div className="my-2">
          <h3 className="text-[16px] pb-3">
          Damages:
          </h3>
          <ol className="list-decimal">
            {damagesReturns['damages'].map((listItem, i) => (
              <li key={'damages_li_'+i}>
                {listItem}
              </li>
            ))}
          </ol>
        </div>
        <div className="my-2">
          <h3 className="text-[16px] py-3">
          Returns:
          </h3>
          <ol className="list-decimal">
            {damagesReturns['returns'].map((listItem, i) => (
              <li key={'return_li_'+i}>
                {listItem}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p>
        By renting from {company.name}, you agree to the terms of this rental damages and returns policy. If you have any questions or concerns, please contact us at {company.support_email}.
        </p>
    </div>
  )
}

export default ReturnDamage