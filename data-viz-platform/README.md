
# Data Visualization Platform

A modern React-based data visualization platform built with TypeScript, featuring real-time graph visualization, variable management, and interactive data exploration.

## 🔍 Features

- 📊 Interactive data visualization dashboard
- 🎛️ Variable management with slide-over panel
- 📱 Responsive design with mobile and tablet support
- 🎨 Modern UI with smooth transitions
- 🔐 Authentication system
- 🎯 Interactive data point exploration

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/kailashcsk/AnswersAI-OA.git
cd data-viz-platform
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update the `.env` file with the following configuration:
```env
VITE_FIREBASE_API_KEY="AIzaSyDcTt8D1rJ7wHyEG4es6UbMuIUnk3L6GU4"
VITE_FIREBASE_AUTH_DOMAIN="answersai-oa.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="answersai-oa"
VITE_FIREBASE_STORAGE_BUCKET="answersai-oa.firebasestorage.app"
VITE_FIREBASE_MESSAGING_SENDER_ID="1021734015148"
VITE_FIREBASE_APP_ID="1:1021734015148:web:51faac91f8f28f69168f09"
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/                    # Static assets (images, fonts, etc.)
├── components/
│   ├── dashboard/            # Dashboard-specific components
│   ├── rightpanel/          # Right panel/slide-over components
│   └── shared/              # Shared/reusable components
├── config/                   # App configurations and constants
├── hooks/                    # Custom React hooks
├── layouts/                  # Layout components and templates
├── pages/                    # Page/Route components
├── store/                    # Redux store configuration
│   └── slices/              # Redux slices for features
├── styles/                   # Global styles and theme
├── types/                    # TypeScript type definitions
└── utils/                    # Utility/helper functions
```

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Routing:** React Router v6
- **Charts:** Recharts
- **Icons:** Lucide Icons
- **Animations:** React Spring

## Key Features Detailed Breakdown and Screenshots

1. **Dashboard Screen**
   - **Main Chart**
     - Line graph visualization
     - Monthly data points
     - Unsatisfied Demand % tracking
     - Dollar value tracking ($20K to $100K range)

   - **KPI Cards**

   - **Best Scenario Results**

   ![Screenshot 2024-11-30 at 11 12 28 AM](https://gist.github.com/user-attachments/assets/66cefbca-256b-4db2-92b1-ccf49e627856)

2. **Variable Editor**
  
   - **Search & Filter**
     - Real-time search
     - Category filtering
     - Variable highlighting

   - **Variable Categories**
     - Organized by type
     - Active/Inactive states
     - Contextual information
     - Quick toggle options

   - **Control Panel**
     - Variable information display on hover for 1.5s

![Screenshot 2024-11-30 at 11 13 19 AM](https://gist.github.com/user-attachments/assets/b6eb2533-2d54-4083-ad7e-bea443ef587e)


3. **Data Point Interactions**
   - **Hover System**
     - Smooth fade-in animations
     - Detailed data tooltips
     - Interactive data points

   - **Variable Selection**
     - Multiple variable support
     - State persistence
     - Real-time updates

   - **Detailed Information**
     - Contextual data display

![Screenshot 2024-11-30 at 11 14 10 AM](https://gist.github.com/user-attachments/assets/c10b0142-7a8d-4b17-8f5d-dc574169ad10)

4. **Auth Screen**

   - **SignIn**

![Screenshot 2024-11-30 at 11 17 41 AM](https://gist.github.com/user-attachments/assets/851c1a1e-cd59-44a8-a87c-90666c85eab0)

   - **SignUp**
  
  ![Screenshot 2024-11-30 at 11 19 31 AM](https://gist.github.com/user-attachments/assets/21b812a6-39d6-4108-94f8-80f1c981919b)

## Demo

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 📱 Responsive Design

The application follows a desktop-first approach but is fully responsive:
- 💻 Desktop: 1200px and above
- 📱 Tablet: 768px to 1199px
- 📱 Mobile: Below 768px

## 🔒 Authentication

The platform uses Firebase Authentication with:
- Google OAuth
- Email/Password authentication

To set up authentication:
1. Create a Firebase project
2. Enable authentication methods
3. Add configuration to `.env` file

## 🚀 Deployment

1. Build the production bundle:
```bash
npm run build
# or
yarn build
```

2. Test the production build locally:
```bash
npm run preview
# or
yarn preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## ⚠️ Known Limitations

- Variable panel animations might be choppy on lower-end devices
- Chart performance might degrade with large datasets
- Mobile view has limited functionality compared to desktop

## ⏱️ Time Spent

- Setup & Configuration: 0.5 hours
- Core Implementation: 4 hours
- Styling & Animations: 2 hours
- Testing & Bug Fixes: 1 hours
- Documentation: 0.5 hours

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
