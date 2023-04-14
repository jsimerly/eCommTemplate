import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import navigateShopping from '../../hooks/navigateShopping';

export const LinkPath = ({category}) => {
    const navigate = navigateShopping()

    const createOnClickHandler = (cat) => {
      return () => {
            navigate(category=cat)
        };
    };

    if (!category){
        return(
            <></>
        )
    }

    return(
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
                <a href="/" className='hover:underline cursor-pointer'>
                    Home
                </a>
            </div>
            {category.parent.parent && category.parent.parent.fe_id !== '' &&
                <div className='flex flex-row items-center'>
                    <ChevronRightIcon sx={{fontSize: 20}}/>
                    <a 
                        onClick={createOnClickHandler(category.parent.parent)}
                        className='hover:underline cursor-pointer'
                    >
                        {category.parent.parent.name}
                    </a>

                </div>
            }
            {category.parent && category.parent.fe_id !== '' &&
                <div className='flex flex-row items-center'>
                    <ChevronRightIcon sx={{fontSize: 20}}/>
                    <a 
                        onClick={createOnClickHandler(category.parent)}
                        className='hover:underline cursor-pointer'
                    >
                        {category.parent.name}
                    </a>

                </div>
            }
            {category && category.fe_id !== '' &&
                <div className='flex flex-row items-center'>
                    <ChevronRightIcon sx={{fontSize: 20}}/>
                    <a 
                        onClick={createOnClickHandler(category)}
                        className='hover:underline cursor-pointer'
                    >
                        {category.name}
                    </a>
                </div>
            }
        </div>
    )
}