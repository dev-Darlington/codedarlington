import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <div>
            <p className="text-sm text-muted-foreground uppercase">&copy; codedarlington, {new Date().getFullYear()}. All Rights Reserved.</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 text-primary absolute right-4 top-4 animate-bounce hover:bg-primary/20 transition-colors duration-200">
                <ArrowUp size={20}/>
            </a>
        </div>
    </footer>
  )
}
export default Footer