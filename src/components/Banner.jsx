// import PropTypes from 'prop-types'
import cover from '../assets/cover.png'


const Banner = () => {
  return (
    <div className=" w-10/12 mx-auto relative text-center h-full mt-10">
        <img className=' absolute -z-10' src={cover} alt="" />
        <div className=" flex flex-col justify-center place-items-center items-center py-36">
        <p className='text-5xl font-bold text-white'>Discover an exceptional cooking <br /> class tailored for you!</p>
        <p className='text-lg w-8/12 my-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        <div className="flex gap-5">
            <button className='btn bg-lime-300 text-black font-bold rounded-full'>Explore Now</button>
            <button className='btn rounded-full bg-transparent border-2 border-white '>Our Feedback</button>
        </div>
        </div>
    </div>
  )
}

Banner.propTypes = {}

export default Banner