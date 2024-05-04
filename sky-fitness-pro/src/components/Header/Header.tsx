import Link from "next/link";
import Image from "next/image";
import logoImg from "./logo.svg"

export default function Header() {
  return (
    <>
      <div className="bg-[#FFFFFF] py-14 flex justify-between">
        <div>
          <Link href={"/"}>
            <div>
              <Image src={logoImg} alt="logo" width={220} height={35} />
            </div>
          </Link>
          <p className="pt-3.5 text-[#585959]">Онлайн-тренировки для занятий дома</p>
        </div>
        <button className="rounded-full w-full h-[52px] px-7 bg-[#BCEC30] text-lg text-[#000000] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF]">Войти</button>
      </div>
    </>
  )
}