import { redirect } from 'next/navigation';

/**
 * Redirect legacy /art/price-of-existence to canonical /art/price_of_existence.
 * The previous static page incorrectly used a Smart Shoppers video.
 */
export default function PriceOfExistenceRedirect() {
  redirect('/art/price_of_existence');
}
