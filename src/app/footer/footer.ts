import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">BOOKS</div>
        <div class="footer-links">
          <a href="#">Términos de uso</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="copyright">
        © 2025 BOOKS. Todos los derechos reservados.
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--primary);
      color: white;
      padding: 3rem 1rem;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .footer-logo {
      font-size: 2rem;
      font-weight: bold;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .footer-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-links a:hover {
      color: var(--secondary);
    }

    .social-icons {
      display: flex;
      gap: 1.5rem;
    }

    .social-icons a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s;
    }

    .social-icons a:hover {
      color: var(--secondary);
    }

    .copyright {
      font-size: 0.9rem;
      opacity: 0.8;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class FooterComponent {}

