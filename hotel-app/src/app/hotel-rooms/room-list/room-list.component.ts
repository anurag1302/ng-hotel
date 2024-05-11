import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {
  // Child component expecting data via @Input decorator
  @Input() rooms: Room[] = [];

  @Output() selectedRoom = new EventEmitter<Room>();

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }

}
