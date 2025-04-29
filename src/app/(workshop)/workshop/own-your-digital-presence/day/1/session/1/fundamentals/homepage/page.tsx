import { Metadata } from 'next';
import Day1Session1FundamentalsHomepage from '@/components/workshop/Day1Session1FundamentalsHomepage';

export const metadata: Metadata = {
  title: 'Homepage | Digital Presence Workshop',
  description: 'Learn about creating an effective homepage for your digital presence.',
};

function HomepagePage() {
  return <Day1Session1FundamentalsHomepage />;
}

export default HomepagePage; 