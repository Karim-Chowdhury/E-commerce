import { baseUrl } from "@/config/appConfig";
import { AiFillStar } from "react-icons/ai";
import { BsListUl } from "react-icons/bs";
import { FaLongArrowAltRight ,FaRegHeart} from "react-icons/fa";
import { LuGripHorizontal } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setAddCart } from "@/lib/reduxStore/slices/storeSlice";
import Link from "next/link";

type CartProps = {
  product?: any;
};




const ProductCard = (props: CartProps) => {

  const { product } = props;

  console.log('product', product)

  const dispatch = useDispatch();

  const addCart = (data: any) => {
      dispatch(setAddCart({ ...data, quantity: 1 }));
  }
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row grid grid-cols-5 space-x-5 items-start">
            {/* Col 1 */}
            <div className="col-span-1 shadow-md py-5 px-3 space-y-5 divide-y border border-separate bg-green-200 dark:text-black">
              {/* Category Part */}
              <div className="space-y-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Category
                </h2>
                <div className="flex justify-between items-center ">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne bg focus:ring-0"
                        id="bedroom"
                        // defaultChecked=""
                      />
                      <label htmlFor="bedroom">Jacket</label>
                    </form>
                  </div>
                  <div>
                    <p>(15)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                        id="sofa"
                      />
                      <label htmlFor="sofa">Pant</label>
                    </form>
                  </div>
                  <div>
                    <p>(23)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                        id="outdoor"
                      />
                      <label htmlFor="outdoor">T-Shirt</label>
                    </form>
                  </div>
                  <div>
                    <p>(7)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                        id="office"
                      />
                      <label htmlFor="office">Shoes</label>
                    </form>
                  </div>
                  <div>
                    <p>(45)</p>
                  </div>
                </div>
              </div>
              {/* Brand Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Brand
                </h2>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                        // defaultChecked=""
                      />
                      <label htmlFor="women">Nike</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                      />
                      <label htmlFor="women">Zara</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                      />
                      <label htmlFor="women">Puma</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-accentOne focus:ring-0"
                      />
                      <label htmlFor="women">Calvin Klein</label>
                    </form>
                  </div>
                </div>
              </div>
              {/* Price Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Price
                </h2>
                <div>
                  <div>
                    <form className="flex justify-between items-center space-x-3">
                      <div>
                        <input
                          type="text"
                          className="border border-paragraph rounded-none h-8 w-full focus:outline-0 focus:ring-0 focus:border-paragraph"
                          placeholder="Min"
                        />
                      </div>
                      <div>
                        <p>-</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="border border-paragraph rounded-none h-8 w-full focus:outline-0 focus:ring-0 focus:border-paragraph"
                          placeholder="Max"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Size Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Size
                </h2>
                <div className="flex gap-2">
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="xs-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="xs-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      XS
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="s-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="s-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      S
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="m-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="m-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      M
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="l-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="l-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      L
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="xl-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="xl-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
              {/* Color Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Color
                </h2>
                <div className="flex gap-2">
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="yellow-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="yellow-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-accentOne inline-block cursor-pointer"
                    />
                  </div>
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="white-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="white-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-white inline-block cursor-pointer"
                    />
                  </div>
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="black-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="black-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-black inline-block cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="col-span-4 space-y-5">
              {/* Row 1 */}
              <div className="flex justify-between items-center dark:text-black">
                <div>
                  <select className="w-44 border border-separatorColor px-4 py-3 focus:ring-0 focus:border-accentOne bg-green-200">
                    <option value="">Default Sorting</option>
                    <option value="">Price low - high</option>
                    <option value="">Price high - low</option>
                  </select>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-sm py-1 px-3 bg-accentOne text-white cursor-pointer">
                    <i className="fa-solid fa-grip" />
                    <LuGripHorizontal />
                  </div>
                 
                </div>
              </div>
              {/* Row 2 */}
  <div className="grid grid-cols-4 gap-4">
                <div className="w-full max-w-sm rounded-lg shadow item-center ">
                              <img
                                src={`${baseUrl}/img/collection/jacket-2.jpg`}
                                alt=""
                                className=" h-60 w-full "
                              />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                        Jacket 
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $59
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>



                <div className="w-full max-w-sm rounded-lg shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/pant-3.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                        Pant
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $49
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>




                <div className="w-full max-w-sm rounded-lg shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/tshirt-3.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                        T-Shirt
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $25
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>

                <div className="w-full max-w-sm rounded-sm shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/shoes-lofa.jpg`}
                      alt=""
                      className="h-60 w-full"  
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                        Shoes
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $35
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
              
               
                <div className="w-full max-w-sm rounded-sm shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/sunglass-2.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                      Sunglasses
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $25
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
              
                <div className="w-full max-w-sm rounded-sm shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/watch-1.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                      Watch
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $40
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
                {/* Col 6 */}
                <div className="w-full max-w-sm rounded-sm shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/smart-watch.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                      Smart Watch
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $45
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
                {/* Col 7 */}
                <div className="w-full max-w-sm rounded-sm shadow item-center ">
                    <img
                      src={`${baseUrl}/img/collection/tshirt-2.jpg`}
                      alt=""
                      className="h-60 w-full"
                    />
                  <div className="px-5 pb-5 bg-green-200">
                    <Link href={`${baseUrl}/#`}>
                      <h5 className="text-2xl font-bold tracking-tight text-primary font-bold pt-3">
                      T-Shirt
                      </h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-3  ">
                      <span className="flex text-accentOne text-xl">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </span>
                      <div>
                        <p className="text-paragraph text-xl">(5.0)</p>
                      </div>
                    </div>
                      
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-primary ">
                        $45
                      </span>
                        <span className="w-8 h-8 rounded-full bg-primary text-white p-2 flex items-center justify-center       hover:bg-accentOne">
                            <FaRegHeart />
                        </span>
                    </div>
                        <div className="w-full pl-3 pr-3 pt-4">
                          <button
                            onClick={() => addCart(product)}
                            className="w-full  h-12 rounded-lg text-primary border-2 border-primary block font-medium hover:bg-accentOne hover:text-white ">
                                  Add to Cart
                          </button>
                        </div>
                  </div>
                </div>
                {/* Col 8 */}
                
  </div>
              {/* Row 3 */}
              <div className="flex items-center space-x-3 w-20 mx-auto">
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-accentOne text-white cursor-pointer">
                  1
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-white hover:bg-accentOne  transition duration-500 cursor-pointer">
                  2
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-white hover:bg-accentOne   transition duration-500 cursor-pointer">
                  3
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-white hover:bg-accentOne  transition duration-500 cursor-pointer">
                  4
                </div>
                <div className=" rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-white hover:bg-accentOne  transition duration-500 cursor-pointer">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
