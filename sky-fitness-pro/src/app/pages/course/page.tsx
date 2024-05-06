import Image from "next/image";

import Button from "@/components/Button/Button";
import { aboutCourse, coursePractice, workoutDescription } from "@/lib/data";

export default function CoursePage() {
  return (
    <>
      <section className="relative w-auto h-[310px] rounded-[30px] bg-yellow overflow-hidden">
        <h1 className="font-roboto-500 text-2xl lg:text-6xl font-medium text-white mb-[10px] lg:mb-6 pt-[40px] pl-[40px]">Йога</h1>
        <Image
        className="absolute right-[-250px] top-[-235px] object-cover"
        src="/img/yoga_nobg.png"
          alt="yoga"
          width={1023}
          height={683}
        />
      </section>
      <section className="my-[60px] ">
        <h2 className="font-roboto-500 text-black text-5xl mb-[40px]">Подойдет для вас, если:</h2>
        <div className="flex flex-row gap-[17px]">
          {aboutCourse.map((el, id) => {
            return (
              <div key={id} className="p-[20px] w-fit h-[141] bg-black rounded-[30px] flex flex-row gap-[25px] items-center">
                <p className="text-lime font-roboto-500 text-7xl">{el.id}</p>
                <p className="text-2xl text-white">{el.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <h2 className="font-roboto-500 text-black text-5xl mb-[40px]">Направления:</h2>
        <div className="p-[30px] grid grid-cols-3 gap-y-[22px] w-auto h-[146px] rounded-[30px] bg-lime">
          {coursePractice.map((el) => {
            return (<>
              <ul className="flex flex-row gap-[11px]">
                <li className="before:content-['\2726'] font-roboto-500 text-2xl text-black" key={el}><span className="relative left-8" >{el}</span></li>
              </ul>
            </>)
          })}
        </div>
      </section>
      <section className="rounded-[30px] p-[40px] lg:p-10 bg-white shadow-def mt-[102px]">
        <div className="relative flex flex-row">
          <div className="w-[465px] flex flex-col">
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
          <div className="">
            <Image
              className="absolute -bottom-[20px] right-[30px] z-10"
              src="/img/runner.png"
              alt="runner"
              width={519}
              height={539} />
            <Image
              className="absolute right-[400px]"
              src="/img/blackLine.png"
              alt="runner"
              width={50}
              height={42} />
            <Image
              className="absolute -bottom-[100px] -right-[20px] z-0"
              src="/img/greenLine.png"
              alt="green line"
              width={655}
              height={390} />
          </div>
        </div>
      </section >
    </>
  );
}