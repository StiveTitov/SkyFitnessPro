import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";
import VideoComponent from "@/components/Video/Video";
import WorkoutProgress from "@/components/WorkoutProgress/WorkoutProgress";
import Wrapper from "@/components/Wrapper/Wrapper";
import { breadcrumbsItems, workoutProgress } from "@/lib/data";
import { Suspense } from "react";

export default function WorkoutPage() {
  return (
    <Wrapper>
      <section>
        <Title label={"Йога"} />
        <Breadcrumbs
          /* Красота и здоровье / Йога на каждый день / 2 день */
          items={breadcrumbsItems}
        />
      </section>
      <section className="h-[189px] lg:h-[639px] rounded-[30px] mb-6 lg:mb-10">
        <Suspense fallback={<p>Loading video...</p>}>
          <VideoComponent />
        </Suspense>
      </section>
      <section className="rounded-[30px] p-[30px] lg:p-10 bg-white shadow-def ">
        <h2 className="text-[32px] text-black font-skyeng font-normal">
          Упражнения тренировки 2
        </h2>
        <div className="min-h-fit flex flex-col gap-6 lg:grid lg:gap-x-14 lg:gap-y-5 grid-rows-3 grid-cols-3 grid-flow-col items-end">
          {workoutProgress.map((step, i) => {
            return (
              <div className="lg:w-[320px] min-w-[283px] w-auto" key={i}>
                <WorkoutProgress title={step.title} progress={step.process} />
              </div>
            );
          })}
        </div>
        <div className="lg:w-[320px] min-w-[283px] w-auto mt-10">
          <Button title="Заполнить свой прогресс" />
        </div>
      </section>
    </Wrapper>
  );
}
