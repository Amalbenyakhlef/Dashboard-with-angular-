import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() label!: string ;
  @Input() total!: string;
  @Input() percentage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
