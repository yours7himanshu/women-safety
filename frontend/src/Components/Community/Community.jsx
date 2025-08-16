

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Community Hub</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Connect with other women, share experiences, and build a supportive network for safety and empowerment.
            </p>
          </div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4l4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Discussion Forums</h3>
              <p className="text-gray-600 text-sm">
                Join conversations about safety tips, experiences, and support in our moderated forums.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety Events</h3>
              <p className="text-gray-600 text-sm">
                Attend workshops, self-defense classes, and community safety events in your area.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Groups</h3>
              <p className="text-gray-600 text-sm">
                Find and join local support groups or create your own for peer support and encouragement.
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Recent Community Activity</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-semibold text-sm">SA</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">Sarah A.</h4>
                    <span className="text-gray-500 text-sm">2 hours ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Just attended the self-defense workshop downtown. Highly recommend it to everyone! The instructors were amazing.
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 12 likes</button>
                    <button className="hover:text-blue-600">💬 3 replies</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">MJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">Maria J.</h4>
                    <span className="text-gray-500 text-sm">5 hours ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Looking for walking buddies in the downtown area for evening walks. Safety in numbers! 🚶‍♀️
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 8 likes</button>
                    <button className="hover:text-blue-600">💬 7 replies</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">LK</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">Lisa K.</h4>
                    <span className="text-gray-500 text-sm">1 day ago</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Thank you all for the support during my difficult time. This community has been a lifesaver! ❤️
                  </p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="hover:text-blue-600">👍 25 likes</button>
                    <button className="hover:text-blue-600">💬 15 replies</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Community */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-6 opacity-90">
              Be part of a supportive network of women committed to safety and empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Join Discussion Forums
              </button>
              <button className="bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-800 transition-colors">
                Find Local Events
              </button>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Community Guidelines</h3>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• Be respectful and supportive of all community members</li>
              <li>• Share experiences and advice constructively</li>
              <li>• Maintain privacy and confidentiality when sharing personal stories</li>
              <li>• Report any inappropriate behavior to moderators</li>
              <li>• Keep discussions focused on safety, support, and empowerment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
