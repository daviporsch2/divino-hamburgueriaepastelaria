import { createFileRoute, Link } from "@tanstack/react-router";
import logoImage from "@/assets/divino-logo.png";

const IFOOD_URL =
  "https://www.ifood.com.br/delivery/parnaiba-pi/divino-hamburgueria-nossa-senhora-de-fatima/bc4197b1-8cf7-4156-b994-8e6c1b2c2f75";
const INSTAGRAM_URL = "https://www.instagram.com/divino_hamburgueriaa/";

type Item = { name: string; price: string; description?: string };

const burgers: Item[] = [
  { name: "Divino Clássico", price: "R$ 15,00", description: "Pão, carne smash 80g, queijo e molho de sua preferência." },
  { name: "Divino Clássico Duplo", price: "R$ 21,00", description: "Pão, 2 carnes smash 80g, 2 queijos e molho de sua preferência." },
  { name: "Divino Cheddar", price: "R$ 24,00", description: "Pão, 2 carnes smash 80g, 2 queijos cheddars, cebola caramelizada e molho de sua preferência." },
  { name: "Divino Bacon", price: "R$ 25,00", description: "Pão, 2 carnes smash 80g, 2 queijos, bacon, alface, tomate e molho de sua preferência." },
  { name: "Divino Calabresa", price: "R$ 25,00", description: "Pão, 2 carnes smash 80g, 2 queijos, calabresa, alface, tomate e molho de sua preferência." },
  { name: "Divino Bacon 2.0", price: "R$ 30,00", description: "Pão, 2 carnes smash 80g, queijo, cheddar, bacon, cebola caramelizada, alface, tomate e molho de sua preferência." },
  { name: "Divino Calabresa 2.0", price: "R$ 30,00", description: "Pão, 2 carnes smash 80g, queijo, cheddar, calabresa, cebola caramelizada, alface, tomate e molho de sua preferência." },
  { name: "O Divino", price: "R$ 36,00", description: "Pão, 2 carnes smash 80g, queijo, cheddar, bacon, ovo, cebola caramelizada, alface, tomate e molho de sua preferência." },
];

const combosIndividuais: Item[] = [
  { name: "Divino Clássico", price: "R$ 27,00", description: "Divino Clássico, batata P e refrigerante de lata." },
  { name: "Divino Clássico Duplo", price: "R$ 35,00", description: "Divino Clássico Duplo, batata P e refrigerante de lata." },
  { name: "Divino Cheddar", price: "R$ 36,00", description: "Divino Cheddar, batata P e refrigerante de lata." },
  { name: "Divino Bacon", price: "R$ 37,00", description: "Divino Bacon, batata P e refrigerante de lata." },
  { name: "Divino Calabresa", price: "R$ 37,00", description: "Divino Calabresa, batata P e refrigerante de lata." },
  { name: "Divino Bacon 2.0", price: "R$ 42,00", description: "Divino Bacon 2.0, batata P e refrigerante de lata." },
  { name: "Divino Calabresa 2.0", price: "R$ 42,00", description: "Divino Calabresa 2.0, batata P e refrigerante de lata." },
  { name: "O Divino", price: "R$ 48,00", description: "O Divino, batata P e refrigerante de lata." },
];

const combosCasais: Item[] = [
  { name: "Divino Clássico", price: "R$ 49,00", description: "2 Divino Clássico, batata G e refrigerante de 1 litro." },
  { name: "Divino Clássico Duplo", price: "R$ 61,00", description: "2 Divino Clássico Duplo, batata G e refrigerante de 1 litro." },
  { name: "Divino Cheddar", price: "R$ 66,00", description: "2 Divino Cheddar, batata G e refrigerante de 1 litro." },
  { name: "Divino Bacon", price: "R$ 68,00", description: "2 Divino Bacon, batata G e refrigerante de 1 litro." },
  { name: "Divino Calabresa", price: "R$ 68,00", description: "2 Divino Calabresa, batata G e refrigerante de 1 litro." },
  { name: "Divino Bacon 2.0", price: "R$ 78,00", description: "2 Divino Bacon 2.0, batata G e refrigerante de 1 litro." },
  { name: "Divino Calabresa 2.0", price: "R$ 78,00", description: "2 Divino Calabresa 2.0, batata G e refrigerante de 1 litro." },
  { name: "O Divino", price: "R$ 90,00", description: "2 O Divino, batata G e refrigerante de 1 litro." },
];

const monteSeuPastel: Item[] = [
  { name: "2 sabores tradicionais", price: "P R$ 12,00 · G R$ 14,00" },
  { name: "3 sabores tradicionais", price: "P R$ 14,00 · G R$ 16,00" },
  { name: "4 sabores tradicionais", price: "P R$ 16,00 · G R$ 18,00" },
  { name: "2 sabores especiais", price: "P R$ 18,00 · G R$ 20,00" },
  { name: "3 sabores especiais", price: "P R$ 19,00 · G R$ 21,00" },
  { name: "4 sabores especiais", price: "P R$ 20,00 · G R$ 22,00" },
];

const bebidas: Item[] = [
  { name: "Água sem gás", price: "R$ 3,00" },
  { name: "Água com gás", price: "R$ 3,00" },
  { name: "H2OH! 500ml", price: "R$ 8,00" },
  { name: "Refrigerante lata", price: "R$ 6,00", description: "Coca-Cola, Coca-Cola Zero, Guaraná, Guaraná Zero, Fanta Laranja e Fanta Uva." },
  { name: "Refrigerante 1 litro", price: "R$ 10,00", description: "Coca-Cola e Guaraná." },
  { name: "Sucos 300ml", price: "R$ 6,00", description: "Acerola, maracujá, goiaba e graviola." },
  { name: "Vitaminas 300ml", price: "R$ 7,00", description: "Acerola, maracujá, goiaba e graviola." },
  { name: "Skol 600ml", price: "R$ 12,00" },
  { name: "Brahma 600ml", price: "R$ 12,00" },
  { name: "Spaten 600ml", price: "R$ 14,00" },
  { name: "Stella Artois 600ml", price: "R$ 15,00" },
  { name: "Heineken 600ml", price: "R$ 16,00" },
];

const acompanhamentos: Item[] = [
  { name: "Batata frita P", price: "R$ 8,00" },
  { name: "Batata frita G", price: "R$ 12,00" },
];

const sobremesas: Item[] = [
  { name: "Mousse", price: "R$ 8,00", description: "Ninho com Nutella, morango com Nutella, abacaxi e maracujá." },
];

const pastelGroups = [
  {
    title: "Pastéis tradicionais",
    price: "P R$ 10,00 · G R$ 12,00",
    flavors: ["Carne", "Frango", "Calabresa", "Bacon", "Queijo mussarela", "Queijo coalho", "Cheddar", "Presunto", "Catupiry", "Pizza"],
  },
  { title: "Pastéis especiais", price: "P R$ 14,00 · G R$ 18,00", flavors: ["Carne de sol", "Camarão"] },
  {
    title: "Pastéis doces tradicionais",
    price: "P R$ 10,00 · G R$ 12,00",
    flavors: ["Chocolate ao leite", "Chocolate branco", "Chocolate meio amargo", "Doce de leite", "Creme de avelã", "Ninho", "Goiabada", "Brigadeiro", "Romeu e Julieta", "Beijinho"],
  },
  {
    title: "Pastéis doces especiais",
    price: "P R$ 14,00 · G R$ 18,00",
    flavors: ["Nutella", "Sensação", "KitKat", "Galak", "Diamante Negro", "Brigadeiro Moça"],
  },
];

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio completo | Divino Hamburgueria e Pastelaria" },
      { name: "description", content: "Cardápio completo da Divino em Parnaíba: hambúrgueres, combos individuais e para casal, pastéis, porções, bebidas e sobremesas com preços atualizados." },
      { property: "og:title", content: "Cardápio completo — Divino Hamburgueria e Pastelaria" },
      { property: "og:description", content: "Hambúrgueres smash, combos, pastéis tradicionais e especiais, bebidas e sobremesas. Preços atualizados." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cardapio,
});

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.name + item.price}>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl leading-none">{item.name}</h3>
            <span className="shrink-0 font-display text-xl text-primary">{item.price}</span>
          </div>
          {item.description ? <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-6 border-b border-border pb-3 font-display text-4xl leading-none text-primary">{title}</h2>
      {children}
    </section>
  );
}

function Cardapio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" aria-label="Divino — início" className="flex items-center">
            <img src={logoImage} alt="Divino Hamburgueria e Pastelaria" className="h-14 w-28 object-contain" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="cta-secondary">Voltar ao início</Link>
            <a className="cta-primary" href={IFOOD_URL} target="_blank" rel="noreferrer">Pedir no iFood</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 pb-12 pt-12 sm:px-6">
        <span className="eyebrow">Parnaíba, Piauí · Aberto até 02:00</span>
        <h1 className="mt-3 font-display text-6xl leading-[0.9] sm:text-8xl">CARDÁPIO COMPLETO</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Hambúrgueres smash, combos para você ou para dividir, pastéis tradicionais e especiais, bebidas e sobremesas. Molhos: rosé, barbecue ou maionese temperada.
        </p>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-3">
        <Block title="Hambúrgueres"><ItemList items={burgers} /></Block>
        <Block title="Combos individuais"><ItemList items={combosIndividuais} /></Block>
        <Block title="Combos casais"><ItemList items={combosCasais} /></Block>

        <div className="lg:col-span-2">
          <Block title="Pastéis">
            <div className="grid gap-8 sm:grid-cols-2">
              {pastelGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-display text-2xl leading-none">{group.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{group.price}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.flavors.join(" · ")}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="mb-5 font-display text-3xl leading-none">Monte o seu pastel</h3>
              <ItemList items={monteSeuPastel} />
            </div>
          </Block>
        </div>

        <div className="space-y-6">
          <Block title="Bebidas"><ItemList items={bebidas} /></Block>
          <Block title="Acompanhamentos"><ItemList items={acompanhamentos} /></Block>
          <Block title="Sobremesas"><ItemList items={sobremesas} /></Block>
        </div>
      </div>

      <section className="border-y border-border bg-brand-red py-3 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center font-display text-xl sm:text-2xl">
          COBRAMOS TAXA DE 10% DO GARÇOM · SALÃO · RETIRADA · ENTREGA
        </div>
      </section>

      <footer className="bg-background py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6">
          <a className="cta-menu w-full sm:w-auto" href={IFOOD_URL} target="_blank" rel="noreferrer">Pedir agora no iFood</a>
          <div className="flex flex-wrap justify-center gap-7 text-xs font-semibold uppercase text-muted-foreground">
            <Link to="/" className="hover:text-primary">Início</Link>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
            <a href="tel:+5586998590913" className="hover:text-primary">(86) 99859-0913</a>
          </div>
          <span className="text-xs uppercase text-muted-foreground">© 2026 Divino Hamburgueria e Pastelaria</span>
        </div>
      </footer>
    </main>
  );
}
