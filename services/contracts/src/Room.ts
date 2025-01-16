export interface RoomResponse {
    room: Room;
  }

export interface Room {
    id: string;
    name: string;
    description: string;
    projectId: string;
    labels: string[];
  }
