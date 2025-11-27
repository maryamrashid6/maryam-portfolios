import Image from "next/image";
import { AboutMeImg } from "./assets";
export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-10" id="about-me">
      <div className="md:w-1/3 w-full">
        <Image src={AboutMeImg} alt="About Me" className="m-auto" />
      </div>
      <div className="md:w-2/3 w-full m-auto p-4 flex flex-col gap-4">
        <h1>
          About <b>Me</b>
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            I'm a passionate front-end developer who loves turning ideas into
            interactive digital experiences.
          </p>
          <p>
            My journey began in 2021, when I left my hometown to pursue a career
            in the software industry. Along the way, I discovered my passion for
            front-end development — the place where design meets logic.
          </p>
          <p>
            Currently, I'm working in the telecom sector, developing products
            around eSIMs and digital connectivity. Over time, I’ve moved beyond
            just coding screens — I now contribute to feature planning, building
            complete product flows, analyzing edge cases, and ensuring seamless
            user experiences.
          </p>
          <p>
            When I'm not in developer mode, you’ll probably find me spending
            time with family, hanging out with friends, or experimenting with
            new recipes in the kitchen. For me, balance matters as much as
            beautiful code.
          </p>
        </div>
      </div>
    </div>
  );
}
