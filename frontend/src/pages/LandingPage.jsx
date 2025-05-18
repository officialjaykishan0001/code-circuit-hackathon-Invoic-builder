import React from 'react'
import { ArrowRight, ZapIcon, CalculatorIcon, FileBarChart } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import Navbar from '../components/ui/Navbar'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden relative w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,195,240,0.1),rgba(51,195,240,0)_50%)]"></div>
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="animate-particles absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                background: `rgba(${Math.random() * 155 + 100}, ${Math.random() * 155 + 100}, 255, ${Math.random() * 0.5 + 0.3})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>
      <Navbar />

      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto text-center mb-16 animate-fade-in pt-16">
          <h1 className="text-6xl font-mono font-bold mb-6 ">
            Power your billing with the future.
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Streamlined invoice creation with automated tax calculations, real-time preview,
            and comprehensive discount support for modern businesses.
          </p>

          <button
            onClick={() => navigate('/signup')}
            className="cursor-pointer px-8 py-6 h-auto  text-lg font-semibold rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 animate-hover-glow z-100"
          >
            <div className="flex">
              Launch App
              <ArrowRight className="ml-2" />
            </div>

          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
          {[
            {
              icon: <CalculatorIcon className="h-8 w-8 text-neon-blue" />,
              title: "Automatic Tax Calculation",
              description: "Accurate tax rates applied instantly with support for multiple regions and tax codes."
            },
            {
              icon: <FileBarChart className="h-8 w-8 text-neon-purple" />,
              title: "Real-time Preview",
              description: "See your invoice update in real-time as you make changes, ensuring pixel-perfect documents."
            },
            {
              icon: <ZapIcon className="h-8 w-8 text-neon-orange" />,
              title: "Smart Discount System",
              description: "Apply fixed amounts or percentage discounts with a click, with real-time total recalculation."
            }
          ].map((feature, index) => (
            <Card key={index} className="glass-card border-white/10 overflow-hidden relative group animate-scale-in " style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6 relative z-10">
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-mono font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Futuristic Invoice Builder. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage