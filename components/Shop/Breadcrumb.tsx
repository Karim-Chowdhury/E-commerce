import { BsChevronRight, BsFillHouseDoorFill } from "react-icons/bs";
import Link from "next/link";
import { baseUrl } from "@/config/appConfig";

const Breadcrumb = () => {
  return (
    <>
      <section className="pt-5">
        <div className="container ">
          <div className="row">
            <div className="col space-x-2 flex items-center">
              <div>
                <span
                    className="text-accentOne text-['100px']"
                            >
                    <Link href={`${baseUrl}/`}>
                    <BsFillHouseDoorFill/>
                    </Link>
                  </span>
              </div>
              <div className="fa-solid fa-chevron-right text-paragraph">
                <BsChevronRight />
              </div>
              <div>
                <span
                    className="text-accentOne text-['100px'] text-xl "
                            >
                    <Link href={`${baseUrl}/shop`}>
                      Shop
                    </Link>
                </span>
              </div>
              <div className="flex flex-grow flex-col text-accentOne items-end">
                <h1>Best Collections</h1>
              </div>
              <div className="flex flex-grow flex-col text-accentOne items-end">
                <h1>Shop by Category</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
