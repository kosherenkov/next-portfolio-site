export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Download button (absolute, top-right) */}
      <div className="fixed top-6 right-6 z-50">
        <a
          href="/Kosherenkov Artem Middle QA Engineer.pdf"
          download
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Download CV
        </a>
      </div>
      {/* Hero */}
  <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <img
          src="/14.jpg"
          alt="My photo"
          className="w-60 h-60 rounded-full shadow-lg mb-6 object-cover object-top mx-auto"
        />
        <h1 className="text-4xl font-bold">Hi, I’m Artem 👋</h1>
        <p className="mt-3 text-lg">Middle QA Engineer</p>
        <div className="mt-6 space-x-4">
          <a
            href="mailto:a.kosherenkov@gmail.com"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/kosherenkov"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Down arrow for scroll hint (always visible below Hero) */}
  <a
    href="#about"
    className="z-40 absolute left-1/2 -translate-x-1/2 bottom-4 cursor-pointer group"
    aria-label="Scroll to About Me"
  >
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce text-gray-400 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>

  {/* About */}
  <section id="about" className="max-w-3xl mx-auto pt-6 pb-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="text-justify space-y-4 text-base leading-relaxed">
          <p>
            I am a Middle QA Engineer with solid experience in Web and Mobile testing, combining manual expertise with strong test automation skills. My toolkit includes Playwright, Postman, Jenkins, and Docker, which I use to design, execute, and integrate automated test suites into CI/CD pipelines.
          </p>
          <p>
            I have a strong foundation in testing theory, test design techniques, and test documentation, and I apply these skills to build maintainable, scalable automation frameworks for both UI and API testing.
          </p>
          <p>
            In my recent work, I addressed the problem of long regression cycles by implementing and expanding automation coverage, which reduced regression execution time by 20% — and continues to decrease with ongoing automation efforts.
          </p>
          <p>
            I thrive in Agile/Scrum teams, collaborating closely with developers and product managers, while also mentoring juniors and helping to set testing priorities to ensure timely, high-quality releases.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            Python
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            SQL / BigQuery
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            Postman
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            GitHub Actions
          </span>
          <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
            Playwright
          </span>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="mt-2">
              My personal website built with Next.js, Tailwind CSS, and deployed
              on Vercel.
            </p>
            <a
              href="https://github.com/yourusername/next-portfolio-site"
              className="text-blue-600 hover:underline"
            >
              View Code →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p>
          Feel free to reach out via email or connect with me on LinkedIn and
          GitHub.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}