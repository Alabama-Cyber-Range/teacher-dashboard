
import React from 'react';
import { Breadcrumbs } from '@aws-amplify/ui-react';
import { Link }from 'react-router-dom';


export function DefaultBreadcrumbsExample() {
  return (
    <Breadcrumbs
      items={[
        {
          href: '/',
          label: 'Home',
        },
        {
          href: '/react/components',
          label: 'Components',
        },
        {
          label: 'Breadcrumbs',
        },
      ]}
    />
  );
}

const KaliTop10: React.FC = () => {
  return (
    <div>
      <h1>Kali Top 10 </h1>
      <ul>
        <li><Link to="/instructions/cats-out-of-the-bag">Cats Out of the Bag</Link></li>
        <li><Link to="/instructions/arp-cache-me-outside">Arp Cache Me Outside</Link></li>
        <li><Link to="/instructions/brute-and-loot">Brute and Loot</Link></li>
        <li><Link to="/instructions/crack-the-web">Crack The Web</Link></li>
        <li><Link to="/instructions/hash-it-out-with-ntlm">Hash it out with NTLM</Link></li>
        <li><Link to="/instructions/house-of-eternal-blues">House of Eternal Blues</Link></li>
        <li><Link to="/instructions/malt-ego-mind-map">Malt Ego Mind Map</Link></li>
        <li><Link to="/instructions/meta-sploit-mayham">Meta Sploit Mayham</Link></li>
        <li><Link to="/instructions/the-credential-cracker">The Credential Cracker</Link></li>
        <li><Link to="/instructions/the-network-navigator">The Network Navigator</Link></li>
        <li><Link to="/instructions/wire-shark-wizardy">Wire Shark Wizardy</Link></li>
      </ul>
    </div>
  );
};

export default KaliTop10;