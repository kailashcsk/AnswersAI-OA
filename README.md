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
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
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

   ![Screenshot 2024-11-30 at 11 12 28 AM](https://github.com/user-attachments/assets/ef6187bb-5220-4e1f-8dd8-361e5453af37)


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

![Screenshot 2024-11-30 at 11 13 19 AM](https://github.com/user-attachments/assets/71363413-29b0-4060-bb5c-81a5a747e072)



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
     - Contextual data display using custom tooltip

![Screenshot 2024-11-30 at 11 14 10 AM](https://github.com/user-attachments/assets/a1598b59-96da-4390-ac42-95df8f347f93)


4. **Auth Screen**

   - **SignIn**

![Screenshot 2024-11-30 at 11 17 41 AM](https://github.com/user-attachments/assets/342b021b-864a-4327-ad41-012b4fdcfd2a)


   - **SignUp**
  
  ![Screenshot 2024-11-30 at 11 19 31 AM](https://github.com/user-attachments/assets/0fb56f71-7036-4070-9e24-0ca448622972)

## Demo

https://github.com/user-attachments/assets/f32274f8-2b3f-4f6f-8c30-10a69dbecf17

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

## ⚙️ Technical Decisions and Trade-offs

### Framework: **React with TypeScript**
- **Decision**: React was selected for its flexibility, extensive ecosystem, and strong community support. TypeScript was included to improve code maintainability and prevent runtime errors.
- **Trade-off**: While React offers great flexibility, managing state in complex applications required adding a state management library (Redux Toolkit), increasing the initial setup effort.

### State Management: **Redux Toolkit**
- **Decision**: Used Redux Toolkit to manage global state efficiently, especially for handling dynamic variables and user interactions across components.
- **Trade-off**: Introduced additional complexity and boilerplate compared to simpler solutions like Context API, which could be sufficient for smaller projects.

### Styling: **Tailwind CSS**
- **Decision**: Tailwind CSS was chosen for its utility-first approach, enabling faster prototyping and consistent styling across the application.
- **Trade-off**: Heavy reliance on utility classes reduces code readability for developers unfamiliar with Tailwind and might require additional setup for customization.

### Charts: **Recharts**
- **Decision**: Recharts was chosen for its ease of use and ability to create responsive, interactive visualizations with minimal configuration.
- **Trade-off**: Recharts may experience performance issues when dealing with large datasets or real-time updates, which could require optimization in future iterations.

### Build Tool: **Vite**
- **Decision**: Vite was selected for its fast build times and hot module replacement, improving developer productivity during the development phase.
- **Trade-off**: Some developers accustomed to traditional build tools like Webpack might face a slight learning curve when switching to Vite.

### Authentication: **Firebase Authentication**
- **Decision**: Firebase Authentication was used for its quick setup and support for multiple authentication methods, including Google OAuth and email/password.
- **Trade-off**: Locking into Firebase’s ecosystem might make it harder to migrate to alternative authentication solutions in the future.

### Animations: **React Spring**
- **Decision**: React Spring was used to implement smooth and modern animations, enhancing the user experience.
- **Trade-off**: Introduced additional dependencies and slightly increased the application’s bundle size.

### Responsive Design: **Desktop-First Approach**
- **Decision**: Prioritized desktop-first design to optimize the platform for data analysis workflows, which typically occur on larger screens.
- **Trade-off**: Mobile and tablet views have limited functionality compared to the desktop version, which may restrict accessibility for some users.

### Hosting: **Firebase Hosting**
- **Decision**: Firebase Hosting was chosen for its simplicity, scalability, and integration with Firebase Authentication and other services.
- **Trade-off**: Dependence on Firebase could increase operational costs with higher usage and limit flexibility compared to self-hosted solutions.


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
