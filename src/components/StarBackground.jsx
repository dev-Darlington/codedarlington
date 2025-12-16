import { useEffect, useState } from "react"

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GENERATE STARS
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
    const newStars = [];
    let i;
    for(i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2
      })

      setStars(newStars);
    }
  }

  // GENERATE METEORS
    const generateMeteors = () => {
    const numberOfMeteors = 10;
    const newMeteors = [];
    let i;
    for(i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3
      })

      setMeteors(newMeteors);
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star)=>(
        <div key={star.id} className="star animate-pulse-subtle" style={{
          width: star.size + "px",
          height: star.size + "px",
          left: star.x + "%",
          top: star.y + "%",
          opacity: star.opacity,
          animationDuration: star.animationDuration + "s"
        }}
         />
      ))}
      {meteors.map((meteor)=>(
        <div key={meteor.id} className="opacity-0 meteor animate-meteor rotate-290" style={{
          width: meteor.size * 15 + "px",
          height: meteor.size + "px",
          left: meteor.x + "%",
          top: meteor.y + "%",
          animationDelay: meteor.delay + "s",
          animationDuration: meteor.animationDuration + "s"
        }}
         />
      ))}
    </div>
  )
}
export default StarBackground