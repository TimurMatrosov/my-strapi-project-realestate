import React from 'react';

import { Link } from 'react-router-dom';

export default function SiteHead() {
  return (
    <div>
      <Link to='/'><h1>Real Estate</h1></Link>
    </div>
  );
}