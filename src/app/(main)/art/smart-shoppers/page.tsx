import React from 'react';
import { formatBoxDimensionsInchesLwh } from '@/lib/dimensions';

export default function SmartShoppers() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-5xl font-bold">{`Smart Shoppers`}</h1>
      <div className="w-full flex flex-row gap-10">
        <div className="w-auto order-2">
          <img
            src="https://res.cloudinary.com/dck5rzi4h/image/upload/v1737831876/art/moisestech-website/smart_shoppers__bsw9ko.jpg"
            alt="Smart Shoppers - Installation view"
            width="320"
            height="240"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p>
            <strong>{`"Smart Shoppers" by Moises Sanabria`}</strong>
          </p>
          <p className="mt-2">
            <strong>{`Dimensions:`}</strong>{' '}
            {formatBoxDimensionsInchesLwh(42, 20, 36)}
          </p>
          <p className="mt-2">
            <strong>{`Materials:`}</strong>
            {`Glowing 3D printed brains, LED bulbs, Paiz shopping cart`}
          </p>
          <p className="mt-4">
            <strong>{`Smart Shoppers`}</strong>
            {` explores the commercialization of human intelligence in the age of capitalism, using the symbol of a glowing 3D-printed brain overflowing from a shopping cart. The artwork critiques how human cognitive value has become commodified, particularly in an era dominated by artificial intelligence (AI).`}
          </p>
          <p className="mt-4">
            {`The vibrant, glowing brain juxtaposes the mechanical nature of capitalism with the human essence of thought and intelligence. The shopping cart, a symbol of consumerism, acts as a container for the brain, symbolizing how human capabilities are increasingly reduced to products to be bought, sold, and exploited in the capitalist system.`}
          </p>
          
          {/* Press Coverage */}
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Press & Exhibition Context</h3>
              <div className="text-sm space-y-4">
                <div>
                  <p className="mb-1">
                    <strong>Bakehouse Art Complex</strong> — CONTINUUM at MUNAG
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Bakehouse artists Fabiola Larios, Moises Sanabria, and Leo Castañeda in CONTINUUM
                    at the National Museum of Art of Guatemala. Related works: Smart Shoppers and
                    The Price of Existence.
                  </p>
                  <a
                    href="https://www.bacfl.org/blog/csiu59p0euqb6bnpyojclicd6bjjiw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    Read Bakehouse announcement →
                  </a>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="mb-1">
                    <strong>eP Investiga</strong> — &quot;Continuum, una mirada a los avances en la expresión artística&quot;
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Featured in CONTINUUM at MUNAG, Antigua Guatemala, organized by Fundación Paiz
                    para la Educación y la Cultura.
                  </p>
                  <a
                    href="https://epinvestiga.com/dominical/continuum-una-mirada-a-los-avances-en-la-expresion-artistica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    Read full article →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

