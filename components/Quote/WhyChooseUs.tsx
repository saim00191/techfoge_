
import type { WhyChooseUsSectionProps } from "@/types/Quote"

export const WhyChooseUsSection = ({ features }: WhyChooseUsSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-white to-[#00D1FF] bg-clip-text text-transparent">
            Why Choose Tech Foge?
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-[#00D1FF]/20 rounded-xl p-6 text-center hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-[#00D1FF] mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
