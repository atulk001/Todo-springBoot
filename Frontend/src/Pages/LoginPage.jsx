import { useState } from "react";
import {
  CheckSquare,
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
  LockKeyhole,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login form submitted:", {
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    });

    // We'll connect this form to the Spring Boot login API later.
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Main Layout */}
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side - Branding */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-12 text-white lg:flex lg:flex-col lg:justify-between">
          {/* Decorative Background */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

          {/* Logo */}
          <a href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
              <CheckSquare size={25} />
            </div>

            <span className="text-2xl font-bold tracking-tight">
              TaskFlow
            </span>
          </a>

          {/* Branding Content */}
          <div className="relative max-w-lg">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <ShieldCheck size={17} />
              Your productivity journey starts here
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight xl:text-6xl">
              Make room for
              <span className="block text-violet-200">
                what matters.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-indigo-100">
              Organize your work, prioritize your goals, and turn your
              daily plans into meaningful progress.
            </p>

            {/* Decorative Task Preview */}
            <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-100">
                    Your productivity
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Small steps. Big results.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <CheckSquare size={25} />
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-2/3 rounded-full bg-white" />
              </div>

              <div className="mt-3 flex justify-between text-sm text-indigo-100">
                <span>Stay focused</span>
                <span>Keep moving forward</span>
              </div>
            </div>
          </div>

          <p className="relative text-sm text-indigo-200">
            © {new Date().getFullYear()} TaskFlow. Built for better days.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <a
              href="/"
              className="mb-10 flex items-center justify-center gap-2 lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
                <CheckSquare size={23} />
              </div>

              <span className="text-2xl font-bold text-slate-900">
                TaskFlow
              </span>
            </a>

            {/* Back Link */}
            <a
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-600"
            >
              <ArrowLeft size={16} />
              Back to home
            </a>

            {/* Heading */}
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <LockKeyhole size={24} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back!
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your details to access your TaskFlow workspace.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
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
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                </div>

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
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-violet-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300 accent-violet-600"
                  />
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-200 focus:outline-none focus:ring-4 focus:ring-violet-200"
              >
                Sign in
                <ArrowRight
                
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                href="/register"
                className="font-semibold text-violet-600 transition hover:text-violet-700"
              >
                Create an account
              </a>
            </p>

            {/* Bottom Note */}
            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Your workspace, your goals, your progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;