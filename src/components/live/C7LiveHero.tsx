import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import {
  C7PlayIcon,
  C7PauseIcon,
  C7Spinner,
  C7MarqueeText,
  useArtworkTransition,
  useArtworkColor,
  useDockProgress,
} from "@tujuhcahaya/radio-player/client";
import type { LiveDict } from "../../i18n/types.js";

interface C7LiveHeroProps {
  nowPlaying: NowPlayingData | null;
  isPlaying: boolean;
  isLoading: boolean;
  isMuted: boolean;
  volume: number;
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
  t,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
}) => {
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);

  const track = nowPlaying?.track;
  const nextTrack = nowPlaying?.nextTrack;
  const isOnline = nowPlaying?.isOnline ?? true;
  const rawArtwork = track?.artworkUrl || "/favicon.svg";
  const title = track?.title || "Tujuhcahaya Radio";
  const artist = track?.artist || "Memuat Siaran...";
  const duration = track?.duration ?? 0;
  const playedAt = track?.playedAt ?? 0;

  // 1. Dynamic 2-Layer Artwork Crossfade (Reused from plugin)
  const { layerA, layerB, activeLayer } = useArtworkTransition(rawArtwork, {
    fallbackUrl: "/favicon.svg",
    crossFadeMs: 400,
  });

  // 2. Dynamic WCAG Artwork Palette (Reused from plugin)
  const colors = useArtworkColor(rawArtwork);

  // 3. Dynamic Timeline Progress Bar (Reused from plugin)
  const { progressPercent, elapsedFormatted, durationFormatted, isLiveStreamOnly } =
    useDockProgress(duration, playedAt, isPlaying);

  return (
    <section
      className="c7-live-player-card"
      style={
        {
          "--c7-player-accent": colors.accent,
          "--c7-player-accent-fg": colors.accentForeground,
          "--c7-player-glow": colors.glow,
        } as React.CSSProperties
      }
      aria-label={title}
    >
      {/* Top Hairline Progress Bar */}
      <div
        className="c7-dock-progress-track"
        title={isLiveStreamOnly ? "Live" : `${elapsedFormatted} / ${durationFormatted}`}
      >
        <div className="c7-dock-progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <div className="c7-live-player-body">
        {/* Dynamic 2-Layer Crossfaded Artwork */}
        <div className="c7-live-art-frame">
          <img
            src={layerA || "/favicon.svg"}
            alt={title}
            className={`c7-dock-art ${activeLayer === "a" ? "is-visible" : "is-hidden"}`}
          />
          <img
            src={layerB || "/favicon.svg"}
            alt={title}
            className={`c7-dock-art ${activeLayer === "b" ? "is-visible" : "is-hidden"}`}
          />
        </div>

        {/* Track Metadata & Controls */}
        <div className="c7-live-player-info">
          <div className="c7-live-status-row">
            <span
              className={`c7-dock-status-dot ${isOnline ? "is-online" : "is-offline"}`}
              aria-hidden="true"
            />
            <span className="c7-live-status-label">
              {nowPlaying?.station?.name || "Tujuhcahaya Radio"}
            </span>
            <span className="sr-only">
              {isOnline ? " (Live Online)" : " (Offline)"}
            </span>
          </div>

          <C7MarqueeText
            text={title}
            className="c7-live-track-title"
            speedSec={10}
          />

          {artist && (
            <C7MarqueeText
              text={artist}
              className="c7-live-track-artist"
              speedSec={12}
            />
          )}

          {/* Up Next Preview Pill */}
          {nextTrack?.title && (
            <div
              className="c7-live-next-track"
              aria-label={`${t.up_next}: ${nextTrack.title}${nextTrack.artist ? ` — ${nextTrack.artist}` : ""}`}
            >
              <span className="c7-live-next-tag">{t.up_next}</span>
              <span className="c7-live-next-info">
                <span className="c7-live-next-title">{nextTrack.title}</span>
                {nextTrack.artist && (
                  <span className="c7-live-next-artist"> — {nextTrack.artist}</span>
                )}
              </span>
            </div>
          )}

          {/* Dynamic Controls: Play/Pause FAB + Dynamic Volume Cluster */}
          <div className="c7-live-player-controls">
            <button
              type="button"
              className="c7-radio-play-btn"
              onClick={onTogglePlay}
              disabled={isLoading}
              style={{
                backgroundColor: colors.accent,
                color: colors.accentForeground,
              }}
              aria-label={isPlaying ? t.pause : t.play}
              title={isPlaying ? t.pause : t.play}
            >
              {isLoading ? (
                <C7Spinner size={20} color="currentColor" strokeWidth={2.4} />
              ) : isPlaying ? (
                <C7PauseIcon size={20} />
              ) : (
                <C7PlayIcon size={20} />
              )}
            </button>

            {/* Dynamic Volume Pill with Floating Tooltip Bubble */}
            <div
              className="c7-dock-volume-group"
              role="group"
              aria-label={t.volume}
              onMouseEnter={() => setIsVolumeHovered(true)}
              onMouseLeave={() => setIsVolumeHovered(false)}
            >
              <button
                type="button"
                className="c7-volume-btn"
                onClick={onToggleMute}
                aria-label={isMuted ? t.unmute : t.mute}
                title={isMuted ? t.unmute : t.mute}
              >
                {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>

              <div className="c7-dock-slider-wrap">
                {isVolumeHovered && (
                  <div
                    className="c7-volume-bubble"
                    style={{
                      left: `${Math.max(12, Math.min(88, (isMuted ? 0 : volume) * 100))}%`,
                    }}
                    aria-hidden="true"
                  >
                    {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
                  </div>
                )}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                  onFocus={() => setIsVolumeHovered(true)}
                  onBlur={() => setIsVolumeHovered(false)}
                  className="c7-volume-slider"
                  aria-label={t.volume}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
                  aria-valuetext={`${Math.round((isMuted ? 0 : volume) * 100)}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C7LiveHero;
