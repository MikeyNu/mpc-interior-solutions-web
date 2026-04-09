import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/container";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">

        {/* Hero Section */}
        <section className="mb-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <span className="font-body text-sm uppercase tracking-[0.2em] text-[#8a4f31] mb-6 block">Inquiry</span>
                <h1 className="text-5xl md:text-7xl leading-[1.1] font-light tracking-tight text-[#173128] mb-8 font-headline">
                  Request a Tailored<br /><span className="italic font-normal">Quote</span>
                </h1>
                <p className="text-lg md:text-xl text-[#424845] max-w-xl font-light leading-relaxed font-body">
                  Every project we undertake is as unique as the individuals who inhabit them. Share your vision with us, and we will curate a bespoke response that reflects your distinct requirements.
                </p>
              </div>
              <div className="lg:col-span-5 h-[300px] overflow-hidden rounded-sm relative">
                <Image src="/images/stitch/contact/hero.jpg" alt="Minimalist luxury interior with sculptural chair and morning light" fill className="object-cover opacity-90" sizes="41vw" />
              </div>
            </div>
          </Container>
        </section>

        {/* Form + Sidebar */}
        <section className="pb-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Form  order-1 on lg */}
              <div className="lg:col-span-8 lg:order-1">
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {[
                      { id: "full_name", label: "Full Name", type: "text" },
                      { id: "email", label: "Email Address", type: "email" },
                      { id: "phone", label: "Phone Number", type: "tel" },
                      { id: "location", label: "Project Location", type: "text" },
                      { id: "timeline", label: "Expected Timeline", type: "text" },
                    ].map(({ id, label, type }) => (
                      <div key={id} className="relative pt-5">
                        <label htmlFor={id} className="absolute left-0 top-0 font-body text-[10px] uppercase tracking-widest text-[#424845]">{label}</label>
                        <input id={id} name={id} type={type} className="w-full bg-transparent border-b border-[#c1c8c4] py-4 px-0 focus:border-[#173128] focus:outline-none transition-colors font-body text-[#1c1c19]" />
                      </div>
                    ))}
                    <div className="relative pt-5">
                      <label htmlFor="service" className="absolute left-0 top-0 font-body text-[10px] uppercase tracking-widest text-[#424845]">Service Type</label>
                      <select id="service" name="service" className="w-full bg-transparent border-b border-[#c1c8c4] py-4 px-0 focus:border-[#173128] focus:outline-none appearance-none font-body text-[#1c1c19]">
                        <option value="" disabled>Select a service...</option>
                        <option value="residential">Residential Interior Design</option>
                        <option value="commercial">Commercial Space Planning</option>
                        <option value="renovation">Architectural Renovation</option>
                        <option value="bespoke">Bespoke Furniture Curation</option>
                      </select>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="relative pt-6">
                    <label htmlFor="project_details" className="block font-body text-[10px] uppercase tracking-widest text-[#424845] mb-4">Tell us about your project</label>
                    <textarea id="project_details" name="project_details" rows={5} className="w-full bg-[#f7f3ef] border-b border-[#c1c8c4] p-6 focus:border-[#173128] focus:outline-none transition-colors font-body text-[#1c1c19] rounded-t-sm resize-none" />
                  </div>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-[#c1c8c4] p-10 text-center rounded-sm bg-white">
                    <span className="material-symbols-outlined text-4xl text-[#727975] mb-4 block">upload_file</span>
                    <p className="font-body text-sm text-[#424845] mb-1">Reference Images / Plans</p>
                    <p className="text-xs text-[#727975] mb-4 font-body">Drag and drop or click to upload (PDF, JPG, PNG up to 10MB)</p>
                    <button type="button" className="text-[#173128] font-body font-medium border-b border-[#173128] hover:text-[#8a4f31] hover:border-[#8a4f31] transition-all text-sm">Browse Files</button>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-end pt-6">
                    <button type="submit" className="group flex items-center gap-4 bg-[#173128] text-white px-12 py-5 rounded-sm hover:opacity-90 transition-all">
                      <span className="font-body text-sm uppercase tracking-[0.25em]">Submit Inquiry</span>
                      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Sidebar  order-2 on lg */}
              <div className="lg:col-span-4 space-y-16 lg:order-2">
                <div className="p-10 bg-[#f7f3ef] rounded-sm border-l-4 border-[#173128]">
                  <h3 className="text-2xl mb-8 text-[#173128] font-headline">Direct Communication</h3>
                  <div className="space-y-8">
                    {[
                      { icon: "mail", label: "Email Inquiry", value: "hello@mpcinteriors.com", href: "mailto:hello@mpcinteriors.com" },
                      { icon: "call", label: "Primary Contact", value: "+27 21 444 0000", href: "tel:+27214440000" },
                      { icon: "chat", label: "WhatsApp Business", value: "+27 72 888 1234", href: "#" },
                    ].map(({ icon, label, value, href }) => (
                      <div key={icon} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-[#8a4f31] mt-1">{icon}</span>
                        <div>
                          <p className="font-body text-[10px] uppercase tracking-widest text-[#424845] mb-1">{label}</p>
                          <a href={href} className="text-lg hover:text-[#8a4f31] transition-colors font-medium font-body">{value}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#173128] p-10 text-white rounded-sm">
                  <span className="material-symbols-outlined text-4xl text-[#ffdea2] mb-4 block">verified</span>
                  <h4 className="text-xl mb-4 italic font-light font-headline">The MPC Reassurance</h4>
                  <p className="font-light text-white/70 leading-relaxed font-body text-sm">
                    Our team will review your requirements and respond directly with a tailored consultation. Expect a response within 48 business hours.
                  </p>
                </div>

                <div className="h-64 rounded-sm overflow-hidden relative grayscale contrast-125 opacity-80">
                  <Image src="/images/stitch/contact/tools-blueprints.jpg" alt="Architect tools with brass ruler and blueprints" fill className="object-cover" sizes="33vw" />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Map / Location Section */}
        <section className="h-[500px] w-full relative">
          <div className="absolute inset-0 bg-[#173128]/10 z-10 pointer-events-none" />
          <Image src="/images/stitch/contact/map-aerial.jpg" alt="Aerial view of Pretoria" fill className="object-cover grayscale opacity-60" sizes="100vw" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-[#fdf9f5] p-8 rounded-sm shadow-xl max-w-sm text-center">
              <h3 className="text-xl mb-4 font-light italic font-headline">The Studio</h3>
              <p className="text-[#424845] font-light mb-6 font-body">Pretoria, Gauteng,<br />South Africa</p>
              <Link href="https://maps.google.com/?q=Pretoria,Gauteng,SouthAfrica" target="_blank" rel="noopener noreferrer" className="inline-block text-[#8a4f31] font-body text-xs uppercase tracking-widest border-b border-[#8a4f31] pb-1">
                Get Directions
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
