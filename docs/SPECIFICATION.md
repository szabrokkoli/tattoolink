# TattoLink – SPECIFICATION

## Rövid leírás
Az alkalmazás célja, hogy modern, intelligens időpontfoglalást, szalon- és művészböngészést, értékelést, portfólió megtekintést és üzenetküldést biztosítson tetoválószalonok és vendégeik számára. A rendszer támogatja a konzultációkat, dinamikus időtartamokat, pénzügyi folyamatokat, portfólió böngészést és üzeneteket.

## Funkcionális követelmények
- Időpontfoglalás tetoválóművészekhez, konzultációs ablakokkal
- Dinamikus időtartam: művész stílusonként beállíthatja a szükséges időt
- Referenciakép feltöltés foglaláskor
- Üzenetküldés művész és vendég között
- Utóápolási push-értesítések
- Előlegkezelés Stripe/PayPal integrációval
- Árkalkulátor méret és bonyolultság alapján
- Portfólió böngészés stílusok szerint
- Szalonok értékelése és leírása

## Nem-funkcionális követelmények
- Mobil-first, reszponzív UI (React Native)
- Biztonságos adatkezelés, GDPR kompatibilitás
- Felhőalapú backend (Supabase/Postgres)
- Integráció Stripe/PayPal API-val
- Push notification támogatás

## Technológiai döntések
- Frontend: React Native
- Backend: Supabase (Postgres)
- Fizetés: Stripe/PayPal
- Push értesítések: Expo/Firebase Cloud Messaging

## Felhasználói szerepkörök
- Vendég: időpontfoglalás, portfólió böngészés, értékelés, üzenetküldés
- Tetoválóművész: naptár kezelése, projektmenedzsment, portfólió feltöltése, üzenetkezelés
- Szalon admin: művészek kezelése, pénzügyi modul, értékelések moderálása

## Képernyőlista és navigációs terv
Tab navigáció (nav bar):
1. Főoldal (szalonok, portfóliók böngészése)
2. Időpontfoglalás (naptár, konzultáció, referenciakép feltöltés)
3. Üzenetek (művész és vendég közötti chat)
4. Saját profil (foglalások, értékelések)

Stack navigációval elérhető további képernyők:
- Projekt részletei (méret, testrész)
- Fizetés (előleg, árkalkulátor)
- Utóápolási útmutató (push-értesítések)
- Admin felület (szalon admin)

Navigáció: Tab-alapú fő navigáció (Home, Időpontfoglalás, Üzenetek, Profil), további funkciók stack navigációval.