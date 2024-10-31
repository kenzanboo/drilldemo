 // Start of Selection
import Speak from "@/components/voice/speak"
import { Card, CardContent } from "@/components/ui/card"
import { Drill, Hammer, Truck, HardHat, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Drill & Demo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-[600px] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <img
                // Start of Selection
                src="/images/image.webp"
                alt="Heavy machinery in action"
                className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 text-center">
            <h2 className="text-5xl font-bold mb-4">Drill & Demo</h2>
            <p className="text-xl mb-8">Expert excavation and structural demolition services</p>
            <Speak />
          </div>
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Drill className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Residential Drilling</h3>
                  <p>Precise drilling solutions for home renovations and improvements.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Hammer className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Commercial Demolition</h3>
                  <p>Safe and efficient demolition services for commercial properties.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Truck className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Site Preparation</h3>
                  <p>Comprehensive site preparation for construction projects.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <HardHat className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Concrete Cutting</h3>
                  <p>Specialized concrete cutting for precision and efficiency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  company: "ABC Construction",
                  quote: "Exceptional service and precision. Highly recommended!"
                },
                {
                  name: "Jane Smith",
                  company: "XYZ Developers",
                  quote: "Professional team with top-notch equipment. Great results!"
                },
                {
                  name: "Mike Johnson",
                  company: "123 Renovations",
                  quote: "Timely, efficient, and clean. Couldn't ask for more."
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Drill & Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}