import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokeapi } from '../models/pokeapi.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  private url: string ="https://pokeapi.co/api/v2/pokemon"

  getPokemon(){
    return this.http.get<Pokeapi>(`${this.url}?limit=151&offset=0`)
  }

  getPokemonByName(name: string): Promise<any>{
    return new Promise((resolve, rejected) => {
      this.http.get<any>(`${this.url}/${name}`).subscribe({
        next: response => {
          resolve(response)
        },
        error: error => {
          rejected(error)
        }
      })
    }) 
  }
}
