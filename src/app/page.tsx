import ProfileCard from '@/components/ProfileCard';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

const PROFILE_IMAGE = '/profile.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh]">
      <ProfileCard />
    </div>
  );
}
