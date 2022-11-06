import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuSideBarForMe: EventEmitter<any> = new EventEmitter();   // this the output if there is an event by (click)
  constructor() { }

  ngOnInit(): void { }

  menuSideBar(){
    this.menuSideBarForMe.emit();   // emitting an Event on the page for the action on the sideBar
  }

}
