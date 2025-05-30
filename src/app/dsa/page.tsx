export default function DSAPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Data Structures</span>
            <span className="block text-blue-600">& Algorithms</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            My journey through problem-solving and algorithmic thinking.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add your DSA content cards here */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">LeetCode Progress</h3>
              <p className="mt-1 text-sm text-gray-500">
                Track my problem-solving journey on LeetCode.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">CodeForces</h3>
              <p className="mt-1 text-sm text-gray-500">
                Competitive programming achievements and ratings.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Problem Solving</h3>
              <p className="mt-1 text-sm text-gray-500">
                Solutions and approaches to various algorithmic challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 