import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.scss'
})
export class HotelRoomsComponent {
  hotelName: string = 'Hilton';
  numberOfRooms: number = 20;
  hideRooms: boolean = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
