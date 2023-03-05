
export const BlueButton = ({className , onClick, content}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <button 
        className={`${className} text-[16px] w-full h-full bg-primary text-white rounded-md p-2 hover:underline cursor-pointer`}
        onClick={handleClick}
    >
        {content}
    </button>
  )
}

export const WhiteButton = ({className, onClick, content}) => {
  return (
    <BlueButton
      className={`${className} border border-primary !bg-white !text-primary`}
      onClick={onClick}
      content={content}
    />
  );
}

export const LargeBlueButton = ({className, onClick, content }) => {
  return (
    <BlueButton
      className={`${className} p-4 !font-bold !text-[20px]`}
      onClick={onClick}
      content={content}
    />
  );
};

export const LargeWhiteButton = ({className, onClick, content }) => {
  return (
    <WhiteButton
      className={`${className} p-4 !font-bold !text-[20px]`}
      onClick={onClick}
      content={content}
    />
  );
};

