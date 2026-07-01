# ☕ GetMeCHAI!

A Patreon-inspired crowdfunding platform that enables creators to receive support from their audience through secure online payments.

Each creator gets a personalized profile page where supporters can contribute using Razorpay while leaving a message. Every successful payment is securely verified and stored in MongoDB before being displayed on the creator's public page.

---

## 🚀 Features

- 🔐 Google Authentication using NextAuth.js
- 👤 Personalized creator profile pages
- 💰 Secure payments using Razorpay
- ✅ Razorpay payment signature verification
- 📝 Supporters can leave custom messages with their donations
- 🏆 Leaderboard displaying supporters sorted by donation amount
- 🎨 Editable creator profile with profile picture and cover image
- ⚙️ Dashboard for updating creator information
- 📱 Fully responsive UI built with Tailwind CSS
- ⚡ Next.js Server Actions for backend operations
- 🍃 MongoDB Atlas integration using Mongoose

---

## 🛠️ Tech Stack

### Frontend

- Next.js (App Router)
- React.js
- Tailwind CSS

### Backend

- Next.js Server Actions
- Next.js API Routes

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- NextAuth.js
- Google OAuth

### Payment Gateway

- Razorpay

---

## 📂 Project Structure

```text
get-me-a-chai/
│
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── login/
│   ├── [username]/
│
├── actions/
├── components/
├── db/
├── models/
├── public/
├── lib/
├── middleware.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/get-me-a-chai.git
```

### Navigate to the project

```bash
cd get-me-a-chai
```

### Install dependencies

```bash
npm install
```

### Create a `.env.local` file

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

MONGODB_URI=

NEXT_PUBLIC_KEY_ID=
KEY_SECRET=

NEXT_PUBLIC_URL=http://localhost:3000
```

### Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 💳 Payment Flow

1. User logs in using Google Authentication.
2. Every user receives a unique public profile page.
3. A supporter enters their name, message, and donation amount.
4. Razorpay creates a payment order.
5. User completes the payment.
6. Razorpay redirects to the callback route.
7. Payment signature is verified on the server.
8. Payment status is updated in MongoDB.
9. The donation appears in the Supporters section.

---

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXTAUTH_URL` | Base URL of the application |
| `NEXTAUTH_SECRET` | Secret for NextAuth |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret |
| `MONGODB_URI` | MongoDB Atlas Connection String |
| `NEXT_PUBLIC_KEY_ID` | Razorpay Public Key |
| `KEY_SECRET` | Razorpay Secret Key |
| `NEXT_PUBLIC_URL` | Public URL of the application |

---

## 📸 Screenshots


### Home Page

```

```

### Creator Page

```

```

### Dashboard

```

```

### Razorpay Checkout

```

```

---

## 🎯 Future Improvements

- 📧 Email notifications after successful donations
- 🌙 Dark/Light mode
- 📊 Creator analytics dashboard
- 💎 Monthly subscription support
- 📜 Donation history
- 🖼️ Image uploads using Cloudinary
- 💬 Comment moderation
- 🧾 Downloadable payment receipts
- 📱 Better mobile optimizations
- 👨‍💼 Admin dashboard

---

## 📚 What I Learned

While building this project, I gained practical experience with:

- Next.js App Router
- React Hooks
- Server Actions
- API Routes
- Google Authentication using NextAuth.js
- MongoDB Atlas
- Mongoose ODM
- Razorpay Payment Integration
- Payment Signature Verification
- Dynamic Routing
- CRUD Operations
- Environment Variables
- Secure Backend Development
- Tailwind CSS
- Responsive UI Design

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Deepanjan Dey**

- GitHub: https://github.com/deepanjan69
- LinkedIn: https://www.linkedin.com/in/deepanjan-dey-b9791a257/

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!