import Button from "../Button/Button";
import WorkoutProgress from "../WorkoutProgress/WorkoutProgress";
import FieldProgressForm from "./FieldProgressForm";

type ProgressFormType = {
  labels: string[];
};
export default function ProgressForm({ labels }: ProgressFormType) {
  return (
    <form className="bg-white  rounded-[30px] shadow-def w-[343px] p-[30px] lg:w-[426px] lg:p-10 ">
      <h3 className="font-skyeng text-[32px] text-black mb-12">Мой прогресс</h3>
      <fieldset className="w-[237px] lg:w-[320px] max-h-[350px]  mb-[34px] overflow-y-scroll">
        {labels.map((label, i) => {
          return <FieldProgressForm label={label} key={i} />;
        })}
      </fieldset>
      <Button title="Сохранить" />
    </form>
  );
}
