import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="pt-10">
      <div className="max-w-4xl mx-auto shadow-lg rounded-2xl text-center bg-[url('src/assets/img/bg.jpeg')] bg-cover bg-center h-[50vh]  ">
        <div className="h-[50vh] inset-0 bg-black/50 rounded-2xl max:w-4xl flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">Signup</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              className="border-2 border-white text-white block m-auto w-[400px] h-[40px] rounded-full p-4 mt-10"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-white text-white block m-auto w-[400px] h-[40px] rounded-full p-4 mt-10"
            />
            <button
              type="submit"
              className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-300 transition mt-10"
            >
              Log in
            </button>
          </form>
          <p className="text-white pt-4">Donot have account? <Link></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;