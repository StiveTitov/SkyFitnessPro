import Link from "next/link";
type CrumbItem = {
  label: string;
  path: string;
};
type BreadcrumbsType = {
  items: CrumbItem[];
};
const Breadcrumbs = ({ items }: BreadcrumbsType) => {
  return (
    <div className="flex flex-wrap gap-2 items-start text-black text-{32} font-roboto-400 font-normal mb-6 lg:mb-10">
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <div key={i}>
              <Link href={crumb.path} className="font-roboto-400 font-normal underline">
                {crumb.label}
              </Link> 
              {/* separator */}
              <span> / </span>
            </div>
          );
        } else {
          return crumb.label;
        }
      })}
    </div>
  );
};
export default Breadcrumbs;
