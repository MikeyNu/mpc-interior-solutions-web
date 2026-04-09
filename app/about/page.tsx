import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">

        {/* Hero */}
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/stitch/about/hero.jpg"
              alt="Luxurious modern interior with bespoke wooden cabinetry in a high-end Pretoria residence"
              fill priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#173128]/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdf9f5] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full">
            <Container>
              <div className="max-w-3xl">
                <span className="inline-block py-1 px-3 bg-[#8a4f31] text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-6 font-body">
                  Established 2019
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-8 drop-shadow-sm font-headline">
                  Built Around Quality,<br />Detail, and Custom<br />Craftsmanship
                </h1>
                <div className="w-24 h-1 bg-[#8a4f31]" />
              </div>
            </Container>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#173128] leading-tight font-headline">
                  Heritage in Every Joint,<br />Innovation in Every Line.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-8">
                <p className="text-xl text-[#424845] font-light leading-relaxed font-body">
                  Founded in 2019, MPC Interior Solutions is a client-focused interiors company committed to delivering tailored solutions that combine functionality, quality, and visual impact. We believe that every space has potential, and our role is to bring that potential to life through workmanship, detail, and a clear understanding of our clients&apos; needs.
                </p>
                <p className="text-lg text-[#424845] leading-relaxed font-body">
                  We work closely with each client to ensure that every project reflects the required specifications, the intended use of the space, and the desired finish. Because no two projects are the same, our process is built around flexibility, communication, and custom execution rather than one-size-fits-all solutions.
                </p>
                <div className="pt-8">
                  <div className="flex items-center gap-4 text-[#8a4f31]">
                    <span className="material-symbols-outlined text-4xl">architecture</span>
                    <span className="font-headline italic text-2xl">Our reputation is built on turning ideas into finished spaces.</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Bento Grid */}
        <section className="bg-[#f7f3ef] py-32">
          <Container>
            <div className="mb-16">
              <p className="text-[#8a4f31] font-bold tracking-[0.3em] uppercase text-xs mb-4 font-body">Core Competencies</p>
              <h2 className="text-4xl font-semibold text-[#173128] font-headline">Tailored Service Spectrum</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[700px]">
              {/* Custom Furniture - spans 2 rows */}
              <div className="group relative md:row-span-2 overflow-hidden bg-[#fdf9f5] min-h-[300px]">
                <Image
                  src="/images/stitch/about/bento-furniture.jpg"
                  alt="Handcrafted walnut wood dining table with fine grain joinery"
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173128]/90 via-[#173128]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-semibold mb-2 font-headline">Custom Furniture</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed font-body">One-of-a-kind statement pieces designed to endure for generations.</p>
                </div>
              </div>
              {/* Cabinetry */}
              <div className="group relative overflow-hidden bg-[#fdf9f5] min-h-[300px] md:h-auto">
                <Image
                  src="/images/stitch/about/bento-cabinetry.jpg"
                  alt="Minimalist modern kitchen cabinetry in dark charcoal grey with marble splashback"
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173128]/90 via-[#173128]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-semibold mb-2 font-headline">Bespoke Cabinetry</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed font-body">Precision-engineered storage solutions for kitchens and dressing rooms.</p>
                </div>
              </div>
              {/* Commercial */}
              <div className="group relative overflow-hidden bg-[#fdf9f5] min-h-[300px] md:h-auto">
                <Image
                  src="/images/stitch/about/bento-commercial.jpg"
                  alt="Sleek corporate boardroom with custom acoustic panels and architectural glass table"
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173128]/90 via-[#173128]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-semibold mb-2 font-headline">Commercial Spaces</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed font-body">Sophisticated fit-outs for modern workspaces and luxury retail.</p>
                </div>
              </div>
              {/* Residential - spans 2 cols */}
              <div className="group relative md:col-span-2 overflow-hidden bg-[#fdf9f5] min-h-[300px] md:h-auto">
                <Image
                  src="/images/stitch/about/bento-residential.jpg"
                  alt="Open plan living room with integrated wall shelving and warm hardwood floors"
                  fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173128]/90 via-[#173128]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-semibold mb-2 font-headline">Residential Excellence</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed font-body max-w-md">Transforming private residences into masterworks of comfort and utility.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-32">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold text-[#173128] mb-6 font-headline">The MPC Advantage</h2>
                <p className="text-[#424845] text-lg font-light font-body">We pride ourselves on a process that is as refined as the final product. Every project is an exercise in meticulous execution.</p>
              </div>
              <span className="hidden md:block text-[120px] font-bold text-[#ebe7e4] leading-none select-none font-headline">03</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#c1c8c4]/20 pt-16">
              {[
                { icon: "rule", title: "Tailored Specification", desc: "No two clients are alike. We develop unique specifications that align perfectly with your architectural intent and lifestyle requirements." },
                { icon: "handyman", title: "Strong Workmanship", desc: "Our artisans combine traditional joinery techniques with modern technology to ensure structural integrity and flawless finishes." },
                { icon: "inventory_2", title: "Reliable Delivery", desc: "We respect your timeline. Our project management ensures that every installation is completed as promised, with minimal disruption." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="space-y-6">
                  <div className="w-12 h-12 bg-[#8a4f31]/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#8a4f31]">{icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#173128] font-headline">{title}</h3>
                  <p className="text-[#424845] leading-relaxed font-body">{desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="bg-[#173128] text-white py-32">
          <Container>
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 font-headline">Foundational Values</h2>
              <div className="w-16 h-1 bg-[#8a4f31] mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Craftsmanship", desc: "The relentless pursuit of excellence in every cut, sanding, and finish. We celebrate the touch of the human hand." },
                { title: "Precision", desc: "Millimeter-perfect accuracy in both design and execution. In our world, the smallest detail is the most important." },
                { title: "Client Focus", desc: "A collaborative journey from initial sketch to final installation. Your vision is our blueprint." },
              ].map(({ title, desc }) => (
                <div key={title} className="text-center">
                  <h3 className="text-2xl font-headline mb-4 text-[#fcaf8a]">{title}</h3>
                  <p className="text-white/70 font-light leading-relaxed font-body">{desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-32">
          <Container>
            <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#8a4f31]" />
              <h2 className="text-4xl md:text-5xl font-semibold text-[#173128] mb-8 font-headline">Ready to define your space?</h2>
              <p className="text-xl text-[#424845] font-light mb-12 max-w-2xl mx-auto font-body">
                Let&apos;s discuss your next project. Our team is ready to provide a tailored quote that reflects your specific requirements and budget.
              </p>
              <Link href="/quote" className="inline-flex items-center gap-4 bg-[#173128] text-white px-10 py-5 text-sm uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all rounded-sm font-body">
                Enquire Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </Container>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
