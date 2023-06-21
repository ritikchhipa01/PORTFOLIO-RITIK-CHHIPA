import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import Image from "next/image";
import Skills from "../components/Skills"
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
    return (
        <>
            <Head>
                <title>Ritik Chhipa | About Page</title>
                <meta name="description" content="My Description" />
            </Head>

            <main className="flex flex-col w-full items-center justify-center dark:text-light">
            <TransitionEffect/>
                <Layout className="pt-16">
                    <AnimatedText text={"Passion Fuels Purpose! "} className={"mb-16 lg:!text-7xl md:!text-6xl xs:!text-4xl sm:mb-8"} />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                            <h2 className="mb-4 text-lg font-bold upper text-dark/75 dark:text-light">
                                Biography
                            </h2>
                            <p className="font-medium my-4 dark:text-light">
                                Hi, I&apos;m Ritik chhipa, a web developer and UI/UX designer with a
                                passion for creating beautiful, functional, and user-centered
                                digital experiences. With 6 months of experience in the field. I
                                am always looking for new and innovative ways to bring my
                                client&apos;s visions to life.
                            </p>
                            <p className="font-medium my-4 dark:text-light">
                                I believe that design is about more than just making things look
                                pretty - it&apos;s about solving problems and creating intuitive,
                                enjoyable experiences for users.
                            </p>
                            <p className="font-medium my-4 dark:text-light">
                                Whether I&apos;m working on a website, or other digital
                                product, I bring my commitment to design excellence and
                                user-centered thinking to every project I work on. I look
                                forward to the opportunity to bring my skills and passion to
                                your next project.
                            </p>
                        </div>
                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:col-span-8 md:order-1 md:w-full">
                             <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light "/>
                            <Image src={profilePic} alt="Ritik chhipa" className="w-full h-auto rounded-2xl" 
                                priority
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />
                        </div>
                    </div>

                    <Skills/>
                    <Experience/>
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
