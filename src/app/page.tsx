import Hero from '@/components/home/Hero';
import ProgramUnggulan from '@/components/home/Program';
import VisiMisi from '@/components/home/VisiMisi';

export default function Home() {
  return (
    <div className="bg-[#F9FAFB]">
      <Hero />
      <VisiMisi />
      <div className="bg-[url(/program.png)] bg-cover">
        <ProgramUnggulan />
      </div>
    </div>
  );
}
