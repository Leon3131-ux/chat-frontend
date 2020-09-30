import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../services/message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.scss']
})
export class RoomViewComponent implements OnInit {

  currentRoomId: number;
  currentMessage: string;

  constructor(public messageService: MessageService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.currentRoomId = params['roomId'];
    })
    this.messageService.openWebsocketConnection('message/' + this.currentRoomId);
  }

  sendMessage(){
    this.messageService.sendMessage(this.currentMessage);
    this.currentMessage = '';
  }

}
