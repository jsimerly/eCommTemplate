import { useParams } from "react-router-dom"
import ErrorBoundry from "../../utils/ErrorBoundry"
import { blogData } from "./blogs_constant"

const Header = ({text}) => (
  <h2 className="text-[24px] font-semibold pt-6">{text}</h2>
)

const Paragraph = ({text}) => (
  <p className="text-[20px] py-3 px-6 indent-10">{text}</p>
)

const Image = ({img}) => (
  <img src={img} className='rounded-md w-3/4'/>
)

const BlogPage = () => {
  const { blogId } = useParams()
  const blog = blogData[blogId]
  window.scrollTo(0,0)
  return (
    <ErrorBoundry fallback="Oops, Sorry! We seem to be missing something here.">
    <div className="flex justify-center items-center text-tertiary">
      <div className="max-w-[1280px] w-full flex flex-col items-center p-6">
        <div className="p-6">
          <h1 className="w-full text-[50px] leading-none font-bold">{blog.title}</h1>
          <p className="ml-6">{blog.date}</p>
        </div>
        <img src={blog.img} className='rounded-md'/>
        <div className="w-3/4 flex flex-col justify-center items-center mt-10">
          {blog.body.map((piece, i)=>{
            if (piece.type === 'p'){
              return( <Paragraph key={'blog_p_'+i} text={piece.content}/>)
            }
            if (piece.type === 'img'){
              return( <Image img={piece.content}/>)
            }
            if (piece.type === 'h2'){
              return(<Header text={piece.content}/>)
            }
          })}
        </div>
      </div>
    </div>
    </ErrorBoundry>
  )
}

export default BlogPage