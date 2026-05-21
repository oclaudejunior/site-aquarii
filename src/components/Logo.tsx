import aquariiLogoVertical from "@/assets/aquarii-logo-vertical.png";

const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center leading-none ${className}`}>
    <img src={aquariiLogoVertical} alt="Aquarii" className="h-20 w-auto" />
  </span>
);

export default Logo;
