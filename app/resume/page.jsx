"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "Sobre mim",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quae ducimus. Eos odio rem nemo voluptates quam facere. Distinctio beatae soluta ut esse ad deserunt architecto facere magnam aliquid fuga.",
  info: [
    {
      fieldName: "Nome:",
      fieldValue: "Douglas Soares"
    },
    {
      fieldName: "Telefone:",
      fieldValue: "(+55) 48 9 9139-5727"
    },
    {
      fieldName: "Experiência:",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Nacionalidade:",
      fieldValue: "Brasil"
    },
    {
      fieldName: "Email:",
      fieldValue: "douglasfcsoares@gmail.com"
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Disponível"
    },
    {
      fieldName: "Linguas:",
      fieldValue: "Português"
    }
  ]
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quae ducimus. Eos odio rem nemo voluptates quam facere. Distinctio beatae soluta ut esse ad deserunt architecto facere magnam aliquid fuga.",
  items: [
    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "Jan 2023 - Atual"
    },
    {
      company: "Adri.com Informática",
      position: "Técnico em Informática",
      duration: "Jul 2024 - Atual"
    },
    {
      company: "Viaflex Hardware e Software Ltda.",
      position: "Front-End Developer",
      duration: "Nov 2023 - Dez 2023"
    },
    {
      company: "Vista Tecnologia Ltda",
      position: "Front-End Developer",
      duration: "Mai 2023 - Nov 2023"
    },

    {
      company: "Industria Gráfica Centro Sul",
      position: "Analista de Sistemas",
      duration: "Jan 2022 - Jan 2023"
    },
    {
      company: "DF Informática Ltda.",
      position: "Técnico de suporte em informática",
      duration: "Nov 2019 - Set 2021"
    },
    {
      company: "Seprol - IT by Experts",
      position: "Técnico de suporte em informática",
      duration: "Mar 2019 - Set 2019"
    }
  ]
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Formações",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quae ducimus. Eos odio rem nemo voluptates quam facere. Distinctio beatae soluta ut esse ad deserunt architecto facere magnam aliquid fuga.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023"
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "2023"
    },
    {
      institution: "Online Course",
      degree: "Programing Course",
      duration: "2022"
    },
    {
      institution: "Online Tech Course",
      degree: "Programing Course Javascript",
      duration: "2021"
    },
    {
      institution: "Estácio de Sá",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "2019 - 2021"
    }
  ]
};

// skills data
const skills = {
  title: "Minhas habilidades",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quae ducimus. Eos odio rem nemo voluptates quam facere. Distinctio beatae soluta ut esse ad deserunt architecto facere magnam aliquid fuga.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    }
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formações</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid drid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid drid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-accent">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
