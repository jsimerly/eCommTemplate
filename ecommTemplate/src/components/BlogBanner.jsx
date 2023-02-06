import { games, pineapples, kids } from '../assets/images/'

const BlogCard = ({title, date, img}) => (
    <div className="bg-white rounded-md w-full mx-6 hover:cursor-pointer text-tertiary">
        <img src={img} className='rounded-t-md'/>
        <div className='flex flex-col justify-center items-center'>
            <div>            
                <h1 className='font-semibold text-[20px] p-2 text-center'>{title}</h1>
            </div>
            <div className='flex mb-3 justify-end'>
                <h4>{date}</h4>
            </div>
        </div>
    </div>
)

const BlogBanner = () => {
  return (
    <div>
        <h1 className="text-center text-[36px] text-tertiary mb-2">
            Our Blogs
        </h1>
        <div className="flex justify-between w-full px-20">
            <BlogCard 
                img={games} 
                title={'10 Fun Beach Games'}
                date={'Dec 16, 2022'}
            />
            <BlogCard 
                img={kids} 
                title={"How to make your child's first beach day a success"}
                date={'Jan 18, 2023'}
            />
            <BlogCard 
                img={pineapples} 
                title={'Coolest Spots on the East Coast'}
                date={'Jan 4, 2023'}
            />
        </div>
        <div className="flex justify-center mt-6">
           <a className='hover:underline hover:cursor-pointer text-tertiary'> View All Blogs </a>
        </div>
    </div>

  )
}

export default BlogBanner