import Image from "next/image";

import Button from "../Button/Button";
import ButtonLink from "../ButtonLink/ButtonLink";
import CourseCard from "../CourseCard/CourseCard";

export default function Profile() {
    return (
        <>
            <div className="box-border bg-[#FAFAFA]">
                <div className="mt-[0px] mb-[31px] text-[40px] font-bold">Профиль</div>
                <div
                    className="bg-[#FFFFFF]
                    rounded-[30px] 
                    w-[1160px]
                    h-[257px]
                px-[30px]
                py-[30px]">
                    <div className="flex flex-row space-x-[33px]">
                        <Image
                            className=""
                            src="/img/no_foto.png"
                            alt="no foto"
                            width={197}
                            height={197}
                        />
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[32px] font-bold">
                                Сергей
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[18px]">Логин: sergey.petrov96</p>
                                <p className="text-[18px]">Пароль: 4fkhdj880d</p>
                            </div>
                            <div className="flex flex-row space-x-[10px]">
                                <div className="w-[192px]">
                                    <Button title="Изменить пароль" />
                                </div>
                                <div className="w-[192px]">
                                    <ButtonLink title="Выйти" link="/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[53px] mb-[31px] text-[40px] font-bold">Мои курсы</div>
                <div className="flex flex-row gap-[41px]">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        </>
    )
}