import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNowPlaying, useArtworkColor, useRadioState } from "@tujuhcahaya/radio-player/client";
import { C7LiveHero } from "./C7LiveHero.js";
import { C7LiveInteractiveDeck } from "./C7LiveInteractiveDeck.js";
import type { LiveDict } from "../../i18n/types.js";
import "../../styles/c7-live.css";

interface C7LiveStudioProps {
  locale?: string;
  t: LiveDict;
}

export const C7LiveStudio: React.FC<C7LiveStudioProps> = ({
  locale = "id",
  t,
}) => {
  const {
    isPlaying,
    isLoading,
    isMuted,
    volume,
    activeSlug,
    nowPlaying: globalNowPlaying,
    lyricsText: globalLyricsText,
    isLyricsLoading: globalIsLyricsLoading,
    togglePlay,
    toggleMute,
    setVolume,
  } = useRadioState();

  const [localLyricsText, setLocalLyricsText] = useState<string | null>(null);
  const [localIsLyricsLoading, setLocalIsLyricsLoading] = useState<boolean>(false);

  const stationSlug = activeSlug || "tujuhcahaya-radio";

  // Fallback SSE jika dock belum terhubung atau saat standalone
  const { nowPlaying: fallbackNowPlaying } = useNowPlaying({
    apiBase: "/_emdash/api/plugins/tujuhcahaya-radio",
    stationSlug,
  });

  const activeNowPlaying = globalNowPlaying || fallbackNowPlaying;
  const colors = useArtworkColor(activeNowPlaying?.track?.artworkUrl);

  const track = activeNowPlaying?.track;
  const title = track?.title?.trim();
  const artist = track?.artist?.trim();

  const effectiveLyricsText = globalLyricsText ?? localLyricsText;
  const effectiveIsLyricsLoading = globalIsLyricsLoading || localIsLyricsLoading;

  // Reference track yang terakhir di-fetch
  const lastTrackKeyRef = useRef<string>("");

  const fetchLyrics = useCallback(
    async (overrideTitle?: string, overrideArtist?: string) => {
      const qTitle = overrideTitle || title;
      const qArtist = overrideArtist || artist;
      if (!qTitle || !qArtist) {
        setLocalLyricsText(null);
        setLocalIsLyricsLoading(false);
        return;
      }

      const trackKey = `${qTitle}::${qArtist}`;
      lastTrackKeyRef.current = trackKey;
      setLocalIsLyricsLoading(true);

      try {
        const res = await fetch(
          `/_emdash/api/plugins/tujuhcahaya-radio/lyrics?title=${encodeURIComponent(qTitle)}&artist=${encodeURIComponent(qArtist)}&station=${encodeURIComponent(stationSlug)}`
        );
        if (!res.ok) throw new Error("Gagal mengambil lirik");
        const raw = (await res.json()) as Record<string, unknown>;
        let unwrapped: unknown = raw;
        while (
          unwrapped &&
          typeof unwrapped === "object" &&
          "data" in unwrapped &&
          (unwrapped as { data: unknown }).data &&
          typeof (unwrapped as { data: unknown }).data === "object"
        ) {
          unwrapped = (unwrapped as { data: Record<string, unknown> }).data;
        }
        const target = (unwrapped as Record<string, unknown>) ?? raw;
        const lyrics = target.lyrics;

        if (lastTrackKeyRef.current === trackKey) {
          setLocalLyricsText(typeof lyrics === "string" && lyrics.trim() ? lyrics : null);
        }
      } catch {
        if (lastTrackKeyRef.current === trackKey) {
          setLocalLyricsText(null);
        }
      } finally {
        if (lastTrackKeyRef.current === trackKey) {
          setLocalIsLyricsLoading(false);
        }
      }
    },
    [title, artist, stationSlug]
  );

  // Auto-fetch jika belum ada lirik atau saat track berganti
  useEffect(() => {
    if (!title || !artist) return;
    const trackKey = `${title}::${artist}`;
    if (lastTrackKeyRef.current !== trackKey && effectiveLyricsText === null && !effectiveIsLyricsLoading) {
      fetchLyrics(title, artist);
    }
  }, [title, artist, effectiveLyricsText, effectiveIsLyricsLoading, fetchLyrics]);

  return (
    <div className="c7-live-container">
      {/* Semantic Breadcrumbs (MD3X Navigation Trail) */}
      <nav className="c7-breadcrumb" aria-label={locale === "en" ? "Breadcrumb navigation" : "Navigasi Jejak Halaman"}>
        <a href={locale === "en" ? "/en" : "/"} className="c7-breadcrumb-link">
          {locale === "en" ? "Home" : "Beranda"}
        </a>
        <svg
          className="c7-breadcrumb-sep"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="c7-breadcrumb-current" aria-current="page">
          {t.title}
        </span>
      </nav>

      {/* Header Minimalis */}
      <header className="c7-live-header">
        <h1 className="c7-live-title">{t.title}</h1>
        <p className="c7-live-subtitle">{t.subtitle}</p>
      </header>

      {/* Panggung Player Dinamis MD3X */}
      <C7LiveHero
        nowPlaying={activeNowPlaying}
        isPlaying={isPlaying}
        isLoading={isLoading}
        isMuted={isMuted}
        volume={volume}
        locale={locale}
        t={t}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
        onVolumeChange={setVolume}
      />

      {/* Konten Terpadu Mengalir ke Bawah (Full-Width Tabs) */}
      <C7LiveInteractiveDeck
        nowPlaying={activeNowPlaying}
        lyricsText={effectiveLyricsText}
        isLyricsLoading={effectiveIsLyricsLoading}
        isPlaying={isPlaying}
        stationSlug={stationSlug}
        accentColor={colors.textAccent}
        locale={locale}
        t={t}
        onRetryLyrics={() => fetchLyrics()}
      />
    </div>
  );
};

export default C7LiveStudio;
