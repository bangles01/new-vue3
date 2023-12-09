# New Vue3 Project Template

## Overview

This template serves as a starting point for your Vue.js 3 projects, providing a solid foundation with essential tools and configurations. Whether you're starting a new project or looking for a quick setup to kickstart your Vue3 development, this template has got you covered.

## Features

- **Vue 3:** Harness the power of the latest Vue.js version for building reactive and efficient user interfaces.

- **Vite:** Enjoy fast and optimized development with Vite, a next-generation frontend tool that brings speed to your Vue projects.

- **Tailwind CSS:** Streamline your styling process with Tailwind CSS, a utility-first CSS framework that makes it easy to create beautiful and responsive designs.

- **TypeScript:** Leverage the benefits of static typing with TypeScript, adding robustness to your Vue applications.

- **i18n (Internationalization):** Seamlessly manage translations and provide a multilingual experience for your users with built-in i18n support.

- **Router:** Navigate through your application effortlessly with the included router. Check out src/router.ts to customize your routes.

- **Docker Support:** Easily containerize your Vue3 application with Docker and Docker Compose.

## Getting Started

Follow these steps to set up your Vue3 project using this template:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bangles01/new-vue3.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd new-vue3
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   This will launch your project locally, and you can access it at [http://localhost:8080](http://localhost:8080).

## Docker Setup

1. **Define .env variables**

2. **Build and run the docker with docker-compose**

```bash
docker-compose up -d
```

## Project Structure

The project structure is organized for clarity and maintainability:

- `src/`: Contains your main application code.
- `src/components/`: Houses Vue components.
- `src/i18n/`: Manages internationalization resources.
- `src/main.ts`: Entry point for your application, where Vue is instantiated.
- `src/router.ts`: Configuration file for your router.
- `src/style.css`: Holds your styles for customization.
- `vite.config.ts`: Configuration file for Vite.

Feel free to adapt the structure to suit your project's specific needs.

## Customize and Extend

As you build your project, you can easily customize and extend it to meet your requirements. The provided setup is meant to give you a solid foundation, and you can add more libraries, tools, or features as your project evolves.

## Contribution

If you encounter issues, have suggestions, or want to contribute to improving this template, feel free to submit a pull request. Your contributions are welcome and appreciated!

## License

This project is licensed under the MIT License. Feel free to use it in your projects and make it your own!