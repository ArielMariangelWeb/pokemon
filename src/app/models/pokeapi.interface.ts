import { Pokemon } from "./pokemon.interface"

export interface Pokeapi {
    count: number,
    next: string,
    previous: string
    results: Pokemon[]
}