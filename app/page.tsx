import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main
      className="
    min-h-screen
    text-white
    bg-[#0a0a0a]
    bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_35%)]
  "
    >
      <Navbar />


      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[900px]
      h-[900px]
      bg-blue-500/10
      blur-[180px]
      rounded-full
    "
        />

        <div
          className="
      absolute
      bottom-0
      right-0
      w-[600px]
      h-[600px]
      bg-purple-500/5
      blur-[180px]
      rounded-full
    "
        />

      </div>
      <section
        id="home"
        className="min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-6 text-sm">
              Full-Stack Developer
            </p>

            <h1 className="text-7xl lg:text-8xl font-bold leading-none mb-8">
              Michael
              <br />
              Tokhirjonov
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              Building scalable web applications, marketplaces,
              and business platforms with modern technologies
              including Next.js, NestJS, GraphQL, and MongoDB.
            </p>

            <div className="flex gap-10 mb-10">

              <div>
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm">
                  Projects
                </p>
              </div>

            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-medium"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                download
                className="border border-white/20 hover:border-white/40 transition px-8 py-4 rounded-xl font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div
              className="
			absolute
			w-[450px]
			h-[450px]
			bg-blue-500/20
			blur-[120px]
			rounded-full
		"
            />

            <div
              className="
    w-[420px]
    h-[520px]
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    relative
  "
            >
              <img
                src="/images/n-casual.png"
                alt="Michael"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title */}

          <div className="mb-16">
            <p className="text-blue-400 mb-3">
              Get To Know Me
            </p>

            <h2 className="text-5xl font-bold">
              About Me
            </h2>
          </div>

          {/* Introduction */}

          <div className="max-w-4xl mb-20">
            <p className="text-xl text-gray-300 leading-9">
              I am a Full-Stack Developer with 3 years of
              professional experience building modern web
              applications and digital platforms. My expertise
              includes React, Next.js, TypeScript, Node.js,
              NestJS, GraphQL, MongoDB, and Docker.

              <br />
              <br />

              I enjoy transforming ideas into real products and
              creating user-focused experiences that are scalable,
              maintainable, and visually appealing. My goal is
              to build software that not only works efficiently
              but also delivers meaningful value to users.
            </p>
          </div>

          {/* Statistics */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

            <div className="premium-card p-8">
              <h3 className="text-4xl font-bold mb-3">
                3+
              </h3>

              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-4xl font-bold mb-3">
                10+
              </h3>

              <p className="text-gray-400">
                Completed Projects
              </p>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-4xl font-bold mb-3">
                2+
              </h3>

              <p className="text-gray-400">
                Years Full-Stack
              </p>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-4xl font-bold mb-3">
                1+
              </h3>

              <p className="text-gray-400">
                Years Frontend
              </p>
            </div>

          </div>

          {/* Education & Languages */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Education */}

            <div className="premium-card p-8">

              <h3 className="text-3xl font-bold mb-8">
                Education
              </h3>

              <div className="space-y-8">

                <div>
                  <h4 className="text-xl font-semibold">
                    Namseoul University (MBA)
                  </h4>

                  <p className="text-gray-400">
                    Financial Management
                  </p>

                  <p className="text-gray-500 mt-2">
                    2024 – 2026
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">
                    University of Ulsan (BBA)
                  </h4>

                  <p className="text-gray-400">
                    Business Administration
                  </p>

                  <p className="text-gray-500 mt-2">
                    2018 – 2022
                  </p>
                </div>

              </div>

            </div>

            {/* Languages */}

            <div className="premium-card p-8">

              <h3 className="text-3xl font-bold mb-8">
                Languages
              </h3>

              <div className="space-y-5">

                <div className="flex justify-between items-center">
                  <span>Uzbek</span>
                  <span className="text-gray-400">
                    Native
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Russian</span>
                  <span className="text-gray-400">
                    Fluent
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-gray-400">
                    Fluent
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Korean</span>
                  <span className="text-gray-400">
                    Fluent
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section
        id="skills"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-bold mb-16">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="premium-card p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Frontend
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>React</p>
                <p>Next.js</p>
                <p>TypeScript</p>
                <p>JavaScript</p>
                <p>SCSS</p>
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Backend
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>Node.js</p>
                <p>NestJS</p>
                <p>GraphQL</p>
                <p>REST API</p>
                <p>Apollo</p>
              </div>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Database
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>MongoDB</p>
                <p>Mongoose</p>
              </div>
            </div>

            <div className="premium-card p-8">
              <h3 className="text-2xl font-semibold mb-6">
                DevOps
              </h3>

              <div className="space-y-3 text-gray-300">
                <p>Docker</p>
                <p>Linux</p>
                <p>Nginx</p>
                <p>Git</p>
                <p>GitHub</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Featured Project */}
          <div className="mb-32">

            <div className="mb-16">
              <p className="text-blue-400 mb-3">
                Portfolio Highlight
              </p>

              <h2 className="text-5xl font-bold">
                Projects
              </h2>
            </div>
            <div className="mt-40 grid lg:grid-cols-2 gap-12 items-center">

              <div className="w-full h-[500px] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/images/vestra.png"
                  alt="Vestra"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>

                <p className="text-blue-400 mb-3">
                  Motorcycle Marketplace Platform
                </p>

                <h3 className="text-5xl font-bold mb-6">
                  Vestra
                </h3>

                <p className="text-gray-300 leading-8 mb-8">
                  Vestra is a full-stack motorcycle marketplace
                  platform designed to connect buyers and dealers
                  through an intuitive user experience. The platform
                  includes role-based authentication, advanced
                  filtering, multilingual support, real-time
                  communication, community features, and a complete
                  dealer management system.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="tech-badge">
                    Next.js
                  </span>

                  <span className="tech-badge">
                    NestJS
                  </span>

                  <span className="tech-badge">
                    GraphQL
                  </span>

                  <span className="tech-badge">
                    MongoDB
                  </span>

                  <span className="tech-badge">
                    TypeScript
                  </span>

                </div>

                <div className="space-y-3 mb-10">
                  <p>✓ Role-Based Authentication</p>
                  <p>✓ Dealer Vehicle Management</p>
                  <p>✓ Dynamic Filtering System</p>
                  <p>✓ Real-Time Chatting</p>
                  <p>✓ Multilingual Support</p>
                </div>

                <div className="flex gap-4">

                  <a
                    href="http://vestramoto.com"
                    target="_blank"
                    className="bg-white text-black px-6 py-3 rounded-xl font-medium"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

            <div className="mt-32 mb-24 border-t border-white/10" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <p className="text-green-400 mb-3">
                  Plant E-Commerce Platform
                </p>

                <h3 className="text-5xl font-bold mb-6">
                  EcoFlora
                </h3>

                <p className="text-gray-300 leading-8 mb-8">
                  EcoFlora is a modern e-commerce platform designed
                  for plant enthusiasts. The platform provides a
                  seamless shopping experience with product browsing,
                  category management, user authentication, shopping
                  cart functionality, and responsive design optimized
                  for both desktop and mobile devices.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="tech-badge">
                    React
                  </span>

                  <span className="tech-badge">
                    Redux
                  </span>

                  <span className="tech-badge">
                    Node.js
                  </span>

                  <span className="tech-badge">
                    Express
                  </span>

                  <span className="tech-badge">
                    MongoDB
                  </span>

                </div>

                <div className="space-y-3 mb-10">
                  <p>✓ Product Catalog Management</p>
                  <p>✓ Shopping Cart System</p>
                  <p>✓ User Authentication</p>
                  <p>✓ Responsive Design</p>
                  <p>✓ Product Categories & Search</p>
                </div>

                <div className="flex gap-4">

                  <a
                    href="http://ecoflora.shop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-xl font-medium"
                  >
                    Live Demo
                  </a>


                </div>

              </div>

              <div className="w-full h-[500px] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/images/ecoflora.png"
                  alt="EcoFlora"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

          {/* Other Projects */}

          <div>

            <h2 className="text-4xl font-bold mb-12">
              Other Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="premium-card rounded-3xl p-8">

                <div className="w-full h-64 overflow-hidden rounded-2xl mb-8 border border-white/10">
                  <img
                    src="/images/it-park.png"
                    alt="IT Park"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  IT Park School
                </h3>

                <p className="text-gray-300 mb-6">
                  A private experimental school combining IT
                  education with project-based learning to develop creativity,
                  problem-solving, and academic excellence.
                </p>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    Node.js
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    MongoDB
                  </span>

                </div>

              </div>

              <div className="premium-card rounded-3xl p-8">

                <div className="w-full h-64 overflow-hidden rounded-2xl mb-8 border border-white/10">
                  <img
                    src="/images/dtm.png"
                    alt="DTM"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  DTM TRUCKING INC
                </h3>

                <p className="text-gray-300 mb-6">
                  A transportation platform that streamlines daily driving operations with route planning,
                  GPS navigation, and real-time updates.
                </p>

                <div className="flex flex-wrap gap-2">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    Next.js
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    GraphQL
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    MongoDB
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>



      <section
        id="experience"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <p className="text-blue-400 mb-3">
              Career Journey
            </p>

            <h2 className="text-5xl font-bold">
              Experience
            </h2>
          </div>

          <div className="space-y-8">

            <div className="premium-card rounded-3xl p-8">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    EverbestLab (Remote)
                  </h3>

                  <p className="text-gray-400">
                    Full-Stack Developer
                  </p>
                </div>

                <span className="text-gray-400">
                  2024 - 2026
                </span>
              </div>

              <p className="text-gray-300 leading-8">
                Developed scalable web applications using
                Next.js, React, NestJS, GraphQL, and MongoDB.
                Built authentication systems, real-time chat,
                commenting features, advanced filtering, and
                role-based access control. Managed deployments
                using Docker, Nginx, VPS infrastructure, and
                CI/CD workflows while ensuring performance and
                cross-device compatibility.
              </p>

            </div>

            <div className="premium-card rounded-3xl p-8">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    Softlane Company
                  </h3>

                  <p className="text-gray-400">
                    Frontend Developer
                  </p>
                </div>

                <span className="text-gray-400">
                  2023 - 2024
                </span>
              </div>

              <p className="text-gray-300 leading-8">
                Developed responsive web interfaces using
                React, Next.js, TypeScript, SCSS, and Material UI.
                Built advanced filtering systems, authentication
                flows, real-time notifications, and reusable UI
                components while integrating GraphQL and REST APIs.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section
        id="contact"
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-400 mb-3">
              Get In Touch
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Let's Work Together
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always interested in discussing new projects,
              collaborations, and opportunities.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <a
              href="mailto:your@email.com"
              className="premium-card rounded-3xl p-8 block"
            >
              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <p className="text-gray-400">
                surojbeksv@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Surojbek19"
              target="_blank"
              className="premium-card rounded-3xl p-8 block"
            >
              <h3 className="text-xl font-semibold mb-3">
                GitHub
              </h3>

              <p className="text-gray-400">
                github.com/Surojbek19
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/surojbek-sailkhonov/"
              target="_blank"
              className="premium-card rounded-3xl p-8 block"
            >
              <h3 className="text-xl font-semibold mb-3">
                LinkedIn
              </h3>

              <p className="text-gray-400">
                https://www.linkedin.com/in/surojbek-sailkhonov/
              </p>
            </a>

          </div>

        </div>
      </section>
    </main>
  );
}