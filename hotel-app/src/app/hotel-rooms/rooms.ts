export interface Room {
    id: number;
    roomNumber: number;
    roomType: string;
    facilities: string;
    checkinTime: Date;
    checkoutTime: Date;
}

export interface RoomList{
    rooms:Room[];
}