import { motion } from "framer-motion";

export const About = () => {
    const skills = [
        { title: "Frontend", description: "React,Tailwind,Javascript,HTML,CSS"},
        { title: "Backend",description: "Node.js,Express,Nest.js,MongoDB,APIs"},
        {title: "Tools",description:"Git,Vs code, Postman"},
    ];

    return (
        <section 
            id="about"
            className="min-h-screen overflow-x-hidden w-11/12 mx-auto flex flex-col items-center justify-center bg-slate-800 text-white py-20"
            >
                <motion.h2
                    initial={{ opacity: 0,y: -20}}
                    animate={{ opacity: 1,y: 0}}
                    transition={{ duration: 0.8}}
                    className="text-4xl font-bold mb-12 text-center"
                    >
                        About <span className="text-blue-400">Me</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{ delay: 0.3,duration:1}}
                        className="max-w-2xl text-center text-gray-300 mb-12"
                        >
                            Am a passionate developer and student at Rwanda Coding Academy.
                            I love turning ideas into creative, responsive, and interactive
                            web experiences. Every line of code I write brings me closer to 
                            mastering my craft.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
                            {skills.map((skill,index) => (
                                    <motion.div
                                    key={index}
                                    initial={{ opacity:0,y:30}}
                                    whileInView={{ opacity: 1, y: 0}}
                                    viewport={{ once: true}}
                                    transition={{ delay: index * 0.2, duration:0.8}}
                                    className="bg-slate-700 hover:bg-slate-600 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20"
                                    >
                                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                                            {skill.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm">{skill.description}</p>
                                    </motion.div>
                            ))}

                        </div>
            </section>
    )
}


export default About