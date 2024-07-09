import React from 'react';

export default function BabyAGI() {
  return (
    <div className="flex flex-col gap-10 p-5">
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
        <div className="w-full md:w-1/3 lg:w-1/3">
          <h1 className="text-4xl text-slate-300">Moises Sanabria</h1>

          <p className="mt-2 text-4xl">
            Baby AGI<span className="mt-2">, 2023</span>
          </p>

          <p className="mt-2 text-4xl mb-8">/</p>

          <div>
            <p className="mt-2 text-xl mb-8">
              Industrial-grade baby stroller, LED-lit GPU Wheel fans, Digital
              Display TVs, Robotic 3D Printed Hands, Fan, Game Controller,
              Metal, and Custom Electronics.
            </p>
            <p className="mt-2 text-xl mb-8">{`39.37" x 23.62" x 35.43"`}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center lg:w-4/5">
        <p className="mt-4 text-lg">
          <i>Cradle to AGI</i>
          {`(2023) captures the nascent stages of Artificial General Intelligence (AGI), symbolizing the impending paradigm shift towards harmonious coexistence with advanced AI. This ready-made assembly—a smart baby stroller, intricately crafted from PC gaming components and AI-enhanced GPUs—epitomizes the Pre-Natal Genesis of AGI, highlighting the profound influence of such technologies on Generation Alpha, those born amidst the AI revolution. The robotic hands, delicately guiding the stroller, underscore our collective voyage into the AI epoch, while subtly emphasizing humanity's pivotal role in shaping AI's formative years.`}
        </p>
      </div>
    </div>
  );
}
