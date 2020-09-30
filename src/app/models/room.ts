export class Room {

  id: number;
  name: string;
  subscribedUserIds: number[];

  constructor(id = 0, name = '', subscribedUserIds: number[] = []) {
    this.id = id;
    this.name = name;
    this.subscribedUserIds = subscribedUserIds;
  }

}
