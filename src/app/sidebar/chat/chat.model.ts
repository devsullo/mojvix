export class Room {
  constructor(
    public slug: string,
    public name: string,
    public newMsgs: number,
    public newActivity: boolean,
    public index?: number,
  ) {}
}

export class Chat {
  constructor(
    public rooms: Room[],
    public ActiveRoomIndex: number
  ) {}
}
