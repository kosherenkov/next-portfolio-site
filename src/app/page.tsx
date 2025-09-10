export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <img
          src="/avatar.png"
          alt="My photo"
          className="w-32 h-32 rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold">Hi, I’m Artem 👋</h1>
        <p className="mt-3 text-lg">QA Engineer | Web Developer</p>
        <div className="mt-6 space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/yourusername"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700"
          >
            GitHub
          </a>
        </div>
      </section>

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