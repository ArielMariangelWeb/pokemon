import { Component, OnInit } from '@angular/core';
import { Pokeapi } from 'src/app/models/pokeapi.interface';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonDescription } from 'src/app/models/pokemonDescription.interface';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  pokemones!: Pokemon[]
  filter: boolean = false;
  flagDescription: boolean = false;
  deletedPokemons: string[] = [];
  pokemonDesc!: PokemonDescription;
  constructor(private pokemon: PokeapiService) { }

  ngOnInit(): void {
    this.allPokemon();
  }

  allPokemon(){
    this.filter = false;
    this.flagDescription = false;
    this.pokemon.getPokemon().subscribe((data:Pokeapi)=>{
      this.pokemones = data.results
      for(let i=0; i<this.deletedPokemons.length; i++) {
        this.pokemones = this.pokemones.filter(f => f.name !== this.deletedPokemons[i]);
      }
    })
  }

  nameReceived(name: string){
    if(name.length !== 0){
      this.pokemon.getPokemonByName(name)
      .then((response) =>{
        if (this.deletedPokemons.indexOf(name) === -1) {
          this.pokemonDesc = response;
          this.flagDescription = true;
        }
        this.pokemones = this.pokemones.filter(f => f.name === name)
        this.filter = true;
      })
      .catch((error) => alert("Pokemon no existe")); 
    }
  }
  deleteReceived(pokemon: string){
    this.deletedPokemons.push(pokemon);
    this.pokemones = this.pokemones.filter(f => f.name !== pokemon)
  }

  alphaOrder(){
    this.pokemones.sort((a, b) => a.name.localeCompare(b.name));
  }

  descOrder(){
    this.pokemones.sort((a, b) => this.pokemones.indexOf(b) - this.pokemones.indexOf(a));
  }


}
