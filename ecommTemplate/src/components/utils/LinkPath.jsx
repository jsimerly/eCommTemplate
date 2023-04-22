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

    //implement my first production linkedList!
    const createParents = () => {
        let currCat = category;
        const parents = [];
    
        while (currCat && currCat.name !== ''){
          parents.push(
            <div className='flex flex-row items-center'>
              <ChevronRightIcon sx={{fontSize: 20}}/>
              <a
                onClick={createOnClickHandler(currCat)}
                className='hover:underline cursor-pointer'
              >
                {currCat.name}
              </a>
            </div>
          );
          currCat = currCat.parent;
        }
        return parents.reverse();
      }

    return(
        <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
                <a href="/" className='hover:underline cursor-pointer'>
                    Home
                </a>
            </div>
            {createParents()}
        </div>
    )
}