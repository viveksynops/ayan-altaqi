import Link from "next/link";
import { contactPeople } from "@/data/site";

const whatsappContact = contactPeople[0];

export function FloatingWhatsApp() {
  if (!whatsappContact?.whatsapp) {
    return null;
  }

  return (
    <Link
      aria-label={`Chat with ${whatsappContact.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.36)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] hover:shadow-[0_20px_48px_rgba(37,211,102,0.46)] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 md:bottom-7 md:right-7 md:h-16 md:w-16"
      href={`https://wa.me/${whatsappContact.whatsapp}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden="true" className="h-8 w-8 md:h-9 md:w-9" fill="currentColor" viewBox="0 0 32 32">
        <path d="M16.01 3.2c-7.04 0-12.77 5.63-12.77 12.56 0 2.4.69 4.73 2 6.75l-1.31 6.29 6.46-1.52a12.96 12.96 0 0 0 5.62 1.29c7.04 0 12.77-5.63 12.77-12.56S23.05 3.2 16.01 3.2Zm0 23.23c-1.82 0-3.61-.46-5.18-1.34l-.37-.21-3.83.9.78-3.73-.24-.38a10.4 10.4 0 0 1-1.68-5.66c0-5.75 4.72-10.43 10.52-10.43s10.52 4.68 10.52 10.43-4.72 10.42-10.52 10.42Zm5.77-7.8c-.32-.16-1.87-.91-2.16-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.58-1.86-1.76-2.17-.18-.31-.02-.48.14-.64.14-.14.32-.36.47-.54.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.97-2.32-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59s1.13 3 1.29 3.21c.16.21 2.22 3.34 5.38 4.68.75.32 1.34.51 1.8.65.76.24 1.44.21 1.99.13.61-.09 1.87-.75 2.13-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.36Z" />
      </svg>
    </Link>
  );
}
