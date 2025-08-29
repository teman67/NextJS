import { redirect } from "next/navigation";
import { getTrainings } from "@/lib/training";
import { verifyAuth } from "@/lib/auth";
import { logout } from "@/actions/auth-actions";

export default async function TrainingPage() {
  const { user } = await verifyAuth();

  if (!user) {
    redirect("/");
  }

  const trainingSessions = getTrainings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <header className="bg-gray-900 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Training Sessions</h1>
          <form action={logout}>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg transition duration-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-200 mb-2">
            Find your favorite activity
          </h2>
          <p className="text-gray-400">
            Choose from our variety of training sessions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingSessions.map((training) => (
            <div
              key={training.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-200 transform hover:scale-105"
            >
              <img
                src={`/trainings/${training.image}`}
                alt={training.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {training.title}
                </h3>
                <p className="text-gray-300 text-center text-sm">
                  {training.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
