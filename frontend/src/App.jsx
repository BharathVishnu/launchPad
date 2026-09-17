import {
  ArrowRight,
  Sparkles,
  Terminal,
  Zap,
  Shield,
  GitBranch,
  Rocket,
  Check,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#07080d] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-bold">
            L
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Launch<span className="text-indigo-400">Pad</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#workflow" className="transition hover:text-white">
            Workflow
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
\          GitHub
        </a>
      </nav>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 text-center lg:px-8 lg:pt-28">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            <Sparkles size={15} />
            Build. Ship. Repeat.
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your launchpad for
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              better software.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            A modern developer workspace for building, automating, and shipping
            projects faster — without getting lost in the complexity.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
              Start Building
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
              <Terminal size={17} />
              View Documentation
            </button>
          </div>

          {/* Terminal preview */}
          <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d13] text-left shadow-2xl shadow-indigo-950/30">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <div className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 text-xs text-zinc-500">
                launchpad — terminal
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-8">
              <p className="text-zinc-500">
                $ <span className="text-zinc-300">launchpad init my-app</span>
              </p>

              <p className="text-zinc-500">
                → Creating project structure...
              </p>

              <p className="text-zinc-500">
                → Installing dependencies...
              </p>

              <p className="text-emerald-400">
                ✓ Project ready
              </p>

              <p className="mt-2 text-zinc-500">
                $ <span className="text-indigo-400">launchpad deploy</span>
              </p>

              <p className="text-cyan-400">
                ✓ Deployed successfully
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-y border-white/5 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-medium text-indigo-400">
                EVERYTHING YOU NEED
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Built for developers who ship.
              </h2>

              <p className="mt-4 text-zinc-400">
                Keep your development workflow simple, fast, and predictable.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <FeatureCard
                icon={<Zap size={20} />}
                title="Fast by default"
                description="A streamlined workflow designed to keep you focused on writing and shipping code."
              />

              <FeatureCard
                icon={<GitBranch size={20} />}
                title="Git-native"
                description="Work naturally with branches, commits, pull requests, and your existing Git workflow."
              />

              <FeatureCard
                icon={<Rocket size={20} />}
                title="Ship instantly"
                description="Move from local development to production with a workflow designed for speed."
              />
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-indigo-400">
                SIMPLE WORKFLOW
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From idea to production.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                LaunchPad gives your projects a clean path from the first line
                of code to a production deployment.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Create your project",
                  "Connect your Git repository",
                  "Build and test locally",
                  "Deploy to production",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-indigo-300">
                      {index + 1}
                    </div>

                    <span className="text-sm text-zinc-300">{item}</span>

                    <Check
                      size={16}
                      className="ml-auto text-emerald-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 p-1">
              <div className="rounded-xl bg-[#0b0c11] p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Shield size={20} />
                  </div>

                  <div>
                    <p className="font-medium">Production ready</p>
                    <p className="text-sm text-zinc-500">
                      Everything looks good.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {["Build", "Tests", "Security", "Deployment"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.025] px-4 py-3"
                      >
                        <span className="text-sm text-zinc-400">
                          {item}
                        </span>

                        <span className="flex items-center gap-2 text-xs text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Passed
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="about" className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-cyan-500/10 px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Start with an idea. End with something shipped.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200">
              Get Started
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © 2026 LaunchPad. Built for developers.
          </p>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-indigo-400 transition group-hover:bg-indigo-400/10">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
}

export default App;