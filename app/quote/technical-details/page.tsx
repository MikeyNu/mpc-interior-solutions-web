import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export default function TechnicalDetailsPage() {
  return (
    <div className="min-h-screen bg-[#fdf9f5]">
      <SiteHeader />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Progress */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <span className="font-body text-xs uppercase tracking-widest text-[#8a4f31]">Step 3 of 4</span>
            <span className="font-body text-xs uppercase tracking-widest text-[#424845]">Technical Specifics</span>
          </div>
          <div className="h-[2px] w-full bg-[#ebe7e4] relative">
            <div className="absolute h-full bg-[#8a4f31] w-3/4 transition-all duration-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Form */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            <header>
              <h1 className="text-4xl md:text-5xl font-headline text-[#173128] tracking-tight mb-4">Project Details</h1>
              <p className="text-[#424845] text-lg leading-relaxed max-w-xl font-body">Define the architecture of your requirements. Every detail helps us craft a more precise vision for your space.</p>
            </header>

            <form className="flex flex-col gap-10">
              {/* Location */}
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-[#424845] mb-3">Project Location</label>
                <input className="w-full bg-[#f7f3ef] border-0 border-b border-[#c1c8c4] py-4 px-0 focus:ring-0 focus:border-[#173128] transition-colors text-lg placeholder:text-[#727975]/40 font-body" placeholder="Street Address, City, or Region" type="text" />
              </div>

              {/* Timeline + Sqft */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-[#424845] mb-3">Preferred Timeline</label>
                  <select className="w-full bg-[#f7f3ef] border-0 border-b border-[#c1c8c4] py-4 px-0 focus:ring-0 focus:border-[#173128] transition-colors text-lg appearance-none cursor-pointer font-body">
                    <option>Immediate (1-3 Months)</option>
                    <option>Planned (3-6 Months)</option>
                    <option>Strategic (6-12 Months)</option>
                    <option>Exploratory (TBD)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-[#424845] mb-3">Approx. Square Footage</label>
                  <input className="w-full bg-[#f7f3ef] border-0 border-b border-[#c1c8c4] py-4 px-0 focus:ring-0 focus:border-[#173128] transition-colors text-lg placeholder:text-[#727975]/40 font-body" placeholder="e.g. 250 m" type="text" />
                </div>
              </div>

              {/* Vision Textarea */}
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-[#424845] mb-3">Tell us more about your vision</label>
                <textarea className="w-full bg-[#f7f3ef] border-0 border-b border-[#c1c8c4] py-4 px-0 focus:ring-0 focus:border-[#173128] transition-colors text-lg placeholder:text-[#727975]/40 resize-none font-body" placeholder="Describe the atmosphere, materiality, and functional requirements of the space..." rows={5} />
              </div>

              {/* File Upload */}
              <div>
                <label className="block font-body text-xs uppercase tracking-widest text-[#424845] mb-3">Floor Plans &amp; References</label>
                <div className="mt-2 border border-dashed border-[#c1c8c4] p-12 flex flex-col items-center justify-center text-center gap-4 bg-[#f7f3ef]/50 hover:bg-[#f7f3ef] transition-all cursor-pointer group">
                  <span className="material-symbols-outlined text-4xl text-[#c1c8c4] group-hover:text-[#8a4f31]">upload_file</span>
                  <div>
                    <p className="text-[#1c1c19] font-medium font-body">Drag and drop files here</p>
                    <p className="text-[#424845] text-sm mt-1 font-body">PDF, JPG, PNG or DWG (Max 50MB)</p>
                  </div>
                  <button type="button" className="mt-2 text-[#173128] font-body text-xs uppercase tracking-widest border-b border-[#173128] pb-0.5">Browse Files</button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-8">
                <Link href="/quote/project-scope" className="flex items-center gap-2 text-[#424845] hover:text-[#173128] transition-colors group">
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                  <span className="font-body text-xs uppercase tracking-widest">Back</span>
                </Link>
                <Link href="/quote/review" className="bg-[#173128] text-white px-12 py-4 rounded-sm hover:opacity-90 transition-all duration-400 font-body uppercase text-sm tracking-[0.2em] flex items-center gap-3">
                  Continue
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-12">
            <div className="relative pt-12 pl-12">
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#fcaf8a]/20 -z-10" />
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <Image src="/images/stitch/quote/step3-interior.jpg" alt="Modern architectural interior with floor-to-ceiling windows and natural wood finishes" fill className="object-cover" sizes="41vw" />
              </div>
            </div>
            <div className="bg-[#f7f3ef] p-10 flex flex-col gap-6">
              <h3 className="text-xl font-headline text-[#173128] italic">Why details matter?</h3>
              <p className="text-[#424845] leading-relaxed text-sm font-body">
                Our design philosophy at MPC relies on technical precision as much as creative flair. Your location and timeline inform our material sourcing and project logistics, ensuring a seamless transition from blueprint to reality.
              </p>
              <div className="flex items-center gap-4 text-[#8a4f31]">
                <span className="material-symbols-outlined text-xl">verified</span>
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em] font-bold">Encrypted &amp; Secure Submission</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
