# TattooLink – DATAMODEL

## Entitások és mezők

### 1. User (Felhasználó)
- id: string
- name: string
- email: string
- role: enum (guest, artist, admin)
- phone: string
- salonId: string (opcionális, 1:N Salon)

### 2. Appointment (Időpont)
- id: string
- userId: string (1:N User)
- artistId: string (1:N Artist)
- date: datetime
- duration: integer (perc)
- style: string
- status: enum (booked, cancelled, completed)

### 3. Portfolio (Portfólió)
- id: string
- artistId: string (1:N Artist)
- images: string[]
- style: string
- description: string

### 4. Payment (Fizetés)
- id: string
- appointmentId: string (1:1 Appointment)
- amount: number
- method: enum (stripe, paypal)
- status: enum (pending, paid, refunded)

### 5. Salon (Szalon)
- id: string
- name: string
- description: string
- address: string
- rating: number
- imageUrl: string

### 6. Review (Értékelés)
- id: string
- userId: string
- salonId: string
- rating: integer
- comment: string

### 7. Message (Üzenet)
- id: string
- senderId: string (User)
- receiverId: string (User)
- content: string
- sentAt: datetime

## Kapcsolatok
- Egy User több Appointment-ot foglalhat (1:N)
- Egy Artist több Portfolio-t tölthet fel (1:N)
- Egy Appointment-hoz tartozik egy Payment (1:1)
- Egy Salon több Artist-ot foglalkoztathat (1:N)
- Portfolio-k stílus szerint kereshetők (N:M Artist-Portfolio)
- Egy User több Review-t írhat (1:N)
- Egy User több Message-t küldhet/fogadhat (1:N)

## Példa kapcsolati diagram
- User 1:N Appointment
- Artist 1:N Portfolio
- Appointment 1:1 Payment
- Salon 1:N Artist
- User 1:N Review
- User 1:N Message
- Salon 1:N Artist
- Portfolio N:M Artist
