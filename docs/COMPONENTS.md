# Tetoválószalon Időpontfoglaló – COMPONENTS

## Komponensfa

- App
  - MainNavigation (Stack/Tab)
    - HomeScreen
      - SalonList
        - SalonCard
      - PortfolioList
        - PortfolioCard
    - BookingScreen
      - Calendar
      - ConsultationOption
      - ReferenceImageUpload
    - ProjectDetailsScreen
      - SizeSelector
      - BodyPartSelector
      - ConsentForm
    - PaymentScreen
      - DepositHandler
      - PriceCalculator
    - AftercareScreen
      - PushNotificationSettings
      - AftercareGuide
    - ProfileScreen
      - BookingHistory
      - ReviewList
    - AdminScreen
      - ArtistManagement
      - FinancialOverview
      - ReviewModeration

## Navigációs gráf

- Fő navigáció: Stack (Home → Booking → ProjectDetails → Payment → Aftercare → Profile → Admin)
- Tab navigáció: Home, Booking, Profile, Admin
- Minden fő funkció külön képernyőn, komponensek hierarchikusan beágyazva.