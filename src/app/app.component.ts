import { Component } from '@angular/core';
import { AerolineasListaComponent } from './aerolinea/aerolineas-lista/aerolineas-lista.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[RouterOutlet, AerolineasListaComponent]
})
export class AppComponent {
  title = 'mynewapp';
}
