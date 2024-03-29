import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
