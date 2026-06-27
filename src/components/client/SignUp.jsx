import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { IoMdClose } from "react-icons/io";
import { FaGoogle, FaRegUser } from "react-icons/fa";
import { LiaEyeSlash, LiaEyeSolid } from "react-icons/lia";
import { addDocument } from "../../services/firebaseService";
import { ROLES } from "../../utils/Contants";
import { ContextAccount } from "../../contexts/AccountProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const innnerSignUp = {
  userName: "",
  email: "",
  password: "",
  imgUrl: "",
  role: ROLES.USER,
  confirmPassword: "",
};

export default function SignUp({
  openSignUp,
  handleClose,
  handleClickOpenLogin,
}) {
  const [signUp, setSignUp] = React.useState(innnerSignUp);
  const [error, setError] = React.useState(innnerSignUp);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const accounts = React.useContext(ContextAccount);
  // accounts => context
  const validation = () => {
    const newError = {};
    newError.userName = signUp.userName ? "" : "Please enter username input";

    newError.email = signUp.email ? "" : "Please enter email input";

    const emailExits = accounts.some(
      (acc) => acc.email.toLowerCase() == signUp.email.toLowerCase(),
    );
    if (emailExits) {
      newError.email = "Email da duoc su dung";
    }
    newError.password = signUp.password ? "" : "Please enter password input";
    newError.confirmPassword = signUp.confirmPassword
      ? ""
      : "Please enter confirm password input";
    if (
      signUp.password &&
      signUp.confirmPassword &&
      signUp.password !== signUp.confirmPassword
    ) {
      newError.confirmPassword = "Password does not match";
    }
    setError(newError);
    return Object.values(newError).some((e) => e !== "");
  };

  const handleChangeInput = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const addUserSignUp = async () => {
    if (validation()) {
      return;
    }
    const { confirmPassword, ...accountNew } = signUp;
    await addDocument("Accounts", accountNew);
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={openSignUp}
        slots={{
          transition: Transition,
        }}
        fullWidth="md"
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        role="alertdialog"
        className="relative"
      >
        <div className="p-6 w-full min-w-75">
          <div className="text-center font-bold text-2xl">{"Sign Up"}</div>
          <IoMdClose
            onClick={handleClose}
            className="absolute right-4 top-4 text-4xl font-bold text-neutral-800 cursor-pointer  transition-all duration-300"
          />

          <div className="flex flex-col gap-2 mt-1">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-neutral-800">
                <span className="text-red-500">*</span> Username
              </label>
              <div className="relative">
                <input
                  name="userName"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-2 py-4 border border-[#bbbbbb] rounded-xl bg-[#f0f0f0]"
                  onChange={handleChangeInput}
                  value={signUp.userName}
                />
                <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                {error.userName && (
                  <p className="text-red-500 text-sm">{error.userName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-neutral-800">
                <span className="text-red-500">*</span> Email
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-2 py-4 border border-[#bbbbbb] rounded-xl bg-[#f0f0f0]"
                  onChange={handleChangeInput}
                  value={signUp.email}
                />
                <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                {error.email && (
                  <p className="text-red-500 text-sm">{error.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-neutral-800">
                <span className="text-red-500">*</span> Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-2 pr-10 py-4 border border-[#bbbbbb] rounded-xl bg-[#f0f0f0]"
                  onChange={handleChangeInput}
                  value={signUp.password}
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
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium text-neutral-800">
                <span className="text-red-500">*</span> Confirm Password
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="w-full pl-2 pr-10 py-4 border border-[#bbbbbb] rounded-xl bg-[#f0f0f0]"
                  onChange={handleChangeInput}
                  value={signUp.confirmPassword}
                />

                {showPasswordConfirm ? (
                  <LiaEyeSolid
                    onClick={() => setShowPasswordConfirm(false)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                ) : (
                  <LiaEyeSlash
                    onClick={() => setShowPasswordConfirm(true)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                )}
                {error.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {error.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center text-center mt-6 gap-4">
              <button
                onClick={addUserSignUp}
                className="w-full py-3 border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-all duration-300 shadow-lg"
              >
                Sign Up
              </button>

              <div className="flex items-center justify-center gap-1 text-neutral-800">
                <p>Already have an account?</p>

                <button
                  onClick={handleClickOpenLogin}
                  className="text-blue-500 hover:text-blue-400 font-medium transition cursor-pointer"
                >
                  Login
                </button>
              </div>
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
    </React.Fragment>
  );
}
