import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrl: './hotel-rooms.component.scss'
})
export class HotelRoomsComponent implements OnInit {

  hotelName: string = 'Hilton';
  numberOfRooms: number = 20;
  hideRooms: boolean = false;
  role: string = 'User';
  selectedRoomFromChild!: Room;

  rooms: Room[] = [];

  ngOnInit(): void {
    this.rooms = [{
      id: 1,
      roomNumber: 101,
      roomType: 'Single Bed AC',
      facilities: 'test',
      checkinTime: new Date('11-05-2024'),
      checkoutTime: new Date('12-05-2024'),
      roomPrice: 2000
    },
    {
      id: 2,
      roomNumber: 102,
      roomType: 'Double Bed AC',
      facilities: 'test2',
      checkinTime: new Date('11-05-2024'),
      checkoutTime: new Date('12-05-2024'),
      roomPrice: 4000
    },
    {
      id: 3,
      roomNumber: 103,
      roomType: 'Deluxe',
      facilities: 'test3',
      checkinTime: new Date('11-05-2024'),
      checkoutTime: new Date('12-05-2024'),
      roomPrice: 5000
    }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  fromChild(room: Room) {
    console.log(room);
    this.selectedRoomFromChild = room;
  }

}
