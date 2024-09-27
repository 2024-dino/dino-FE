import { Inter } from 'next/font/google';
import MainPage from './day';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  router.push('/day')
  return <></>;
}
