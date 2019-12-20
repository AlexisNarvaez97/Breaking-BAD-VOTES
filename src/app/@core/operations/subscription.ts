import gql from 'graphql-tag';

export const changeVotes = gql `
    subscription {
        changeVotes {
            id
            name
            votes
        }
    }
`;