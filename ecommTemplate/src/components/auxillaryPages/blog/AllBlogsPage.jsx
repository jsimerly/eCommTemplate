import {BlogCard} from '..'
import { cool_blog, unicorn_blog, games_blog, kids_blog } from '../../../assets/images/blog'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const blogData = [    
  {title:'Coolest Spots on the East Coast', img:cool_blog, date:'Jan 4, 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'10 Fun Beach Games', img:games_blog, date:'Dec 16, 2022', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:"How to Make your Child's First Beach Day a Success", img:kids_blog, date:'Jan 18 2023', link:'coolest-spots-on-the-east-coast-01042023'},

  //just repeats to speed up design
  {title:'Coolest Spots on the East Cost', img:cool_blog, date:'Jan 4, 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'10 Fun Beach Games', img:games_blog, date:'Dec 16, 2022', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:"How to Make your Child's First Beach Day a Success", img:kids_blog, date:'Jan 18 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'Coolest Spots on the East Cost', img:cool_blog, date:'Jan 4, 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'10 Fun Beach Games', img:games_blog, date:'Dec 16, 2022', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:"How to Make your Child's First Beach Day a Success", img:kids_blog, date:'Jan 18 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'Coolest Spots on the East Cost', img:cool_blog, date:'Jan 4, 2023'},
  {title:'10 Fun Beach Games', img:games_blog, date:'Dec 16, 2022', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:"How to Make your Child's First Beach Day a Success", img:kids_blog, date:'Jan 18 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'Coolest Spots on the East Cost', img:cool_blog, date:'Jan 4, 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'10 Fun Beach Games', img:games_blog, date:'Dec 16, 2022', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:"How to Make your Child's First Beach Day a Success", img:kids_blog, date:'Jan 18 2023', link:'coolest-spots-on-the-east-coast-01042023'},
  {title:'Coolest Spots on the East Cost', img:cool_blog, date:'Jan 4, 2023', link:'coolest-spots-on-the-east-coast-01042023'},
]

const pages = [
  { n: 1, path: '/page1' },
  { n: 2, path: '/page2' },
  { n: 3, path: '/page3' },
  { n: 4, path: '/page4' },
];

const page = 1 //from url param

const MainBlog = ({title, img})  => (
  <div className='w-full rounded-md sm:p-10 sm:mx-20'>
    <div className='relative w-full'>
    <img src={img} className='rounded-t-md sm:rounded-md'/>
    <div className='absolute top-[10%] w-1/2 left-[10%] sm:flex flex-col justify-center items-center bg-white rounded-md p-3 hidden'>
      <h2 className={`text-tertiary sm:text-[40px] text-center font-bold p-6`}> {title}</h2>
      <button className='border border-primary bg-white text-primary text-bold rounded-md py-2 sm:px-10 hover:underline cursor-pointer'>
        Read More
      </button>
      </div>
    </div>
    <h2 className={`text-tertiary sm:text-[40px] text-center font-bold p-6 rounded-b-md bg-white`}> {title}</h2>
  </div>
)
const AllBlogsPage = () => {
  window.scrollTo(0,0)
  return (
    <div className='w-full flex flex-col justify-center items-center p-3 sm:p-10'>
      <h1 className='sm:py-10 text-[40px] text-tertiary'> Blue Elf's Blogs</h1>
      <MainBlog
        title='A Guide to Picking the Best Ocean and Pool Toys for your Vacation'
        img={unicorn_blog}
      />
      <div className='flex flex-row flex-wrap gap-2 justify-center sm:justify-start items-center mt-6 flex-grow'>
        {blogData.map((blog,i) => (
          <div className='w-[300px] h-[280px] flex' key={'blog_div_'+i}>
            <BlogCard
              key={'blog_'+i}
              title={blog.title}
              img={blog.img}
              date={blog.date}
              link={blog.link}
            />
          </div>
        ))}
      </div>
      <div className='flex flex-row p-2 my-6 text-tertiary'>
          <div className='gap-4 flex flex-row items-center justify-center'>
            {page === 1 ? '' : 
            <ArrowBackIosNewIcon className='hover:scale-125'
            sx={{fontSize:'16px'}}
            />}
            {pages.map((pageInfo,i) => (
              <div className='hover:underline cursor-pointer' key={'page_'+i}>
                {pageInfo.n}
              </div>
            ))}
            {page === pages.length ? '' : <ArrowForwardIosIcon className='hover:scale-125'
            sx={{fontSize:'16px'}}
            />}
          </div>
      </div>
    </div>
  )
}

export default AllBlogsPage