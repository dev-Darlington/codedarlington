import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                <span className="opacity-0 animate-fade-in-delay-1 text-primary">Darlington </span>
                <span className="opacity-0 animate-fade-in-delay-2 text-gradient ml-2">Nwanne</span>
                </h1>
                <h3 className="text-xl md:text-2xl font-bebas opacity-0 animate-fade-in-delay-3">&#8220;React Developer | Building Modern, Type-Safe UIs&#8221;</h3>
                <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I specialize in architecting and delivering high-quality, scalable front-end applications using React. My stack is focused on efficiency and performance, leveraging TypeScript for robust, error-free code and Tailwind CSS to create beautiful, fully responsive, and utility-first user interfaces.
                </p>
                <div className="opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="cosmic-btn">View My Work</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-1/2 animate-bounce flex flex-col items-center justify-center">
            <span className="text-[12px] text-muted-foreground">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
  )
}
export default Hero