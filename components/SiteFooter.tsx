import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 text-sm text-slate-300 sm:grid-cols-3">
        <div>
          <Image src="/images/footerimg.png" alt="Jorvea" width={240} height={80} className="h-[80px] w-auto" />
          <p className="mt-2">Official app website for downloads, support, legal pages, and safety resources.</p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-100">Quick Links</h3>
          <ul className="mt-2 space-y-1">
            <li><Link href="/download">Download</Link></li>
            <li><Link href="/support">Help Center</Link></li>
            <li><Link href="/earning">Earning Guide</Link></li>
            <li><Link href="/legal">Legal</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-100">Contact</h3>
          <p className="mt-2">support@jorvea.tech</p>
          <p>no-reply@jorvea.tech</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Jorvea. All rights reserved.
      </div>
    </footer>
  );
}
