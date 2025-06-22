import { MapPin, Leaf, Users, Clock, Zap, Award } from "lucide-react"

export default function WhoWeAre() {
  const highlights = [
    {
      icon: Leaf,
      title: "Systematic Growing Processes",
      description: "Methodical approach to plant cultivation ensuring consistent quality",
    },
    {
      icon: Users,
      title: "Professional Handling",
      description: "Expert care and attention throughout the entire growing cycle",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics ensuring your plants arrive fresh and on schedule",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "Cutting-edge agricultural technology integrated with traditional expertise",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">🏢</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Company Introduction */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-green-100 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Based in Bengaluru, Karnataka</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  <span className="text-green-600">Greenline Young Plants</span>
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We specialize in producing healthy, high-quality ornamental and flowering plant seedlings. We are
                  known for our systematic growing processes, professional handling, and timely delivery.
                </p>
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl">
                  <p className="font-medium leading-relaxed">
                    Our success lies in blending agricultural expertise with modern technology to ensure the best
                    possible outcomes for our clients.
                  </p>
                </div>
              </div>

              {/* Company Stats */}
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">Premium</div>
                    <div className="text-green-600 text-sm">Quality Plants</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">Expert</div>
                    <div className="text-green-600 text-sm">Agricultural Team</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">Modern</div>
                    <div className="text-green-600 text-sm">Technology</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-800 mb-1">Reliable</div>
                    <div className="text-green-600 text-sm">Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium hover:from-green-700 hover:to-emerald-700 transition-all cursor-pointer shadow-lg hover:shadow-xl">
              <span>Partner with Greenline Young Plants</span>
              <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
