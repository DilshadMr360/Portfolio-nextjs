import Link from "next/link";

import { RiFacebookLine, RiGithubLine, RiLinkedinLine, RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center -mt-5 text-lg gap-x-5 sm:mt-0">
    <Link href={'https://www.facebook.com/mohamed.villa.5494?mibextid=ibOpuV'} className="transition-all duration-300 hover:text-accent"><RiFacebookLine /></Link>
    <Link href={'https://github.com/DilshadMr360'} className="transition-all duration-300 hover:text-accent"><RiGithubLine /></Link>
    <Link href={'https://www.linkedin.com/in/mohameddilshad123//'} className="transition-all duration-300 hover:text-accent"><RiLinkedinLine /></Link>
    <Link href={'https://wa.link/w0ivu5'} className="transition-all duration-300 hover:text-accent"><RiWhatsappLine /></Link>
  </div>;
};

export default Socials;
