import Image from "next/image";
import Link from "next/link";

export default function QuotePage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fdf9f5]">

      {/* Left Panel */}
      <div className="w-full md:w-5/12 lg:w-4/12 relative min-h-[360px] md:min-h-screen flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <Image src="/images/stitch/quote/oak-workshop.jpg" alt="Premium raw oak planks in an artisanal workshop" fill className="object-cover" sizes="41vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173128]/90 via-[#173128]/40 to-transparent" />
        </div>

        <div className="relative z-10 p-6 md:p-10">
          <Link href="/" className="inline-flex items-center gap-3 text-white hover:text-[#ffdea2] transition-colors duration-400 group">
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-body text-xs uppercase tracking-[0.1em] group-hover:underline underline-offset-4 decoration-[#ffdea2]">Return to main</span>
          </Link>
        </div>

        <div className="relative z-10 p-6 md:p-10 pb-12 md:pb-20">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-[-0.02em]">
            Begin Your<br />Architectural<br />Narrative.
          </h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-7/12 lg:w-8/12 bg-[#fdf9f5] flex flex-col">
        <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 md:px-16 md:py-20 lg:px-24 flex flex-col">

          {/* Progress */}
          <div className="mb-20">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="font-body text-xs text-[#424845] uppercase tracking-[0.1em] mb-2">Step 01</p>
                <h2 className="font-headline text-2xl text-[#1c1c19] leading-tight">Your Details</h2>
              </div>
              <p className="font-body text-sm text-[#424845]">25%</p>
            </div>
            <div className="h-1 bg-[#e6e2de] w-full relative">
              <div className="absolute top-0 left-0 h-full bg-[#173128] w-1/4" />
            </div>
            <p className="font-body text-xs text-[#727975] mt-4 uppercase tracking-[0.1em]">Next: Project Scope</p>
          </div>

          {/* Form Header */}
          <div className="mb-16 max-w-2xl">
            <h3 className="font-headline text-3xl md:text-4xl text-[#1c1c19] leading-tight tracking-[-0.02em] mb-6">Tell Us About Your Space</h3>
            <p className="font-body text-base md:text-lg text-[#424845] leading-relaxed">
              Let&apos;s start with the essentials. Provide your contact details below so our design curators can reach out to discuss the specifics of your vision.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-10 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { id: "full_name", label: "Full Name", type: "text", placeholder: "e.g. Jane Doe" },
                { id: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                { id: "phone", label: "Phone Number", type: "tel", placeholder: "+27 (0) 12 345 6789" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="flex flex-col">
                  <label htmlFor={id} className="font-body text-xs text-[#424845] uppercase tracking-[0.1em] mb-3">{label}</label>
                  <input id={id} name={id} type={type} placeholder={placeholder} className="w-full bg-[#f7f3ef] border-0 border-b border-[#727975] focus:border-[#173128] focus:ring-0 px-4 py-4 text-[#1c1c19] font-body text-base transition-colors rounded-t-sm placeholder:text-[#c1c8c4]/70" />
                </div>
              ))}
              <div className="flex flex-col">
                <label htmlFor="company" className="font-body text-xs text-[#424845] uppercase tracking-[0.1em] mb-3 flex justify-between w-full">
                  <span>Company</span>
                  <span className="text-[#c1c8c4] text-[10px]">OPTIONAL</span>
                </label>
                <input id="company" name="company" type="text" placeholder="e.g. Studio Architecture" className="w-full bg-[#f7f3ef] border-0 border-b border-[#727975] focus:border-[#173128] focus:ring-0 px-4 py-4 text-[#1c1c19] font-body text-base transition-colors rounded-t-sm placeholder:text-[#c1c8c4]/70" />
              </div>
            </div>

            <div className="pt-16 flex justify-end">
              <Link href="/quote/project-scope" className="bg-[#173128] text-white font-body text-sm uppercase tracking-[0.1em] px-8 py-4 rounded-sm flex items-center gap-3 hover:opacity-90 transition-colors duration-400">
                Next Step
                <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
              </Link>
            </div>
          </form>

          {/* Contact Footer Strip */}
          <div className="mt-24 bg-[#f7f3ef] rounded-sm p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col">
              <p className="font-headline text-lg text-[#1c1c19] mb-1">Prefer direct contact?</p>
              <p className="font-body text-sm text-[#424845]">Reach out to our curatorial team directly.</p>
            </div>
            <div className="flex flex-wrap gap-8">
              <a href="mailto:hello@mpcinteriors.com" className="flex items-center gap-2 text-[#8a4f31] hover:text-[#1c1c19] transition-colors duration-400 group">
                <span className="material-symbols-outlined text-[20px]">mail</span>
                <span className="font-body text-xs uppercase tracking-[0.1em] group-hover:underline underline-offset-4">Email Studio</span>
              </a>
              <a href="tel:+27214440000" className="flex items-center gap-2 text-[#8a4f31] hover:text-[#1c1c19] transition-colors duration-400 group">
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span className="font-body text-xs uppercase tracking-[0.1em] group-hover:underline underline-offset-4">Call Us</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
