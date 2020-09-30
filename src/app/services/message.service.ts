import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  webSocket: WebSocket;
  chatMessages: Message[] = [];

  public openWebsocketConnection(path: string){
    this.webSocket = new WebSocket(environment.websocket_url + path);

    this.webSocket.onmessage = (event) => {
      let message: Message = JSON.parse(event.data);
      this.chatMessages.push(message);
    }
  }

  public sendMessage(message: string){
    this.webSocket.send(message);
  }

  public closeWebsocketConnection(){
    this.webSocket.close();
    this.chatMessages = [];
  }
}
