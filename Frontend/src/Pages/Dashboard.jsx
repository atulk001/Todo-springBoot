import { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  ListTodo,
  CircleCheck,
  Settings,
  Search,
  Bell,
  Plus,
  CalendarDays,
  Clock3,
  MoreHorizontal,
  ArrowUpRight,
  Target,
  Zap,
  Menu,
  X,
  LogOut,
  UserRound,
  CheckCircle2,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Complete React frontend",
    description: "Finish the TaskFlow dashboard UI",
    priority: "High",
    status: "In Progress",
    dueDate: "Today",
    category: "Development",
  },
  {
    id: 2,
    title: "Revise Java Collections",
    description: "Review List, Set, Map and Stream API",
    priority: "Medium",
    status: "Pending",
    dueDate: "Today",
    category: "Learning",
  },
  {
    id: 3,
    title: "Prepare for interviews",
    description: "Practice technical interview questions",
    priority: "High",
    status: "Pending",
    dueDate: "Tomorrow",
    category: "Career",
  },
  {
    id: 4,
    title: "Review project documentation",
    description: "Update the project README",
    priority: "Low",
    status: "Completed",
    dueDate: "Yesterday",
    category: "Development",
  },
];

function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeFilter, setActiveFilter] = useState("All Tasks");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      activeFilter === "All Tasks" ||
      task.status === activeFilter;

    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const toggleTaskStatus = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
          <a href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-200">
              <CheckSquare size={23} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              TaskFlow
            </span>
          </a>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-7">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Workspace
          </p>

          <SidebarLink
            icon={LayoutDashboard}
            label="Dashboard"
            active
            onClick={() => setSidebarOpen(false)}
          />

          <SidebarLink
            icon={ListTodo}
            label="My Tasks"
            onClick={() => {
              setActiveFilter("All Tasks");
              setSidebarOpen(false);
              document
                .getElementById("tasks")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          <SidebarLink
            icon={CircleCheck}
            label="Completed"
            onClick={() => {
              setActiveFilter("Completed");
              setSidebarOpen(false);
              document
                .getElementById("tasks")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />

          <div className="my-7 border-t border-slate-100" />

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Preferences
          </p>

          <SidebarLink
            icon={Settings}
            label="Settings"
            onClick={() =>
              alert("Settings page will be added later.")
            }
          />
        </nav>

        {/* Sidebar Bottom Card */}
        <div className="m-4 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-5 text-white">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
            <Target size={22} />
          </div>

          <h3 className="font-semibold">Stay focused!</h3>

          <p className="mt-2 text-sm leading-6 text-violet-100">
            Small steps every day lead to big results.
          </p>
        </div>

        {/* User Profile */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-700">
              <UserRound size={21} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Your Account
              </p>
              <p className="text-xs text-slate-500">
                TaskFlow Member
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                alert("Logout will be connected to authentication later.")
              }
              aria-label="Logout"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen lg:ml-64">

        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-8">

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
                className="rounded-xl border border-slate-200 p-2 text-slate-600 lg:hidden"
              >
                <Menu size={21} />
              </button>

              <div>
                <h1 className="text-lg font-bold sm:text-xl">
                  Dashboard
                </h1>

                <p className="hidden text-sm text-slate-500 sm:block">
                  Here's your productivity overview.
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden max-w-sm flex-1 md:block">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  placeholder="Search your tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-100"
                />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Notifications"
                onClick={() => alert("Notifications will be added later.")}
                className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
              >
                <Bell size={20} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-600 ring-2 ring-white" />
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 font-semibold text-white">
                U
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="px-4 pb-4 md:hidden">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                placeholder="Search your tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="mx-auto max-w-7xl space-y-8 p-4 sm:p-8">

          {/* Welcome Banner */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-6 text-white shadow-xl shadow-violet-200/50 sm:p-9">
            <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-2xl" />

            <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm">
                  <Zap size={15} />
                  Your productivity workspace
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome back! 👋
                </h2>

                <p className="mt-3 max-w-lg leading-7 text-indigo-100">
                  Every task you complete is a step forward.
                  Let's make today productive.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("tasks")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:bg-violet-50"
              >
                View My Tasks
                <ArrowUpRight size={18} />
              </button>
            </div>
          </section>

          {/* Statistics */}
          <section>
            <div className="mb-5">
              <h2 className="text-lg font-bold">Your Overview</h2>
              <p className="mt-1 text-sm text-slate-500">
                A quick look at your current workload.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Tasks"
                value={totalTasks}
                description="Tasks in your workspace"
                icon={ListTodo}
                iconColor="bg-violet-100 text-violet-700"
              />

              <StatCard
                title="In Progress"
                value={inProgressTasks}
                description="Currently being worked on"
                icon={Clock3}
                iconColor="bg-blue-100 text-blue-700"
              />

              <StatCard
                title="Completed"
                value={completedTasks}
                description="Successfully finished"
                icon={CheckCircle2}
                iconColor="bg-emerald-100 text-emerald-700"
              />

              <StatCard
                title="Pending"
                value={pendingTasks}
                description="Waiting to be started"
                icon={Target}
                iconColor="bg-amber-100 text-amber-700"
              />
            </div>
          </section>

          {/* Progress and Productivity */}
          <section className="grid gap-6 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold">Task Completion</h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Your completed tasks compared to all tasks.
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-3 text-violet-700">
                  <Target size={22} />
                </div>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div>
                  <span className="text-4xl font-bold tracking-tight">
                    {progress}%
                  </span>

                  <p className="mt-2 text-sm text-slate-500">
                    Completion rate
                  </p>
                </div>

                <p className="text-sm font-medium text-slate-600">
                  {completedTasks} of {totalTasks} tasks
                </p>
              </div>

              <div
                className="mt-5 h-3 overflow-hidden rounded-full bg-violet-100"
                role="progressbar"
                aria-label="Task completion"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Zap size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Keep the momentum!
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Focus on one task at a time. Consistent progress
                helps you reach your goals.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-700">
                <Target size={17} />
                One step at a time
              </div>
            </div>
          </section>

          {/* Tasks */}
          <section
            id="tasks"
            className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white"
          >
            {/* Task Header */}
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h2 className="text-lg font-bold">My Tasks</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage and track your daily activities.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert("The task creation form will be implemented next.")
                }
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
              >
                <Plus size={18} />
                Add New Task
              </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto border-b border-slate-100 px-5 py-4 sm:px-6">
              {["All Tasks", "Pending", "In Progress", "Completed"].map(
                (filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition ${
                      activeFilter === filter
                        ? "bg-violet-100 text-violet-700"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            {/* Task List */}
            <div className="divide-y divide-slate-100">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <TaskRow
                    key={task.id}
                    task={task}
                    onToggle={() => toggleTaskStatus(task.id)}
                  />
                ))
              ) : (
                <div className="px-6 py-14 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                    <ListTodo size={27} />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-800">
                    No tasks found
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try another filter or search for a different task.
                  </p>
                </div>
              )}
            </div>

            {/* Task Footer */}
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-sm text-slate-500 sm:px-6">
              <span>
                Showing {filteredTasks.length} of {totalTasks} tasks
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                Your workspace
              </span>
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-3 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} TaskFlow. Organize your tasks.
          </footer>
        </div>
      </main>
    </div>
  );
}

/* Statistics Card */
function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className={`rounded-xl p-3 ${iconColor}`}>
          <Icon size={23} />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

/* Sidebar Navigation Link */
function SidebarLink({ icon: Icon, label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-violet-50 text-violet-700"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
}

/* Task Row */
function TaskRow({ task, onToggle }) {
  const priorityStyles = {
    High: "bg-rose-50 text-rose-700",
    Medium: "bg-amber-50 text-amber-700",
    Low: "bg-emerald-50 text-emerald-700",
  };

  const statusStyles = {
    Pending: "bg-amber-50 text-amber-700",
    "In Progress": "bg-blue-50 text-blue-700",
    Completed: "bg-emerald-50 text-emerald-700",
  };

  const isCompleted = task.status === "Completed";

  return (
    <div className="flex items-start gap-3 px-5 py-5 transition hover:bg-slate-50/70 sm:items-center sm:px-6">
      <button
        type="button"
        onClick={onToggle}
        aria-label={
          isCompleted ? "Mark task as pending" : "Mark task as completed"
        }
        className={`mt-1 shrink-0 transition sm:mt-0 ${
          isCompleted
            ? "text-emerald-600"
            : "text-slate-300 hover:text-violet-600"
        }`}
      >
        <CheckCircle2 size={23} />
      </button>

      <div className="min-w-0 flex-1">
        <h3
          className={`truncate text-sm font-semibold ${
            isCompleted
              ? "text-slate-400 line-through"
              : "text-slate-800"
          }`}
        >
          {task.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {task.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2 sm:hidden">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}
          >
            {task.priority}
          </span>

          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[task.status]}`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="hidden shrink-0 items-center gap-3 sm:flex">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {task.category}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}
        >
          {task.priority}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status]}`}
        >
          {task.status}
        </span>

        <span className="flex items-center gap-1 text-xs text-slate-500">
          <CalendarDays size={14} />
          {task.dueDate}
        </span>

        <button
          type="button"
          onClick={() => alert("Task editing will be implemented next.")}
          aria-label={`More options for ${task.title}`}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>
    </div>
  );
}

export default Dashboard;