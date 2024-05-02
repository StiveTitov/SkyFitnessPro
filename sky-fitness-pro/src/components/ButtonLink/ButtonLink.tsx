import Link from "next/link";

type ButtonLinkType = {
  title: string;
  link: string;
};

export default function ButtonLink({ title, link }: ButtonLinkType) {
  return (
    <button className="rounded-full border border-black w-full h-[52px] px-7 bg-transparent text-lg text-[#000000] hover:bg-[#F7F7F7] active:bg-[#E9ECED]">
      <Link href={link}>{title}</Link>
    </button>
  );
}
