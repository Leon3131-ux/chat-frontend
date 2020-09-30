import { Component, OnInit } from '@angular/core';
import {Room} from '../../models/room';
import {RoomService} from '../../services/room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  rooms: Room[] = [];
  constructor(private roomService: RoomService,
              private router: Router) { }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      console.log(this.rooms)
      },
      () =>{}
    )
  }

  subscribeToRoom(roomId: number){

  }

  viewRoom(roomId: number){
    this.router.navigate(['room/', roomId]);
  }

}
