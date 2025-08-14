import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className="flex flex-col gap-5 lg:px-32 xl:px-56 caret-blue-600"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl lg:text-4xl text-blue-600 font-bold text-center">
        Create an Account
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 font-bold text-base flex-1">
          First Name
          <input
            type="text"
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
            {...register("firstName", {
              required: "First Name field is required",
            })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>

        <label className="text-gray-700 font-bold text-base flex-1">
          Last Name
          <input
            type="text"
            className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
            {...register("lastName", {
              required: "Last Name field is required",
            })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>

      <label className="text-gray-700 font-bold text-base flex-1">
        Email
        <input
          type="email"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("email", { required: "Email field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 font-bold text-base flex-1">
        Password
        <input
          type="password"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("password", {
            required: "Password field is required",
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

      <label className="text-gray-700 font-bold text-base flex-1">
        Confirm Password
        <input
          type="password"
          className="border border-1 border-gray-400 outline-blue-600 rounded w-full p-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "Confirm Password field is required";
              } else if (watch("password") !== val) {
                return "Your Passwords do not match";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>

      <span className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
        <span className="text-lg">
          Already have an account?{" "}
          <Link to="/sign-in" className="underline text-blue-700">
            Sign In
          </Link>
        </span>

        <div className="border border-blue-400 p-1 mt-1 sm:mt-0">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 font-semibold text-xl hover:opacity-95"
          >
            Create Account
          </button>
        </div>
      </span>
    </form>
  );
};

export default Register;
