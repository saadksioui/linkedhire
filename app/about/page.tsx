import { Award, Globe, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <div className="bg-blue-700 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-white mb-4">About LinkedHire</h1>
          <p className="text-blue-100 max-w-2xl">
            Connecting talented professionals with innovative companies to create meaningful career opportunities.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              At LinkedHire, we believe everyone deserves a fulfilling career. Our mission is to make
              the job search process more efficient, transparent, and successful for both job seekers
              and employers. We're committed to creating a platform that connects talent with
              opportunity in meaningful ways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              Icon: Users,
              title: "1k+ Users",
              description: "Active job seekers and employers using our platform",
            }, {
              Icon: Award,
              title: "98% Success",
              description: "Successful placement rate for active job seekers",
            }, {
              Icon: Globe,
              title: "Global Reach",
              description: "Operating in over 50 countries worldwide",
            }, {
              Icon: TrendingUp,
              title: "50K+ Jobs",
              description: "New job opportunities added monthly",
            }].map(({ Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-700 dark:text-blue-300" />
                </div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              The principles that guide everything we do at LinkedHire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Innovation', description: 'We constantly push boundaries to create better solutions for our users.' },
              { title: 'Transparency', description: 'We believe in open, honest communication with our community.' },
              { title: 'Diversity', description: 'We celebrate differences and promote inclusive hiring practices.' },
              { title: 'Excellence', description: 'We strive for the highest quality in everything we do.' },
            ].map((value) => (
              <div key={value.title} className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
