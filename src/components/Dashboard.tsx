import { FC, useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import Container from "./Container";

const Dashboard: FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>("dashboard");
  const [theme, setTheme] = useState<"light" | "dark">(
    () =>
      (window.localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeThemeOnSystemChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", changeThemeOnSystemChange);
    return () =>
      mediaQuery.removeEventListener("change", changeThemeOnSystemChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add(theme);
    window.localStorage.setItem("theme", theme);
    return () => {
      document.documentElement.classList.remove("light", "dark");
    };
  }, [theme]);

  return (
    <div className="flex justify-center items-start bg-white dark:bg-secondary max-w-[1440px] mx-auto">
      <SideNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
      />
      <Container theme={theme} />
    </div>
  );
};

export default Dashboard;
