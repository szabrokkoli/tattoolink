# Tetoválószalon Időpontfoglaló – SPECIFICATION

## Rövid leírás
Az alkalmazás célja, hogy modern, intelligens időpontfoglalást és projektmenedzsmentet biztosítson tetoválószalonok és vendégeik számára. A rendszer támogatja a konzultációkat, dinamikus időtartamokat, digitális beleegyező nyilatkozatokat, pénzügyi folyamatokat és portfólió böngészést.

## Funkcionális követelmények
- Időpontfoglalás tetoválóművészekhez, konzultációs ablakokkal
- Dinamikus időtartam: művész stílusonként beállíthatja a szükséges időt
- Referenciakép feltöltés foglaláskor
- Digitális beleegyező nyilatkozat kitöltése
- Utóápolási push-értesítések
- Előlegkezelés Stripe/PayPal integrációval
- Árkalkulátor méret és bonyolultság alapján
- Portfólió böngészés stílusok szerint
- Szalonok értékelése és leírása

## Nem-funkcionális követelmények
- Mobil-first, reszponzív UI (React Native)
- Biztonságos adatkezelés, GDPR kompatibilitás
- Felhőalapú backend (Firebase)
- Integráció Stripe/PayPal API-val
- Push notification támogatás

## Technológiai döntések
- Frontend: React Native
- Backend: Firebase
- Fizetés: Stripe/PayPal
- Push értesítések: Firebase Cloud Messaging

## Felhasználói szerepkörök
- Vendég: időpontfoglalás, portfólió böngészés, értékelés, nyilatkozat kitöltése
- Tetoválóművész: naptár kezelése, projektmenedzsment, portfólió feltöltése
- Szalon admin: művészek kezelése, pénzügyi modul, értékelések moderálása

## Képernyőlista és navigációs terv
1. Főoldal (szalonok, portfóliók böngészése)
2. Időpontfoglalás (naptár, konzultáció, referenciakép feltöltés)
3. Projekt részletei (méret, testrész, beleegyező nyilatkozat)
4. Fizetés (előleg, árkalkulátor)
5. Utóápolási útmutató (push-értesítések)
6. Saját profil (foglalások, értékelések)
7. Admin felület (szalon admin)

Navigáció: Stack-alapú fő navigáció, tab-alapú elérés a fő funkciókhoz (pl. portfólió, foglalás, profil).