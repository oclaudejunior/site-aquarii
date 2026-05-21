import GoldText from "./GoldText";
import MeetingFormDialog from "./MeetingFormDialog";
import { ShinyButton } from "./ui/shiny-button";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface SectionCTAProps {
  title: string;
  goldWord?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  showMeetingForm?: boolean;
  microCopy?: string;
  meetingButtonText?: string;
}

const SectionCTA = ({ title, goldWord, text, buttonText, buttonLink, showMeetingForm = true, microCopy, meetingButtonText }: SectionCTAProps) => (
  <section className="py-24 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

    <AnimatedSection>
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="relative p-10 rounded-2xl border border-primary/20 bg-primary/5 space-y-6">
          <h2 className="font-bold text-3xl md:text-4xl text-foreground whitespace-pre-line">
            {goldWord ? (
              <>
                {title.split(goldWord)[0]}
                <GoldText>{goldWord}</GoldText>
                {title.split(goldWord)[1]}
              </>
            ) : title}
          </h2>
          {text && <p className="text-muted-foreground leading-relaxed">{text}</p>}
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            {showMeetingForm && (
              <MeetingFormDialog
                trigger={<ShinyButton className="shiny-cta-light">{meetingButtonText || "Solicitar Reunião"}</ShinyButton>}
              />
            )}
            {buttonLink && buttonText && (
              <Link to={buttonLink}>
                <ShinyButton className="shiny-cta-light">{buttonText}</ShinyButton>
              </Link>
            )}
          </div>
          {microCopy && <p className="text-sm text-muted-foreground italic">{microCopy}</p>}
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default SectionCTA;
