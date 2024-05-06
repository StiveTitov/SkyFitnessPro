'use client'
import Link from "next/link";
import Image from "next/image";
import logoImg from "./logo.svg"
import Button from "../Button/Button";
import SVG from "../SVG/SVG";
import { useState } from "react";
import DropDown from "../DropDown/DropDown";

export default function Header() {
  const isAuth = false;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="py-14 flex justify-between">
        <div>
          <Link href={"/"}>
            <div>
              <Image src={logoImg} alt="logo" width={220} height={35} />
            </div>
          </Link>
          <p className="pt-3.5 text-[#585959]">Онлайн-тренировки для занятий дома</p>
        </div>
        {isAuth ?
          <div className="w-[103px]">
            <Button title='Войти' />
          </div>
          : (<>
            <div onClick={toggleDropdown} className="relative top-0 left-0 flex flex-row justify-between items-center w-[170px] h-[50px]">
              <SVG icon="icon-user" className="w-[42px] h-[42px]" />
              <div className="flex items-center w-[100px]">
                <p className="text-2xl font-roboto-400 pr-[11px]">Сергей</p>
                <SVG icon="icon-arrow" className="w-[14px] h-[9px]" />
              </div>
            </div>
            {isOpen && ( <DropDown />)}
          </>)}
      </div>
    </>
  )
}