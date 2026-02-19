import linexoIcon from "@/assets/linexo-icon-logo.png";

const BrandName = ({ className = "" }: { className?: string }) => (
  <img src={linexoIcon} alt="LinExo" className={`h-10 w-auto ${className}`} />
);

export default BrandName;