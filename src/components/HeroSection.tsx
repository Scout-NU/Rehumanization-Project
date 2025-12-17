import { pageTitle, subheading } from "../styles";

const HeroSection = ({
  section,
  title,
  subtitle,
  image,
}: {
  section?: string;
  title: string;
  subtitle: string;
  image: string;
}) => {
  return (
    <section
      className="flex flex-col justify-end items-start py-10 md:py-20 px-4 md:px-20 lg:px-30 h-[360px] md:h-[520px] bg-cover bg-center gap-2.5"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(6,10,31,0.6) 0%, rgba(6,10,31,0.4) 100%), url('${image}')`,
      }}
    >
      {section && (
        <p className={`${subheading} mb-2`}>{section?.toUpperCase()}</p>
      )}
      <h1 className={`text-white font-semibold ${pageTitle}`}>{title}</h1>
      <p className="text-white font-normal text-lg md:text-xl lg:text-2xl leading-[29px]">
        {subtitle}
      </p>
    </section>
  );
};

export default HeroSection;
