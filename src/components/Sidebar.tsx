import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/components/siderbar.css';

import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';

export default function Sidebar(): JSX.Element {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
