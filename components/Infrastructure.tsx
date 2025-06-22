import { Thermometer, Droplets, SproutIcon as Seedling, Shield, TrendingUp, Calendar } from "lucide-react"

export default function Infrastructure() {
  const facilities = [
    {
      icon: Thermometer,
      title: "Greenhouses with Climate Control",
      description: "Advanced climate management systems ensuring optimal growing conditions",
      features: ["Temperature regulation", "Humidity control", "Ventilation systems"],
    },
    {
      icon: Droplets,
      title: "Automated Misting and Irrigation Systems",
      description: "Precision watering technology for consistent plant hydration",
      features: ["Smart sensors", "Automated scheduling", "Water conservation"],
    },
    {
      icon: Seedling,
      title: "Quality Germination Trays and Media",
      description: "Premium growing materials designed for optimal plant development",
      features: ["Sterile growing medium", "Drainage optimization", "Root development support"],
    },
    {
      icon: Shield,
      title: "Hygienic and Monitored Plant Propagation Areas",
      description: "Controlled environments with continuous monitoring for plant health",
      features: ["Sterile conditions", "24/7 monitoring", "Disease prevention protocols"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-3xl">🏭</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Infrastructure</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art nursery and growing facilities are equipped with cutting-edge technology to ensure the
            highest quality plant production.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {facility.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {facility.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Consistent Quality & Efficient Scaling</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                This allows us to maintain consistency in plant quality year-round and scale efficiently based on
                demand.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Year-Round Production</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Scalable Operations</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-green-100 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-green-100 text-sm">Climate Control</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">365</div>
                <div className="text-green-100 text-sm">Days Production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">Auto</div>
                <div className="text-green-100 text-sm">Irrigation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
