import * as React from 'react';
import './layout.module.css'; // Ensure this import is correct
import { Link, useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }: any) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site(siteMetadata: {}) {
        id
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='bg-black text-white' >
      <header >{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
