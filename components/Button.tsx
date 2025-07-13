"use client";
import React from "react";
import { useSettings } from "@/context/SettingsProvider";
import { cn } from "@/util";
import { LucideIcon } from "lucide-react";
import CustomIcon from "./CustomIcon";

interface ButtonProps {
  title: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  clsName?: string;
  func?: ()=> void
}

const Button = ({ title, leftIcon, rightIcon, clsName ,func}: ButtonProps) => {
  const { color } = useSettings();
  return (
    <button
      className={cn(
        "px-4 sm:px-6 transition-2 py-1.5 rounded-sm hover:opacity-95 cursor-pointer active:underline bg-blue-70 text-white",
        clsName
      )}
      style={{ background: `${color}` }}
      onClick={func}
    >
      <div className="flex-center gap-1.5 font-inter">
        {leftIcon && <CustomIcon Icon={leftIcon} />}
        <span className="text-base font-semibold">{title}</span>
        {rightIcon && <CustomIcon Icon={rightIcon} />}
      </div>
    </button>
  );
};

export default Button;
