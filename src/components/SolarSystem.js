/* eslint-disable no-multiple-empty-lines */

import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((aa) => (<PlanetCard
          key={ aa.name }
          planetName={ aa.name }
          planetImage={ aa.image }
        />))}
      </div>);
  }
}
export default SolarSystem;
