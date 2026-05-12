import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-inverse-surface pt-28 text-white">
      <Container>
        <div className="max-w-2xl">
          <p className="font-body text-label-sm font-bold uppercase tracking-[0.18em] text-inverse-primary">404</p>
          <h1 className="mt-sm font-heading text-headline-h1-mobile sm:text-headline-h1">Page not found</h1>
          <p className="mt-md font-body text-body-lg text-white/75">
            The page you requested is unavailable. Return to the main site to continue exploring AYAN ALTAQI services and project capabilities.
          </p>
          <div className="mt-lg">
            <Button href="/">Return Home</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
