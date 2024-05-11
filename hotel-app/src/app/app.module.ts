import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomListComponent } from './hotel-rooms/room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelRoomsComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
