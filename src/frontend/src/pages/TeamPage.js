import {React, useEffect, useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatcSmallCard';


export const TeamPage = () =>   {

  const [team, setTeam] = useState({});

  useEffect(

    () =>{
      const fetchMatches = async () =>{
        const response =await fetch('http://localhost:8080/team/Mumbai%20Indians');
        const data =await response.json();
        console.log(data);
        setTeam(data);

      };

      fetchMatches();

    }, []


  );







  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      
      <MatchDetailCard></MatchDetailCard>
      
    </div>
  );
}


