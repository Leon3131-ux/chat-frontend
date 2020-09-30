import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomViewComponent} from './room-view.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    RoomViewComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ]
})
export class RoomViewModule { }
