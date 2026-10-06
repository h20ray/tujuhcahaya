import React, { useState, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import {
  C7LyricsTrackHero,
  C7LyricsView,
  C7SongRequestPanel,
  C7PlayIcon,
  C7PauseIcon,
  useNowPlaying,
} from "@tujuhcahaya/radio-player/client";
import type { LiveDict } from "../../i18n/types.js";
import "../../styles/c7-live.css";

interface C7LivePlayerProps {
  t: LiveDict;
}

export const C7LivePlayer: React.FC<C7LivePlayerProps> = ({ t }) => {
  const [stationSlug, setStationSlug] = useState<string>("tujuhcahaya-radio");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [syncedNowPlaying, setSyncedNowPlaying] = useState<NowPlayingData | null>(null);
  const [lyricsText, setLyricsText] = useState<string | null>(null);
  const [isLyricsLoading, setIsLyricsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"lyrics" | "request">("lyrics");

  // Fallback SSE jika dock audio belum mengirim state
  const { nowPlaying: fallbackNowPlaying } = useNowPlaying({
    apiBase: "/_emdash/api/plugins/tujuhcahaya-radio",
    stationSlug,
  });

  const activeNowPlaying = syncedNowPlaying || fallbackNowPlaying;
  const track = activeNowPlaying?.track;

  // Sinkronisasi dengan audio engine global
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
    window.dispatchEvent(new CustomEvent("c7-radio-query-state"));

    return () => {
      window.removeEventListener("c7-radio-state-sync", handleStateSync);
    };
  }, []);

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
    <div className="c7-live-container">
      <header className="c7-live-header">
        <h1 className="c7-live-title">{t.title}</h1>
        <p className="c7-live-tagline">{t.tagline}</p>
      </header>

      <section className="c7-live-card" aria-label={t.title}>
        {/* Reused: Album artwork squircle, title & artist */}
        <C7LyricsTrackHero
          title={track?.title}
          artist={track?.artist}
          artworkUrl={track?.artworkUrl}
        />

        {/* Audio Controls */}
        <div className="c7-live-controls">
          <button
            type="button"
            className="c7-live-play-btn"
            onClick={handleTogglePlay}
            disabled={isLoading}
            aria-label={isPlaying ? t.pause : t.play}
            title={isPlaying ? t.pause : t.play}
          >
            {isPlaying ? <C7PauseIcon size={22} /> : <C7PlayIcon size={22} />}
          </button>

          <div className="c7-live-volume">
            <button
              type="button"
              className="c7-live-vol-btn"
              onClick={handleToggleMute}
              aria-label={isMuted ? t.unmute : t.mute}
              title={isMuted ? t.unmute : t.mute}
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            <input
              type="range"
              className="c7-live-vol-slider"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              aria-label={t.volume}
              title={t.volume}
            />
          </div>
        </div>

        {/* Minimalist Tabs: Lirik / Request */}
        <div className="c7-live-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "lyrics"}
            className={`c7-live-tab ${activeTab === "lyrics" ? "is-active" : ""}`}
            onClick={() => setActiveTab("lyrics")}
          >
            {t.tab_lyrics}
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "request"}
            className={`c7-live-tab ${activeTab === "request" ? "is-active" : ""}`}
            onClick={() => setActiveTab("request")}
          >
            {t.tab_request}
          </button>
        </div>

        {/* Tab Content: Reused C7LyricsView or C7SongRequestPanel */}
        <div className="c7-live-tab-body">
          {activeTab === "lyrics" ? (
            <C7LyricsView
              lyricsText={lyricsText}
              playedAt={track?.playedAt}
              isLoading={isLyricsLoading}
              isPlaying={isPlaying}
              title={track?.title}
              artist={track?.artist}
              artworkUrl={track?.artworkUrl}
            />
          ) : (
            <C7SongRequestPanel stationSlug={stationSlug} />
          )}
        </div>
      </section>
    </div>
  );
};

export default C7LivePlayer;
