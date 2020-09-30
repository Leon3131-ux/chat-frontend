import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoomsListComponent} from './rooms-list.component';
import {SharedModule} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    RoomsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    ButtonModule
  ],
  exports: [
  ]
})
export class RoomsListModule { }
