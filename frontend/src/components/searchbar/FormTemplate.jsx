

const FormTemplate = ({node, open, openFunc, selectedData, icon: IconComponent, placeholder, dropdown}) => {
    
  return (
    <div 
      className='flex flex-col h-full w-full justify-center items-center' 
      ref={node}
    >
        <label className="cursor-pointer text-neutralLight focus-within:text-neutralDark flex items-center w-full h-full">
            <IconComponent className={`w-8 h-8 absolute scale-125 ml-2 transform ${selectedData == '' ? 'text-neutralLight' : 'text-neutralDark'}`}
            onClick={()=> openFunc((openBool) => !openBool)}
        />
            <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 overflow-hidden truncate focus-shadow-outline focus:outline-none placeholder-neutralLight pl-10 px-4 h-full items-center flex ${selectedData == '' ? 'text-neutralLight': 'text-neutralDark'}  border border-primary`} 
            onClick={()=> openFunc((openBool) => !openBool)}
            >
                {selectedData == '' ? placeholder : selectedData}
            </div>
        </label>
        {open &&
        <>
          <div className="z-50 top-8 hidden sm:flex w-full justify-center items-center">
            {dropdown}
          </div>
          <div className="z-50 max-h-[400px] fixed bottom-0 left-0 border-t border-primary sm:static w-full justify-center items-center flex sm:hidden">
            {dropdown}
          </div>
          </>
        }
    </div>
  )
}

export default FormTemplate