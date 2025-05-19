import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AerolineaComponent } from './aerolinea.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AerolineasListaComponent } from './aerolineas-lista/aerolineas-lista.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AerolineasListaComponent
  ],
  declarations: [AerolineaComponent]
})
export class AerolineaModule { }
