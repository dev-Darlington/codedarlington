import { clsx } from "clsx"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaX } from "react-icons/fa6"


const Contact = () => {
  return (
    <section id="contact" className="py-25 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h3 className="text-3xl lg:text-4xl font-bold capitalize">Get in <span className="text-primary">Touch</span></h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur magni ea provident consequatur fugit necessitatibus sapiente repudiandae laboriosam assumenda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:codedarlington@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    codedarlington@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+2349159816313" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    +234-91-5981-6313
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a href="https://map.google.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                                    Lagos, Nigeria
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex justify-center gap-3">
                            <a href="#" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a href="#" target="_blank">
                                <FaX />
                            </a>
                            <a href="#" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href="#" target="_blank">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-xl font-semibold capitalize">Send a message</h3>
                    <form action="" className="mt-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                            <input type="text" name="name" id="name" className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" name="email" id="email" className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Enter your message</label>
                            <textarea name="message" id="message" className="w-full px-4 py-3 mb-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary outline-0 resize-none" rows={4}/>
                        </div>
                        <button type="submit" className={clsx("cosmic-btn w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact