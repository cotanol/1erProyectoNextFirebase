import { Users, Award, Globe, BookOpen } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "50,000+" },
    { icon: Award, label: "Course Completion Rate", value: "94%" },
    { icon: Globe, label: "Countries Reached", value: "150+" },
    { icon: BookOpen, label: "Available Courses", value: "1,000+" },
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      bio: "Former Stanford professor with 15+ years in EdTech",
    },
    {
      name: "Michael Chang",
      role: "Head of Education",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      bio: "Education innovator with focus on interactive learning",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Technology",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      bio: "Tech leader specializing in educational platforms",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Education Background"
            className="w-full h-full object-cover"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-700/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Transforming Lives Through Education
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're on a mission to democratize education and empower learners
              worldwide. Our platform brings together passionate educators and
              curious minds, creating a vibrant community where knowledge knows
              no bounds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Join Our Mission
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-sm transition-colors">
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform"
              >
                <Icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {value}
                </div>
                <div className="text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 mb-6">
                Founded in 2020, EduTech emerged from a simple yet powerful
                idea: education should be accessible to everyone, everywhere.
                What started as a small collection of online courses has grown
                into a global learning platform, serving students from over 150
                countries.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to quality education has never wavered. We work
                with industry experts and leading academics to create courses
                that are not just informative, but transformative. Our platform
                combines cutting-edge technology with proven teaching
                methodologies to deliver an unparalleled learning experience.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of online education,
                continuously innovating to meet the evolving needs of our global
                learning community. Our success is measured not just in numbers,
                but in the countless success stories of our students who have
                transformed their lives through learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
