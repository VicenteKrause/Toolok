import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './screen/home/home.component';
import { NosotrosComponent } from './screen/nosotros/nosotros.component';
import { EstadoComponent } from './screen/estado/estado.component';
import { TransporteComponent } from './screen/transporte/transporte.component';
import { TarjetasComponent } from './screen/tarjetas/tarjetas.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './screen/login/login.component';
import { SingUpComponent } from './screen/sing-up/sing-up.component';
import { MetroComponent } from './screen/metro/metro.component';
import { TaxiComponent } from './screen/taxi/taxi.component';
import { ColectivoComponent } from './screen/colectivo/colectivo.component';
import { MicrosComponent } from './screen/micros/micros.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ListUsersComponent } from './screen/list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    NosotrosComponent,
    EstadoComponent,
    TransporteComponent,
    TarjetasComponent,
    CarouselComponent,
    LoginComponent,
    SingUpComponent,
    MetroComponent,
    TaxiComponent,
    ColectivoComponent,
    MicrosComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
