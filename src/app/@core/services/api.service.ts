import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { listaPersonajes } from '../operations/query';
import { changeVotes } from '../operations/subscription';
import { addVoteOperation } from '../operations/mutations';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }


  // Lista de los personajes de Breaking Bad

  getCharacters(skip: boolean = true) {
    return this.apollo.watchQuery(
      {
        query: listaPersonajes,
        variables: {
          skip
        },
        fetchPolicy: 'network-only'
      }
    ).valueChanges.pipe(map((result: any) => {
      console.log(result.data);
      return result.data.characters;
    }));
  }

  // Obtener cambios de los votos

  changeVotesListener() {
    return this.apollo.subscribe({
      query: changeVotes
    });
  }


  addVote(character: string) {
    return this.apollo.mutate({
      mutation: addVoteOperation,
      variables: {
        character
      }
    });
  }

}
