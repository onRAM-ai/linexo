import linexoIcon from "@/assets/linexo-icon-logo.png";

const BrandName = ({ className = "" }: { className?: string }) => (
  <img src={linexoIcon} alt="LinExo" className={`h-[30px] w-auto ${className}`} />
);

export default BrandName;