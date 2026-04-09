import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";

const projects = [
  { img: "atrium-residence.jpg", title: "The Atrium Residence", category: "Living Spaces", location: "Pretoria, SA" },
  { img: "emerald-kitchen.jpg", title: "Emerald Culinary Suite", category: "Kitchens", location: "Constantia Hills" },
  { img: "linen-bedroom.jpg", title: "The Linen Sanctuary", category: "Bedrooms", location: "Steenberg Estate" },
  { img: "oak-form-table.jpg", title: "Oak Form Table", category: "Furniture", location: "Bespoke Piece" },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">

        {/* Hero Header */}
        <header className="mb-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <span className="font-body text-xs uppercase tracking-[0.2em] text-[#8a4f31] mb-4 block">Curation &amp; Craft</span>
                <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight font-headline">
                  The Portfolio:<br />Architectural Narratives
                </h1>
              </div>
              <div className="md:col-span-4 pb-2">
                <p className="font-body text-[#424845] leading-relaxed max-w-sm">
                  A collection of spaces where material integrity meets functional art. Each project is a bespoke response to environment and lifestyle.
                </p>
              </div>
            </div>
          </Container>
        </header>

        {/* Filters */}
        <section className="mb-16">
          <Container>
            <div className="flex flex-wrap gap-x-12 gap-y-4 items-baseline overflow-x-auto pb-4 scrollbar-hide">
              {["All Collections", "Kitchens", "Living Spaces", "Bedrooms", "Furniture Pieces"].map((f, i) => (
                <button key={f} className={`font-body text-xs uppercase tracking-widest transition-colors ${i === 0 ? "text-[#1c1c19] border-b border-[#173128] pb-1" : "text-[#424845] hover:text-[#1c1c19]"}`}>
                  {f}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Masonry Grid */}
        <section className="bg-[#fdf9f5] py-20">
          <Container>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-12">
              {projects.map(({ img, title, category, location }, idx) => (
                <div key={img} className={`masonry-item group cursor-pointer break-inside-avoid mb-12 ${idx % 2 === 1 ? "pt-12" : ""}`}>
                  <div className="overflow-hidden rounded-sm bg-[#f7f3ef] mb-6">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/stitch/projects/${img}`}
                        alt={title}
                        fill
                        className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-light font-headline">{title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-[10px] uppercase tracking-widest text-[#8a4f31]">{category}</span>
                      <span className="font-body text-[10px] uppercase tracking-widest text-[#727975]">{location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Feature Spotlight  Dark */}
        <section className="bg-[#173128] py-32 text-white">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                  <Image src="/images/stitch/projects/library-dark.jpg" alt="Library with dark wood bookshelves, leather armchair and soft pool of light" fill className="object-cover grayscale-[0.2]" sizes="50vw" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-[#fcaf8a] p-8 hidden lg:block">
                  <p className="font-body text-[10px] uppercase tracking-widest text-[#784023] mb-2">Editor&apos;s Choice</p>
                  <h4 className="text-2xl font-light text-[#784023] font-headline">Material Integrity</h4>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-6xl font-light leading-tight font-headline">
                  Beyond Aesthetics:<br />The Soul of the Space
                </h2>
                <p className="text-white/70 font-body text-lg leading-relaxed max-w-lg">
                  Our project at The Quarry House redefined the relationship between stone and silk. We utilize a palette of raw South African materials to create sensory-rich environments that age with grace.
                </p>
                <div className="pt-4">
                  <Link href="/contact" className="inline-flex items-center gap-4 group">
                    <span className="font-body text-xs uppercase tracking-widest pb-1 border-b border-white">View Full Case Study</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-400">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Collage Grid */}
        <section className="bg-[#f7f3ef] py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5 space-y-12">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-6 aspect-square relative">
                    <Image src="/images/stitch/projects/writers-study.jpg" alt="Minimalist study with slim desk and designer chair overlooking a forest" fill className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" sizes="41vw" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-light font-headline">The Writer&apos;s Retreat</h3>
                    <span className="font-body text-[10px] uppercase tracking-widest text-[#8a4f31]">Study</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 space-y-12 pt-0 md:pt-40">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-6 aspect-[16/9] relative">
                    <Image src="/images/stitch/projects/panorama-pavilion.jpg" alt="Large open plan living area with panoramic glass doors and mid-century modern furniture" fill className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" sizes="58vw" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-light font-headline">Panorama Pavilion</h3>
                    <span className="font-body text-[10px] uppercase tracking-widest text-[#8a4f31]">Architecture &amp; Interiors</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 space-y-12">
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-sm mb-6 aspect-[3/4] relative">
                    <Image src="/images/stitch/projects/terrazzo-bath.jpg" alt="Elegant master bathroom with freestanding copper bathtub and terrazzo flooring" fill className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" sizes="33vw" />
                  </div>
                  <h3 className="text-2xl font-light font-headline">Terrazzo &amp; Brass Bath</h3>
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col justify-center h-full">
                <div className="max-w-md ml-auto text-right">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-[#8a4f31] mb-6 block">Legacy of Design</span>
                  <p className="text-2xl font-light text-[#1c1c19] leading-snug font-headline">
                    &ldquo;Interior design is not just about filling a space; it&apos;s about the emotional resonance of the volume within.&rdquo;
                  </p>
                  <span className="font-body text-[10px] uppercase tracking-widest text-[#727975] mt-4 block">— MPC Philosophy</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#fdf9f5]">
          <Container>
            <div className="text-center space-y-10">
              <h2 className="text-5xl md:text-7xl font-light font-headline">Collaborate on Your Vision</h2>
              <p className="font-body text-[#424845] max-w-2xl mx-auto text-lg">
                Whether it&apos;s a single room or a full-scale architectural project, we bring meticulous attention to detail and a signature aesthetic to every commission.
              </p>
              <div>
                <Link href="/quote" className="inline-block bg-[#173128] text-white px-12 py-5 rounded-sm font-body text-sm uppercase tracking-widest hover:opacity-90 transition-all">
                  Begin a Conversation
                </Link>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
