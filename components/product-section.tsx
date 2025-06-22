"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Vegetable Seedlings",
    description: "Premium quality vegetable seedlings for commercial and home growing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Vegetables",
  },
  {
    title: "Flower Young Plants",
    description: "Beautiful flowering plants for gardens, landscaping, and commercial use.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Flowers",
  },
  {
    title: "Herb Varieties",
    description: "Aromatic herbs and culinary plants for fresh cooking and commercial production.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Herbs",
  },
  {
    title: "Ornamental Plants",
    description: "Decorative plants perfect for landscaping and interior decoration.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ornamentals",
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From vegetables to ornamentals, we provide high-quality young plants for every growing need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }} />
              <CardContent className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
