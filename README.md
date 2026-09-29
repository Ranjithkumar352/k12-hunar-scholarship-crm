# K12 Hunar Scholarship CRM

A responsive scholarship management dashboard built with React and Vite for the K12 Hunar Frontend Developer Assessment.

## Features

- Dashboard with scholarship statistics
- Search scholarships
- Filter by state
- Filter by scholarship status
- Add scholarship
- Edit scholarship
- Update scholarship status
- Student scholarship preview
- Official application link
- Browser localStorage persistence
- Responsive desktop, tablet, and mobile UI

## Tech Stack

- React
- Vite
- JavaScript (JSX)
- CSS
- LocalStorage

## Project Structure

```text
k12-hunar-scholarship-crm/
├── public/
├── src/
│   ├── components/
│   │   ├── Filters.jsx
│   │   ├── ScholarshipForm.jsx
│   │   ├── ScholarshipPreview.jsx
│   │   ├── ScholarshipTable.jsx
│   │   ├── StatusBadge.jsx
│   │   └── SummaryCards.jsx
│   ├── data/
│   │   └── scholarships.js
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## How to Run the Project After Cloning from GitHub

### 1. Clone the repository

Open a terminal or command prompt and run:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Example:

```bash
git clone https://github.com/your-username/k12-hunar-scholarship-crm.git
```

### 2. Open the project folder

```bash
cd k12-hunar-scholarship-crm
```

If the repository contains the project inside a `frontend` folder, run:

```bash
cd frontend
```

You should be in the folder that contains:

```text
package.json
src/
public/
vite.config.js
```

### 3. Install dependencies

Run:

```bash
npm install
```

This installs all dependencies listed in `package.json`.

### 4. Start the development server

Run:

```bash
npm run dev
```

Vite will display a local URL in the terminal, normally:

```text
http://localhost:5173/
```

Open that URL in your browser.

### 5. Build the project

To create a production build:

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## Important

You do **not** need to install or configure a backend or database for this assessment.

Scholarship data changes such as:

- Adding scholarships
- Editing scholarships
- Updating status

are stored in the browser using `localStorage`.

## AI Tools / References Used

ChatGPT was used during development for:

- Debugging React/Vite issues
- UI/UX improvement suggestions
- CSS and responsive design refinement
- Code review and cleanup
- Documentation drafting

The application was implemented and tested locally by the developer.

## Submission

**GitHub Repository:**  
YOUR_GITHUB_REPOSITORY_URL

**Live Demo:**  
YOUR_LIVE_DEMO_URL
