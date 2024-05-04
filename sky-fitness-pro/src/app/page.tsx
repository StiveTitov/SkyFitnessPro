import CourseCard from "@/components/CourseCard/CourseCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center px-[130px] max-w-[1470px]">
      <div className="flex flex-row mb-[58px] items-end space-x-7">
        <h1 className="text-[32px] md:text-[40px]/[60px] xl:text-[60px]/[60px] text-pretty">
          Начните заниматься спортом<br/> и улучшите качество жизни
        </h1>
        <svg className="hidden sm:block sm:h-[120px]">
          <use xlinkHref={`/img/sprite.svg#icon-notice`}></use>
        </svg>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-8">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </main>
  );
}
