import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name!: string;
  @Input() filter!: boolean;
  @Output() nameEmmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.nameEmmit.emit(this.name);
  }
}
