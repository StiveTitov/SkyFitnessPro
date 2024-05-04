import Image from "next/image";

export default function Profile() {
    return (
        <>
            <div>Профиль</div>
            <div
                className="rounded-[30px] border-2 border-solid border-black w-[1160px] h-[257px]">
                    <Image
                                    className=""
                                    src="/no_foto.png"
                                    alt="no foto"
                                    width={197}
                                    height={197}
                                />
                </div>
            <div>Мои курсы</div>
        </>
    )
}