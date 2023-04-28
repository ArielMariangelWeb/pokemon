import { Component, Input, OnInit } from '@angular/core';
import { PokemonDescription } from 'src/app/models/pokemonDescription.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() pokemonDesc!: PokemonDescription;

  constructor() { }

  ngOnInit(): void {
  }

}
