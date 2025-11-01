

import React from 'react';
import { cn } from "../lib/utils";

type SocialLink = {
  icon: React.ElementType;
  href: string;
}

type TeamMember = {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

type StaticTeamSectionProps = {
  id: string;
  title: string;
  description: string;
  members: TeamMember[];
  className?: string;
};

export const StaticTeamSection = ({
  id,
  title,
  description,
  members,
  className,
}: StaticTeamSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32 min-h-screen flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
        {/* Header Section */}
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:items-start md:text-left lg:gap-8">
          <div className="grid gap-2 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              {title}
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative flex flex-col items-center justify-end overflow-hidden rounded-xl bg-muted p-6 text-center shadow-lg"
            >
              <div
                className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-primary bg-background/20"
              >
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="relative z-10 mt-4 text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="relative z-10 text-sm text-muted-foreground">
                {member.designation}
              </p>

              {member.socialLinks && member.socialLinks.length > 0 && (
                <div className="relative z-10 mt-4 flex gap-3">
                  {member.socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};