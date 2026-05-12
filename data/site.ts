import {
  Building2,
  Factory,
  Flame,
  Fuel,
  Handshake,
  HardHat,
  HeartPulse,
  Hotel,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  Users,
  Wrench
} from "lucide-react";

export const siteConfig = {
  name: "AYAN ALTAQI Trading & Contracting",
  shortName: "AYAN ALTAQI",
  url: "https://ayan-altaqi.com",
  email: "info@ayan-altaqi.com",
  phone: "+974 1234 5678",
  location: "Doha, Qatar",
  tagline: "Reliable | Professional | Committed",
  description:
    "Premium trading and contracting solutions for industrial, infrastructure, governmental, and enterprise projects across the Gulf region.",
  logo:
    "https://lh3.googleusercontent.com/aida/ADBb0uiJ8xUyF8qSxtEL1AzcLqPBPJm6qlym-uFv2npiIOunON-2k-6wZWCA9h4Nh8_49NEAPOtojLx9qBl6VPPu0jhajkLsDVyRq4yMXdcAGBTWxv011TNSmnNXkFwFzzw4MXwxptESVXBGu8w4DojdJI1x6uep_9EXES3P9G2AUJvlXx63xRmf5koeSNYXK_loVO9GuDeI0h8vXNgzDHa1TD-aUeaPTaVJdivVTUP-YZWOJrd6cvUZmeD1l3mjsQN6PghkpUsAHx4uiUk"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=85",
  about:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85",
  team:
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=85",
  cta:
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=2400&q=85",
  services:
    "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=2200&q=85",
  projects:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=85",
  careers:
    "https://images.unsplash.com/photo-1581091870622-1e7e4e7b877b?auto=format&fit=crop&w=2200&q=85",
  contact:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=85"
};

export const services = [
  {
    slug: "mechanical-civil-fire-fighting",
    title: "Mechanical, Civil & Fire Fighting",
    description: "Comprehensive engineering and construction services for industrial infrastructure.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    details:
      "Integrated mechanical works, civil execution, fire protection systems, site coordination, testing, commissioning, and handover support for demanding industrial environments."
  },
  {
    slug: "human-resource-support",
    title: "Human Resource Support Services",
    description: "Providing skilled and unskilled manpower tailored to meet your project demands.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
    details:
      "Qualified technical manpower, workforce planning, mobilization support, project staffing, and compliance-led personnel management for enterprise projects."
  },
  {
    slug: "vehicle-equipment-rental",
    title: "Vehicle & Equipment Rental",
    description: "A wide fleet of industrial vehicles and heavy machinery for diverse operations.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&q=85",
    details:
      "Reliable access to project vehicles, lifting equipment, earthmoving machinery, logistics assets, operators, and maintenance-backed rental programs."
  },
  {
    slug: "scaffolding-access",
    title: "Scaffolding & Access Solutions",
    description: "Certified scaffolding systems ensuring safety and accessibility on-site.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85",
    details:
      "Design, erection, inspection, modification, and dismantling of certified scaffolding and access systems for complex site conditions."
  },
  {
    slug: "sand-blasting-painting",
    title: "Sand Blasting & Painting",
    description: "Expert surface preparation and coating services for durability and protection.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1200&q=85",
    details:
      "Industrial blasting, coating, corrosion protection, repainting, quality control, and finish systems for steel, tanks, structures, and equipment."
  },
  {
    slug: "material-trading",
    title: "Material Trading",
    description: "Supply of high-grade industrial materials sourced from a global network.",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
    details:
      "Procurement and delivery of certified construction, MEP, civil, safety, and industrial materials through a controlled supplier network."
  },
  {
    slug: "industrial-maintenance",
    title: "Industrial Maintenance Services",
    description: "Dedicated maintenance solutions to ensure operational longevity and efficiency.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=85",
    details:
      "Preventive, corrective, and shutdown maintenance programs for plants, facilities, mechanical systems, utilities, and mission-critical operations."
  },
  {
    slug: "procurement-supply-chain",
    title: "Procurement & Supply Chain Solutions",
    description: "Streamlined procurement processes and supply chain management for complex projects.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    details:
      "Vendor management, sourcing, expediting, logistics coordination, document control, and supply visibility for time-sensitive project delivery."
  }
];

export const industries = [
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description: "Reliable support for upstream, downstream, and energy infrastructure operations.",
    icon: Fuel,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Bf4X2Uk3QHgvycituzsilLsmNpRkebyUzBkYg_l-3EnpZ8RVYTgNy5JwHqH_b9TdOQK0hXM9Emst8dXn5R1aXtNXmZ62EQXF4BqWU_2jW4oIrYMRlSOkzaeopw7rZUkCXbcyIuvB0IxmwH1X1mkoBF17ZHZzm02TfncKwIch1RnY2fUS3ZQMM6fFH6JZVBVSIwXnRY4crMoZpcSzjk8x82tiFKOOW-prjmmxqbVQXJY1jNIIblnhbsRCmgZcjrTcd1dreSAyZnS6"
  },
  {
    slug: "petrochemicals",
    title: "Petrochemicals",
    description: "Specialized contracting, maintenance, and procurement for process facilities.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "infrastructure-civil",
    title: "Infrastructure & Civil",
    description: "Construction, access, material, and resource support for built environments.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Dependable facility, procurement, and contracting support for health assets.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description: "Operational project support for hotels, venues, and premium destinations.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
  },
  {
    slug: "it-telecom",
    title: "IT & Telecom",
    description: "Civil, access, logistics, and deployment support for connected infrastructure.",
    icon: RadioTower,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
  }
];

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 12, suffix: "", label: "Industries Served" }
];

export const values = [
  { title: "Safety First", description: "Every project is planned around robust safety systems and disciplined site execution.", icon: ShieldCheck },
  { title: "Precision Delivery", description: "Integrated teams, transparent reporting, and reliable procurement keep delivery under control.", icon: Sparkles },
  { title: "Long-Term Trust", description: "We build operational relationships that continue beyond a single project handover.", icon: Handshake }
];

export const projects = [
  {
    slug: "coastal-energy-maintenance",
    title: "Coastal Energy Maintenance Program",
    category: "Oil & Gas",
    location: "Ras Laffan",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1400&q=85",
    summary: "Shutdown maintenance, access systems, manpower, and material supply for an operating energy facility.",
    scope: ["Industrial maintenance", "Scaffolding access", "Skilled manpower", "Certified materials"]
  },
  {
    slug: "metro-civil-works",
    title: "Metro Civil Works Support",
    category: "Infrastructure",
    location: "Doha",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85",
    summary: "Civil execution support, equipment rental, logistics, and procurement for a transport infrastructure package.",
    scope: ["Civil works", "Equipment rental", "Project logistics", "Procurement"]
  },
  {
    slug: "petrochemical-coating-upgrade",
    title: "Petrochemical Coating Upgrade",
    category: "Petrochemicals",
    location: "Mesaieed",
    year: "2024",
    image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?auto=format&fit=crop&w=1400&q=85",
    summary: "Surface preparation, blasting, coating, and QA documentation for high-corrosion industrial assets.",
    scope: ["Sand blasting", "Protective coating", "QA documentation", "Site supervision"]
  },
  {
    slug: "hospital-expansion-logistics",
    title: "Hospital Expansion Logistics",
    category: "Healthcare",
    location: "Doha",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85",
    summary: "Supply chain, vehicle support, and controlled manpower services for a live healthcare expansion.",
    scope: ["Supply chain", "Vehicle rental", "Manpower", "Site coordination"]
  },
  {
    slug: "luxury-hotel-fitout-support",
    title: "Luxury Hotel Fit-Out Support",
    category: "Hospitality",
    location: "West Bay",
    year: "2023",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
    summary: "Material trading, finishing support, access solutions, and delivery coordination for a premium hotel.",
    scope: ["Material trading", "Access solutions", "Finishing support", "Delivery coordination"]
  },
  {
    slug: "telecom-tower-rollout",
    title: "Telecom Tower Rollout",
    category: "IT & Telecom",
    location: "Qatar",
    year: "2022",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    summary: "Civil enabling works, equipment, and resource support for distributed telecom infrastructure.",
    scope: ["Civil enabling", "Equipment rental", "Resource support", "Logistics"]
  }
];

export const careers = [
  { title: "Project Engineer", type: "Full Time", location: "Doha", department: "Operations" },
  { title: "Procurement Coordinator", type: "Full Time", location: "Doha", department: "Supply Chain" },
  { title: "HSE Officer", type: "Contract", location: "Industrial Area", department: "Safety" },
  { title: "Scaffolding Supervisor", type: "Full Time", location: "Project Sites", department: "Access Solutions" }
];

export const contactMethods = [
  { label: "Office", value: siteConfig.location, icon: MapPin },
  { label: "Email", value: siteConfig.email, icon: Mail },
  { label: "Phone", value: siteConfig.phone, icon: Phone }
];
