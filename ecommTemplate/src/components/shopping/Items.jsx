import { ProductCard } from "."

const items = ['Yeti Cooler', 'Yeti Cooler', 'Yeti Cooler','Yeti Cooler','Yeti Cooler','Yeti Cooler','Yeti Cooler','Yeti Cooler','Yeti Cooler','Yeti Cooler',]

const Items = () => {
  return (
    <div
        className='bg-white rounded-md w-full justify-center p-2'
    >
        <div className="flex flex-wrap">
            {items.map((item, i) => (
                <ProductCard 
                    key={i}
                    header={item}
                />
            ))}
        </div>
    </div>
  )
}

export default Items