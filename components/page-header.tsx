import { Container } from "@/components/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b-2 border-ink bg-panel-50/50 py-10 backdrop-blur-sm sm:py-12">
      <Container>
        <div className="pixel-panel p-6 sm:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-clinical-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/68">{description}</p>
        </div>
      </Container>
    </section>
  );
}
