const LinkPath = ({category}) => {
    const categoryPath = [];

    let currentCategory = category;
    let chev = false

    const createOnClickHandler = (cat) => {
      return () => {
            navigate(category=cat)
        };
        };

        while (currentCategory) {
        categoryPath.push(
            <div key={currentCategory.fe_id}>
            <a 
                onClick={createOnClickHandler(currentCategory)}
                className='hover:underline cursor-pointer'>
                {currentCategory.name}
            </a>
            {chev && <ChevronRightIcon className='scale-75' />}
            </div>
        );
        currentCategory = currentCategory.parent;
        chev = true
        }

        categoryPath.push(
        <div key="home">
            <a href="/" className='hover:underline cursor-pointer'>Home</a>
            <ChevronRightIcon className='scale-75' />
        </div>
    );

    return (
        <>
        {categoryPath.reverse()}
        </>
    );
}