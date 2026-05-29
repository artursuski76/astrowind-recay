import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Oferta',
      links: [
        {
          text: 'Samochody osobowe',
          href: getPermalink('/#samochody-osobowe'),
        },
        {
          text: 'Samochody dostawcze',
          href: getPermalink('/#samochody-dostawcze'),
        },
        {
          text: 'Cennik',
          href: getPermalink('/pricing'),
        },
      ],
    },
    {
      text: 'O nas',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Kontakt',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Zadzwoń teraz', href: 'tel:+48662294045' }],
};

export const footerData = {
  links: [
    {
      title: 'Oferta',
      links: [
        { text: 'Samochody osobowe', href: getPermalink('/#samochody-osobowe') },
        { text: 'Samochody dostawcze', href: getPermalink('/#samochody-dostawcze') },
        { text: 'Cennik', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Firma',
      links: [
        { text: 'O nas', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Kontakt', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Informacje prawne',
      links: [
        { text: 'Regulamin', href: getPermalink('/terms') },
        { text: 'Polityka prywatności', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: '+48 662 294 045', href: 'tel:+48662294045' },
        { text: 'info@recay.pl', href: 'mailto:info@recay.pl' },
        { text: 'Mikołaja Reja 18/34, 43-300 Bielsko-Biała', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Regulamin', href: getPermalink('/terms') },
    { text: 'Polityka prywatności', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} RECAY – Wypożyczalnia samochodów Bielsko-Biała · Wszelkie prawa zastrzeżone.
  `,
};
