import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckSquare,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  UserRound,
  Mail,
  LockKeyhole,
  CheckCircle2,
  Zap,
  Target,
  Users,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms before continuing.");
      return;
    }

    setError("");

    // We'll connect this form to the Spring Boot registration API later.
    console.log("Registration form submitted", {
      fullName: formData.fullName,
      email: formData.email,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE: REGISTRATION FORM */}
        <div className="flex flex-col px-6 py-8 sm:px-12 lg:px-16 xl:px-20">

          {/* Navbar */}
          <header className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-200">
                <CheckSquare size={25} />
              </div>

              <span className="text-2xl font-bold tracking-tight text-slate-900">
                TaskFlow
              </span>
            </Link>

            <div className="text-sm text-slate-500">
              <span className="hidden sm:inline">
                Already have an account?{" "}
              </span>

              <Link
                to="/login"
                className="font-semibold text-violet-600 hover:text-violet-700"
              >
                Login
              </Link>
            </div>
          </header>

          {/* Form Container */}
          <div className="mx-auto my-10 w-full max-w-xl flex-1 py-4">

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Create your account
              </h1>

              <p className="mt-3 text-base leading-7 text-slate-500">
                Join TaskFlow and start organizing your tasks today.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-violet-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 accent-violet-600"
                  />

                  <span>
                    I agree to the{" "}
                    <span className="font-medium text-violet-600">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-violet-600">
                      Privacy Policy
                    </span>
                    .
                  </span>
                </label>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Create Account

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition hover:text-violet-700"
              >
                <ArrowLeft size={17} />
                Back to home
              </Link>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto pt-4 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </footer>
        </div>

        {/* RIGHT SIDE: BRANDING PANEL */}
        <aside className="relative hidden overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 px-10 py-16 lg:flex lg:flex-col lg:items-center lg:justify-center xl:px-16">

          {/* Decorative Background */}
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

          {/* Branding Content */}
          <div className="relative z-10 w-full max-w-xl">

            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
                <Users size={17} />
                Join thousands of productive people
              </span>
            </div>

            <h2 className="text-center text-4xl font-bold tracking-tight text-slate-900 xl:text-5xl">
              Organize. Plan.{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Achieve.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-center text-base leading-7 text-slate-600">
              Create your account and get access to tools that help you
              manage tasks, track progress, and achieve your goals.
            </p>

            {/* Feature Preview */}
            <div className="mt-12 rounded-3xl border border-white bg-white/80 p-6 shadow-xl shadow-indigo-100/70 backdrop-blur-sm">

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-violet-100 p-2.5 text-violet-700">
                    <CheckSquare size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      My Workspace
                    </h3>

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
                <div className="rounded-xl bg-violet-50 p-3">
                  <CheckSquare className="h-5 w-5 text-violet-600" />

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    12
                  </p>

                  <p className="text-xs text-slate-500">
                    Total Tasks
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    08
                  </p>

                  <p className="text-xs text-slate-500">
                    Completed
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-3">
                  <Target className="h-5 w-5 text-amber-600" />

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    04
                  </p>

                  <p className="text-xs text-slate-500">
                    Pending
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6 rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Weekly progress
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Keep moving forward!
                    </p>
                  </div>

                  <span className="text-xl font-bold text-violet-700">
                    68%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-violet-100">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-600 to-blue-600" />
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              <Benefit
                icon={CheckCircle2}
                title="Stay Organized"
                description="Keep all your tasks in one place."
              />

              <Benefit
                icon={Zap}
                title="Boost Productivity"
                description="Get more done every day."
              />

              <Benefit
                icon={Target}
                title="Achieve Goals"
                description="Turn your plans into progress."
              />

              <Benefit
                icon={Users}
                title="Work Better"
                description="Simple tools for real results."
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Benefit({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
        <Icon size={21} />
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Register;