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
{/* <section className="rounded-[30px] p-[40px] lg:p-10 bg-white shadow-def md:mt-[302px] lg:mt-[102px]">
<div className="relative flex flex-col-reverse ">
  <div className="w-[465px] flex flex-col ">
    <h2 className="text-[60px] text-black font-roboto-500 leading-none mb-[28px]">
      Начните путь <br /> к новому телу
    </h2>
    <div className="mb-[28px] h-[178px]">
      {workoutDescription.map((el) => {
        return (<>
          <ul className="flex flex-col list-inside">
            <li className="list-disc font-roboto-400 text-2xl text-[#585959] pl-6" key={el}>{el}</li>
          </ul>
        </>)
      })}
    </div>
    <Button title="Добавить курс" />
  </div>
  <div className="w-auto">
    <Image
      className="absolute lg:-bottom-[20px] lg:right-[30px] lg:z-10 
      md:-bottom-[20px] md:right-[30px] md:z-20              "
      src="/img/Runner.svg"
      alt="runner"
      width={519}
      height={539} />
    <Image
      className="absolute lg:right-[400px] md:right-[400px]"
      src="/img/blackLine.png"
      alt="black line"
      width={50}
      height={42} />
    <Image
      className="absolute lg:-bottom-[100px] lg:-right-[20px] lg:z-0"
      src="/img/greenLine.png"
      alt="green line"
      width={655}
      height={390} />
  </div>
</div>
</section > */}