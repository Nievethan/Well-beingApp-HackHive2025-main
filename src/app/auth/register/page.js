import { UserIcon, LockClosedIcon } from '@heroicons/react/20/solid';

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-softBlue">
      <form className="bg-warmBeige p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-sandyBeach text-center">Register</h1>

        <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
          <UserIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Username"
            required
            className="ml-2 w-full outline-none bg-transparent text-gray-700"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
          <LockClosedIcon className="h-5 w-5 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            required
            className="ml-2 w-full outline-none bg-transparent text-gray-700"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <label className="text-sandyBeach flex items-center gap-1">
            <input type="checkbox" className="mr-1" /> Remember me
          </label>
          <a href="#" className="text-sandyBeach hover:bg-softBlue"> Forgot Password? </a>
        </div>

        <button className="bg-coastWave text-sandyBeach rounded-lg shadow-md hover:bg-softBlue transition py-2">
          Login
        </button>

        <p className="text-sm text-center text-gray-700">
          Don't have an account? <a href="#" className="text-sandyBeach hover:text-turquoise"> Register </a>
        </p>
      </form>
    </div>
  );
}
