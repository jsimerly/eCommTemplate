

const FormTemplate = ({node, openFunc, selectedData, icon: IconComponent, placeholder, dropdown}) => {
    
  return (
    <div className='flex flex-col h-full w-full justify-center items-center' ref={node}>
        <label className="cursor-pointer text-tertiaryTone-200 focus-within:text-tertiary flex items-center w-full h-full">
            <IconComponent className={`w-8 h-8 absolute scale-125 ml-2 transform ${selectedData == '' ? 'text-tertiaryTone-300' : 'text-tertiary'}`}
            onClick={(openBool)=>{openFunc(!openBool);}}
        />
            <div className={`bg-white cursor-pointer rounded-md mr-1 flex-1 overflow-hidden truncate focus-shadow-outline focus:outline-none placeholder-tertiaryTone-200 pl-10 px-4 h-full items-center flex ${selectedData == '' ? 'text-tertiaryTone-300': 'text-tertiary'}  border border-primary`} 
            onClick={()=> openFunc((openBool) => !openBool)}
            >
                {selectedData == '' ? placeholder : selectedData}
            </div>
        </label>
        <div className="z-50 fixed top-[15%] sm:static w-full">
          {dropdown()}
        </div>
    </div>
  )
}

export default FormTemplate