"use client";
import React, { useState } from "react";
import styles from "./style.module.css";

function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleExpandClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSearchFocus = () => {
    setIsCollapsed(false);
  };
  return (
    <section className={`${isCollapsed ? styles.collapsed : ""} fixed`}>
      <nav className={`${styles.sidebar} `}>
        <div className={styles["sidebar-top-wrapper"]}>
          <div className={styles["sidebar-top"]}>
            <a href="#" className={styles["logo__wrapper"]}>
              <img
                src="https://www.shutterstock.com/image-vector/medicine-logo-600nw-715548160.jpg"
                alt="Logo"
                className={styles["logo-small"]}
              />
              <span className={`${styles.hide} text-3xl`}>Cura</span>
            </a>
          </div>
          <div className={styles["expand-btn"]} onClick={handleExpandClick}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
                stroke="#4A516D"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className={styles["search__wrapper"]}>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
              stroke="#697089"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="search"
            placeholder="Search for anything..."
            onFocus={handleSearchFocus}
          />{" "}
        </div>

        <div className={styles["sidebar-links"]}>
          <h2>Main</h2>
          <ul>
            <li>
              <a href="#home" title="Home" className={styles.tooltip}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.icon} ${styles["icon-tabler"]} ${styles["icon-tabler-home"]}`}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <span className={`${styles.link} ${styles.hide}`}>Home</span>
                <span className={styles.tooltip__content}>Home</span>
              </a>
            </li>

            <li>
              <a href="#email" title="email" className={styles.tooltip}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="email"
                >
                  <path
                    fill="#222"
                    d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"
                  ></path>
                  <path
                    fill="#222"
                    d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"
                  ></path>
                  <path
                    fill="#222"
                    d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"
                  ></path>
                </svg>
                <span className={`${styles.link} ${styles.hide}`}>Email</span>
                <span className={styles.tooltip__content}>Email</span>
              </a>
            </li>

            <li>
              <a
                href="#statistics"
                title="Statistics"
                className={styles.tooltip}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${styles.icon} ${styles["icon-tabler"]} ${styles["icon-tabler-chart-pie"]}`}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                </svg>
                <span className={`${styles.link} ${styles.hide}`}>
                  Statistics
                </span>
                <span className={styles.tooltip__content}>Statistics</span>
              </a>
            </li>

            <li>
              <a
                href="#note"
                title="Note"
                className={styles.tooltip}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  id="note"
                >
                  <path d="M1 49h38.414L49 39.414V1H1v48zm39-3.414V40h5.586L40 45.586zM3 3h44v35h-9v9H3V3z" />
                  <path d="M10 13h30v2H10zM10 20h30v2H10zM10 27h30v2H10z" />
                </svg>
                <span className={`${styles.link} ${styles.hide}`}>
                  Notes
                </span>
                <span className={styles.tooltip__content}>Notes</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles["sidebar-links"]} ${styles["bottom-links"]}`}>
          <ul>
            <li>
              <a href="#settings" title="Settings" className={styles.tooltip}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
                <span className={`${styles.link} ${styles.hide}`}>
                  Settings
                </span>
                <span className={styles.tooltip__content}>Settings</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.divider} />
        <div className={styles["sidebar__profile"]}>
          <div className={styles["avatar__wrapper"]}>
            <img
              className={styles.avatar}
              src="assets/profile.png"
              alt="photo"
            />
            <div className={styles["online__status"]} />
          </div>
          <section className={`${styles["avatar__name"]} ${styles.hide}`}>
            <div className={styles["user-name"]}>Youssef Afify</div>
            <div className={styles["email"]}>example@example.coom</div>
          </section>
          <a href="#logout" className={styles.logout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.icon} ${styles["icon-tabler"]} ${styles["icon-tabler-logout"]}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </a>
        </div>
      </nav>
    </section>
  );
}

export default SideNavbar;
