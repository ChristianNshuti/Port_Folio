import {motion} from "framer-motion";
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaPython,FaGitAlt} from "react-icons/fa";
import { SiTailwindcss,SiMongodb,SiExpress} from "react-icons/si";

const skills = [
  {name:"HTML", icon: <FaHtml5 className="text-orange-500" />},
  {name:"CSS",icon: <FaCss3Alt className="text-blue-500" />},
  {name:"JavaScript",icon:<FaJs className="text-yellow-400" />},
  {name:"React",icon:<FaReact className="text-cyan-400" />},
  {name:"Node.js", icon:<FaNodeJs className="text-green-500" />},
  {name:"Express.js",icon:<SiExpress className="text-gray-300" />},
  {name:"MongoDB",icon:<SiMongodb className="text-green-600" />},
  {name:"Tailwind CSS",icon:<SiTailwindcss className="text-sky-400" />},
  {name:"Git",icon:<FaGitAlt className="text-orange-400" />},
  {name:"Python", icon: <FaPython className="text-yellow-300" />},
];

const Skills = () => {
  return (
    <section 
      id="skills"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 overflow-x-hidden">
        <motion.h2
          initial={{opacity:0,y: -40}}
          whileInView={{opacity: 1,y: 0}}
          transition={{ duration: 0.8}}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            My <span className="text-blue-400">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 1}}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {skills.map((skill,index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15,rotate: 2}}
                  transition={{ type: "spring", stiffness: 300}}
                  className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center hover:bg-gray-700/60 transition-colors">
                    <div className="text-5xl mb-3">{skill.icon}</div>
                    <p className="text-lg font-semibold">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
      </section>
  )
}

export default Skills