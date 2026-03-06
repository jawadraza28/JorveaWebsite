"use client";

import { useEffect, useMemo } from "react";

type Props = {
  reelId: string;
};

export default function OpenInAppClient({ reelId }: Props) {
  const appUrl = useMemo(() => `jorvea://r/${encodeURIComponent(reelId)}`, [reelId]);
  const fallbackUrl = "https://apkpure.com/jorvea/com.jorvea";

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 1800);

    window.location.href = appUrl;

    return () => clearTimeout(timer);
  }, [appUrl]);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h1 className="text-2xl font-semibold">Opening Jorvea App…</h1>
      <p className="mt-3 text-slate-300">
        If the app does not open automatically, use one of the options below.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={appUrl} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
          Open in App
        </a>
        <a href={fallbackUrl} className="rounded-lg border border-slate-700 px-4 py-2 font-semibold">
          Download App
        </a>
      </div>
    </div>
  );
}
