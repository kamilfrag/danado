# Danado – strona internetowa

Statyczna strona wizytówka dla firmy instalacyjnej **Danado** (kompleksowe instalacje
grzewcze, wodne, pompy ciepła, fotowoltaika, klimatyzacja, rekuperacja).

## Struktura plików

```
index.html            – cała strona (jedna podstrona, sekcje kotwicowe)
css/styles.css        – style
js/main.js            – menu mobilne + obsługa formularza
img/logo.svg          – logo
img/favicon.svg       – ikona w karcie przeglądarki
img/gallery/*.svg     – zdjęcia poglądowe galerii (DO PODMIANY na prawdziwe)
robots.txt            – reguły dla robotów + boty AI (GEO)
sitemap.xml           – mapa strony
site.webmanifest      – manifest PWA
```

## Uruchomienie lokalne

To zwykłe pliki statyczne — wystarczy otworzyć `index.html` w przeglądarce,
albo uruchomić lokalny serwer:

```bash
python -m http.server 8000
# następnie http://localhost:8000
```

## ⚙️ Co skonfigurować przed publikacją (WAŻNE)

1. **Domena** – w `index.html`, `robots.txt`, `sitemap.xml` zamień
   `https://www.danado.pl/` na swój prawdziwy adres.
2. **Formularz kontaktowy** – obecnie działa w trybie zapasowym (otwiera program
   pocztowy). Aby odbierać zgłoszenia automatycznie:
   - załóż darmowe konto na [formspree.io](https://formspree.io),
   - wklej swój endpoint w `index.html` w atrybucie `action` formularza
     (`https://formspree.io/f/TWOJE-ID`). Skrypt sam wykryje konfigurację
     i wyśle zgłoszenie w tle.
3. **Zdjęcia realizacji** – podmień pliki w `img/gallery/` na prawdziwe fotografie
   (zalecane proporcje 4:3, format `.jpg`/`.webp`). Zaktualizuj atrybuty `alt`.
4. **Obraz Open Graph** – dodaj `img/og-danado.jpg` (1200×630 px) do ładnego
   podglądu przy udostępnianiu w mediach społecznościowych.
5. **Adres / NAP** – uzupełnij dokładną miejscowość i adres w danych
   strukturalnych (`HVACBusiness` w `index.html`) oraz w sekcji kontaktu — to
   istotne dla lokalnego SEO i Google Business Profile.

## SEO / GEO – co już jest gotowe

- Semantyczny HTML5, jeden nagłówek `<h1>`, poprawna hierarchia nagłówków.
- Meta opis, słowa kluczowe, kanoniczny URL, Open Graph i Twitter Cards.
- Dane strukturalne JSON-LD: `HVACBusiness` (lokalna firma) oraz `FAQPage`.
- `robots.txt` z jawnym dostępem dla botów AI (GPTBot, PerplexityBot, ClaudeBot…) – GEO.
- `sitemap.xml`, responsywność (mobile-first), `lazy-loading` zdjęć, polski `lang="pl"`.
- Sekcja FAQ z treścią cytowalną przez wyszukiwarki generatywne.

## Dalsze kroki dla pozycjonowania lokalnego

- Załóż i zweryfikuj **wizytówkę Google (Profil Firmy)** — najważniejszy element
  lokalnego SEO.
- Zachowaj spójne **NAP** (nazwa, adres, telefon) na stronie, w wizytówce i katalogach.
- Zbieraj opinie klientów i dodawaj realne zdjęcia realizacji.
