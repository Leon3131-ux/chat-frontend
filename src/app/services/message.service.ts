import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Message} from '../models/message';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private authenticationService: AuthenticationService) { }
  client;
  connected = false;
  chatMessages: Message[] = [];

  public openWebsocketConnection(path: string){
    let url = environment.websocket_url + '?Authorization=Bearer ' + this.authenticationService.getToken().split(' ')[1];
    let webSocket = new SockJS(url);
    this.client = Stomp.over(webSocket);
    this.client.connect({}, () => {
      this.connected = true;
      this.client.subscribe('/message/1', (message) => {
        this.chatMessages.push(JSON.parse(message.body));
      })
    })
  }

  public sendMessage(path: string, message: string){
    this.client.send(path, {}, message);
  }

  public closeWebsocketConnection(){
    this.client.disconnect();
    this.connected = false;
    this.chatMessages = [];
  }
}
