import React from 'react';

export default function PriceOfExistence() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <h1 className="text-5xl font-bold">{`Price of Existence`}</h1>
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
          <p>
            <strong>{`"Price of Existence" by Moises Sanabria`}</strong>
          </p>
          <p className="mt-2">
            <strong>{`Dimensions:`}</strong>
            {`39.37" x 23.62" x 35.43"`}
          </p>
          <p className="mt-2">
            <strong>{`Materials:`}</strong>
            {`Skeleton, Dollar Bills, Digital Display
            TVs, Metal, Custom Electronics`}
          </p>
          <p className="mt-4">
            <strong>{`Price of Exist`}</strong>
            {`explores the intersection of
            consumer culture and digital realms, capturing the essence of our
            artificial capitalist identity. This installation, featuring a
            skeleton enveloped in dollar bills, symbolizes the era where
            personal and societal worth are increasingly quantified by economic
            value in a digitized world.`}
          </p>
          <p className="mt-4">
            {`The piece delves deeply into the concept of 'value' as a currency,
            questioning how individual beliefs and economic realities coexist in
            a society driven by digital exchange. Through this work, Sanabria
            poignantly addresses the struggle to reconcile personal convictions
            with the pervasive influence of a market-oriented existence.`}
          </p>
        </div>
      </div>
    </div>
  );
}
