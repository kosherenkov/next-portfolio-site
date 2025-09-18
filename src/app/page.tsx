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
  <div className="pointer-events-none z-40 absolute left-1/2 -translate-x-1/2 bottom-4">
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce text-gray-400 dark:text-gray-200">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* About */}
      <section className="max-w-3xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a QA Engineer passionate about testing, automation, and building
          modern web projects. I love working with SQL, BigQuery, and exploring
          DevOps tools.
        </p>
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