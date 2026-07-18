const BASE = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 1,
    category: "DATA ANALYTICS",

    title: "CPaaS Performance Dashboard",

    description:
      "Analyzed multi-channel CPaaS performance across WhatsApp, SMS, Email, and Call services to identify revenue concentration, channel performance, and customer contribution patterns.",

    technologies: [
      "SQL",
      "BigQuery",
      "Python",
      "Tableau",
    ],

    slides: [
      `${BASE}Projects/cpaas-1.png`,
      `${BASE}Projects/cpaas-2.png`,
      `${BASE}Projects/cpaas-3.png`,
      `${BASE}Projects/cpaas-4.png`,
      `${BASE}Projects/cpaas-5.png`,
      `${BASE}Projects/cpaas-6.png`,
      `${BASE}Projects/cpaas-7.png`,
      `${BASE}Projects/cpaas-8.png`,
      `${BASE}Projects/cpaas-9.png`,
      `${BASE}Projects/cpaas-10.png`,
      `${BASE}Projects/cpaas-11.png`,
      `${BASE}Projects/cpaas-12.png`,
      `${BASE}Projects/cpaas-13.png`,
      `${BASE}Projects/cpaas-14.png`,
      `${BASE}Projects/cpaas-16.png`,
    ],
  },

  {
    id: 2,

    category: "MACHINE LEARNING",

    title: "Customer Segmentation Analysis",

    description:
      "Developed customer segmentation models using clustering techniques to identify customer behavior patterns and support data-driven business strategies.",

    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
    ],

    slides: [
      `${BASE}projects/customer/slide1.png`,
      `${BASE}projects/customer/slide2.png`,
      `${BASE}projects/customer/slide3.png`,
      `${BASE}projects/customer/slide4.png`,
    ],
  },

  {
    id: 3,

    category: "BUSINESS & TECHNOLOGY STRATEGY",

    title: "Indonesian Film Industry GTM Strategy",

    description:
      "Developed a go-to-market strategy for GPU infrastructure services by analyzing industry growth, VFX production challenges, market opportunities, and potential early adopters.",

    technologies: [
      "Market Research",
      "GPU Cloud",
      "Data Analysis",
      "GTM Strategy",
    ],

    slides: [
      `${BASE}Projects/GTM Film Industry Tech-1.png`,
      `${BASE}Projects/GTM Film Industry Tech-2.png`,
      `${BASE}Projects/GTM Film Industry Tech-3.png`,
      `${BASE}Projects/GTM Film Industry Tech-4.png`,
      `${BASE}Projects/GTM Film Industry Tech-5.png`,
      `${BASE}Projects/GTM Film Industry Tech-6.png`,
      `${BASE}Projects/GTM Film Industry Tech-7.png`,
      `${BASE}Projects/GTM Film Industry Tech-8.png`,
    ],
  },
];