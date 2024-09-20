# 🌟 Advanced Card Component with Theme Toggle
Welcome to the **Advanced Card Component with Theme Toggle** project! This React project showcases an elegant card component integrated with a theme toggle switch that allows users to switch between light and dark modes. The card component dynamically fetches and displays your GitHub avatar and personal information, making it a personal showcase.

## 🚀 Live Demo
You can view the live demo of the project here: [Theme Switcher Project(Advanced Card Component With Theme Toggle)](https://react-color-and-text-change-project-nhhrurcv5.vercel.app)

## ✨ Features
**Responsive Card Component:** A visually appealing card that scales up on hover.
**Dynamic GitHub Avatar:** Fetch and display your GitHub profile image and details.
**Personal Information:** Shows your name, role, and description.
**Theme Toggle:** Switch between light and dark themes using a custom toggle button.
**Beautiful UI:** Modern, responsive design built with Tailwind CSS.
**Smooth Animations:** Hover and transition effects to enhance the user experience.

## 💻 Technologies Used
**React:** Front-end JavaScript library.
**Tailwind CSS:** Utility-first CSS framework for modern, responsive design.
**GitHub API:** Fetches dynamic avatar image and details from GitHub.
**Vite:** Fast development build tool for a streamlined React development experience.

## 🛠️ Installation & Setup
Follow these steps to set up and run the project locally:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/Muhammad-Shakeel123/theme-switcher.git
    ```

2. **Install Dependecies**
    ```bash
    cd theme-switcher
    npm install
    ```

3. **Start the Development Server**
    ```bahs
    npm run dev
    ```

## 📂 Project Structure
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 Card.jsx        # Main card component
 ┃ ┣ 📜 GitHubProfile.jsx # Fetch and display GitHub avatar
 ┃ ┣ 📜 ThemeBtn.jsx     # Theme toggle button
 ┣ 📂 context
 ┃ ┗ 📜 themeContext.js   # Context API for theme management
 ┣ 📜 App.jsx            # Main app file
 ┣ 📜 index.css          # Global CSS
 ┗ 📜 main.jsx           # Entry point

# ⚙️ Functionalities
## 🃏 Card Component
- Displays a product with a title, rating, and price, along with an "Add to Cart" button.
- Integrated with the GitHubProfile component to dynamically fetch your avatar from GitHub.
- Includes hover effects and transitions that scale the card on interaction.
- Shows personalized information such as your name, role, and a short description.

## 🌗 Theme Toggle Button
- The ThemeBtn component allows users to toggle between light and dark themes.
- The theme state is managed using the React Context API and persists across the app.

## 🌟 Design & Styling
This project uses Tailwind CSS for responsive and utility-based styling. Some of the key design elements include:

**Hover Effects:** Smooth transitions on hover for interactive elements.
**Color Transitions:** Dynamically changing button and text colors.
**Rounded Corners & Shadows:** Clean, modern look with subtle shadows.

## 👨‍💻 GitHub Integration
The GitHubProfile component fetches the user's avatar and details from the GitHub API and displays it inside the card.

To update the avatar and info with your own GitHub profile:

1. Open GitHubProfile.jsx.
2. Replace the fetch URL with your GitHub username:
```bash
fetch('https://api.github.com/users/your-username')
```
This will automatically display your GitHub avatar and profile information in the card component.

## 🚀 Deployment
You can deploy this project on platforms like:

- Netlify
- Vercel
- GitHub Pages
**Example Deployment with Netlify:**
1. Push your project to GitHub.
2. Go to Netlify.
3. Connect your GitHub repository and click Deploy.

## 🤝 Contributing
If you'd like to contribute to this project, feel free to submit pull requests! Contributions are always welcome.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


**------------Made with ❤️ by Muhammad Shakeel------------------**

