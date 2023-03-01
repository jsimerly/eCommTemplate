

const BlogCard = ({title, date, img}) => (
    <div className="bg-white rounded-md w-full my-2 sm:my-0 hover:cursor-pointer text-tertiary group ">
        <img src={img} className='rounded-t-md'/>
        <div className='flex flex-col justify-center items-center'>
            <div>            
                <h1 className='font-semibold text-[20px] p-2 text-center group-hover:underline'>{title}</h1>
            </div>
            <div className='flex mb-3 justify-end'>
                <h4>{date}</h4>
            </div>
        </div>
    </div>
)

export default BlogCard