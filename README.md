# ✅ Todo App! 

## 🗺️ Description
This is a simple and user-friendly Todo App build with React and TypeScript. The app allows users to manage their daily tasks. Users can add, sort, mark as done, and delete todos. The application stores todos in localStorage to persist data between sessions.
In this project, I focused on expanding my skills when it comes to E2E-testing with Cypress.

## 🗝️ Project Features
This website includes several key features:

- Add new todos  
- Mark todos as done/undone  
- Delete individual todos (disabled unless done)
- Sort todos A–Ö or Ö–A  
- Stores todos in localStorage for persistence
- Tested for all main workflows using Cypress E2E tests

## 🔭 Project Overview

- Built with React functional components and hooks (useState)
- Dynamic rendering of todos based on state
- Todos can be toggled between done/undone
- Clean Tailwind CSS UI for responsive and accessible design

## ✅ Responsiveness and Accessibility

- Fully responsive design using Tailwind CSS  
- Works well across devices and screen sizes  
- Semantic HTML elements like `section`, `ul`, and `button` are used to improve accessibility  
- Keyboard-friendly interactions


## 👩🏻‍💻 Tech Stack

[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)


## 📸 Site Screenshots

Here are some screenshots from the site:



## 🧪 E2E Testing with Cypress

- All critical workflows are tested using Cypress, including:
- Verify two todos exist by default, with one done and one not done
- Adding a new todo via input field and button
- Deleting a todo (only allowed if marked done)
- Toggling todo state (checkbox updates isDone and UI)

These tests ensure your app works exactly as intended from a user's perspective.

![Cypress test results](https://github.com/user-attachments/assets/0d6b6be5-ee1b-4ed0-b855-3c6256c2e863)


## 🍎 Lessons learned

- Using localStorage with React to persist state  
- Managing dynamic lists with unique keys and states  
- Working with TypeScript types in component props  
- Styling with Tailwind for responsive design  
- Importance of semantic HTML for accessibility
  - Learning E2E testing with Cypress:
  - Interacting with DOM elements (cy.get, cy.click, cy.type)
  - Verifying UI updates reflect the underlying state
  - Ensuring application logic works as intended from a user perspective

## 🔗 Live Version & Repository Link

You can view the live version of this project [here]().

Repository link: https://github.com/Medieinstitutet/fed24d-testning-inl2-KarinHson

## 💻 Usage

- Add a task by typing into the input field and clicking "Lägg till"  
- Sort tasks alphabetically using the dropdown menu  
- Toggle tasks as done/undone by clicking the checkbox  
- Remove tasks by clicking "Ta bort" (button enabled only if todo is done)

## 🚀 Installation

1. Install the project locally with ___

```bash
npm install
```

2. Run the project

```bash
npm run dev
```


## 🤝Credits

Special thanks to my teachers Sebastian Tegel, Jenni Litorius and classmates for their feedback and support throughout the project.

## 📝 Author

Karin Henriksson – Project lead and developer
[@KarinHson](https://github.com/KarinHson)



