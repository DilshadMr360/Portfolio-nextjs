import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden h-full xl:flex xl:items-center xl:justify-center xl:max-w-none">
      <Image src={'/Dil1.JPG'} width={400} height={200} alt="" className="translate-z-0" />
    </div>
  );

};

export default Avatar;
