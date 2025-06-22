"use client"

import { Leaf, Globe, Users, Award, Building, Handshake } from "lucide-react"

const statistics = [
  {
    icon: Leaf,
    number: "52",
    label: "Young plant varieties",
  },
  {
    icon: Building,
    number: "3",
    label: "Growing facilities",
  },
  {
    icon: Globe,
    number: "12",
    label: "Countries where we are present",
  },
  {
    icon: Award,
    number: "85",
    label: "Different varieties",
  },
  {
    icon: Users,
    number: "45",
    label: "Employees",
  },
  {
    icon: Handshake,
    number: "28",
    label: "Supporting growers",
  },
]

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className={`h-12 w-12 `} />
                </div>
                <div className={`text-4xl font-bold mb-2 `}>{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium leading-tight px-2">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
