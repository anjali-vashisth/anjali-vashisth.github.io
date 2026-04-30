import { Download, FileText } from "lucide-react";

const resumeHref = "/Anjali_Vashisth_Resume.pdf";

export default function ResumeDownload() {
  return (
    <section className="relative border-t border-stone-800 bg-[#080b0f] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-5 rounded-lg border border-amber-300/25 bg-gradient-to-br from-amber-300/10 via-stone-950/80 to-teal-300/10 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-300/10 text-teal-200">
            <FileText size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-stone-50">Need the resume version?</h2>
            <p className="mt-1 text-sm leading-6 text-stone-400">
              Download the latest PDF generated from the LaTeX resume.
            </p>
          </div>
        </div>

        <a
          href={resumeHref}
          download
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber-300 px-5 py-3 font-semibold text-stone-950 shadow-[0_0_30px_rgba(245,158,11,0.18)] transition hover:-translate-y-0.5 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-100 focus:ring-offset-2 focus:ring-offset-[#080b0f] sm:w-auto"
        >
          <Download size={18} aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
