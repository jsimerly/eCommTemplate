import CategoryTile from "./CategoryTile"
import leisure from '../assets/images/leisure.jpg'
import games from '../assets/images/games.jpg'
import kids from '../assets/images/kids.jpg'
import water from '../assets/images/water.jpg'
import packages from '../assets/images/package.jpg'
import all from '../assets/images/all.jpg'

const category_info = [
  {
    image: packages,
    title: 'Packages',
    text: 'Shop in bulk'
  },
  {
    image: leisure,
    title: 'Leisure',
    text: '',
  },
  {
    image: games,
    title: 'Fun',
    text: ''
  },
  {
    image: kids,
    title: 'Kids',
    text: ''
  },
  {
    image: water,
    title: 'Water',
    text: ''
  },
  {
    image: all,
    title: 'All Categories',
    text: ''
  },
]

const CategoryHero = () => {
  return (
    <div className="my-6">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {category_info.map((cat, index) => (
            <CategoryTile image={cat.image} title={cat.title} text={cat.text} key={index}/>
          ))}

        </div>
    </div>
    
  )
}

export default CategoryHero