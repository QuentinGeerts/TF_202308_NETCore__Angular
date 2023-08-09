import { Component, OnInit } from '@angular/core';
import { Pokedex } from 'src/app/shared/models/pokedex.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-exercice21',
  templateUrl: './exercice21.component.html',
  styleUrls: ['./exercice21.component.scss']
})
export class Exercice21Component implements OnInit {

  pokemons!: Pokedex;
  selectedUrl: string = "";

  private readonly _pokemonAPI: string = "https://pokeapi.co/api/v2/pokemon";

  constructor (private _pokemonService: PokemonService) { }

  ngOnInit (): void {
    this.loadData(this._pokemonAPI);
  }

  loadData (url: string): void {
    this._pokemonService.getPokedex(url).subscribe({
      next: (data: Pokedex) => this.pokemons = data,
      error: (error) => console.log("Error: ", error)
    })
  }

  showDetails(url: string): void {
    this.selectedUrl = url;
  }

  closeDetails(): void {
    this.selectedUrl = "";
  }

}
