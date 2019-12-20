import { Component, OnInit } from '@angular/core';
import { Character } from '../../@core/interfaces/character.interface';
import { ApiService } from '../../@core/services/api.service';
import { changeVotes } from '../../@core/operations/subscription';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  characters: Character[] = [];
  loading: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.api.getCharacters(true).subscribe( resp => {
      this.characters = resp;
      console.log(this.characters);
      this.loading = false;
    });
    this.changeVotes();
  }

  changeVotes() {
    this.api.changeVotesListener().subscribe( ({data} : any) => {
      console.log(data.changeVotes);
      this.characters = data.changeVotes;
    });
  }

  addVote(character: string) {
    this.api.addVote(character).subscribe( ({data}) => {
      console.log(data);
    });
  }

}
