import { Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Tooltip, Typography } from "@material-tailwind/react"
import Projects from '../../data/projects.json';
import Certifications from '../../data/certifications.json';
import { Asterisk } from 'react-bootstrap-icons';
import SppbeDigital from '../../assets/Sppbe_Digital.png'
import KelasPintar from '../../assets/Kelas_Pintar.png'
import Ajari from '../../assets/Ajari.png'
import NWP from '../../assets/NWP.png'

export const LandingPage = () => {

    const images = [SppbeDigital, Ajari, KelasPintar, NWP];
    const featuredCard = Projects.map((it, index) => (
        <Card className="w-full shadow-lg">
            <CardHeader floated={false} >
                <img
                    src={images[index]}
                    alt="ui/ux review check"
                />
                {/* <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " /> */}
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex flex-col">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {it.title}
                    </Typography>
                    <span className="flex flex-row gap-1">
                        <p className="font-light">as</p>
                        <p className="font-bold">{it.as}</p>
                    </span>
                </div>
                {/* <Typography color="gray">
                    {it.description}
                </Typography> */}
                <div className="group mt-0 inline-flex flex-wrap items-center gap-3">
                    {it.technologies.map((tech) => (
                        <Tooltip content={tech.tooltip}>
                            <span className="cursor-pointer text-sm rounded-full border border-blue-500/5 bg-blue-500/5 px-2 py-1 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                {tech.name}
                            </span>
                        </Tooltip>
                    ))}
                </div>
            </CardBody>
        </Card>
    ));

    const certificationsCard = Certifications.map((it) => (
        <div className="flex flex-col p-5 bg-white shadow-md rounded-md">
            <div className="flex justify-between">
                <p className="font-light">{it.issuer}</p>
                <p className="font-light">{it.creds_id}</p>
            </div>
            <p className="font-bold text-lg my-1">{it.title}</p>
            <div className="flex items-center justify-between">
                <p className="text-sm">{it.expired}</p>
                <a target={"_blank"} href={it.link} className="border border-black px-2">Show</a>
            </div>
        </div>
    ))

    return (
        <>
            <div className="mb-16 lg:px-56">
                <p className="text-center text-5xl font-light mb-8">Daffa Nabil Hartono (he/him)</p>
                <div className="flex items-center">
                    <hr className="w-4 border border-black mr-2" />
                    <p className="text-xl font-light">Daffa's Description</p>
                </div>
                <p className="font-bold">Software Engineer, Video Game Designer, 3D Generalist</p>
                <p>As a software engineer, I am passionate about developing innovative solutions that solve complex problems. I thrive on challenging projects that push the boundaries of what's possible, and I am always eager to learn new technologies and programming languages. My career in software engineering began with a deep interest in computer science and programming, and I have since honed my skills through a combination of education and hands-on experience. Whether I'm working on a web application, a mobile app, or a complex system architecture, I approach every project with a focus on creating clean, efficient, and scalable code.
                    My approach to software engineering is deeply rooted in collaboration and communication. I believe that effective communication is key to successful project management and development, and I strive to maintain clear lines of communication with clients and stakeholders throughout the development process. I am also committed to continuous improvement, and always looking for ways to optimize code, streamline processes, and improve overall efficiency.
                    Outside of work, I enjoy exploring new technologies and experimenting with new programming languages. I am also an avid reader, and I enjoy learning about a wide range of topics from philosophy and psychology to economics and history. I am passionate about giving back to my community and have been involved in several volunteer projects focused on teaching coding to underprivileged youth. I believe that technology has the power to transform lives, and I am committed to using my skills as a software engineer to create positive change in the world.
                </p>

                <p className="font-bold mt-5">Experience</p>
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="font-light text-sm">December 2021 – Present / Bekasi Barat, Jawa Barat</p>
                        <div className="flex items-center h-full">
                            <Asterisk size={10} className="mb-1 mr-1" />
                            <p>PT. Adyatma Cendekia Sinergi Abadi / Full-Stack Engineer</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-light text-sm">March 2019 – Present / Indonesia - Singapore</p>
                        <div className="flex items-center h-full">
                            <Asterisk size={10} className="mb-1 mr-1" />
                            <p>Freelancer / Software Engineering</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-light text-sm">February 2021 – December 2021 / Bekasi Barat, Jawa Barat</p>
                        <div className="flex items-center h-full">
                            <Asterisk size={10} className="mb-1 mr-1" />
                            <p>PT. Bangun Kreatif Abadi / Full-Stack Engineer</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-light text-sm">January 2020 – August 2021 / Pakuwon Centre, Surabaya</p>
                        <div className="flex items-center h-full">
                            <Asterisk size={10} className="mb-1 mr-1" />
                            <p>PT. Sun Artha Putra Mandiri / Freelance - Full-Stack Engineer</p>
                        </div>
                    </div>
                </div>
                <p className="font-bold mt-5">Teams/Organization</p>
                <div>
                    <p className="font-light text-sm">January 2019 – Present / Indonesia</p>
                    <div className="flex items-center h-full">
                        <Asterisk size={10} className="mb-1 mr-1" />
                        <p>Artisan / Head of Researches</p>
                    </div>
                </div>
                <p className="text-center font-light text-5xl mt-5 mb-5">Projects</p>
                <p className="font-bold mb-2">Featured Projects</p>
                <div className="grid md:grid-cols-4 justify-between gap-5">
                    {featuredCard}
                </div>
                <p className="font-bold mb-2 mt-5">Projects</p>
                <p className="mb-2">CDI Billing</p>
                <p className="mb-2">CDI Open Finance</p>
                <p className="mb-2">ATLAS Indonesia</p>

                <p className="font-bold mb-2 mt-5">Licenses & Certifications</p>
                <div className="gap-4 grid xl:grid-cols-3">
                    {certificationsCard}
                </div>
            </div>
        </>
    )
}