import foodImage from "./../../assets/images/unsplash_8Nc_oQsc2qQ.png";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage = (): React.ReactNode => {
  return (
    <main className="flex h-screen">
      <section className="w-1/2 flex items-center">
        <div className="w-3/4">
          <h1 className="font-bold text-5xl my-6">Sign up</h1>
          <p className="text-lg mb-14 space-x-2">
            <span className="text-#5C4529">Already registered?</span>
            <Link className="text-blue-400 font-medium" to="/auth/login">
              Log in
            </Link>
          </p>
          <RegisterForm />
        </div>
      </section>
      <section className="w-1/2 flex justify-between">
        <img className="w-full h-auto" src={foodImage} alt="" />
      </section>
    </main>
  );
};

export default LoginPage;
