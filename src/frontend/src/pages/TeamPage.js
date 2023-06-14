import {Reacr} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatcSmallCard';


export const TeamPage = () =>   {
  return (
    <div className="TeamPage">
      <h1>Team Name</h1>
      
      <MatchDetailCard></MatchDetailCard>
      <MatchSmallCard></MatchSmallCard>
      <MatchSmallCard></MatchSmallCard>
      <MatchSmallCard></MatchSmallCard>
    </div>
  );
}


