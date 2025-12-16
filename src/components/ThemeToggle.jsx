import { SunIcon, MoonIcon } from "lucide-react"
import { useEffect, useState } from "react"
// import { cn } from "@/libs/utils"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const cachedTheme = localStorage.getItem("theme");
        return cachedTheme === "dark";
    })
    useEffect(()=> {
        if(isDarkMode){
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
}, [isDarkMode])
    function toggleTheme () {
        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)

        }
    }

  return (
    <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-1 rounded-full transition-colors duration-300 focus:outline-0">
        {isDarkMode? <SunIcon className="w-5 h-5 text-yellow-400"/>: <MoonIcon className="w-5 h-5 text-blue-400"/>}
    </button>
  )
}
export default ThemeToggle