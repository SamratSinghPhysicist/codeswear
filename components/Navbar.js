import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 mb-1 shadow-xl">
          <div className="logo mx-5">
            <Link href={"/"}>
              <a>
                <Image
                  src={"/img/logo.jpg"}
                  alt={"Codeswear.com"}
                  width={230}
                  height={45}
                  className=""
                />
              </a>
            </Link>
          </div>
          <div className="nav">
            <ul className="flex items-center space-x-3 font-bold md:text-lg">
              <Link href={"/tshirts"}>
                <a>
                  <li>Tshirts</li>
                </a>
              </Link>
              <Link href={"/hoodies"}>
                <a>
                  <li>Hoodies</li>
                </a>
              </Link>
              <Link href={"/stickers"}>
                <a>
                  <li>Stickers</li>
                </a>
              </Link>
              <Link href={"/mugs"}>
                <a>
                  <li>Mugs</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className="cart absolute right-0 top-4 mx-5">
            <AiOutlineShoppingCart className="text-2xl md:text-3xl" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
