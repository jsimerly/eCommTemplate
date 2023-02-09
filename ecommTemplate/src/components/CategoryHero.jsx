import leisure from '../assets/images/leisure-shadow.jpg'
import games from '../assets/images/games-shadow.jpg'
import kids from '../assets/images/kids-shadow.jpg'
import water from '../assets/images/water-shadow.jpg'
import packages from '../assets/images/package-shadow.jpg'
import all from '../assets/images/all-shadow.jpg'


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

        </div>
    </div>
    
  )
}

export default CategoryHero