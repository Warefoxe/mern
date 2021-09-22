import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            AKComp
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Логін
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Кошик
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
  );
}
