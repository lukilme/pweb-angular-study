import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class HeaderComponent {
  delay_const: number = 0.1; 
  toggleMode():void {
    document.body.classList.toggle('dark-theme');
  }

  piscapisca(): void {
    this.delay_const += 0.1;
    const elementosGayLetter = document.querySelectorAll('.gay-letter');
    if (this.delay_const > 1) {
        this.delay_const = 0.1;
    }
    
    elementosGayLetter.forEach((elemento, i) => {
        let atraso: number;
        atraso = (i * this.delay_const) % 1;  // Modulo para garantir que o atraso está entre 0 e 1
        (elemento as HTMLElement).style.animationDelay = `${atraso}s`;
    });
}
}
