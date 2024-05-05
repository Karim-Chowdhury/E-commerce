import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCartList } from '@/lib/reduxStore/slices/storeSlice';


import { parseCookies, setCookie, destroyCookie } from "nookies";
import { baseUrl } from "@/config/appConfig";
import { FaProductHunt, FaTshirt, FaCartPlus, FaRegHeart,  FaUtensils } from "react-icons/fa";
import { BsFillSunFill, BsMoonStarsFill ,BsSunglasses} from "react-icons/bs";
import { GiMonclerJacket, GiArmoredPants, GiShoebillStork} from "react-icons/gi";
// import { UserModel } from "@/models";
import UserProfileTop from "@/components/User/UserProfileTop";
import { IoWatch } from "react-icons/io5";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const Header = () => {

  const cookies = parseCookies();
  const user = cookies?.user;
  const token = cookies?.token;

  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();


const router = useRouter();
  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUserInfo(result.user);
      setLoading(false);
    }
  };


  useEffect(() => {
    let cuser = cookies?.user;
    if (cuser) {
      let luser = JSON.parse(cuser);
      getUser(luser._id);
    } else {
      setLoading(false);
    }
  }, [cookies?.user]);

  useEffect(() => {
    setMounted(true);
    dispatch(setCartList());
  }, [])

  console.log('user info', userInfo);

  const renderThemeMode = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsFillSunFill
            className="ml-1 w-6 h-6 text-yellow-400  dark:text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsMoonStarsFill
            className="ml-1 w-6 h-6 text-gray-700 dark:text-white"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return (
    <>
      {/* Start Header */}
      <header className="bg-gray-50 dark:bg-gray-600">
        <div className="container">
          <div className="row flex items-center justify-between py-2.5">
            {/* Col 1 */}
            <div>
              <Link href="/">
                <img
                  src={`${baseUrl}/img/logo/weblogo.png`}
                  alt="website-logo"
                  className="w-full h-10"
                />
              </Link>
            </div>
            {/* Col 2 */}
              
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div> */}
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-100 border border-gray-500 text-black text-sm focus:ring-accentOne focus:border-accentOne block w-full ps-5 p-2.5  dark:bg-gray-100 dark:border-gray-900 dark:placeholder-gray-600 dark:text-black dark:focus:ring-accentOne dark:focus:border-accentOne"
                  placeholder="Search "
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-1 text-sm font-medium text-white bg-gray-400  border border-gray-600 dark:border-gray-900 hover:bg-accentOne  dark:bg-gray-600 dark:hover:bg-accentOne "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>


            {/* Col 3*/}
            <div className="flex space-x-3">
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/wishlist`}>
                  <FaRegHeart className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    8
                  </span>
                  <p className="text-black dark:text-white">WishList</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/cart`}>
                  <FaCartPlus className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    {cartCount}
                  </span>
                  <p className="text-black dark:text-white">Cart</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                {renderThemeMode()}
              </div>
              <div className=" flex flex-col items-center cursor-pointer">
                {/* {
                  userInfo == null ?
                    <Link href={`${baseUrl}/login`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link> :
                    <Link href={`${baseUrl}/my-account`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link>
                } */}

                <UserProfileTop />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* Start Navbar */}
      <nav className="bg-primary text-white flex sticky top-0 absolute z-10">
        <div className="container">
          <div className="row flex items-center space-x-5">
            {/* Col 1 */}
            <div className="relative group">
              <div className="bg-accentOne ">
                <span className="flex items-center space-x-2 px-5 py-3 ">
                  <span>
                    <i className="fa-solid fa-bars text-white" />
                    <FaProductHunt className="text-white"/>
                  </span>
                  <Link href={`${baseUrl}/`}>Product's</Link>
                </span>
              </div>
              {/* Dropdown Menu */}
              <div className="text-white absolute bg-accentOne w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary ">
                  <span>
                  <GiMonclerJacket />
                  </span>
                  <Link href={`${baseUrl}/#`}>Jacket</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary  ">
                  <span>
                  <FaTshirt/>
                  </span>
                  <Link href={`${baseUrl}/#`}>T'Shirt</Link>
                </span>
                <span  className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <GiArmoredPants/>
                  </span>
                  <Link href={`${baseUrl}/#`}>Pant</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <GiShoebillStork/>
                  </span>
                  <Link href={`${baseUrl}/#`}>Shoes</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <IoWatch />
                  </span>
                  <Link href={`${baseUrl}/#`}>Watch</Link>
                </span>
                <span className="flex items-center space-x-2 px-5 py-3 hover:bg-primary">
                  <span>
                  <BsSunglasses />
                  </span>
                  <Link href={`${baseUrl}/#`}>Sunglasses</Link>
                </span>
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex justify-between flex-grow flex-col items-end ">
              <div className="space-x-5 flex  ">
              <span className={
                    router.pathname == "/"
                      ? "bg-accentOne p-3"
                      : "hover:bg-accentOne p-3"
                  }>
                  <Link href={`${baseUrl}/`}>Home</Link>
                </span>
                <span className={
                    router.pathname == "/shop"
                      ? "bg-accentOne p-3 "
                      : "hover:bg-accentOne p-3 "
                  }>
                  <Link href={`${baseUrl}/shop`}>Shop</Link>
                </span>
                
                <span className={
                    router.pathname == "/about"
                      ? "bg-accentOne p-3"
                      : "hover:bg-accentOne p-3"
                  }>
                  <Link href={`${baseUrl}/about`}>About Us</Link>
                </span>
                
                
              </div>
              {/* <div className="flex items-center space-x-5">
                {
                  userInfo ? <> {userInfo.firstName}</> : <Link href={`${baseUrl}/login`} className=" p-3 font-medium hover:bg-accentOne to-accentTwo">Login/Register</Link>
                }
              </div> */}
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Header;
