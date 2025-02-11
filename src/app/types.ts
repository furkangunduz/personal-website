export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  description: string;
  services: string;
  client: string;
  year: string;
  features: {
    title: string;
    description: string;
  }[];
  summary: string;
  images: string[];
}

export interface Experience {
  title: string;
  items: ExperienceItem[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  remote: boolean;
  achievements: string[];
}

export interface Education {
  title: string;
  items: EducationItem[];
}

export interface EducationItem {
  location: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface PageData {
  profile: {
    name: string;
    title: string;
    location: string;
    image: string;
    availability: {
      status: boolean;
      text: string;
    };
    email: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  buttons: {
    booking: {
      text: string;
      href: string;
    };
    cv: {
      text: string;
      href: string;
    };
  };
  about: {
    title: string;
    content: string[];
  };
  stack: {
    title: string;
    items: {
      icon: string;
      name: string;
    }[];
  };
  projects: {
    title: string;
    items: ProjectData[];
  };
  experience: Experience;
  education: Education;
}
