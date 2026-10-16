import Navbar from '@/Components/todoComponents/Navbar'
import {
  ArrowRight,
  CheckCircle2,
  CheckSquare,
  Clock3,
  Layers3,
  ListTodo,
  ShieldCheck,
  Target,
  Zap,
} from 'lucide-react'


const LandingPage = () => {
  return (
    <>

    <Navbar/>


    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* Hero Section */}
      <section className="relative isolate">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-200/50 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">

          {/* Hero Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <Zap size={16} />
              Your productivity, simplified
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Organize your tasks.
              <span className="mt-2 block bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Achieve more.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Bring your tasks, priorities, and daily goals into one place.
              TaskFlow helps you stay organized and focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                Get Started
                <ArrowRight size={18} />
              </a>

              <a
                
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                Explore Features
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Easy to use
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Stay organized
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Track progress
              </span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-violet-300/40 to-blue-300/40 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7">

              {/* Preview Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-100 p-2.5 text-violet-700">
                    <CheckSquare size={24} />
                  </div>

                  <div>
                    <h2 className="font-bold">My Workspace</h2>
                    <p className="text-sm text-slate-500">
                      Your productivity overview
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  On track
                </span>
              </div>

              {/* Statistics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <StatCard label="Total Tasks" value="12" icon={Layers3} />
                <StatCard label="Completed" value="08" icon={CheckCircle2} />
                <StatCard label="Pending" value="04" icon={Clock3} />
              </div>

              {/* Progress */}
              <div className="mt-7 rounded-2xl bg-violet-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Weekly progress
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Keep up the good work!
                    </p>
                  </div>

                  <span className="text-xl font-bold text-violet-700">
                    68%
                  </span>
                </div>

                <div
                  className="mt-4 h-2.5 overflow-hidden rounded-full bg-violet-100"
                  role="progressbar"
                  aria-label="Weekly progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={68}
                >
                  <div className="h-full w-[68%] rounded-full bg-linear-to-r from-violet-600 to-blue-600" />
                </div>
              </div>

              {/* Example Tasks */}
              <div className="mt-7">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold">Today's tasks</h3>
                  <span className="text-sm font-medium text-violet-700">
                    Preview
                  </span>
                </div>

                <div className="space-y-3">
                  <PreviewTask
                    title="Complete React project"
                    category="Development"
                    priority="High"
                    completed={false}
                  />

                  <PreviewTask
                    title="Review Java concepts"
                    category="Learning"
                    priority="Medium"
                    completed
                  />

                  <PreviewTask
                    title="Plan tomorrow's goals"
                    category="Personal"
                    priority="Low"
                    completed={false}
                  />
                </div>
              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                Illustrative preview · Example task data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-violet-700">
              Why TaskFlow?
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to stay on track
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Simple tools to help you plan your day, organize your work,
              and make steady progress toward your goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={ListTodo}
              title="Organize Your Tasks"
              description="Keep your tasks in one place and maintain a clear view of what needs to get done."
            />

            <FeatureCard
              icon={Target}
              title="Set Priorities"
              description="Identify important work and focus on the tasks that matter most."
            />

            <FeatureCard
              icon={CheckCircle2}
              title="Track Your Progress"
              description="Mark tasks as completed and get a clearer picture of your progress."
            />

            <FeatureCard
              icon={Clock3}
              title="Manage Your Time"
              description="Keep track of pending tasks and plan your workload more effectively."
            />

            <FeatureCard
              icon={Layers3}
              title="Keep Everything Organized"
              description="Separate tasks by their status and priority to find what you need quickly."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Your Personal Workspace"
              description="Access your own task list through your authenticated account."
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl bg-linear-to-r from-violet-600 to-blue-600 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-3xl font-bold">
              Ready to get organized?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
              Start managing your tasks with a workspace designed to keep
              things simple.
            </p>

            <a
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              Create Your Account
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 text-violet-600" />
            <span className="text-lg font-bold text-slate-900">
              TaskFlow
            </span>
          </a>

          <p className="text-sm text-slate-500">
            Organize your tasks. Achieve more.
          </p>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TaskFlow
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}

/* Reusable statistic card */
function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 sm:p-4">
      <Icon className="mb-3 h-5 w-5 text-violet-600" />

      <p className="text-xl font-bold text-slate-900">{value}</p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

/* Reusable preview task */
function PreviewTask({ title, category, priority, completed }) {
  const priorityStyles = {
    High: "bg-rose-50 text-rose-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-emerald-50 text-emerald-700",
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
      <CheckCircle2
        size={20}
        className={
          completed
            ? "shrink-0 text-emerald-600"
            : "shrink-0 text-slate-300"
        }
      />

      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-semibold ${
            completed ? "text-slate-400 line-through" : "text-slate-800"
          }`}
        >
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">{category}</p>
      </div>

      <span
        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[priority]}`}
      >
        {priority}
      </span>
    </div>
  );
}

/* Reusable feature card */
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50">
      <div className="inline-flex rounded-xl bg-violet-50 p-3 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default LandingPage