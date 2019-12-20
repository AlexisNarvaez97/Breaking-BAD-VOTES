import gql from 'graphql-tag';

export const addVoteOperation = gql`
    mutation asignarVoto($character: ID!) {
        addVote(character: $character) {
            status
            message 
            characters {
                id
                name
                votes
            }
        }
    }
`;