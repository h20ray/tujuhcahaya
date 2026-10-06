import React, { useState, useEffect, useCallback } from "react";
import type { NowPlayingData, RadioStation } from "@tujuhcahaya/radio-player";
import { useNowPlaying, useArtworkColor } from "@tujuhcahaya/radio-player/client";
import { C7LiveChatPanel } from "@tujuhcahaya/live-chat/react";
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
  const [stationSlug, setStationSlug] = useState<string>("tujuhcahaya-radio");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [syncedNowPlaying, setSyncedNowPlaying] = useState<NowPlayingData | null>(null);
  const [lyricsText, setLyricsText] = useState<string | null>(null);
  const [isLyricsLoading, setIsLyricsLoading] = useState<boolean>(false);

  // Fallback SSE listener jika dock audio belum mengirim state
  const { nowPlaying: fallbackNowPlaying } = useNowPlaying({
    apiBase: "/_emdash/api/plugins/tujuhcahaya-radio",
    stationSlug,
  });

  const activeNowPlaying = syncedNowPlaying || fallbackNowPlaying;
  const colors = useArtworkColor(activeNowPlaying?.track?.artworkUrl);

  // 1. Sinkronisasi dua arah dengan engine radio global
  useEffect(() => {
    function handleStateSync(e: Event) {
      const customEvent = e as CustomEvent<{
        isPlaying: boolean;
        isLoading: boolean;
        isMuted: boolean;
        volume: number;
        activeSlug: string;
        nowPlaying: NowPlayingData | null;
        lyricsText: string | null;
        isLyricsLoading: boolean;
        stations: RadioStation[];
      }>;
      const detail = customEvent.detail;
      if (!detail) return;

      if (typeof detail.isPlaying === "boolean") setIsPlaying(detail.isPlaying);
      if (typeof detail.isLoading === "boolean") setIsLoading(detail.isLoading);
      if (typeof detail.isMuted === "boolean") setIsMuted(detail.isMuted);
      if (typeof detail.volume === "number") setVolume(detail.volume);
      if (detail.activeSlug) setStationSlug(detail.activeSlug);
      if (detail.nowPlaying) setSyncedNowPlaying(detail.nowPlaying);
      if (detail.lyricsText !== undefined) setLyricsText(detail.lyricsText);
      if (typeof detail.isLyricsLoading === "boolean") setIsLyricsLoading(detail.isLyricsLoading);
    }

    window.addEventListener("c7-radio-state-sync", handleStateSync);
    // Minta dock mengirim state terkini segera
    window.dispatchEvent(new CustomEvent("c7-radio-query-state"));

    return () => {
      window.removeEventListener("c7-radio-state-sync", handleStateSync);
    };
  }, []);

  // 2. Kontrol aksi ke pemutar global
  const handleTogglePlay = useCallback(() => {
    window.dispatchEvent(new CustomEvent("c7-radio-cmd-toggle"));
  }, []);

  const handleToggleMute = useCallback(() => {
    window.dispatchEvent(new CustomEvent("c7-radio-cmd-mute"));
  }, []);

  const handleVolumeChange = useCallback((newVol: number) => {
    setVolume(newVol);
    window.dispatchEvent(new CustomEvent("c7-radio-cmd-volume", { detail: { volume: newVol } }));
  }, []);

  return (
    <div className="c7-live-grid">
      {/* Kolom Kiri: Panggung Siaran & Deck Interaktif */}
      <div className="c7-live-main-col">
        <C7LiveHero
          nowPlaying={activeNowPlaying}
          isPlaying={isPlaying}
          isLoading={isLoading}
          isMuted={isMuted}
          volume={volume}
          accentColor={colors.accent}
          t={t}
          onTogglePlay={handleTogglePlay}
          onToggleMute={handleToggleMute}
          onVolumeChange={handleVolumeChange}
        />

        <C7LiveInteractiveDeck
          nowPlaying={activeNowPlaying}
          lyricsText={lyricsText}
          isLyricsLoading={isLyricsLoading}
          isPlaying={isPlaying}
          stationSlug={stationSlug}
          accentColor={colors.textAccent}
          locale={locale}
          t={t}
        />
      </div>

      {/* Kolom Kanan: Live Chat Studio Komunitas */}
      <aside className="c7-live-chat-col" aria-label={t.tab_chat}>
        <C7LiveChatPanel
          roomId="utama"
          title={t.tab_chat}
          stationName="7Stream Live"
          accentColor={colors.accent}
        />
      </aside>
    </div>
  );
};

export default C7LiveStudio;
