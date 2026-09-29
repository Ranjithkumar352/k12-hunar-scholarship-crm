import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";

import {
  initialScholarships
} from "./data/scholarships";

const STORAGE_KEY = "k12-hunar-scholarships";

export default function App() {

  const [scholarships, setScholarships] = useState(() => {

    try {

      const saved =
        localStorage.getItem(STORAGE_KEY);

      return saved
        ? JSON.parse(saved)
        : initialScholarships;

    } catch {

      return initialScholarships;

    }

  });


  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(scholarships)
    );

  }, [scholarships]);


  return (

    <div className="app-shell">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside className="sidebar">

        <div className="sidebar-brand">

          <div className="sidebar-logo">
            K
          </div>

          <div>
            <strong>K12 Hunar</strong>
            <span>Scholarship CRM</span>
          </div>

        </div>


        <div className="sidebar-section">

          <p className="sidebar-label">
            MAIN MENU
          </p>

          <button className="sidebar-item active">
            <span className="sidebar-icon">
              ▦
            </span>

            Dashboard
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon">
              ◫
            </span>

            Scholarships
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon">
              ◉
            </span>

            Students
          </button>

          <button className="sidebar-item">
            <span className="sidebar-icon">
              ▥
            </span>

            Reports
          </button>

        </div>


        <div className="sidebar-section">

          <p className="sidebar-label">
            MANAGEMENT
          </p>

          <button className="sidebar-item">
            <span className="sidebar-icon">
              ⚙
            </span>

            Settings
          </button>

        </div>


        <div className="sidebar-bottom">

          <div className="sidebar-help">

            <div className="help-icon">
              ?
            </div>

            <div>
              <strong>Need help?</strong>
              <span>Contact support</span>
            </div>

          </div>


          <div className="sidebar-user">

            <div className="sidebar-user-avatar">
              RK
            </div>

            <div className="sidebar-user-info">
              <strong>Admin</strong>
              <span>Scholarship team</span>
            </div>

            <span className="user-menu">
              ⋮
            </span>

          </div>

        </div>

      </aside>


      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="main-area">

        {/* TOPBAR */}

        <header className="topbar">

          <div className="breadcrumb">

            <span>
              Workspace
            </span>

            <b>/</b>

            <strong>
              Dashboard
            </strong>

          </div>


          <div className="topbar-right">

            <span className="environment-pill">
              <span className="online-dot"></span>
              Employee
            </span>

            <div className="topbar-divider"></div>

            <div className="top-profile">

              <div className="top-profile-avatar">
                RK
              </div>

              <div>
                <strong>Ranjith Kumar</strong>
                <span>Administrator</span>
              </div>

              <span className="profile-arrow">
                ▾
              </span>

            </div>

          </div>

        </header>


        {/* DASHBOARD */}

        <div className="content-area">

          <Dashboard
            scholarships={scholarships}
            setScholarships={setScholarships}
          />

        </div>


        {/* FOOTER */}

        <footer className="footer">

          <span>
            © 2026 K12 Hunar
          </span>

          <span>
            Scholarship Management System
          </span>

        </footer>

      </div>

    </div>

  );
}