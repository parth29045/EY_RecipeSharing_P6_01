// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   navigate("/register"); // Change the path as needed
  // };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-bold text-center text-orange-300 mb-4">
        🥗 About Us – Recipe Sharing Platform
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to <span className="font-semibold">ShareRecp</span>! 👋
        <br />
        We believe that great recipes bring people together. Whether youre a
        home cook, a professional chef, or just love good food, our platform is
        designed for you to <span className="font-semibold">share</span>,{" "}
        <span className="font-semibold">discover</span>, and{" "}
        <span className="font-semibold">enjoy</span> recipes from around the
        world. 🌍✨
      </p>

      <h2 className="text-2xl font-semibold text-orange-300 mb-2">
        🍳 What We Offer:
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          📖 <strong>Recipe Library</strong> — A vast collection of
          user-generated recipes.
        </li>
        <li>
          🧑‍🍳 <strong>Community Sharing</strong> — Share your recipes, tips, and
          stories.
        </li>
        <li>
          📸 <strong>Photo Uploads</strong> — Add images to make your recipes
          pop.
        </li>
        <li>
          💬 <strong>Real-Time Feedback</strong> — Like, comment, and review
          recipes instantly.
        </li>
        <li>
          🔒 <strong>Secure & Inclusive</strong> — A safe, welcoming community
          for everyone.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-orange-300 mb-2">
        💡 Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>
          👩‍🍳 <strong>Easy-to-Follow Recipes</strong> for all skill levels.
        </li>
        <li>
          🥦 <strong>Healthy Options</strong> with dietary-specific filters.
        </li>
        <li>
          ⭐ <strong>Save Your Favorites</strong> to build your recipe
          collection.
        </li>
        <li>
          💬 <strong>Interactive Features</strong> — Join challenges and share
          cooking hacks.
        </li>
      </ul>

      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-orange-300">
          ❤️ Join Our Food-Loving Community!
        </h3>
        <p className="text-gray-700 my-4">
          Share your culinary creations, explore new dishes, and be part of a
          global community that celebrates the art of cooking. 🍝🍰
        </p>
        {/* <button
          onClick={handleGetStarted}
          className="bg-orange-300 text-white px-6 py-3 rounded-full hover:bg-orange-300 transition"
        >
          👉 Get Started Now!
        </button>
        <p className="mt-4 text-gray-600">
          Already a member?{" "}
          <Link to="/login" className="text-orange-300 underline">
            Log In
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default About;
