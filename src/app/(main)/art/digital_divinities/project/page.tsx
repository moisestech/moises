import { redirect } from 'next/navigation';

/** Legacy project URL — canonical dossier lives at /art/digital_divinities */
export default function DigitalDivinitiesProjectRedirect() {
  redirect('/art/digital_divinities');
}
