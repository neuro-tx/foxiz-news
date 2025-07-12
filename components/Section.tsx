import React from "react";
import CustomIcon from "./CustomIcon";
import { LucideIcon } from "lucide-react";

const Section = ({
  title,
  caption,
  Icon,
  clsname,
  children,
}: {
  title: string;
  caption: string;
  Icon: LucideIcon;
  clsname: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="w-full relative my-6">
      <div className="mb-5">
        <h3 className="text-2xl flex-center gap-2">
          <CustomIcon Icon={Icon} size={20} clsName={clsname} />
          <span className="capitalize font-semibold text-dark-300 dark:text-white-100">
            {title}
          </span>
        </h3>
        <p className="text-sm mt-1 mx-1 text-slate-400 dark:text-slate-500">
          {caption}
        </p>
      </div>
      <div className="my-5 md:mt-8">{children}</div>
    </section>
  );
};

export default Section;
