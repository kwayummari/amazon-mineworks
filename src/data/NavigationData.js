// Single source of truth for primary site navigation.
export const navItems = [
  {
    title: "About Us",
    link: "/company-profile",
    submenu: [
      { title: "Company Profile", link: "/company-profile" },
      { title: "Vision & Values", link: "/vision-values" },
      { title: "Management Team", link: "/management-team" },
    ],
  },
  {
    title: "Services",
    link: "/services",
    megaColumns: [
      {
        heading: "Drilling Services",
        items: [
          { title: "Exploration Drilling", link: "/exploration-drilling" },
          { title: "Grade Control Drilling", link: "/grade-control-drilling" },
          { title: "Blast Hole Drilling", link: "/blast-hole-drilling" },
          { title: "Underground Drilling", link: "/underground-drilling" },
          { title: "Geothermal Drilling", link: "/geothermal-drilling" },
          { title: "Water Boreholes Drilling", link: "/water-borehole-drilling" },
        ],
      },
      {
        heading: "Mining Services",
        items: [
          { title: "Construction Works", link: "/construction-works" },
          { title: "Mine Earthworks", link: "/mine-earthworks" },
          { title: "Load and Haul", link: "/load-and-haul" },
          { title: "Building Works", link: "/building-works" },
          { title: "Survey Services", link: "/survey-services" },
        ],
      },
    ],
  },
  {
    title: "Safety/OHSEQ",
    link: "/safety",
    submenu: [
      { title: "Safety Overview", link: "/safety" },
      { title: "Occupational Health", link: "/health" },
      { title: "Environment", link: "/environment" },
      { title: "Quality Management", link: "/quality-management" },
    ],
  },
  {
    title: "Operations",
    link: "/operations",
  },
  {
    title: "Investors",
    link: "/investors",
    submenu: [
      { title: "Announcements", link: "/announcements" },
      { title: "Presentations", link: "/investors?tab=presentations" },
      { title: "Corporate Governance", link: "/investors?tab=governance" },
      { title: "CSR", link: "/investors?tab=csr" },
      { title: "Certifications", link: "/investors?tab=certifications" },
    ],
  },
  {
    title: "Opportunities",
    link: "/careers",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];
