"use client";

import { GitHubSVG, LinkedInSVG } from "@/features/Footer/assets";
import Image from "next/image";
export default function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/maryam-rashid-a6b90b1a3/";
  const githubUrl = "https://github.com/maryamrashid6";

  return (
    <div className="flex flex-row gap-4 justify-center md:justify-start py-2 px-4 sticky bottom-0 bg-background">
      <Image
        src={GitHubSVG}
        alt="GitHub"
        width={45}
        height={45}
        className="hover:scale-110 transition-all duration-300"
        onClick={() => window.open(githubUrl, "_blank")}
      />

      <Image
        src={LinkedInSVG}
        alt="LinkedIn"
        width={90}
        height={90}
        className="hover:scale-110 transition-all duration-300"
        onClick={() => window.open(linkedInUrl, "_blank")}
      />
    </div>
  );
}
