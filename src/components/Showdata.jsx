import React from "react";

function Showdata({ users }) {
  return (
    <div className="min-h-screen bg-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        User List
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.slice(0, 12).map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={user.url}
              alt={user.title}
              className="w-full h-52 object-cover rounded-xl"
            />

            <h2 className="mt-4 text-lg font-semibold text-blue-700">
              {user.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showdata;