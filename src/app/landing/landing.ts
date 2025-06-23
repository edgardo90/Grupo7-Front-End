import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Intro } from './intro/intro';
import { Masinfo } from './masinfo/masinfo';
import { Acerca } from './acerca/acerca';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Intro, Masinfo, Acerca], // Solo lo que usa el template
  template: `
    <!-- Sección Hero -->
    <section class="hero-section">
      <app-intro></app-intro> <!-- Ahora sí usa Intro -->
    </section>

    <!-- Sección Acerca -->
    <section class="about-section">
      <app-acerca></app-acerca> <!-- Ahora sí usa Acerca -->
    </section>

    <!-- Sección Features -->
    <section class="features-section">
      <app-masinfo></app-masinfo> <!-- Ahora sí usa Masinfo -->
    </section>
  `,
  styleUrls: ['./landing.css']
})
export class Landing {} 