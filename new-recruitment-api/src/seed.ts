import { AppDataSource } from "./data-source";
import { JobOffer } from "./entities/JobOffer";

export const seedJobOffers = async () => {
  const repo = AppDataSource.getRepository(JobOffer);

  const count = await repo.count();
  if (count > 0) return;

  const jobOffers = [
    {
      title: "Software Engineer",
      description: "Responsible for developing software applications.",
      salary_range: "$50,000 - $70,000",
      location: "New York",
    },
    {
      title: "Data Scientist",
      description:
        "Analyze large datasets to uncover insights and improve decision making.",
      salary_range: "$70,000 - $90,000",
      location: "San Francisco",
    },
    {
      title: "Product Manager",
      description: "Manage product development from inception to launch.",
      salary_range: "$90,000 - $120,000",
      location: "Chicago",
    },
    {
      title: "UX Designer",
      description:
        "Design user-friendly interfaces for web and mobile applications.",
      salary_range: "$60,000 - $80,000",
      location: "Los Angeles",
    },
    {
      title: "DevOps Engineer",
      description:
        "Automate and monitor operational processes within the IT infrastructure.",
      salary_range: "$80,000 - $100,000",
      location: "Austin",
    },
    {
      title: "Full Stack Developer",
      description:
        "Work on both front-end and back-end development of applications.",
      salary_range: "$70,000 - $95,000",
      location: "Seattle",
    },
    {
      title: "Data Analyst",
      description:
        "Transform data into actionable insights for decision makers.",
      salary_range: "$50,000 - $70,000",
      location: "Boston",
    },
    {
      title: "Product Designer",
      description:
        "Create product concepts and designs with a user-centric approach.",
      salary_range: "$60,000 - $85,000",
      location: "San Francisco",
    },
    {
      title: "Web Developer",
      description:
        "Develop and maintain websites using HTML, CSS, and JavaScript.",
      salary_range: "$55,000 - $75,000",
      location: "New York",
    },
    {
      title: "Mobile App Developer",
      description:
        "Design and develop mobile applications for iOS and Android.",
      salary_range: "$70,000 - $90,000",
      location: "San Diego",
    },
    {
      title: "Business Analyst",
      description:
        "Analyze business processes and provide recommendations for improvements.",
      salary_range: "$65,000 - $85,000",
      location: "Chicago",
    },
    {
      title: "QA Engineer",
      description:
        "Ensure the quality of software by conducting tests and reporting issues.",
      salary_range: "$60,000 - $80,000",
      location: "Austin",
    },
    {
      title: "Network Administrator",
      description: "Manage and monitor company network infrastructure.",
      salary_range: "$75,000 - $95,000",
      location: "Dallas",
    },
    {
      title: "Cloud Engineer",
      description:
        "Design, build, and maintain cloud-based systems and solutions.",
      salary_range: "$85,000 - $105,000",
      location: "Los Angeles",
    },
    {
      title: "Systems Architect",
      description:
        "Design and implement IT systems for enterprise environments.",
      salary_range: "$100,000 - $120,000",
      location: "Seattle",
    },
  ];

  await repo.save(jobOffers);
  console.log("Seeded JobOffer table.");
};
