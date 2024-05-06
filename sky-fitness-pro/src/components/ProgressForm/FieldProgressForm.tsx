type FieldProgressFormType = {
  label: string;
};
export default function FieldProgressForm({ label }: FieldProgressFormType) {
  return (
    <label className="font-roboto-400 text-black text-[18px] font-normal ">
      {label}
      <input
        className="font-roboto-400 w-[237px] lg:w-[320px] h-[52px] mb-5 border rounded-lg border-gray border-solid text-black text-[18px] font-normal px-[18px] py-[16px] mr-5"
        type="number"
        min="0"
        step="1"
        placeholder="0"
      />
    </label>
  );
}
