import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { IoMdClose } from "react-icons/io";
import { FaGoogle, FaRegUser } from "react-icons/fa";
import { LiaEyeSlash } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { ContextAccount } from "../../contexts/AccountProvider";
import { ContextAuth } from "../../contexts/AuthProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const innnerLogin = {
  email: "",
  password: "",
};

export default function Login({ openLogin, handleCloseLogin ,handleClickOpen  }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [login, setLogin] = React.useState(innnerLogin);
  const [error, setError] = React.useState(innnerLogin);
  const accounts = React.useContext(ContextAccount);
  const { handleLoginAcc } = React.useContext(ContextAuth);
  const validation = () => {
    const newError = {};
    newError.email = login.email ? "" : "Please enter email input";
    newError.password = login.password ? "" : "Please enter password input";
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleChangeInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (validation()) {
      return;
    }
    const accountExists = accounts.find(
      (acc) => acc.email === login.email && acc.password === login.password,
    );
    if (!accountExists) {
      alert("Tài khoản hoặc mật khẩu không đúng");
      return;
    }
    handleLoginAcc(accountExists);
    handleCloseLogin();
  };

  return (
    <Dialog
      open={openLogin}
      slots={{
        transition: Transition,
      }}
      fullWidth="md"
      keepMounted
      onClose={handleCloseLogin}
      aria-describedby="alert-dialog-slide-description"
      role="alertdialog"
      className="relative"
    >
      <div className="p-6 w-full">
        <div className="text-center font-bold text-2xl">Login</div>

        <IoMdClose
          onClick={handleCloseLogin}
          className="absolute right-4 top-4 text-4xl font-bold text-neutral-800 cursor-pointer  transition-all duration-300"
        />

        <div className="flex flex-col gap-2 mt-1">
          <label className="font-medium text-neutral-800">
            <span className="text-red-500">*</span> Email
          </label>

          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChangeInput}
              value={login.email}
              className="w-full pl-10 pr-2 py-4 border border-[#bbbbbb] rounded-xl bg-[#f0f0f0]"
            />

            <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          <label className="font-medium text-neutral-800">
            {" "}
            <span className="text-red-500">*</span> Password
          </label>

          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              onChange={handleChangeInput}
              value={login.password}
              className="w-full pl-2 py-4 border border-[#bbbbbb]  rounded-xl bg-[#f0f0f0]"
            />
            {showPassword ? (
              <LiaEyeSolid
                onClick={() => setShowPassword(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            ) : (
              <LiaEyeSlash
                onClick={() => setShowPassword(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            )}
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
          </div>

          <div className="flex gap-2 items-center justify-center mt-2">
            <a className="text-blue-500 cursor-pointer">Forgot password?</a>

            <button
              onClick={handleLogin}
              className="cursor-pointer px-4 py-2 bg-neutral-800 text-white rounded-2xl"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-2 text-neutral-800">
            <p>
              Don't have an account?{" "}
              <span
                onClick={handleClickOpen}
                className="text-blue-500 cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>
          <div className="relative flex items-center gap-4 my-4">
            <div className="flex-1 border-t border-neutral-800"></div>

            <span className="text-sm text-neutral-500 uppercase tracking-widest">
              OR
            </span>

            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
          <button className=" cursor-pointer w-fit mx-auto flex items-center gap-3 px-6 py-3 border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-300 shadow-lg">
            <FaGoogle className=" text-lg" />
            <span className="font-medium">Continue with Google</span>
          </button>
          <div className="text-center text-sm text-gray-400 flex flex-col gap-3 mt-5">
            <p>
              By signing up, you agree to our{" "}
              <a className="text-blue-500 hover:text-blue-400 cursor-pointer transition">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="text-blue-500 hover:text-blue-400  cursor-pointer transition">
                Privacy Policy
              </a>
            </p>

            <p>
              Need help?{" "}
              <a className="text-blue-500 hover:text-blue-400  cursor-pointer transition">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
