import React, { useState } from 'react'
import { RiSearch2Line, RiUser4Line,RiMenu5Line,RiHomeLine, RiTvLine, RiBookmarkLine, RiUserLine } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {
 
  const [showNav, setShowNav] = useState(false)
  const [query, setQuery] = useState("")
  const navigate = useNavigate();
  

  const showMenu = () => {
    setShowNav(true)
  }
  const hideNav = () => {
    setShowNav(false)
  }

  const submitQuery = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`);  
    console.log(query)
  }

  return (
  <>
    <div className='max-w-7xl mx-auto py-10 '>
      {/* LOGO */}
      <div className='flex justify-between items-center px-5 gap-3 md:gap-5'>
        <div className="flex items-baseline gap-4">
        <button onClick={showMenu} className='text-white text-3xl'><RiMenu5Line /></button>
        <Link to={"/"}><h1 className='hidden md:block logo_title text-4xl md:text-6xl text-gray-100 cursor-pointer '>mobi</h1></Link>
        </div>
          {/* SEARCH  */}
          <div className="searchBox text-white questrial_fnt w-[100%] md:w-[50%] ">
            <form onSubmit={submitQuery} className='flex items-center gap-2'>
                <input onChange={(e) => setQuery(e.target.value)} type="text" className='bg-transparent rounded-2xl border-2 focus:outline-none p-2 w-[100%]' placeholder='Enter a keyword...'  required/>
                <button className='text-2xl '><RiSearch2Line/></button>
            </form>
          </div>
            {/* SIGN IN */}
            <div className=' flex justify-between items-center gap-2  text-white cursor-pointer  transition-all questrial_fnt text-xs font-bold hover:scale-110'>
              <span className='hidden md:block md:text-2xl'><RiUser4Line/></span> 
              <span>LOGIN</span>
            </div>
       </div>
    </div>
    
    <div onClick={hideNav} className={`close_menu fixed top-0 bg-black/70 z-40 h-[100vh] w-[100vw] transition-all ease-in-out delay-150 ${showNav ? "block opacity-90 " : "hidden opacity-0"} `}></div>

    <div className={`menu fixed top-0 z-50 bg-[#09203F] h-[100vh] text-white questrial_fnt text-md  md:text-2xl ${showNav ? "showNav" : "hideNav"} `}>
      <ul className='mt-10'>
        <h1 className='block md:hidden text-center logo_title text-6xl'>mobi</h1>
        <Link to={"/"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10  hover:bg-slate-700">
              <RiHomeLine/>
              <p>Home</p>
          </li>
        </Link>

        <Link to={"/tv-shows"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
              <RiTvLine/>
              <p>Tv Shows</p>
          </li>
        </Link>
   
        <Link to={"/bookmarks"}>
          <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
              <RiBookmarkLine/>
              <p>Bookmarks</p>
          </li>
        </Link>
      

        <li className="flex items-center gap-2 py-5 my-2 md:my-10 px-10 hover:bg-slate-700">
            <RiUserLine/>
            <p>Account</p>
        </li>
      </ul>
    </div>

    <div className="modal">
      
    </div>
  </>
  )
}

export default Navbar