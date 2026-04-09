import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-[#fdf9f5]">
      <SiteHeader />
      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Progress */}
        <div className="mb-16">
          <div className="flex justify-between items-end mb-4">
            <span className="font-body text-xs uppercase tracking-widest text-[#8a4f31] font-bold">Step 04 of 04</span>
            <span className="font-body text-xs uppercase tracking-widest text-[#727975]">100% Complete</span>
          </div>
          <div className="h-[2px] w-full bg-[#e6e2de]">
            <div className="h-full bg-[#173128] w-full transition-all duration-700" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Header */}
          <div className="lg:col-span-5">
            <h1 className="font-headline text-5xl md:text-6xl text-[#173128] leading-[1.1] mb-8 tracking-tight">
              Review &amp; Submit
            </h1>
            <p className="text-[#424845] text-lg leading-relaxed mb-12 max-w-md font-body">
              Please review the details of your inquiry below. Our team provides a tailored response for every project, ensuring our vision aligns with your aspirations.
            </p>
            <div className="bg-[#f7f3ef] p-8 relative overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[#8a4f31] mb-4 text-3xl block">verified</span>
                <h3 className="font-headline text-xl mb-2 text-[#173128]">The MPC Standard</h3>
                <p className="text-sm text-[#424845] leading-relaxed font-body">
                  Every request is reviewed personally by our lead designers. Expect a detailed initial perspective and scheduling options within 48 business hours.
                </p>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-5">
                <span className="material-symbols-outlined text-[12rem]">architecture</span>
              </div>
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm">
            <div className="space-y-12">

              {/* Contact Details */}
              <section>
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="font-body text-xs uppercase tracking-widest font-bold text-[#727975]">01. Contact Information</h2>
                  <Link href="/quote" className="text-[#8a4f31] hover:underline font-body text-[0.65rem] uppercase tracking-widest transition-all">Edit</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[["Full Name", ""], ["Email Address", ""], ["Primary Phone", ""], ["Organization", ""]].map(([label, val]) => (
                    <div key={label}>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-[#727975] mb-1 font-body">{label}</span>
                      <p className="font-headline text-lg text-[#173128]">{val}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="h-px bg-[#c1c8c4]/15" />

              {/* Project Scope */}
              <section>
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="font-body text-xs uppercase tracking-widest font-bold text-[#727975]">02. Project Scope</h2>
                  <Link href="/quote/project-scope" className="text-[#8a4f31] hover:underline font-body text-[0.65rem] uppercase tracking-widest transition-all">Edit</Link>
                </div>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-[#727975] mb-1 font-body">Service Type</span>
                      <p className="font-headline text-lg text-[#173128]"></p>
                    </div>
                    <div>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-[#727975] mb-1 font-body">Space Type</span>
                      <p className="font-headline text-lg text-[#173128]"></p>
                    </div>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] uppercase tracking-widest text-[#727975] mb-1 font-body">Project Description</span>
                    <p className="font-body text-[#424845] leading-relaxed italic border-l-2 border-[#fcaf8a] pl-6 py-2">
                      Your description will appear here.
                    </p>
                  </div>
                </div>
              </section>

              <div className="h-px bg-[#c1c8c4]/15" />

              {/* Technical Details */}
              <section>
                <div className="flex justify-between items-baseline mb-6">
                  <h2 className="font-body text-xs uppercase tracking-widest font-bold text-[#727975]">03. Technical Details</h2>
                  <Link href="/quote/technical-details" className="text-[#8a4f31] hover:underline font-body text-[0.65rem] uppercase tracking-widest transition-all">Edit</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[["Project Location", ""], ["Preferred Timeline", ""], ["Approx. Square Footage", ""]].map(([label, val]) => (
                    <div key={label}>
                      <span className="block text-[0.65rem] uppercase tracking-widest text-[#727975] mb-1 font-body">{label}</span>
                      <p className="font-headline text-lg text-[#173128]">{val}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Submit */}
              <div className="pt-12 flex flex-col sm:flex-row gap-6 items-center">
                <button type="submit" className="w-full sm:w-auto bg-[#173128] text-white px-12 py-5 text-sm uppercase tracking-widest font-bold hover:opacity-90 transition-all shadow-xl shadow-[#173128]/10 rounded-sm font-body">
                  Submit Inquiry
                </button>
                <p className="text-[0.7rem] uppercase tracking-widest text-[#727975] text-center sm:text-left leading-tight font-body">
                  By submitting, you agree to our<br />
                  <Link href="/contact" className="underline hover:text-[#8a4f31]">Privacy &amp; Data Protocols</Link>.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Ambient Image Strip */}
        <div className="mt-24 h-[400px] w-full relative overflow-hidden group">
          <Image src="/images/stitch/quote/materials-texture.jpg" alt="Architectural material detail with sunlit concrete and natural textures" fill className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" sizes="100vw" />
          <div className="absolute inset-0 bg-[#173128]/20 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <p className="font-headline italic text-2xl md:text-3xl tracking-tight">
                &ldquo;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&rdquo;
              </p>
              <p className="font-body text-xs uppercase tracking-[0.2em] mt-4 opacity-70">Le Corbusier</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
