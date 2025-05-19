import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaService } from '../aerolinea.service';
import { CommonModule } from '@angular/common';
import { AerolineaModule } from '../aerolinea.module';

@Component({
  selector: 'app-aerolineas-lista',
  standalone: true,
  templateUrl: './aerolineas-lista.component.html',
  styleUrls: ['./aerolineas-lista.component.css'],
  imports : [CommonModule, AerolineaModule]
})
export class AerolineasListaComponent implements OnInit {
  aerolineas: Array<Aerolinea> = [];
  selected: boolean = false;
  selectedAerolinea!: Aerolinea;
  p: number = 1;
  searchedAerolinea: any;

  constructor(private aerolineaService: AerolineaService) { }

  getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe({next: apiData => this.aerolineas = apiData });
  }

  onSelected(aerolinea: Aerolinea): void {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
  }

  ngOnInit() {
    this.getAerolineas();
  }
}
