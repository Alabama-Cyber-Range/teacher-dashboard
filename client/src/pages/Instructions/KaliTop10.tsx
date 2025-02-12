import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Heading, Flex } from '@aws-amplify/ui-react';

const KaliTop10: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
   
    <Flex direction="column" gap="30px">
     
      <Breadcrumbs/>
      <Heading>Kali Top 10</Heading>
      <Flex direction="column" gap="20px">
      
        <Link to="/Instructions/Kali-Top-10/Cats-Out-Of-The-Bag">Cats Out of the Bag</Link>

        <Link to="/Instructions/Kali-Top-10/Arp-Cache-Me-Outside">Arp Cache Me Outside</Link>

        <Link to="/Instructions/Kali-Top-10/Brute-And-Loot">Brute and Loot</Link>

        <Link to="/Instructions/Kali-Top-10/Crack-The-Web">Crack The Web</Link>

        <Link to="/Instructions/Kali-Top-10/Hash-It-Out-With-NTLM">Hash it out with NTLM</Link>

        <Link to="/Instructions/house-of-eternal-blues">House of Eternal Blues</Link>

        <Link to="/Instructions/malt-ego-mind-map">Malt Ego Mind Map</Link>

        <Link to="/Instructions/meta-sploit-mayham">Meta Sploit Mayham</Link>

        <Link to="/Instructions/the-credential-cracker">The Credential Cracker</Link>

        <Link to="/Instructions/the-network-navigator">The Network Navigator</Link>

        <Link to="/Instructions/wire-shark-wizardy">Wire Shark Wizardy</Link>
      
      </Flex>
    </Flex>
  
  
  );
};

export default KaliTop10;