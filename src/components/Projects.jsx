import { motion } from "framer-motion";

const projects = [
    {
        title: "A desktop Clock app",
        description: 
        "A desktop clock app with features like viewing clock,viewing different timezones,alarm,stopwatch and timer",
        tech: ["React","CSS"],
        demo:"https://clocker-navy.vercel.app/",
        code:"https://github.com/ChristianNshuti/Clocker",
    },
    {
        title:"Tic-Tac-Toe Game",
        description:
            "A game that test your skills in Tic Tac Toe with 3 levels of difficulty which are easy,medium and hard.",
        tech:["Express","MongoDB","EJS","Cloudinary"],
        demo:"https://christiannshuti.itch.io/tic-tac-toe",
        code:"https://github.com/ChristianNshuti/Tic-Tac-Toe"
    },
    {
        title:"BrainlyCode learning Platform",
        description:"A React + redux-powered platform for students to learn coding with courses and modules.",
        tech: ["React","Redux Toolkit","Nest.js"],
        demo:"https://frontend-mdy5.onrender.com",
        code:"https://github.com/orgs/Brainly-Code/repositories",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen bg-gradient-to-b overflow-x-hidden from-black to-gray-900 text-white py-20">
                <motion.h2
                    initial={{opacity: 0,y: -40}}
                    whileInView={{ opacity: 1,y: 0}}
                    transition={{duration:0.8}}
                    className="text-4xl md:text-5xl font-bold text-center mb-16">
                        My <span className="text-blue-400">Projects</span>
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {projects.map((project,index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05}}
                                transition={{type:"spring",stiffness: 200}}
                                className="bg-gray-800/50 w-4/5 mx-auto backdrop-blur-md p-2 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
                                >
                                    <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.map((tech,i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-700/60 text-sm rounded-full text-gray-300">
                                                    {tech}
                                                </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <a
                                            href={project.demo}
                                            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors">
                                                Live Demo
                                            </a>
                                            <a 
                                                href={project.code}
                                                className="px-4 py-2 border border-blue-500 hover:bg-blue-500/20 rounded-lg font-medium transition-colors"
                                                >
                                                    View Code
                                                </a>
                                    </div>
                                </motion.div>
                        ))}
                    </div>
            </section>
    )
}

export default Projects