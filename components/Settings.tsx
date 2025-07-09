"use client";
import { useClickout } from "@/hooks/useClickout";
import { Settings, Check, X, Ban, CircleCheckBig } from "lucide-react";
import React, { useState } from "react";
import { colors, themes } from "@/constant/setting";
import { useSettings } from "@/context/SettingsProvider";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, setThemeState, color, setColor, layout, setLayout } =
    useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickout(() => setIsOpen(false));

  return (
    <>
      <div className="fixed right-4 bottom-4">
        <button
          className="size-10 rounded-full drop-shadow-xl bg-blue-70 text-white place-center transition-1 cursor-pointer active:opacity-75"
          onClick={() => setIsOpen(true)}
          style={{
            background: `${color}`,
          }}
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
            isOpen
              ? "right-0 border-l-white-100 dark:border-l-dark-300"
              : "-right-full"
          }`}
        >
          <div className="w-full p-5">
            <div className="py-2 border-b border-white-100 dark:border-dark-300 flex-between">
              <h1
                className="text-lg font-semibold text-dark-300 dark:text-white-50"
                style={{ color: `${color}` }}
              >
                Settings
              </h1>

              <button
                className="size-7 grid place-items-center  md:hidden bg-red-70 transition-1 rounded-full text-white cursor-pointer active:opacity-80"
                onClick={() => setIsOpen(false)}
                style={{ background: `${color}` }}
              >
                <X size={19} />
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
                    style={{
                      background: `${theme === mode.name ? `${color}` : ""}`,
                    }}
                    onClick={() => setThemeState(mode.name)}
                  >
                    <div className="flex-center gap-1.5">
                      {<mode.icon size={20} />}
                      <span className="text-base">{mode.name} Mode</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="py-2 pb-5 border-b border-white-100 mt-3 dark:border-dark-300">
              <h2 className="text-base text-dark-300 dark:text-white font-roboto font-medium">
                Custom Colors :
              </h2>
              <div className="mt-2 mx-5">
                <div className="flex-center gap-3 flex-wrap">
                  {colors.map((item) => (
                    <div
                      key={item.cName}
                      className={`color-btn place-center`}
                      style={{
                        background: item.color,
                      }}
                      onClick={() => setColor(item.color)}
                    >
                      <Check
                        size={18}
                        className={`${
                          item.color === color ? "block text-white" : "hidden"
                        }`}
                      />
                    </div>
                  ))}
                  <button
                    className="color-btn bg-dark-100 text-white place-center dark:bg-white dark:text-black ring-1  transition-1"
                    onClick={() => setColor("")}
                  >
                    <Ban size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="py-2 pb-5 border-b border-white-100 mt-3 dark:border-dark-300">
              <h2 className="text-base text-dark-300 dark:text-white font-roboto font-medium">
                Layout Display
              </h2>

              <div className="mt-3 grid sm:grid-cols-2 gap-2 mx-5">
                <div className="flex-center flex-col justify-center w-full">
                  <button
                    className={`layout-btn transition-2 ${
                      layout === "row"
                        ? "ring-2 ring-blue-70"
                        : "ring-2 ring-transparent"
                    }`}
                    onClick={() => setLayout("row")}
                  >
                    {layout === "row" && (
                      <span className="size-4.5 place-center absolute top-1 right-1 bg-blue-70 rounded-full transition-2">
                        <CircleCheckBig size={12} className="text-white" />
                      </span>
                    )}
                    <div className="grid gap-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-full h-4 bg-white-100 rounded-sm dark:bg-dark-200 transition-2"
                        />
                      ))}
                    </div>
                  </button>
                  <div className="mt-2 font-medium select-none">Row</div>
                </div>

                <div className="flex-center flex-col justify-center w-full">
                  <button
                    className={`layout-btn transition-2 ${
                      layout === "grid"
                        ? "ring-2 ring-blue-70"
                        : "ring-2 ring-transparent"
                    }`}
                    onClick={() => setLayout("grid")}
                  >
                    {layout === "grid" && (
                      <span className="size-4.5 place-center absolute top-1 right-1 bg-blue-70 rounded-full">
                        <CircleCheckBig size={12} className="text-white" />
                      </span>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-full h-4 bg-white-100 rounded-sm dark:bg-dark-200 transition-2"
                        />
                      ))}
                    </div>
                  </button>
                  <div className="mt-2 font-medium select-none">Grid</div>
                </div>
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
