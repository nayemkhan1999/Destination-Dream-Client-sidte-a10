import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithubSquare } from "react-icons/fa";

const Login = () => {
  const { LoginUser, googleLoginUser, gitHubLoginUser } = UseAuth();
  console.log(LoginUser);
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    LoginUser(email, password).then((result) => {
      console.log(result);
    });
  };

  // social Provider navigate
  const handleSocialUser = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
      }
    });
  };

  return (
    <div className="container mx-auto img">
      <div className="hero ">
        <div className="hero-content ">
          <div className="card shrink-0 w-96  text-white bg-black shadow-xl ">
            <h1 className="text-5xl font-bold mx-auto mt-2">House</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-black font-medium"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 opacity-70 text-xs text-left">
                    Please Enter Your Email
                  </span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="">Password</span>
                </label>

                <input
                  type={showIcon ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered text-black font-medium relative"
                  {...register("password", { required: true })}
                />
                <span
                  className="absolute top-[53px] right-[15px] text-black text-lg"
                  onClick={() => setShowIcon(!showIcon)}
                >
                  {showIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>

                {errors.password && (
                  <span className="text-red-500 opacity-70 text-xs text-left">
                    Please Enter Your Password
                  </span>
                )}
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-error text-white font-bold text-xl">
                  Sing In
                </button>
              </div>
              <label className="opacity-60">
                <a href="#">Forgot password?</a>
              </label>

              <div className="flex flex-col w-full">
                <div className="divider divider-neutral">Or Login With</div>
              </div>
              <div className="flex items-center justify-between gap-2">
                {/* Another LInks */}

                <button
                  onClick={() => handleSocialUser(googleLoginUser)}
                  className="btn btn-active text-sm opacity-90 text-black font-medium"
                >
                  continue with
                  <span className="text-3xl">
                    <FcGoogle />
                  </span>
                </button>

                <button
                  onClick={() => handleSocialUser(gitHubLoginUser)}
                  className="btn  btn-active text-sm opacity-90 text-black font-medium"
                >
                  continue with
                  <span className="text-3xl">
                    <FaGithubSquare />
                  </span>
                </button>
              </div>

              <div className="text-center">
                <Link to="/register">
                  <span> New to House? </span>
                  <span className="text-success  font-bold underline ">
                    Sign up now
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
