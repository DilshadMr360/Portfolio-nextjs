import Link from "next/link";

import { RiFacebookLine, RiGithubLine, RiLinkedinLine, RiWhatsappLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.facebook.com/mohamed.villa.5494?mibextid=ibOpuV'} className="hover:text-accent transition-all duration-300"><RiFacebookLine /></Link>
    <Link href={'https://github.com/DilshadMr360'} className="hover:text-accent transition-all duration-300"><RiGithubLine /></Link>
    <Link href={'https://www.linkedin.com/in/mohameddilshad123//'} className="hover:text-accent transition-all duration-300"><RiLinkedinLine /></Link>
    <Link href={'https://wa.link/w0ivu5'} className="hover:text-accent transition-all duration-300"><RiWhatsappLine /></Link>
  </div>;
};

export default Socials;
