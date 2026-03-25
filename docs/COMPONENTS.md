# TattooLink – COMPONENTS

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
      - MessageList
      - MessageItem
    - PaymentScreen
      - DepositHandler
      - PriceCalculator
    - AftercareScreen
      - PushNotificationSettings
      - AftercareGuide
    - ProfileScreen
      - BookingHistory
      - ReviewList
      - MessageList
    - AdminScreen
      - ArtistManagement
      - FinancialOverview
      - ReviewModeration

## Navigációs gráf

- Fő navigáció: Stack (Home → Booking → ProjectDetails → Payment → Aftercare → Profile → Admin → Messages)
- Tab navigáció: Home, Booking, Profile, Admin, Messages
- Minden fő funkció külön képernyőn, komponensek hierarchikusan beágyazva.