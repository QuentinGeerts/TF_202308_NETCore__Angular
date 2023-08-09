import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() 
  set url (url: string) {
    this._pokemonService.getPokemon(url).subscribe({
      next: (pokemon: Pokemon) => this.currentPokemon = pokemon
    })
  }

  currentPokemon!: Pokemon;

  constructor (private _pokemonService: PokemonService) { }

}
