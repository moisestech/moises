import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './dialog';

interface Visit360DialogProps {
  trigger: React.ReactNode;
}

export function Visit360Dialog({ trigger }: Visit360DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-3xl w-full p-0 bg-transparent border-none shadow-none">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center bg-black rounded-lg overflow-hidden relative h-[60vw] max-h-[80vh] sm:h-[60vw] sm:max-h-[80vh] h-[80vh] min-h-[60vw] sm:min-h-0 sm:rounded-lg">
          <iframe
            src="https://momento360.com/e/u/a338f042352a4550b3e12a6ccc29f98b?utm_campaign=embed&utm_source=other&heading=128.94&pitch=-17.74&field-of-view=75&size=medium&display-plan=true"
            width="100%"
            height="100%"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            className="w-full h-full border-0 rounded-lg"
            title="Moises Sanabria Studio 43 360 Tour"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 