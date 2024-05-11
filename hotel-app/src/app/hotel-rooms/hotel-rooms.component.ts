import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.scss'
})
export class HotelRoomsComponent {
  hotelName: string = 'Hilton';
  numberOfRooms: number = 20;
  hideRooms: boolean = false;
  role: string = 'User';

  rooms: Room[] = [{
    id: 1,
    roomNumber: 101,
    roomType: 'Single Bed AC',
    facilities: 'test',
    checkinTime: new Date('11-05-2024'),
    checkoutTime: new Date('12-05-2024')
  },
  {
    id: 2,
    roomNumber: 102,
    roomType: 'Double Bed AC',
    facilities: 'test2',
    checkinTime: new Date('11-05-2024'),
    checkoutTime: new Date('12-05-2024')
  },
  {
    id: 3,
    roomNumber: 103,
    roomType: 'Deluxe',
    facilities: 'test3',
    checkinTime: new Date('11-05-2024'),
    checkoutTime: new Date('12-05-2024')
  }]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
