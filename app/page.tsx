"use client";

import { useLanguage } from "./context/LanguageContext";
import FadeInSection from "./components/FadeInSection";
import Navbar from "./components/Navbar";


export default function Home() {

  const { t, lang } = useLanguage();

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
              {t.hero.role}
            </p>

            <h1 className="text-7xl lg:text-8xl font-bold leading-none mb-8">
              Surojbek
              <br />
              Michael
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mb-8">
              {t.hero.intro}
            </p>

            <div className="flex gap-10 mb-10">

              <div>
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">
                  {t.hero.experience}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm">
                  {t.hero.projects}
                </p>
              </div>

            </div>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl font-medium"
              >
                {t.hero.buttonProjects}
              </a>

              <a
                href={
                  lang === "ko"
                    ? "/documents/Surojbek_Sailkhonov_Resume_KO.pdf"
                    : "/documents/Surojbek_Sailkhonov_Resume_EN.pdf"
                }
                download
                className="border border-white/20 hover:border-white/40 transition px-8 py-4 rounded-xl font-medium"
              >
                {t.hero.buttonCV}
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

      <FadeInSection>
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
                {t.about.title}
              </h2>
            </div>

            {/* Introduction */}

            <div className="max-w-4xl mb-20">
              <p className="text-xl text-gray-300 leading-9">
                {t.about.description1}

                <br />
                <br />

                {t.about.description2}
              </p>
            </div>

            {/* Statistics */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

              <div className="premium-card p-8">
                <h3 className="text-4xl font-bold mb-3">
                  3+
                </h3>

                <p className="text-gray-400">
                  {t.about.experience}
                </p>
              </div>

              <div className="premium-card p-8">
                <h3 className="text-4xl font-bold mb-3">
                  10+
                </h3>

                <p className="text-gray-400">
                  {t.about.projects}
                </p>
              </div>

              <div className="premium-card p-8">
                <h3 className="text-4xl font-bold mb-3">
                  2+
                </h3>

                <p className="text-gray-400">
                  {t.about.fullStack}
                </p>
              </div>

              <div className="premium-card p-8">
                <h3 className="text-4xl font-bold mb-3">
                  1+
                </h3>

                <p className="text-gray-400">
                  {t.about.front}
                </p>
              </div>

            </div>

            {/* Education & Languages */}

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Education */}

              <div className="premium-card p-8">

                <h3 className="text-3xl font-bold mb-8">
                  {t.about.education}
                </h3>

                <div className="space-y-8">

                  <div>
                    <h4 className="text-xl font-semibold">
                      Namseoul University (MBA)
                    </h4>

                    <p className="text-gray-400">
                      {t.about.major1}
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
                      {t.about.major2}
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
                  {t.about.language}
                </h3>

                <div className="space-y-5">

                  <div className="flex justify-between items-center">
                    <span>{t.about.uzbek}</span>
                    <span className="text-gray-400">
                      {t.about.native}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>{t.about.russian}</span>
                    <span className="text-gray-400">
                      {t.about.fluent}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>{t.about.english}</span>
                    <span className="text-gray-400">
                      {t.about.fluent}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>{t.about.korean}</span>
                    <span className="text-gray-400">
                      {t.about.intermedieted}
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section
          id="skills"
          className="py-32"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <h2 className="text-5xl font-bold mb-16">
              {t.skills.skills}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Frontend */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Frontend
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">HTML</span>
                  <span className="skill-badge">CSS</span>
                  <span className="skill-badge">SASS</span>
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">EJS</span>
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Next.js</span>
                  <span className="skill-badge">Redux</span>
                  <span className="skill-badge">React Native</span>
                  <span className="skill-badge">React Router</span>
                  <span className="skill-badge">Axios</span>
                  <span className="skill-badge">Socket.io Client</span>
                  <span className="skill-badge">jQuery</span>
                  <span className="skill-badge">SCSS</span>
                  <span className="skill-badge">Tailwind CSS</span>
                  <span className="skill-badge">Material UI</span>
                  <span className="skill-badge">SweetAlert2</span>
                  <span className="skill-badge">Sonner</span>
                  <span className="skill-badge">Anime.js</span>
                  <span className="skill-badge">Framer Motion</span>
                  <span className="skill-badge">Swiper</span>
                  <span className="skill-badge">Typed.js</span>
                  <span className="skill-badge">Three.js</span>
                  <span className="skill-badge">TUI Editor</span>
                  <span className="skill-badge">TUI Viewer</span>
                </div>
              </div>

              {/* Backend */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Backend
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express.js</span>
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">MongoDB</span>
                  <span className="skill-badge">Mongoose</span>
                  <span className="skill-badge">MySQL</span>
                  <span className="skill-badge">Express Session</span>
                  <span className="skill-badge">JWT</span>
                  <span className="skill-badge">Bcrypt.js</span>
                  <span className="skill-badge">Multer</span>
                  <span className="skill-badge">Socket.io</span>
                  <span className="skill-badge">Cookie Parser</span>
                  <span className="skill-badge">Dotenv</span>
                  <span className="skill-badge">FormData</span>
                </div>
              </div>

              {/* DevOps */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  DevOps
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Linux (Ubuntu)</span>
                  <span className="skill-badge">Nginx</span>
                  <span className="skill-badge">DNS</span>
                  <span className="skill-badge">Firewall</span>
                  <span className="skill-badge">Docker</span>
                  <span className="skill-badge">PM2</span>
                  <span className="skill-badge">GitHub Pages</span>
                  <span className="skill-badge">Render</span>
                </div>
              </div>

              {/* AI / ML */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  AI / ML
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">PyTorch</span>
                  <span className="skill-badge">OpenCV</span>
                  <span className="skill-badge">NumPy</span>
                  <span className="skill-badge">Pandas</span>
                  <span className="skill-badge">Matplotlib</span>
                  <span className="skill-badge">Scikit-learn</span>
                  <span className="skill-badge">Hugging Face</span>
                  <span className="skill-badge">SentenceTransformers</span>
                  <span className="skill-badge">PEFT (LoRA)</span>
                  <span className="skill-badge">LLaMA</span>
                  <span className="skill-badge">TinyLlama</span>
                  <span className="skill-badge">Tokenizers</span>
                  <span className="skill-badge">Qdrant</span>
                  <span className="skill-badge">RAG</span>
                  <span className="skill-badge">Google Colab</span>
                  <span className="skill-badge">Kaggle</span>
                  <span className="skill-badge">MobileNet</span>
                </div>
              </div>

              {/* Patterns & Architecture */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Patterns & Architecture
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">MVC</span>
                  <span className="skill-badge">Middleware</span>
                  <span className="skill-badge">Dependency Injection</span>
                  <span className="skill-badge">Decorators</span>
                </div>
              </div>

              {/* Tools */}
              <div className="premium-card p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Tools
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">VSCode</span>
                  <span className="skill-badge">Cursor</span>
                  <span className="skill-badge">Postman</span>
                  <span className="skill-badge">Yarn</span>
                  <span className="skill-badge">NPM</span>
                  <span className="skill-badge">NVM</span>
                  <span className="skill-badge">Z Shell</span>
                  <span className="skill-badge">FileZilla</span>
                  <span className="skill-badge">GitHub</span>
                  <span className="skill-badge">MongoDB Compass</span>
                  <span className="skill-badge">Figma</span>
                </div>
              </div>

            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
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
                  {t.projects.title}
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
                    {t.projects.description1}
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
                    <p>✓ {t.projects.point1}</p>
                    <p>✓ {t.projects.point2}</p>
                    <p>✓ {t.projects.point3}</p>
                    <p>✓ {t.projects.point4}</p>
                    <p>✓ {t.projects.point5}</p>
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
                    {t.projects.description2}
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
                    <p>✓ {t.projects.bullet1}</p>
                    <p>✓ {t.projects.bullet2}</p>
                    <p>✓ {t.projects.bullet3}</p>
                    <p>✓ {t.projects.bullet4}</p>
                    <p>✓ {t.projects.bullet5}</p>
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
                {t.projects.title1}
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
                    {t.projects.description3}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    <span className="tech-badge">
                      React
                    </span>

                    <span className="tech-badge">
                      Node.js
                    </span>

                    <span className="tech-badge">
                      MongoDB
                    </span>

                  </div>

                </div>

                <div className="premium-card rounded-3xl p-8">

                  <div className="w-full h-64 overflow-hidden rounded-2xl mb-8 border border-white/10">
                    <img
                      src="/images/DTM.png"
                      alt="DTM"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    DTM TRUCKING INC
                  </h3>

                  <p className="text-gray-300 mb-6">
                    {t.projects.description4}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    <span className="tech-badge">
                      Next.js
                    </span>

                    <span className="tech-badge">
                      GraphQL
                    </span>

                    <span className="tech-badge">
                      MongoDB
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>
      </FadeInSection>


      <FadeInSection>
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
                {t.experience.title}
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
                  {t.experience.description1}
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
                  {t.experience.description2}
                </p>

              </div>

            </div>

          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
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
                {t.contact.title}
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.contact.description}
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <a
                href="mailto:your@email.com"
                className="premium-card rounded-3xl p-8 block"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {t.contact.email}
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
                  {t.contact.github}
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
                  {t.contact.linkedin}
                </h3>

                <p className="text-gray-400">
                  https://www.linkedin.com/in/surojbek-sailkhonov/
                </p>
              </a>

            </div>

          </div>
        </section>
      </FadeInSection>
    </main>
  );
}