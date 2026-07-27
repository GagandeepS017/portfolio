"use client";

import { Download } from "lucide-react";

// Fixed action on the print page. Hidden when printing (.no-print) so it never
// lands in the exported PDF. Triggers the browser's native print-to-PDF dialog.
export default function PrintButton() {
  return (
    <div className="no-print fixed right-4 top-4 z-50 flex flex-col items-end gap-1.5">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-800"
      >
        <Download size={16} aria-hidden />
        Download PDF
      </button>
      <span className="rounded bg-white/90 px-2 py-0.5 text-xs text-neutral-600 shadow-sm">
        Pick <strong>“Save as PDF”</strong> as the destination
      </span>
    </div>
  );
}
