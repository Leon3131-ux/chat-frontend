import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Room} from '../models/room';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private apiService: ApiService) { }

  public getRooms(): Observable<Room[]>{
    return this.apiService.getAll('rooms');
  }
}
