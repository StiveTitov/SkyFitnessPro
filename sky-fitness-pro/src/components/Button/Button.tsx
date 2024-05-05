type ButtonType = {
  title?: string;
  onClick?: () => void;
};

export default function Button({ title, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="justify-self-center font-roboto-400 rounded-full w-full h-[52px] px-7 bg-[#BCEC30] text-lg text-[#000000] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF]"
    >
      {title}
    </button>
  );
}
