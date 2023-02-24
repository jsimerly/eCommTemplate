import styles from '../../styles'
import { useContext, useEffect } from 'react'
import { ShoppingContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const ShoppingHero = ({name, desc, img, parent}) => {
    const {selectedCategory, setSelectedCategory} = useContext(ShoppingContext)
    let navigate = useNavigate()

    useEffect(()=> {
        createHeirarchy()
    }, [selectedCategory])

    const createHeirarchy = () => {
        let heirarchy = [
            {
                name: 'Home', 
                onClick: ()=> navigate('/')}
        ]
        console.log(selectedCategory)
        if (selectedCategory.name == 'All Categories'){
            return heirarchy
        } 

        heirarchy.push(
            {
            name: 'All Categories', 
            onClick: ()=> setSelectedCategory({name: 'All Categories', id:'0000'})
            }
        )

        if (selectedCategory.id.slice(-2) === '00'){
            return heirarchy
        }

        heirarchy.push(
            {
                name: parent.name,
                onClick: ()=> setSelectedCategory(parent)
            }
        )
        return heirarchy
    }
    const backLinks = createHeirarchy()
    console.log(backLinks)
  return (
    <div className='w-full flex flex-col relative'>
        <img
            src={img}
            className='w-full'
        />
        <div className="absolute h-full w-full">
            <div className={`${styles.flexCenter} h-full`}>
                <div className={`${styles.boxWidth}`}>
                    <div className='bg-white w-2/3 rounded-md my-2 p-10 justify-start flex flex-col items-start'>
                        <div className='flex flex-col items-start'>
                            <div className='text-[12px] flex'>
                                {backLinks.map((cat, i) => {
                                    if (backLinks.length-1==i){
                                        return (
                                            <div
                                                key={i}
                                            >
                                                <a
                                                 className='underline cursor-pointer'
                                                 onClick={cat.onClick}
                                                >
                                                    {cat.name}
                                                </a>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div
                                            key={i}
                                        >
                                        <a
                                            className='underline cursor-pointer'
                                            onClick={cat.onClick}
                                        >
                                            {cat.name}
                                        </a>
                                        <span>
                                            {' / '} 
                                        </span>
                                    </div>
                                    )
                                })}                                
                            </div>
                            <h1 className='font-bold text-[60px] leading-none'>
                                {name}
                            </h1>

                        </div>

                        <p className='text-[20px] mt-4'>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingHero