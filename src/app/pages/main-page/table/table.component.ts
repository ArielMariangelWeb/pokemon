import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() pokemones!: Pokemon[];
  @Input() filterPokemon!: Pokemon[];
  @Output() deleteEmmit = new EventEmitter<string>();
  page!: number;


  constructor() {}
   

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.page = 1;
  }

  delete(pokemon: string){
    this.deleteEmmit.emit(pokemon)
  }
}
