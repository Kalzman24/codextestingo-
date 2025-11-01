import React, { useState, useCallback } from 'react';
import StaticHero from './StaticHero';
import { TimeAdvantageSection } from './TimeAdvantageSection';
import { OurEdgeSection } from './OurEdgeSection';
import { NavBar, type NavItem } from './NavBar';
import { DiagnosisModal } from './DiagnosisModal';
import { HookSection } from './HookSection';
import { BusinessModelSection } from './BusinessModelSection';
import { SuccessStoriesSection } from './SuccessStoriesSection';
import { StaticTeamSection } from './StaticTeamSection';
import { LinkedinIcon, ClockIcon, StarIcon, UsersIcon, MailIcon, IconRoute, IconChartBar, LayoutDashboardIcon, ArrowRight, TentIcon, HomeIcon } from './Icons';
import { StaticResourcesSection } from './StaticResourcesSection';
import Button from './Button';

const teamMembers = [
  {
    name: 'Khalil Mansour',
    designation: 'Founder',
    imageSrc: '/khalil.jpeg',
    socialLinks: [
      { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/khalilmansour/' },
    ],
  },
  {
    name: 'Kira Gutorski',
    designation: 'Partner & AI Strategist',
    imageSrc: '/kira.jpg',
    socialLinks: [
      { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/kira-maxima-gutorski-07570b2a2/' },
    ],
  },
];

const teamDescription = "A leadership collective with extensive experience in business transformation, AI strategy, and organizational acceleration. The team brings together expertise across digital innovation, human-centered technology, and strategic execution, blending operational rigor with creative foresight.\n\nOur approach represents the fusion of business transformation and artificial intelligence, uniting strategic consultancy, creative intelligence, and technological execution. We redefine how organizations integrate strategy with intelligent, autonomous performance.";

const consultancyNavItems: NavItem[] = [
    { name: "Home", url: "/#home", icon: HomeIcon },
    { name: "Why Now", url: "/#advantage", icon: ClockIcon },
    { name: "Our Edge", url: "/#edge", icon: StarIcon },
    { name: "Approach", url: "/#approach", icon: IconRoute },
    { name: "Success", url: "/#success-stories", icon: IconChartBar },
    { name: "Team", url: "/#team", icon: UsersIcon },
    { name: "Resources", url: "/#resources", icon: LayoutDashboardIcon },
    { name: "Venture Studio", url: "/venture-studio", icon: TentIcon },
    { name: "Contact", url: "/contact", icon: MailIcon },
];

export const ConsultancyPage = () => {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  const handleStartDiagnosis = useCallback(() => {
    setIsDiagnosisOpen(true);
  }, []);

  return (
    <main className="bg-[#0a0a0a]">
      <NavBar navItems={consultancyNavItems} onStartDiagnosis={handleStartDiagnosis} />
      <StaticHero id="home" onStartDiagnosis={handleStartDiagnosis} />
      <TimeAdvantageSection id="advantage" onStartDiagnosis={handleStartDiagnosis} />
      <OurEdgeSection id="edge" />
      <HookSection id="approach" onStartDiagnosis={handleStartDiagnosis} />
      <BusinessModelSection id="execution" />
      <SuccessStoriesSection id="success-stories" />
      <StaticTeamSection
        id="team"
        title="Team"
        description={teamDescription}
        members={teamMembers}
        className="bg-[#0a0a0a] text-white scroll-mt-20"
      />
      <StaticResourcesSection id="resources" />
      {/* Contact CTA Section */}
      <section className="bg-[#0a0a0a] text-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Next Chapter?</h2>
          <p className="mt-4 text-lg text-white/70">
            Let's discuss how our AI strategy and execution can transform your business.
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
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