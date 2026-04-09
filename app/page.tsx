import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="Modern bespoke kitchen with dark charcoal cabinetry and warm backlit oak veneer"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Primary cinematic veil — dense at bottom, fades but never disappears */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08]/96 via-[#0c0a08]/72 to-[#0c0a08]/35" />
            {/* Top vignette — keeps nav + eyebrow readable against the bright window light */}
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0c0a08]/70 to-transparent" />
          </div>

          {/* Content — bottom-left anchored, architecture portfolio style */}
          <div className="relative z-10 w-full pb-24 md:pb-36 pt-40">
            <Container>
              <div className="max-w-2xl">

                {/* Amber accent rule — lifted from the image's warm oak backlight */}
                <div className="w-10 h-px bg-[#c08b4a] mb-6" />

                {/* Eyebrow label */}
                <p className="text-[10px] text-white/60 tracking-[0.35em] uppercase font-body mb-6" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.8)' }}>
                  Bespoke Interior Joinery &nbsp;·&nbsp; Est. 2019
                </p>

                {/* Headline */}
                <h1 className="font-headline font-light text-white leading-[1.07] tracking-[-0.025em] mb-8"
                  style={{ fontSize: "clamp(2.2rem, 4.8vw, 4.5rem)", textShadow: '0 2px 28px rgba(0,0,0,0.65)' }}>
                  Custom Interior<br />
                  Solutions Designed<br />
                  <span className="text-white/70">Around Your Space</span>
                </h1>

                {/* Body */}
                <p className="text-[13px] md:text-sm text-white/70 font-light max-w-xs md:max-w-sm mb-12 leading-loose font-body" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.7)' }}>
                  Meticulous craftsmanship and bespoke joinery — tailored to the architectural rhythm of your home.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <Link
                    href="/quote"
                    className="font-body border border-white/40 text-white px-9 py-3.5 text-[10px] uppercase tracking-[0.28em] font-semibold hover:bg-white hover:text-[#0c0a08] transition-all duration-300"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="/projects"
                    className="font-body group flex items-center gap-3 text-white/55 hover:text-white text-[10px] uppercase tracking-[0.28em] font-semibold transition-colors duration-300"
                  >
                    View Projects
                    <span className="block w-5 h-px bg-white/40 group-hover:w-9 transition-all duration-300" />
                  </Link>
                </div>

              </div>
            </Container>
          </div>

          {/* Scroll indicator — right edge, vertical */}
          <div className="absolute right-6 md:right-10 bottom-10 z-10 flex flex-col items-center gap-4">
            <p
              className="text-[9px] text-white/30 tracking-[0.32em] uppercase font-body"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll
            </p>
            <div className="w-px h-14 bg-gradient-to-b from-white/30 to-transparent" />
          </div>

        </section>

        {/* Trust Strip */}
        <section className="bg-[#f7f3ef] py-12">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-70">
              {[
                { icon: "architecture", label: "Tailored Solutions" },
                { icon: "handyman", label: "Quality Workmanship" },
                { icon: "verified", label: "Reliable Execution" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#173128] text-3xl">{icon}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-body">{label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* About Preview */}
        <section className="py-32 bg-[#fdf9f5]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 relative pb-16 md:pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image src="/images/stitch/home/about-preview-woodworker.jpg" alt="Artisan woodworker measuring dark oak panel" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-8 w-[38%] hidden sm:block aspect-square overflow-hidden rounded-sm border-[12px] border-[#fdf9f5]">
                  <Image src="/images/stitch/home/about-preview-joinery-detail.jpg" alt="Close-up wood joinery detail" fill className="object-cover" sizes="22vw" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[#8a4f31] text-[11px] uppercase tracking-[0.3em] mb-6 block font-body">Our Story</span>
                <h2 className="text-5xl font-light text-[#173128] leading-tight mb-8 font-headline">
                  Crafting spaces that resonate with personal identity.
                </h2>
                <p className="text-[#424845] leading-loose mb-10 text-lg font-body">
                  Founded in 2019, MPC Interior Solutions delivers tailored interior solutions built on quality, workmanship, and a genuine commitment to client satisfaction. We work closely with each client to understand their space and specifications — and deliver results they can be proud of.
                </p>
                <Link href="/about" className="inline-flex items-center text-[#173128] group font-bold tracking-widest uppercase text-xs gap-3 font-body">
                  Read More
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Preview */}
        <section className="py-32 bg-[#f7f3ef]">
          <Container>
            <div className="text-center mb-24">
              <h2 className="text-5xl font-light text-[#173128] mb-4 font-headline">Our Expertise</h2>
              <div className="h-px w-24 bg-[#8a4f31] mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c1c8c4]/20">
              {[
                { icon: "chair", title: "Custom Furniture", desc: "Heirloom-quality pieces designed to fit the exact dimensions of your life." },
                { icon: "countertops", title: "Kitchens", desc: "The heart of the home, reimagined with ergonomic flow and premium finishes." },
                { icon: "shelves", title: "Bedroom Cupboards", desc: "Sophisticated storage solutions that bring order and calm to your sanctuary." },
                { icon: "wash", title: "Vanities", desc: "Luxury bathroom cabinetry that pairs moisture resistance with elegant design." },
                { icon: "bed", title: "Bedroom Suites", desc: "Complete spatial environments including headboards, pedestals, and seating." },
                { icon: "grid_view", title: "Bespoke Fit-Outs", desc: "Full-scale commercial and residential interior transformations." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-[#fdf9f5] p-12 group hover:bg-[#173128] transition-colors duration-500">
                  <span className="material-symbols-outlined text-4xl text-[#8a4f31] mb-8 block group-hover:text-[#fcaf8a]">{icon}</span>
                  <h3 className="text-2xl font-light mb-4 text-[#1c1c19] group-hover:text-white transition-colors font-headline">{title}</h3>
                  <p className="text-[#424845] group-hover:text-white/70 transition-colors text-sm leading-relaxed font-body">{desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Featured Projects */}
        <section className="py-32 bg-[#fdf9f5]">
          <Container>
            <div className="flex justify-between items-end mb-20">
              <div>
                <span className="text-[#8a4f31] text-[11px] uppercase tracking-[0.3em] mb-4 block font-body">Portfolio</span>
                <h2 className="text-5xl font-light text-[#173128] font-headline">Featured Works</h2>
              </div>
              <Link href="/projects" className="hidden md:block pb-2 border-b border-[#173128] text-[#173128] font-bold uppercase text-xs tracking-widest hover:text-[#8a4f31] hover:border-[#8a4f31] transition-colors font-body">
                View All Projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 group overflow-hidden rounded-sm">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image src="/images/stitch/home/projects-kitchen-emerald.jpg" alt="Emerald kitchen with marble island" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 66vw" />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#424845] font-body">Residential | Kitchen</span>
                  <h4 className="text-2xl font-light mt-1 text-[#1c1c19] font-headline">The Emerald Pavilion</h4>
                </div>
              </div>
              <div className="md:col-span-4 group overflow-hidden rounded-sm md:mt-24">
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image src="/images/stitch/home/projects-wardrobe-oaks.jpg" alt="Walk-in closet with LED lighting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#424845] font-body">Residential | Closet</span>
                  <h4 className="text-2xl font-light mt-1 text-[#1c1c19] font-headline">Oaks Wardrobe Suite</h4>
                </div>
              </div>
              <div className="md:col-span-4 group overflow-hidden rounded-sm">
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image src="/images/stitch/home/projects-bedroom-zen.jpg" alt="Zen master bedroom suite" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#424845] font-body">Residential | Bedroom</span>
                  <h4 className="text-2xl font-light mt-1 text-[#1c1c19] font-headline">Zen Master Suite</h4>
                </div>
              </div>
              <div className="md:col-span-8 group overflow-hidden rounded-sm md:-mt-32">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image src="/images/stitch/home/projects-library.jpg" alt="Floor-to-ceiling custom bookshelf library" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width:768px) 100vw, 66vw" />
                </div>
                <div className="mt-5">
                  <span className="text-[10px] uppercase tracking-widest text-[#424845] font-body">Commercial | Fit-Out</span>
                  <h4 className="text-2xl font-light mt-1 text-[#1c1c19] font-headline">The Curator&apos;s Library</h4>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="py-32 bg-[#ebe7e4] overflow-hidden">
          <Container>
            <div className="mb-24">
              <h2 className="text-5xl font-light text-[#173128] mb-4 font-headline">Our Method</h2>
              <p className="text-[#424845] max-w-lg font-body">From initial spark to final delivery, our process is defined by transparency and precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { num: "01", title: "Enquiry", desc: "Reach out with your vision. We begin by understanding your space, needs, and aesthetic aspirations." },
                { num: "02", title: "Consultation", desc: "An in-depth session where we measure, sample materials, and align on the architectural direction." },
                { num: "03", title: "Tailored Quote", desc: "A detailed proposal covering timelines, material specifications, and transparent cost structures." },
                { num: "04", title: "Delivery", desc: "Meticulous craftsmanship meets professional installation for a seamless transformation." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="relative pt-16">
                  <span className="text-[7rem] font-light text-[#173128]/[0.05] absolute top-0 left-0 leading-none select-none font-headline">{num}</span>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-5 text-[#1c1c19] font-body">{title}</h4>
                    <p className="text-[#424845] text-sm leading-relaxed font-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-28 bg-[#173128] text-white">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-5xl md:text-6xl font-light mb-10 font-headline">Let&apos;s discuss your project</h2>
            <div className="h-px w-32 bg-[#fcaf8a] mx-auto mb-10" />
            <p className="text-xl text-white/70 mb-12 font-light max-w-xl mx-auto font-body">
              Whether it&apos;s a bespoke piece or a full home transformation, we are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/quote" className="bg-[#8a4f31] text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-all rounded-sm font-body">
                Book a Consultation
              </Link>
              <Link href="/contact" className="border border-white/30 text-white px-12 py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all rounded-sm font-body">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
