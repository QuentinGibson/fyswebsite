import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark px-12 py-8 font-sauce font-semibold">
      <div className="flex flex-col items-center justify-center gap-10 py-12 text-center text-base lg:flex-row">
        <div className="flex w-full justify-center md:justify-start">
          <ul className="grid gap-4 md:grid-cols-3 md:flex-row">
            <li className="text-start">
              <Link href="">Testimonials</Link>
            </li>
            <li className="text-start">
              <Link href="">Services</Link>
            </li>
            <li className="text-start">
              <Link href="">About</Link>
            </li>
            <li className="text-start">
              <Link href="">Contact</Link>
            </li>
            <li className="text-start">
              <Link href="">Portfolio</Link>
            </li>
            <li className="text-start">
              <Link href="">Case Studies</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-sm">© F.Y.S Design</span>
      </div>
    </footer>
  );
}
