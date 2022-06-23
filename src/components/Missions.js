/* eslint-disable no-multiple-empty-lines */

import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((aa) => (
          <MissionCard
            key={ aa.name }
            name={ aa.name }
            year={ aa.year }
            country={ aa.country }
            destination={ aa.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
