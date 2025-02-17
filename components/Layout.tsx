import React from 'react';
import Head from 'next/head';
import { Container } from 'react-basics';
import Header from './Header';
import Footer from './Footer';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `umami - ${title}` : 'umami'}</title>
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="d0059975-b79a-4f83-8926-ed731475fded"
            data-host-url="https://app.umami.is"
            src="/js/script.js"
          />
        )}
      </Head>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
