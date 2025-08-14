import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className="flex flex-col gap-5 lg:px-32 xl:px-72 caret-blue-600"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl lg:text-4xl text-blue-600 font-bold text-center">
        Sign In
      </h2>

      <label className="text-gray-700 font-bold text-md flex-1">
        Email
        <input
          type="email"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 font-bold text-md flex-1">
        Password
        <input
          type="password"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 9,
              message: "Password can't be more than 9 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <span className="flex items-center justify-between max-sm:flex-col-reverse gap-3">
        <span className="text-lg">
          Not Registered?{" "}
          <Link to="/register" className="underline text-blue-700">
            Create an account
          </Link>
        </span>

        <div className="border border-blue-400 p-1">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-3 font-semibold text-xl hover:opacity-95"
          >
            Sign In
          </button>
        </div>
      </span>
    </form>
  );
};

export default SignIn;
