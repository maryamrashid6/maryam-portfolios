import Image from "next/image";
import {
  GitIcon,
  JavaScriptIcon,
  TailwindIcon,
  NextIcon,
  TypeScriptIcon,
  ReactIcon,
} from "./assets";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: JavaScriptIcon,
      backgroundColor: "primary",
    },
    {
      name: "React.js",
      icon: ReactIcon,
      backgroundColor: "secondary",
    },
    {
      name: "Next.js",
      icon: NextIcon,
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      backgroundColor: "secondary",
    },
    {
      name: "Tailwind",
      icon: TailwindIcon,
    },
    {
      name: "Git",
      icon: GitIcon,
      backgroundColor: "primary",
    },
  ];
  return (
    <div className="md:p-10 p-2 flex flex-col gap-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center gap-2 border-2 border-gray-300 rounded-md p-4 w-28 h-30 bg-${skill.backgroundColor}`}
          >
            <Image src={skill.icon} alt={skill.name} width={35} height={35} />
            <p
              className={`font-p text-center ${
                skill.backgroundColor === "primary"
                  ? "text-primary-foreground"
                  : "text-secondary-foreground"
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
