import { NextPage } from 'next';
import Content from '@/components/Content';
import NavBar from '@/components/NavBar';

const userId = 1;

const Home: NextPage = () => (
  <>
    <NavBar userId={userId} />
    <main className="mx-auto max-w-3xl">
      <div className="mt-20">
        <Content userId={userId} />
      </div>
    </main>
  </>
);

export default Home;
