import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/mypic5.jpg'} width={650} height={450} alt="" className="translate-z-0 w-full h-full"/>
  </div>;
};

export default Avatar;
