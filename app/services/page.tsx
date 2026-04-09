import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";

const checkItems = (items: string[]) =>
  items.map((item) => (
    <li key={item} className="flex items-start gap-3 text-sm text-[#424845]">
      <span className="material-symbols-outlined text-[#8a4f31] text-lg leading-5">check_circle</span>
      {item}
    </li>
  ));

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">

        {/* Hero Intro */}
        <section className="mb-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-[#8a4f31] mb-6 block">Our Expertise</span>
                <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#173128] mb-8 font-headline">
                  The Art of<br />Precision Joinery
                </h1>
                <p className="text-xl md:text-2xl font-light text-[#424845] max-w-3xl leading-relaxed font-body">
                  At MPC, we don&apos;t believe in standard sizes. Every commission is a dialogue between architectural vision and master craftsmanship. We curate custom-fit solutions that respect the unique geometry of your space.
                </p>
              </div>
              <div className="md:col-span-4 pb-2">
                <div className="p-8 bg-[#f7f3ef] border-l-2 border-[#8a4f31]">
                  <p className="font-body text-xs uppercase tracking-widest text-[#8a4f31] mb-4">Bespoke Commitment</p>
                  <p className="text-sm italic text-[#424845] font-body">
                    &ldquo;Every project is priced per unique specification, ensuring you only pay for the exact materials and time required for your masterpiece.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Service Blocks */}
        <div className="space-y-48 pb-32">

          {/* 1. Custom Furniture */}
          <section>
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm">
                    <Image src="/images/stitch/services/custom-furniture.jpg" alt="Handcrafted oak dining table with intricate joinery details" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#8a4f31]/10 -z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#8a4f31] font-body text-xs tracking-widest mb-4">01. ARTISANAL CRAFT</span>
                  <h2 className="text-4xl font-light text-[#173128] mb-6 font-headline">Custom Furniture</h2>
                  <p className="text-[#424845] mb-8 text-lg leading-relaxed font-body">
                    Heirloom-quality pieces designed to anchor a room. From sculptural dining tables to minimalist sideboards, our furniture is built using traditional techniques and premium hardwoods.
                  </p>
                  <div className="space-y-4 mb-10">
                    <p className="font-body text-xs tracking-widest text-[#173128] uppercase">What we deliver</p>
                    <ul className="space-y-3">{checkItems(["Initial design consultation and material sampling.", "Traditional mortise and tenon joinery.", "Bespoke finishes from natural oils to matte lacquers."])}</ul>
                  </div>
                  <Link href="/quote" className="w-fit border-b border-[#173128] pb-1 text-sm font-body tracking-widest uppercase hover:text-[#8a4f31] hover:border-[#8a4f31] transition-all">Enquire About This Service</Link>
                </div>
              </div>
            </Container>
          </section>

          {/* 2. Bespoke Kitchens */}
          <section className="bg-[#f7f3ef] py-32">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col md:order-1">
                  <span className="text-[#8a4f31] font-body text-xs tracking-widest mb-4">02. CULINARY ARCHITECTURE</span>
                  <h2 className="text-4xl font-light text-[#173128] mb-6 font-headline">Bespoke Kitchens</h2>
                  <p className="text-[#424845] mb-8 text-lg leading-relaxed font-body">
                    The heart of the home deserves a structural masterpiece. Our kitchens blend ergonomic flow with high-end aesthetics, featuring integrated appliances and custom cabinetry.
                  </p>
                  <div className="space-y-4 mb-10">
                    <p className="font-body text-xs tracking-widest text-[#173128] uppercase">What we deliver</p>
                    <ul className="space-y-3">{checkItems(["Workflow-optimized cabinetry layout.", "Premium stone or wood countertop integration.", "Soft-close hardware and hidden pantry solutions."])}</ul>
                  </div>
                  <Link href="/quote" className="w-fit border-b border-[#173128] pb-1 text-sm font-body tracking-widest uppercase hover:text-[#8a4f31] hover:border-[#8a4f31] transition-all">Enquire About This Service</Link>
                </div>
                <div className="md:order-2">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm relative">
                    <Image src="/images/stitch/services/kitchen-dark-green.jpg" alt="Modern dark green kitchen with marble islands and natural wood shelving" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                    <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/20 p-4 border border-white/10">
                      <p className="text-[10px] tracking-widest uppercase text-white font-body">Project Reference: Oak &amp; Emerald</p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* 3. Wardrobes */}
          <section>
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-7">
                  <div className="aspect-square md:aspect-video overflow-hidden rounded-sm relative">
                    <Image src="/images/stitch/services/wardrobe-led.jpg" alt="Luxury walk-in closet with integrated LED lighting and glass-fronted walnut cabinets" fill className="object-cover" sizes="(max-width:768px) 100vw, 58vw" />
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <span className="text-[#8a4f31] font-body text-xs tracking-widest mb-4">03. REFINED STORAGE</span>
                  <h2 className="text-4xl font-light text-[#173128] mb-6 font-headline">Wardrobes &amp; Dressing Rooms</h2>
                  <p className="text-[#424845] mb-8 text-lg leading-relaxed font-body">
                    Organized luxury tailored to your wardrobe needs. We create floor-to-ceiling solutions that maximize vertical space while maintaining a clean, architectural facade.
                  </p>
                  <div className="space-y-4 mb-10">
                    <p className="font-body text-xs tracking-widest text-[#173128] uppercase">What we deliver</p>
                    <ul className="space-y-3">{checkItems(["Custom interior configurations (hanging, shelving, drawers).", "Integrated sensor lighting and valet bars."])}</ul>
                  </div>
                  <Link href="/quote" className="w-fit border-b border-[#173128] pb-1 text-sm font-body tracking-widest uppercase hover:text-[#8a4f31] hover:border-[#8a4f31] transition-all">Enquire About This Service</Link>
                </div>
              </div>
            </Container>
          </section>

          {/* 4 + 5. Vanities & Bedroom Suites */}
          <section>
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[#f1ede9] p-12 rounded-sm">
                  <span className="text-[#8a4f31] font-body text-xs tracking-widest mb-4 block">04. PERSONAL SANCTUARY</span>
                  <h2 className="text-3xl font-light text-[#173128] mb-6 font-headline">Luxury Vanities</h2>
                  <div className="aspect-video mb-8 overflow-hidden rounded-sm relative">
                    <Image src="/images/stitch/services/vanity-floating.jpg" alt="Floating wood bathroom vanity with stone top and minimalist circular mirror" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <p className="text-[#424845] mb-6 text-sm font-body">Elevating daily rituals through floating cabinetry, moisture-resistant timbers, and seamless basin integration.</p>
                  <Link href="/quote" className="text-xs font-body tracking-widest uppercase text-[#173128] hover:text-[#8a4f31] transition-colors underline decoration-[#8a4f31]/30 underline-offset-8">Explore Vanities</Link>
                </div>
                <div className="bg-[#173128] p-12 rounded-sm text-white">
                  <span className="text-[#ffdea2] font-body text-xs tracking-widest mb-4 block">05. COHESIVE COMFORT</span>
                  <h2 className="text-3xl font-light mb-6 font-headline">Bedroom Suites</h2>
                  <div className="aspect-video mb-8 overflow-hidden rounded-sm relative">
                    <Image src="/images/stitch/services/bedroom-suite.jpg" alt="Cohesive master bedroom suite with custom headboard and wall paneling in warm wood tones" fill className="object-cover opacity-80" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                  <p className="text-white/70 mb-6 text-sm font-body">Full-room commissions including headboards, bedside pedestals, and integrated wall paneling for a singular aesthetic vision.</p>
                  <Link href="/quote" className="text-xs font-body tracking-widest uppercase text-white hover:text-[#ffdea2] transition-colors underline decoration-[#ffdea2]/30 underline-offset-8">Explore Suites</Link>
                </div>
              </div>
            </Container>
          </section>

          {/* 6. Interior Fit-Out */}
          <section>
            <Container>
              <div className="relative overflow-hidden bg-[#e6e2de] p-16 md:p-24 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                    <span className="text-[#8a4f31] font-body text-xs tracking-widest mb-4 block">06. TOTAL INTERIORS</span>
                    <h2 className="text-4xl font-light text-[#173128] mb-8 font-headline">Interior Fit-Out &amp; Joinery</h2>
                    <p className="text-[#424845] mb-10 text-lg leading-relaxed font-body">
                      Our most comprehensive service. We manage the entire wood-based interior envelope—from wall cladding and ceiling baffles to custom portals and architectural dividers.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-12">
                      {[["Scope A", "Wall Paneling & Cladding"], ["Scope B", "Architectural Doorways"], ["Scope C", "Retail & Office Shells"], ["Scope D", "Staircase Cladding"]].map(([scope, label]) => (
                        <div key={scope}>
                          <p className="font-body text-[10px] tracking-widest uppercase text-[#8a4f31] mb-2">{scope}</p>
                          <p className="text-sm font-medium font-body">{label}</p>
                        </div>
                      ))}
                    </div>
                    <Link href="/quote" className="inline-block bg-[#173128] text-white px-8 py-4 text-xs font-body tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-opacity">Request Fit-Out Consultation</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                      <Image src="/images/stitch/services/fitout-office-slats.jpg" alt="Modern office interior with wooden slat wall panels" fill className="object-cover" sizes="25vw" />
                    </div>
                    <div className="aspect-[3/4] overflow-hidden rounded-sm relative mt-8">
                      <Image src="/images/stitch/services/fitout-ceiling.jpg" alt="Architectural wood ceiling details in a luxury hotel lobby" fill className="object-cover" sizes="25vw" />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

        </div>

        {/* Quote CTA */}
        <section className="bg-[#f7f3ef] py-32 border-t border-[#c1c8c4]/10">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-4xl font-light text-[#173128] mb-8 italic font-headline">Your project is unique. Our quote will be too.</h2>
            <p className="text-[#424845] text-lg mb-12 font-body">
              We do not provide standard price lists because we do not provide standard products. Contact our studio to discuss your specifications, materials, and spatial requirements.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/quote" className="bg-[#173128] text-white px-10 py-5 font-body text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">Start a Specification</Link>
              <Link href="/contact" className="border border-[#727975] text-[#1c1c19] px-10 py-5 font-body text-sm tracking-widest uppercase rounded-sm hover:bg-[#fdf9f5] transition-colors">Contact Studio</Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
