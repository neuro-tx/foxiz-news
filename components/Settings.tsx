"use client";
import { useClickout } from "@/hooks/useClickout";
import { Settings, Check, Sun, Moon, X } from "lucide-react";
import React, { useState } from "react";
import { colors, themes } from "@/constant/setting";
import { useSettings } from "@/context/SettingsProvider";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setThemeState } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickout(() => setIsOpen(false));

  return (
    <>
      <div className="fixed right-4 bottom-4">
        <button
          className="size-10 rounded-full drop-shadow-xl bg-blue-70 text-white place-center transition-1 cursor-pointer active:opacity-75"
          onClick={() => setIsOpen(true)}
        >
          <Settings />
        </button>
      </div>

      <div
        className={`fixed min-h-dvh right-0 top-0 ${
          isOpen ? "w-full z-30 backdrop-blur-xs" : "w-0"
        }`}
      >
        <aside
          ref={ref}
          className={`max-w-xl w-full fixed top-0 bg-white dark:bg-black h-full rounded-l-lg transition-2 border-l ${
            isOpen ? "right-0 border-l-white-100 dark:border-l-dark-300" : "-right-full"
          }`}
        >
          <div className="w-full p-5">
            <div className="py-2 border-b border-white-100 dark:border-dark-300 flex-between">
              <h1 className="text-lg font-semibold text-dark-300 dark:text-white-50">
                Settings
            </h1>

            <button 
              className="size-7 grid place-items-center  md:hidden bg-red-70 rounded-full text-white cursor-pointer active:opacity-80"
              onClick={()=> setIsOpen(false)}  
            >
                <X size={19}/>
            </button>
            </div>

            <div className="py-2 pb-5 border-b border-white-100 mt-3 dark:border-dark-300">
              <h2 className="text-base text-dark-300 dark:text-white font-roboto font-medium">
                Custom Theme :
              </h2>
              <div className="mt-3 grid gap-2 mx-5">
                {themes.map((mode) => (
                  <button
                    key={mode.name}
                    className={`px-3 py-1.5 border border-white-50 dark:border-dark-300 rounded-md cursor-pointer transition-1 w-fit text-dark-300 dark:text-white-50 ${
                      theme === mode.name
                        ? "bg-blue-70 text-white hover:opacity-90"
                        : "hover:bg-white-50/50 dark:hover:bg-dark-300/70"
                    }`}
                    onClick={()=>setThemeState(mode.name)}
                  >
                    <div className="flex-center gap-1.5">
                      {<mode.icon size={20} />}
                      <span className="text-base">{mode.name} Mode</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className=""></div>
        </aside>
      </div>
      <main>{children}</main>
    </>
  );
};

export default SettingsLayout;
