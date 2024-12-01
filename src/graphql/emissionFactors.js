import { gql } from '@apollo/client';

export const GET_EMISSION_FACTORS = gql`
  query GetEmissionFactors {
    emissionFactors {
      type
      value
    }
  }
`;