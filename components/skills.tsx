import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mes Compétences</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies et outils que j'utilise au quotidien.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Layout className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Front-end</h3>
            <p className="text-sm text-slate-500">
              HTML5, CSS3, JavaScript, TypeScript, React, Vue.js, Next.js, Tailwind CSS, Bootstrap, SASS
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Server className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Back-end</h3>
            <p className="text-sm text-slate-500">Node.js, Express, PHP, Laravel, Python, Django, API REST, GraphQL</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Database className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Bases de données</h3>
            <p className="text-sm text-slate-500">MySQL, PostgreSQL, MongoDB, Firebase, Prisma, Sequelize</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Code className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Outils de développement</h3>
            <p className="text-sm text-slate-500">Git, GitHub, VS Code, Docker, Webpack, Vite, npm, yarn</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Smartphone className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Développement mobile</h3>
            <p className="text-sm text-slate-500">React Native, Flutter, Responsive Design, Progressive Web Apps</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
              <Globe className="h-8 w-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold">Déploiement</h3>
            <p className="text-sm text-slate-500">Vercel, Netlify, Heroku, AWS, DigitalOcean, CI/CD</p>
          </div>
        </div>
      </div>
    </section>
  )
}
