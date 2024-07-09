import React from 'react';

export default function SmartShoppers() {
  return (
    <>
      <section className="flex flex-col gap-10 p-5">
        <h1 className="text-5xl font-bold">Smart Shoppers</h1>
        <div className="w-full flex flex-row gap-10">
          <div className="w-auto order-2">
            <video
              width="320"
              height="240"
              controls
              preload="none"
              muted
              autoPlay
            >
              <source
                src="https://res.cloudinary.com/dck5rzi4h/video/upload/v1719786976/art/moisestech-website/SmartShoppers2024-MoisesSanabria_cb0po9.mp4"
                type="video/mp4"
              />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2">
            <p className="mt-2">
              <strong>Dimensions:</strong> {`39.37" x 23.62" x 35.43"`}
            </p>
            <p className="mt-2">
              <strong>Materials:</strong>
              {`Shopping cart, Glowing Brains (3D printed), Consumer Receipts, Dollar Bills, LED Lights`}
            </p>
            <p className="mt-4">
              {`"Smart Shoppers" is a sculpture featuring a shopping cart brimming with glowing brains, paired with a mummy enveloped in consumer receipts and dollar bills. This work vividly captures the zeitgeist of our artificial mummified capitalist identity, exploring the commodification of intelligence and human data amidst the rise of neural capitalism.`}
            </p>
            <p className="mt-4">
              {`The 3D printed fibrous brains overflowing from the shopping cart symbolize the acceleration of commodified intelligence and creativity. These neural products, offered as services, become yet another micro-transaction in our everyday lives. Big Data, cloud computing, and GPU advancements scaffold a future where human and machine markets cohabit and further entangle, presenting a neural reality where personal data and matrix calculations are harvested for profit.`}
            </p>
            <p className="mt-4">
              {`The mummy, swathed in receipts, stands as a monument to a life quantified by transactions, embodying the relentless march towards a future where our experiences become mere data points in the marketplace. This scenario mourns the loss of our sacred inner worlds to profit, emblematic of Chris Harman's 'Zombie Capitalism' where consumption devoids life of meaning, only to have AI fill that void with hallucinations.`}
            </p>
            <p className="mt-4">
              {`Reflecting the intricate dance between traditional consumer culture and the novelties of the digital age, the artwork highlights the insidious reach of neural capitalism into our privacy and autonomy. The illuminated brains not only light up the installation but also cast shadows on our complicity and vulnerability within these systems, and the incessant technological progress towards the unknown.`}
            </p>
            <p className="mt-4">
              {`The work invites viewers to ponder the coming age of unconscious automated consumption. "Smart Shoppers" becomes a metaphor for the transactional nature of existence under capitalism, now expedited by technological advancements. It’s a critical inquiry into the sustainability of our consumer and technological trajectories, questioning the ethics of AI consumerism and neural capitalism.`}
            </p>
            <p className="mt-4">
              {`The installation offers a space for introspection about a future where humanity is celebrated for its intrinsic value, beyond transactions or data points. It is a plea for a reimagined future, prioritizing human dignity and genuine connections over market-driven imperatives.`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
