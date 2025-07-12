import { LucideIcon } from "lucide-react";
import React from "react";

interface IconProps {
  Icon: LucideIcon;
  size?: number;
  clsName?: string;
}

const CustomIcon = ({
  Icon,
  size = 15,
  clsName,
}: IconProps & React.SVGProps<SVGSVGElement>) => {
  return <Icon size={size} className={clsName} />;
};

export default CustomIcon;
