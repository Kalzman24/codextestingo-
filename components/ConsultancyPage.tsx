import React, { useState } from 'react';
import EtherealBeamsHero from './EtherealBeamsHero';
import { TimeAdvantageSection } from './TimeAdvantageSection';
import { OurEdgeSection } from './OurEdgeSection';
import { NavBar, type NavItem } from './NavBar';
import { DiagnosisModal } from './DiagnosisModal';
import { ContactSection } from './ContactSection';
import { HookSection } from './HookSection';
import { BusinessModelSection } from './BusinessModelSection';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { TeamSection } from './ui/team-section';
import { LinkedinIcon, ClockIcon, StarIcon, UsersIcon, MailIcon, IconRoute, IconChartBar } from './Icons';

interface ConsultancyPageProps {
    onGoHome: () => void;
}

const teamMembers = [
  {
    name: 'Khalil Mansour',
    designation: 'Founder',
    imageSrc: '/kira.jpg',
    socialLinks: [
      { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/khalilmansour/' },
    ],
  },
  {
    name: 'Kira Gutorski',
    designation: 'Partner & AI Strategist',
    imageSrc: '/khalil.jpeg',
    socialLinks: [
      { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/kira-maxima-gutorski-07570b2a2/' },
    ],
  },
];

const teamDescription = "A leadership collective with extensive experience in business transformation, AI strategy, and organizational acceleration. The team brings together expertise across digital innovation, human-centered technology, and strategic execution, blending operational rigor with creative foresight.\n\nOur approach represents the fusion of business transformation and artificial intelligence, uniting strategic consultancy, creative intelligence, and technological execution. We redefine how organizations integrate strategy with intelligent, autonomous performance.";

const consultancyNavItems: NavItem[] = [
    { name: "Why Now", url: "#advantage", icon: ClockIcon },
    { name: "Edge", url: "#edge", icon: StarIcon },
    { name: "Approach", url: "#approach", icon: IconRoute },
    { name: "Success Stories", url: "#success-stories", icon: IconChartBar },
    { name: "Team", url: "#team", icon: UsersIcon },
    { name: "New Chapter", url: "#contact", icon: MailIcon },
];

export const ConsultancyPage: React.FC<ConsultancyPageProps> = ({ onGoHome }) => {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  return (
    <main className="bg-[#0a0a0a] h-screen overflow-y-scroll snap-y snap-mandatory">
      <NavBar navItems={consultancyNavItems} onStartDiagnosis={() => setIsDiagnosisOpen(true)} onGoHome={onGoHome} />
      <EtherealBeamsHero id="home" onStartDiagnosis={() => setIsDiagnosisOpen(true)} />
      <TimeAdvantageSection id="advantage" onStartDiagnosis={() => setIsDiagnosisOpen(true)} />
      <OurEdgeSection id="edge" />
      <HookSection id="approach" onStartDiagnosis={() => setIsDiagnosisOpen(true)} />
      <BusinessModelSection id="execution" />
      <SuccessStoriesSection id="success-stories" />
      <TeamSection
        id="team"
        title="Team"
        description={teamDescription}
        members={teamMembers}
        className="bg-[#0a0a0a] text-white snap-start scroll-mt-20"
      />
      <ContactSection id="contact" />
      <DiagnosisModal isOpen={isDiagnosisOpen} onClose={() => setIsDiagnosisOpen(false)} />
    </main>
  );
};