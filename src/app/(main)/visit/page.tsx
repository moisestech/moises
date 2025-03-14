import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Visit | Moises Sanabria',
  description:
    "Plan your visit to experience Moises Sanabria's art installations and exhibitions.",
};

export default function Visit() {
  return (
    <PageLayout>
      <main className="pt-40 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Visit</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Location</h2>
            <p className="text-lg mb-4">
              Bakehouse Art Complex
              <br />
              561 NW 32nd St
              <br />
              Miami, FL 33127
            </p>
            <h3 className="text-2xl font-bold mb-2">Hours</h3>
            <p className="text-lg mb-4">
              Tuesday - Saturday: 10am - 5pm
              <br />
              Sunday - Monday: Closed
            </p>
            <h3 className="text-2xl font-bold mb-2">Admission</h3>
            <p className="text-lg">Free and open to the public</p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-lg mb-4">
              Email: m@moises.tech
              <br />
              Instagram: @moisesdsanabria
              <br />
              Twitter: @moisesdsanabria
            </p>
            <div className="aspect-video bg-gray-200 dark:bg-gray-800">
              {/* Map will go here */}
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
