import { CardComponent } from './../../components/card/card.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(e : Event): void{

    
  }
   


}
