import React, { useState } from 'react';
import EtherealBeamsHero from './EtherealBeamsHero';
import { TimeAdvantageSection } from './TimeAdvantageSection';
import { OurEdgeSection } from './OurEdgeSection';
import { NavBar, type NavItem } from './NavBar';
import { DiagnosisModal } from './DiagnosisModal';
import { HookSection } from './HookSection';
import { BusinessModelSection } from './BusinessModelSection';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { TeamSection } from './ui/team-section';
import { LinkedinIcon, ClockIcon, StarIcon, UsersIcon, MailIcon, IconRoute, IconChartBar, LayoutDashboardIcon, ArrowRight, TentIcon } from './Icons';
import { ResourcesSection } from './ResourcesSection';
import Button from './Button';

interface ConsultancyPageProps {
    onGoHome: () => void;
    onSelectArticle: (articleId: string) => void;
    onGoToNextChapter: () => void;
    onGoToVentureStudio: () => void;
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

export const ConsultancyPage: React.FC<ConsultancyPageProps> = ({ onGoHome, onSelectArticle, onGoToNextChapter, onGoToVentureStudio }) => {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  const consultancyNavItems: NavItem[] = [
      { name: "Why Now", url: "#advantage", icon: ClockIcon },
      { name: "Edge", url: "#edge", icon: StarIcon },
      { name: "Approach", url: "#approach", icon: IconRoute },
      { name: "Success Stories", url: "#success-stories", icon: IconChartBar },
      { name: "Team", url: "#team", icon: UsersIcon },
      { name: "Resources", url: "#resources", icon: LayoutDashboardIcon },
      { name: "Venture Studio", onClick: onGoToVentureStudio, icon: TentIcon },
      { name: "Next Chapter", onClick: onGoToNextChapter, icon: MailIcon },
  ];

  return (
    <main className="bg-[#0a0a0a]">
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
        className="bg-[#0a0a0a] text-white scroll-mt-20"
      />
      <ResourcesSection id="resources" onSelectArticle={onSelectArticle} />
      {/* Contact CTA Section */}
      <section className="bg-[#0a0a0a] text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Next Chapter?</h2>
          <p className="mt-4 text-lg text-white/70">
            Let's discuss how our AI strategy and execution can transform your business.
          </p>
          <div className="mt-10">
            <Button
              onClick={onGoToNextChapter}
              size="lg"
              variant="default"
              className="font-semibold"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <DiagnosisModal isOpen={isDiagnosisOpen} onClose={() => setIsDiagnosisOpen(false)} />
    </main>
  );
};