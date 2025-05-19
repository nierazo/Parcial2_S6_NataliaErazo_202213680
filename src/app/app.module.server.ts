import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AerolineaModule } from './aerolinea/aerolinea.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AerolineaModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
