import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from '../assets/assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/assets/svg/personOutlineIcon.svg';

function NavBar() {
  //would be used if i wanted to change color of fill based on route
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <ExploreIcon />
            <p>Bets</p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/add-bet')}>
            <OfferIcon />
            <p>Add Bet</p>
          </li>
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default NavBar;
