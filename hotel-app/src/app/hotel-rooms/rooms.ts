export interface Room {
    id: number;
    roomNumber: number;
    roomType: string;
    facilities: string;
    checkinTime: Date;
    checkoutTime: Date;
    roomPrice:number;
    rating:number;
}

export interface RoomList{
    rooms:Room[];
}