import WhereDropdown from "../WhereDropdown"
import WhenDropdown from "../WhenDropdown"
import WhatDropdown from "../WhatDropdown"

const SlideUp = ({open, setOpen, activePopup, searchInput, setSearchInput, setSearchParamActive}) => {
    return(
      <div className="h-[330px] sm:hidden border-t justify-center">
        {activePopup === "where" && <WhereDropdown setOpen={setOpen}/>}
        {activePopup === "when" && <WhenDropdown setOpen={setOpen}/>}
        {activePopup === "what" && (
          <WhatDropdown
            open={open}
            setOpen={setOpen}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchParamActive={setSearchParamActive}
            mobile={true}
          />
        )}
      </div>
    )
  }

export default SlideUp