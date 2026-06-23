import { Container } from "@/components/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical-600">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </Container>
    </section>
  );
}
