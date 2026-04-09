import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

const services = [
  { img: "scope-kitchen.jpg", title: "Bespoke Kitchens", desc: "Crafting the culinary heart with precision and soulful materials.", offset: "" },
  { img: "scope-chair.jpg", title: "Signature Furniture", desc: "One-of-a-kind heirlooms designed for your unique ergonomics.", offset: "mt-12" },
  { img: "scope-wardrobe.jpg", title: "Architectural Wardrobes", desc: "Seamless storage solutions that blend into the structure of the room.", offset: "-mt-12" },
  { img: "scope-fitout.jpg", title: "Full Spatial Interior", desc: "A comprehensive anthology of materials, light, and flow.", offset: "" },
];

export default function ProjectScopePage() {
  return (
    <div className="min-h-screen bg-[#fdf9f5]">
      <SiteHeader />
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Progress Header */}
        <section className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-body text-xs uppercase tracking-widest text-[#8a4f31] font-bold mb-4 block">Request a Quote  Step 2 of 4</span>
            <h1 className="text-5xl md:text-7xl font-headline text-[#173128] leading-tight tracking-tight mb-6">Project Scope</h1>
            <p className="text-lg text-[#424845] font-light leading-relaxed font-body">
              Define the architecture of your aspirations. Select the specialized services required to bring your vision to stillness.
            </p>
          </div>
          <div className="flex items-center gap-3 pb-4">
            <div className="h-[4px] w-16 bg-[#173128]" />
            <div className="h-[4px] w-16 bg-[#173128]" />
            <div className="h-[2px] w-12 bg-[#c1c8c4]" />
            <div className="h-[2px] w-12 bg-[#c1c8c4]" />
          </div>
        </section>

        {/* Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          {/* Sidebar */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <div className="bg-[#f7f3ef] p-10 rounded-sm">
              <h3 className="font-headline text-2xl text-[#173128] mb-6">Space Classification</h3>
              <div className="space-y-4">
                {["Residential Sanctuary", "Commercial Workspace"].map((label, i) => (
                  <label key={label} className="flex items-center gap-4 cursor-pointer group">
                    <input defaultChecked={i === 0} name="property_type" type="radio" className="w-5 h-5 text-[#173128] border-[#c1c8c4] focus:ring-[#173128]" />
                    <span className="font-body text-lg group-hover:text-[#173128] transition-colors">{label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-12">
                <h4 className="font-body text-xs uppercase tracking-widest text-[#727975] mb-4">Initial Details</h4>
                <textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#727975] focus:border-[#173128] focus:ring-0 px-0 py-2 resize-none placeholder:text-[#c1c8c4] font-body" placeholder="Briefly describe the atmosphere you wish to evoke..." rows={4} />
              </div>
            </div>
            <div className="hidden md:block relative overflow-hidden rounded-sm aspect-[3/4]">
              <Image src="/images/stitch/quote/materials-texture.jpg" alt="High-end architectural materials  dark wood meeting smooth concrete" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" sizes="33vw" />
            </div>
          </div>

          {/* Service Cards */}
          <div className="md:col-span-8">
            <h3 className="font-headline text-3xl text-[#173128] mb-10">Select Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map(({ img, title, desc, offset }) => (
                <div key={title} className={`group relative bg-[#f7f3ef] cursor-pointer overflow-hidden border border-transparent hover:border-[#173128]/20 transition-all duration-500 ${offset}`}>
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <Image src={`/images/stitch/quote/${img}`} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-headline text-xl">{title}</h4>
                      <span className="material-symbols-outlined text-[#173128] opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
                    </div>
                    <p className="text-sm text-[#424845] font-light font-body">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-[#c1c8c4]/15">
          <Link href="/quote" className="group flex items-center gap-3 text-[#424845] hover:text-[#173128] transition-colors py-4">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span className="font-body text-xs uppercase tracking-widest">Back</span>
          </Link>
          <Link href="/quote/technical-details" className="bg-[#173128] text-white px-12 py-4 rounded-sm flex items-center gap-4 hover:opacity-90 transition-all duration-400 group">
            <span className="font-body text-xs uppercase tracking-widest font-bold">Next: Project Details</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
