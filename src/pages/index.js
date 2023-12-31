import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import developer from "../../public/images/profile/developer.jpg";

import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  return (
    <>
      <Head>
        <title>PORTFOLIO | Ritik Chhipa</title>
        <meta name="description" content="RITIK CHHIPA | Full-Stack Web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex items-center  text-dark dark:text-light dark:bg-dark w-full min-h-screen">
      <TransitionEffect />
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={developer}
                style={{ borderRadius :"30% 70% 70% 30% / 30% 30% 70% 70%"}}
                alt="Ritik chhipa Ai Generated Image"
                className="h-auto  w-[80%] lg:hidden md:inline-block md:w-full mb-4"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left xl:!text-5xl lg:!text-6xl lg:text-center md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/RitikchhipaResume.pdf" target={"_blank"} className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
              download={true}
              >
                
                   Resume
                  <LinkArrow className={"w-6 ml-1"} />
                
              </Link>
              <Link href="mailto:ritikchhipa9402@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                   Contact
              </Link>
            </div>
            </div>
            
          </div>
        </Layout>
        <HireMe/>
        <div className="fixed right-8 bottom-28 w-24 inline-block md:hidden">
        <Image src={lightBulb} alt="Ritik chhipa"></Image>
       </div>
      </main>
    </>
  );
}
