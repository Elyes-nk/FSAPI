import Head from 'next/head';
import Title from '../components/ui/title/Title';

export default function Home() {
  return (
    <div>

      <Head>
        <title>Next Js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Title title="home"/>
      </main>

      
    </div>
  )
}