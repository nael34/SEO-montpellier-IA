import "./globals.css";

export const metadata = {
  title: "Montpellier-IA — Création de sites web par Intelligence Artificielle",
  description: "Propulsez votre entreprise avec un site web professionnel, ultra-rapide et optimisé pour le référencement local grâce à l'IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Chargement des polices premium du thème Dark AI */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Importation de la feuille de style globale d'origine */}
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
