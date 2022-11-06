import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen= true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){  /* whenever we click on the menu icon this function change the value of sideBarOpen to show and hid the sideBar */
    this.sideBarOpen= !this.sideBarOpen;
  }

}
