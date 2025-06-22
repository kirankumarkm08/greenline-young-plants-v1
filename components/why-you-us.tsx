import { Check, Leaf, Users, Clock, Award, Heart } from "lucide-react"

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Superior Quality Young Plants",
      description: "Premium carnation varieties bred for excellence and longevity",
    },
    {
      icon: Clock,
      title: "Timely and Safe Delivery",
      description: "Reliable logistics ensuring your plants arrive fresh and on schedule",
    },
    {
      icon: Users,
      title: "Experienced and Trained Team",
      description: "Decades of expertise in carnation breeding and cultivation",
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      description: "Dedicated support and personalized solutions for your needs",
    },
    {
      icon: Leaf,
      title: "Sustainable and Eco-Friendly Practices",
      description: "Committed to environmental responsibility in all our operations",
    },
  ]

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🤝</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the trusted partner for carnation growers worldwide
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-rose-200"
              >
                {/* Icon and Checkmark */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full font-medium hover:from-pink-700 hover:to-rose-700 transition-all cursor-pointer">
            <span>Ready to Partner With Us?</span>
            <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </section>
  )
}
