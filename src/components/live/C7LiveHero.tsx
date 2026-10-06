import React from "react";
import { Play, Pause, Volume2, VolumeX, Headphones, Disc3 } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import type { LiveDict } from "../../i18n/types.js";

interface C7LiveHeroProps {
  nowPlaying: NowPlayingData | null;
  isPlaying: boolean;
  isLoading: boolean;
  isMuted: boolean;
  volume: number;
  accentColor?: string;
  t: LiveDict;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (vol: number) => void;
}

export const C7LiveHero: React.FC<C7LiveHeroProps> = ({
  nowPlaying,
  isPlaying,
  isLoading,
  isMuted,
  volume,
  accentColor,
  t,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
}) => {
  const track = nowPlaying?.track;
  const nextTrack = nowPlaying?.nextTrack;
  const listenersCount = nowPlaying?.listeners?.current ?? 60;
  const isOnline = nowPlaying?.isOnline ?? true;

  const displayTitle = track?.title || "Tujuhcahaya Radio";
  const displayArtist = track?.artist || "Memuat Siaran 7Stream...";
  const artworkUrl = track?.artworkUrl;

  return (
    <section className="c7-live-hero-card" aria-label={t.now_playing}>
      {/* Ambient Artwork Glow */}
      <div
        className="c7-live-hero-ambient"
        style={{ backgroundColor: accentColor || "var(--7c-sys-primary)" }}
        aria-hidden="true"
      />

      <div className="c7-live-hero-content">
        {/* Artwork with Visualizer Overlay */}
        <div className="c7-live-artwork-box">
          {artworkUrl ? (
            <img
              src={artworkUrl}
              alt={`${displayTitle} - ${displayArtist}`}
              className="c7-live-artwork-img"
              loading="eager"
            />
          ) : (
            <div className="c7-live-artwork-fallback">
              <Disc3 size={64} strokeWidth={1.5} />
            </div>
          )}

          {/* Soundwave Visualizer Bars */}
          <div className="c7-live-visualizer" aria-hidden="true">
            <span className={`c7-live-wave-bar ${isPlaying ? "animating" : ""}`} />
            <span className={`c7-live-wave-bar ${isPlaying ? "animating" : ""}`} />
            <span className={`c7-live-wave-bar ${isPlaying ? "animating" : ""}`} />
            <span className={`c7-live-wave-bar ${isPlaying ? "animating" : ""}`} />
            <span className={`c7-live-wave-bar ${isPlaying ? "animating" : ""}`} />
          </div>
        </div>

        {/* Track Metadata & Controls */}
        <div className="c7-live-meta-info">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", flexWrap: "wrap" }}>
            <div className="c7-live-now-playing-label">
              {isOnline ? t.now_playing : t.badge_offline}
            </div>
            <div className="c7-live-badge-listeners">
              <Headphones size={13} />
              <span>{listenersCount} {t.listeners}</span>
            </div>
          </div>

          <h2 className="c7-live-track-title" title={displayTitle}>
            {displayTitle}
          </h2>

          <p className="c7-live-track-artist" title={displayArtist}>
            {displayArtist}
          </p>

          {/* Up Next Pill */}
          {nextTrack && (
            <div className="c7-live-up-next-pill">
              <span className="c7-live-up-next-label">{t.up_next}:</span>
              <span className="c7-live-up-next-text" title={`${nextTrack.title} — ${nextTrack.artist}`}>
                {nextTrack.title} — {nextTrack.artist}
              </span>
            </div>
          )}

          {/* Master Audio Controls */}
          <div className="c7-live-controls-row">
            <button
              type="button"
              className="c7-live-play-btn"
              onClick={onTogglePlay}
              disabled={isLoading}
              aria-label={isPlaying ? t.pause : t.play}
              title={isPlaying ? t.pause : t.play}
            >
              {isPlaying ? (
                <Pause size={26} strokeWidth={2.5} fill="currentColor" />
              ) : (
                <Play size={26} strokeWidth={2.5} fill="currentColor" style={{ marginLeft: "3px" }} />
              )}
            </button>

            {/* Volume Slider & Mute Toggle */}
            <div className="c7-live-volume-group">
              <button
                type="button"
                className="c7-live-vol-btn"
                onClick={onToggleMute}
                aria-label={isMuted ? t.unmute : t.mute}
                title={isMuted ? t.unmute : t.mute}
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <input
                type="range"
                className="c7-live-volume-slider"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                aria-label={t.volume}
                title={t.volume}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C7LiveHero;
