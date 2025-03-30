'use client'

import {
  animations
} from '@formkit/drag-and-drop';
import {
  useDragAndDrop
} from '@formkit/drag-and-drop/react';
import OnlineCard from './OnlineCard';
import { Toggle } from './Toggle';
import { TypographieText } from './TypographieText';
import { Card } from './ui/card';
import { WhiterMultline } from './WhiterMultline';

export const GridDnd = () => {
  const [
    parent,
    values,
    _setValues,
    updateConfig] =
    useDragAndDrop<
      HTMLDivElement,
      string
    >([
      'intro',
      'about',
      'skills',
      'toggle',
      'online',
      'projects',
      'contact',
      'social',
      'experience',
      'education',
    ], {
      plugins: [
        animations()]
    });

  const renderCard = (value: string) => {
    switch (value) {
      case 'intro':
        return <IntroCard key={value} />
      case 'about':
        return <AboutCard key={value} />
      case 'skills':
        return <SkillsCard key={value} />
      case 'toggle':
        return <ToggleCard key={value} />
      case 'online':
        return <OnlineStatusCard key={value} />
      case 'projects':
        return <ProjectsCard key={value} />
      case 'contact':
        return <ContactCard key={value} />
      case 'social':
        return <SocialCard key={value} />
      case 'experience':
        return <ExperienceCard key={value} />
      case 'education':
        return <EducationCard key={value} />
      default:
        return null
    }
  }

  return (
    <section ref={parent} className="grid h-dvh w-fit max-w-[1370px] grid-cols-sm-layout grid-rows-sm-layout gap-2 transition-all grid-areas-sm-layout md:w-full md:grid-cols-md-layout md:grid-rows-md-layout md:gap-3 md:grid-areas-md-layout lg:grid-cols-lg-layout lg:grid-rows-lg-layout lg:gap-4 lg:grid-areas-lg-layout">
      {values.map((value) => (
        renderCard(value)
      ))}
    </section>
  )
}

const IntroCard = () => (
  <Card className="flex flex-col place-content-evenly bg-bunker-950 col-span-2">
    <TypographieText
      htmlTag="h1"
      text="Olá, eu sou o Gabriel Santos"
      className="text-3xl text-slate-100"
    />
    <WhiterMultline
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        voluptatum deleniti perspiciatis eveniet consectetur corporis,
        soluta ullam deserunt autem error hic recusandae optio laudantium
        exercitationem enim aspernatur quas inventore ipsa."
    />
  </Card>
)

const AboutCard = () => (
  <Card className="flex items-center justify-center bg-slate-500 col-span-1">
    2
  </Card>
)

const SkillsCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-red-500 col-span-1 row-span-2">
    3
  </Card>
)

const ToggleCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-lime-300 col-span-1">
    <Toggle />
  </Card>
)

const OnlineStatusCard = () => (
  <Card className="flex items-center justify-center rounded-xl p-0 col-span-1">
    <OnlineCard />
  </Card>
)

const ProjectsCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-purple-500 col-span-1 row-span-2">
    6
  </Card>
)

const ContactCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-white col-span-2">
    7
  </Card>
)

const SocialCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-orange-400 col-span-1">
    8
  </Card>
)

const ExperienceCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-teal-500 col-span-2">
    9
  </Card>
)

const EducationCard = () => (
  <Card className="flex items-center justify-center rounded-xl bg-blue-600 col-span-2">
    10
  </Card>
)