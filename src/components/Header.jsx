// import PropTypes from 'prop-types'
const Header = () => {
  return (
    <div className="w-10/12 mx-auto my-5">
      <div className="flex justify-between items-center bg-base-100">
        <div className="">
            <a className=" xl:text-2xl text-xl font-bold">Recipe Calories</a>
        </div>
        <div className=" hidden md:flex gap-10 text-lg font-semibold">
            <p>Home</p>
            <p>Recipes</p>
            <p>About</p>
            <p>Search</p>
        </div>
        <div className="flex gap-2">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24  md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

Header.propTypes = {}

export default Header