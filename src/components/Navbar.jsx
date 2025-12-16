import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuIcon, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            }
        } 
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <nav className={clsx("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
        <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold font-bebas text-foreground flex items-center tracking-wider uppercase">
                <p className="relative z-10">code <span className="text-glow text-primary">darlington</span></p>
            </a>

            {/* Desktop Menu  */}
            <div className="hidden md:flex space-x-8">
            {navItems.map((item, key)=>(
                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                </a>
            ))}
            </div>

            {/* Mobile Menu  */}
            <button className="md:hidden p-2 text-foreground z-50" 
            onClick={()=>setMenuOpen((prev) => !prev)}
            aria-labelledby={menuOpen? "Close Menu" : "Open Menu"}>
                {menuOpen? <X size={24}/> : <MenuIcon size={24}/>}
            </button>
            <div className={clsx("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={()=>setMenuOpen((prev) => !prev)}>
                        {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>

    </nav>
  )
}
export default Navbar