import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
