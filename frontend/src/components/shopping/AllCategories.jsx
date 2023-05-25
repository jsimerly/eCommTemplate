import { fetchManyCategories } from "../../api/fetchProducts"
import { ShoppingContext } from "../../context";
import { useContext, useEffect, useState, useRef } from "react";


const AllCategories = () => {
    const [allCategories, setAllCategories] = useState()
    const {setSelectedCategory} = useContext(ShoppingContext)

    useEffect(()=>{
        const getAllCategory = async () => {
            const response = await fetchManyCategories('0000')
            if (response.ok){
                const resp = await response.json()
                setAllCategories(resp)
            }
        }
        getAllCategory()
    },[])

    const handleClick = (cat) => {
        setSelectedCategory(cat)
    }

  return (
    <div className="hidden sm:block">
        <h3 className='font-bold text-[24px]'>
            Categories
        </h3>
        <ul>
            {allCategories && allCategories.subcategories.map((cat, i) => {
                return(
                    <li key={'cat_'+i}>
                        <h4

                            className="pl-1 cursor-pointer font-bold hover:underline"
                            onClick={()=>handleClick(cat)}
                        >
                            {cat.name}
                        </h4>
                        <ul>
                            {cat.subcategories?.map((subCat, i) => (
                                <li
                                    className="pl-2 cursor-pointer hover:underline"
                                    key={'subcat_'+i}
                                    onClick={()=>handleClick(cat)}
                                >
                                    {subCat.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default AllCategories