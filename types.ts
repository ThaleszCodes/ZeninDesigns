
export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
