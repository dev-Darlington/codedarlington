import clsx from "clsx"
import { useState } from "react"

const mySkills = [
    {name: "HTML", level: 90, category: "frontend"},
    {name: "CSS", level: 85, category: "frontend"},
    {name: "JavaScript", level: 80, category: "frontend"},
    {name: "TypeScript", level: 70, category: "frontend"},
    {name: "Tailwindcss", level: 95, category: "frontend"},
    {name: "NextJS", level: 75, category: "frontend"},
    {name: "Node.JS", level: 65, category: "backend"},
    {name: "GraphQL", level: 90, category: "backend"},
    {name: "Git & Github", level: 90, category: "tools"},
    {name: "Figma", level: 90, category: "tools"},
    {name: "Framer-motion", level: 90, category: "tools"},
    {name: "VS Code", level: 90, category: "tools"},
]

const Skills = () => {
    const categories = ["all", "frontend", "backend", "tools"]
    const [activeCategory, setActiveCategory] = useState("all")
    const handleCategoryChange = (category) => {
        setActiveCategory(category.target.textContent)
    }
    let filteredArray = mySkills.filter(skill => activeCategory === "all" || skill.category === activeCategory)

  return (
    <section id="skills" className="py-25 px-4 bg-secondary/30">
        <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="mb-4">
                {categories.map((category, key) => (
                    <button onClick={handleCategoryChange} key={key} 
                    className={clsx("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                        {category}
                        </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArray.map((skill, key) => (
                    <div key={key} className="bg-primary/10 p-6 shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full h-2 bg-secondary/50 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: `${skill.level}%`}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level + "%"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
export default Skills