import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import styles from '../styles/home.module.scss';

const About = () => {
  const speakers = [
    {
      id: 1,
      name: "Jane Doe",
      profession: "ADR Specialist & Legal Advocate",
      bio: "Jane has 15 years of experience in alternative dispute resolution, working with organizations to resolve conflicts effectively.",
    },
    {
      id: 2,
      name: "John Smith",
      profession: "AI & Data Protection Expert",
      bio: "John is a renowned expert in AI regulations and data privacy, helping companies secure their digital future.",
    },
    {
      id: 3,
      name: "Mary Johnson",
      profession: "Cybersecurity Advocate",
      bio: "Mary leads the charge in promoting cybersecurity awareness and building robust digital security systems.",
    },
    {
      id: 4,
      name: "Aisha Hassan",
      profession: "Mediator & Legal Consultant",
      bio: "Aisha specializes in mediation, advocating for peaceful resolutions to complex legal conflicts.",
    },
    {
      id: 5,
      name: "Brian Kimani",
      profession: "ADR Trainer & Author",
      bio: "Brian is an accomplished ADR trainer and author of several publications on conflict resolution strategies.",
    },
    {
      id: 6,
      name: "Lydia Njoroge",
      profession: "Tech Lawyer & Privacy Specialist",
      bio: "Lydia combines her legal expertise with technology, focusing on privacy law and ethical tech practices.",
    },
    {
      id: 7,
      name: "Tom Mwakio",
      profession: "Cybersecurity Analyst",
      bio: "Tom has extensive experience in securing systems and ensuring businesses are protected from cyber threats.",
    },
    {
      id: 8,
      name: "Sarah Oketch",
      profession: "ADR Policy Advocate",
      bio: "Sarah works with policymakers to shape effective ADR frameworks that benefit legal systems worldwide.",
    },
    {
      id: 9,
      name: "Diana Mutua",
      profession: "Data Privacy Consultant",
      bio: "Diana ensures compliance with global data protection laws, safeguarding sensitive information.",
    },
    {
      id: 10,
      name: "Okanda Stephen",
      profession: "Tech & Innovation Specialist",
      bio: "Okanda helps organizations leverage technology to drive growth while maintaining security and compliance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>WADR Gala Night - Speakers</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Meet the speakers of WADR Gala 2024 - Legal practitioners, ADR experts, and leaders in AI, Data Protection, and Cybersecurity."
        />
      </Helmet>
      <Layout>
        <main>
          <section className="bg-purple py-8">
            <div className={` ${styles.hero} `}>
              <div className="hero-body container p-5 md:p-24">
                <div className="border-l-8 border-yellow p-5 md:px-20 md:py-6">
                  <h1 className={`${styles.title} text-white`}>
                    Meet Our Esteemed Speakers
                  </h1>

                  <p
                    className={`${styles.text} text-white md:w-4/5 mt-2 md:mt-4`}
                  >
                    We are honored to feature leading voices in law, ADR,
                    cybersecurity, and AI who are reshaping industries and
                    inspiring change.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Speaker Cards */}
          <section className="container mx-auto py-12 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="max-w-sm overflow-hidden shadow-lg flex flex-col h-full bg-white"
                >
                   <div className="relative w-full h-50 overflow-hidden bg-gray-200">
                    <img
                      src={`https://i.pravatar.cc/300?img=${speaker.id}`} // Randomized image
                      alt={speaker.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Top Section */}
                  <div className="bg-gray-1  p-6 ">
                    <div className="text-sm">
                      <p className="text-xl font-bold">{speaker.name}</p>
                      <p className="opacity-80">{speaker.profession}</p>
                    </div> 
                  </div>

                  {/* Bottom Section */}
                  <div className="bg-white p-6 flex flex-col">
                    <p className="text-gray-700 mb-4 text-sm">{speaker.bio}</p>
                    <button className="mt-auto bg-purple text-white py-2 px-4 rounded hover:bg-purple-800 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default About;
