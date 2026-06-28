'use client';

import { FormEvent, useState } from 'react';
import { dossierTypography, grantButtonClass, grantCardClass } from '@/components/grant/dossier/GrantDossierUi';
import { cn } from '@/lib/utils';

export default function GrantsDirectoryGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/grants/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError('Incorrect password.');
        return;
      }

      window.location.reload();
    } catch {
      setError('Could not verify password. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <div className={cn('p-6 sm:p-8', grantCardClass)}>
        <p className={dossierTypography.eyebrow}>Internal directory</p>
        <h1 className={cn('mt-2', dossierTypography.h3)}>Grant application pages</h1>
        <p className={cn('mt-3', dossierTypography.body)}>
          Enter the directory password to view available grant routes.
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="grants-password" className={dossierTypography.eyebrow}>
              Password
            </label>
            <input
              id="grants-password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none ring-stone-900/10 focus:ring-2 dark:border-stone-600 dark:bg-neutral-950 dark:text-stone-100"
            />
          </div>

          {error ? (
            <p className="text-sm text-red-700 dark:text-red-300" role="alert">
              {error}
            </p>
          ) : null}

          <button type="submit" disabled={isSubmitting} className={grantButtonClass}>
            {isSubmitting ? 'Checking…' : 'Enter directory'}
          </button>
        </form>
      </div>
    </div>
  );
}
