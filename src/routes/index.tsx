import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/divino-hero.jpg";
import pastelImage from "@/assets/divino-pastel.jpg";
import baconImage from "@/assets/divino-bacon.jpg";
import comboImage from "@/assets/divino-combo.jpg";
import classicImage from "@/assets/divino-classico.jpg";
import logoAsset from "@/assets/divino-logo.png.asset.json";

const IFOOD_URL =
  "https://www.ifood.com.br/delivery/parnaiba-pi/divino-hamburgueria-nossa-senhora-de-fatima/bc4197b1-8cf7-4156-b994-8e6c1b2c2f75";
const MAP_URL =
  "https://www.google.com/maps?q=Av.%20S%C3%A3o%20Sebasti%C3%A3o%2C%20975%20-%20Campos%2C%20Parna%C3%ADba%20-%20PI%2C%2064202-020&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Av.%20S%C3%A3o%20Sebasti%C3%A3o%2C%20975%20-%20Campos%2C%20Parna%C3%ADba%20-%20PI%2C%2064202-020";

const menuItems = [
  { name: "Divino Clássico", price: "R$ 23,00", description: "Burger clássico da casa, batata P e refrigerante em lata.", image: classicImage },
  { name: "Divino Bacon 2.0", price: "R$ 35,00", description: "Dois burgers, cheddar e uma porção generosa de bacon crocante.", image: baconImage },
  { name: "Combo Casal O Divino", price: "R$ 75,00", description: "Dois burgers O Divino, batata G e refrigerante de 1 litro.", image: comboImage },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divino Hamburgueria e Pastelaria | Parnaíba, PI" },
      { name: "description", content: "Hambúrgueres, pastéis e combos em Parnaíba. Salão, retirada e entrega pelo iFood até 02:00." },
      { property: "og:title", content: "Divino Hamburgueria e Pastelaria" },
      { property: "og:description", content: "Sabor artesanal em Parnaíba, com salão, retirada e entrega pelo iFood." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.8 8.5h10.4l1.1 12H5.7l1.1-12Z" />
      <path strokeLinecap="round" d="M9 9V6.8a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" aria-label="Divino — início" className="flex items-center">
            <img src={logoAsset.url} alt="Divino Hamburgueria e Pastelaria" className="h-14 w-28 object-contain" />
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            <a href="#cardapio" className="nav-link">Cardápio</a>
            <a href="#experiencia" className="nav-link">A Divino</a>
            <a href="#localizacao" className="nav-link">Localização</a>
          </nav>
          <a className="cta-primary" href={IFOOD_URL} target="_blank" rel="noreferrer">
            <BagIcon /> <span className="hidden sm:inline">Pedir no iFood</span><span className="sm:hidden">Pedir</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12">
        <div className="grid grid-cols-12 gap-4">
          <div className="relative col-span-12 min-h-[560px] overflow-hidden rounded-md lg:col-span-8 lg:min-h-[650px]">
            <img src={heroImage} alt="Hambúrguer artesanal Divino com cheddar e bacon" width={1536} height={1024} className="absolute inset-0 size-full object-cover" />
            <div className="hero-shade absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="eyebrow">Hamburgueria & Pastelaria</span>
              <h1 className="mt-3 max-w-3xl font-display text-6xl leading-[0.88] text-foreground sm:text-8xl lg:text-9xl">O SABOR QUE É DIVINO</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Hambúrgueres marcantes, pastéis crocantes e combos para dividir. Feitos para matar a fome até tarde.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="cta-primary cta-large" href={IFOOD_URL} target="_blank" rel="noreferrer"><BagIcon /> Pedir agora</a>
                <a className="cta-secondary cta-large" href="#cardapio">Ver cardápio</a>
              </div>
            </div>
          </div>

          <div className="col-span-12 grid gap-4 lg:col-span-4 lg:grid-rows-2">
            <article className="flex min-h-[270px] flex-col justify-between rounded-md border border-border bg-card p-7 sm:p-8">
              <div>
                <span className="eyebrow text-brand-red">Destaque da noite</span>
                <h2 className="mt-3 font-display text-5xl leading-none">DIVINO BACON 2.0</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Dois burgers, cheddar cremoso e bacon crocante em uma combinação sem economia.</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <span className="font-display text-3xl text-primary">R$ 35,00</span>
                <a href="#cardapio" className="text-link">Ver combos</a>
              </div>
            </article>
            <div className="relative min-h-[320px] overflow-hidden rounded-md">
              <img src={pastelImage} alt="Pastel crocante recheado" loading="lazy" width={1024} height={1024} className="size-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-background/80 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl">PASTELARIA ARTESANAL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Informações rápidas" className="border-y border-border bg-brand-red py-3 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-2 px-6 font-display text-xl sm:justify-between sm:text-2xl">
          <span>R$ 20–80 POR PESSOA</span><span>•</span><span>ABERTO ATÉ 02:00</span><span>•</span><span>SALÃO · RETIRADA · ENTREGA</span>
        </div>
      </section>

      <section id="cardapio" className="border-b border-border bg-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Os queridinhos da casa</span>
              <h2 className="mt-3 font-display text-6xl leading-none sm:text-7xl">ESCOLHA O SEU DIVINO</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Do clássico ao combo para compartilhar, uma seleção do cardápio para todos os tamanhos de fome.</p>
            </div>
            <a className="cta-secondary w-fit" href={IFOOD_URL} target="_blank" rel="noreferrer">Ver cardápio completo</a>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="group">
                <div className="aspect-square overflow-hidden rounded-md border border-border bg-card">
                  <img src={item.image} alt={item.name} loading="lazy" width={1024} height={1024} className="size-full object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl leading-none">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="shrink-0 font-display text-2xl text-primary">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiencia" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-md">
          <img src={classicImage} alt="Hambúrguer clássico Divino" loading="lazy" width={1024} height={1024} className="absolute inset-0 size-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <span className="eyebrow">Para todo tipo de fome</span>
            <h2 className="mt-2 font-display text-6xl leading-none sm:text-7xl">DO SALÃO À SUA CASA</h2>
          </div>
        </div>
        <div>
          <span className="eyebrow">A experiência Divino</span>
          <h2 className="mt-3 font-display text-6xl leading-none sm:text-7xl">SABOR DE VERDADE, PREÇO JUSTO</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Uma hamburgueria de bairro feita para encontros, para levar e para pedir sem complicação. Aqui, a noite fica melhor com burger, pastel e companhia.</p>
          <blockquote className="mt-10 border-l-2 border-primary bg-card p-7 text-lg italic text-foreground">
            “Hambúrguer muito bom. Carne saborosa. Preço justo.”
            <footer className="mt-4 text-xs not-italic uppercase text-muted-foreground">Atualização de visitante no Google</footer>
          </blockquote>
          <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
            {['Refeição no local', 'Para viagem', 'Entrega'].map((service) => <div key={service} className="bg-card px-3 py-5 text-center text-xs font-semibold uppercase text-muted-foreground sm:text-sm">{service}</div>)}
          </div>
        </div>
      </section>

      <section id="localizacao" className="border-y border-border bg-section">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-4 py-16 sm:px-6 sm:py-20 lg:pr-16">
            <span className="eyebrow">Parnaíba, Piauí</span>
            <h2 className="mt-3 font-display text-6xl leading-none sm:text-7xl">VEM PRA DIVINO</h2>
            <div className="mt-10 space-y-7">
              <div><p className="info-label">Endereço</p><p className="info-value">Av. São Sebastião, 975 — Campos<br />Parnaíba — PI, 64202-020</p></div>
              <div><p className="info-label">Horário</p><p className="info-value">Aberto · fecha às 02:00</p></div>
              <div><p className="info-label">Telefone</p><a className="info-value transition hover:text-primary" href="tel:+5586998590913">(86) 99859-0913</a></div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="cta-primary" href={MAP_DIRECTIONS} target="_blank" rel="noreferrer">Traçar rota</a>
              <a className="cta-secondary" href={IFOOD_URL} target="_blank" rel="noreferrer">Pedir delivery</a>
            </div>
          </div>
          <div className="min-h-[430px] border-t border-border lg:border-l lg:border-t-0">
            <iframe title="Mapa da Divino Hamburgueria e Pastelaria" src={MAP_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[430px] w-full grayscale-[.8] contrast-125" />
          </div>
        </div>
      </section>

      <footer className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 border-b border-border pb-10 md:flex-row">
            <img src={logoAsset.url} alt="Divino Hamburgueria e Pastelaria" className="h-20 w-40 object-contain" loading="lazy" />
            <div className="flex flex-wrap justify-center gap-7 text-xs font-semibold uppercase text-muted-foreground">
              <a href="#cardapio" className="hover:text-primary">Cardápio</a><a href="#localizacao" className="hover:text-primary">Localização</a><a href={IFOOD_URL} target="_blank" rel="noreferrer" className="hover:text-primary">iFood</a>
            </div>
            <span className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground" aria-label="Instagram em breve" title="Instagram em breve"><InstagramIcon /></span>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-8 text-center text-xs uppercase text-muted-foreground sm:flex-row sm:text-left">
            <span>© 2026 Divino Hamburgueria e Pastelaria</span><span>Feito com fogo, sabor e tradição</span>
          </div>
        </div>
      </footer>
    </main>
  );
}