import { Briefcase, Code, User } from "lucide-react"

const About = () => {
  return (
    <section className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci impedit cum magni praesentium explicabo expedita reiciendis! Iste, adipisci deserunt.</p>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci impedit cum magni praesentium explicabo expedita reiciendis! Iste, adipisci deserunt.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="cosmic-btn">Get In Touch</button>
                        <button className="px-6 py-2 text-primary font-medium border border-primary rounded-full hover:border-primary/80 hover:scale-105 active:scale-95 transition-all duration-300">Download CV</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">Web Development</h3>
                                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">UI/UX Design</h3>
                                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">Technical Writing</h3>
                                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default About