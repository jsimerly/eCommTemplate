import { useLocation } from "react-router-dom"
import { ShoppingMain } from "../shopping"

const filterData_fromAPI = [{
    name: 'Category',
    tags: {
        'Hardshell' : true,
        'Softshell': true,
        'Floating' : true,
        'Wheeled' : true,
    },
},  
{
    name: 'Brand',
    tags: {
        'Yeti' : true,
        'RTIC' : true,
        'Igloo' : true,
    }
},
{
    name: 'Capacity',
    tags:{
        '0-20 Cans' :  true,
        '20-30 Cans':  true,
        '31-40 Cans':  true,
        '40-50 Cans':  true,
        '50+ Cans' : true
    }
},
{
    name: 'Deals',
    tags: {
        'Standard' : true,
        'On Sale' : true
    }
}]
const relatedCategories_fromAPI = [
    {name: 'Luxury Chairs', id:'0101'},
    {name: "Kid's Chairs", id:'0102'},
    {name: 'Canopy Chairs', id:'0103'},
    {name: 'Chair Accessories', id:'0104'},
]

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerms = searchParams.get('searchTerms');

  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full'>
            <h1 className="text-tertiary py-10 text-[30px]">
                Search Results for "{searchTerms}"
            </h1>
            <ShoppingMain
                filterData={filterData_fromAPI}
                relatedCategories={relatedCategories_fromAPI}
            />
        </div>
    </div>
  )
}

export default SearchPage