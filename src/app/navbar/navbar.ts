import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="logo">BOOKS</div>
      <ul class="nav-links">
        <li><a routerLink="/">Inicio</a></li>
        <li><a href="#acerca">Acerca</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      padding: 1rem 2rem;
      background-color: var(--primary);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      height: 60px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .logo {
      font-weight: bold;
      font-size: 1.5rem;
      color: white;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #92f2ff;
      font-weight: 500;
      transition: color 0.3s;
    }

    .nav-links a:hover {
      color: #f0f6fc;
    }
  `]
})
export class NavbarComponent {}
