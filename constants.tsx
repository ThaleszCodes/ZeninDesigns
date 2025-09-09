import React from 'react';
import type { NavLink, Project, Service } from './types';

// Icons for services
const BannerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M4 4h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);
const AvatarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const BadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const KitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Design de Servidor 1',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/oTfs3T4.png'],
  },
  {
    id: 2,
    title: 'Design de Servidor 2',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/2mP8OdW.png'],
  },
  {
    id: 3,
    title: 'Design de Servidor 3',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/CiPOzyZ.png'],
  },
  {
    id: 4,
    title: 'Design de Servidor 4',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/pMsQz59.png'],
  },
  {
    id: 5,
    title: 'Design de Servidor 5',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/n75cFKI.png'],
  },
  {
    id: 6,
    title: 'Design de Servidor 6',
    description: 'Design para comunidade online.',
    images: ['https://i.imgur.com/TcJp81r.png'],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Banners de Servidor',
    description: 'Banners estáticos ou animados para dar as boas-vindas aos seus membros e destacar os canais mais importantes.',
    icon: <BannerIcon />,
  },
  {
    title: 'Avatares Personalizados',
    description: 'Avatares únicos para você, seus bots ou para membros VIP da sua comunidade, refletindo seu estilo.',
    icon: <AvatarIcon />,
  },
  {
    title: 'Emblemas de Cargo',
    description: 'Emblemas criativos e coesos para diferenciar os cargos e recompensar a lealdade dos membros.',
    icon: <BadgeIcon />,
  },
  {
    title: 'Kits de Identidade Visual',
    description: 'Um pacote completo que inclui banners, avatares e emblemas, garantindo uma identidade visual consistente para o seu servidor.',
    icon: <KitIcon />,
  },
];