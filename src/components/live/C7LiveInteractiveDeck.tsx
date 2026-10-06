import React, { useState } from "react";
import { Mic2, Radio, History, Music } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import { C7LyricsView, C7SongRequestPanel } from "@tujuhcahaya/radio-player/client";
import type { LiveDict } from "../../i18n/types.js";

export type InteractiveDeckTab = "lyrics" | "request" | "history";

interface C7LiveInteractiveDeckProps {
  nowPlaying: NowPlayingData | null;
  lyricsText: string | null;
  isLyricsLoading: boolean;
  isPlaying: boolean;
  stationSlug: string;
  accentColor?: string;
  locale?: string;
  t: LiveDict;
  onRetryLyrics?: () => void;
}

function formatRelativeTime(playedAt: number, locale = "id"): string {
  if (!playedAt) return "";
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.max(0, now - playedAt);
  const mins = Math.floor(diff / 60);
  const isEn = locale === "en";

  if (mins < 1) return isEn ? "Just now" : "Baru saja";
  if (mins < 60) return isEn ? `${mins}m ago` : `${mins} mnt lalu`;
  const hours = Math.floor(mins / 60);
  return isEn ? `${hours}h ago` : `${hours} jam lalu`;
}

export const C7LiveInteractiveDeck: React.FC<C7LiveInteractiveDeckProps> = ({
  nowPlaying,
  lyricsText,
  isLyricsLoading,
  isPlaying,
  stationSlug,
  accentColor,
  locale = "id",
  t,
  onRetryLyrics,
}) => {
  const [activeTab, setActiveTab] = useState<InteractiveDeckTab>("lyrics");

  const track = nowPlaying?.track;
  const history = nowPlaying?.history || [];

  return (
    <div className="c7-live-deck-card">
      {/* Segmented Tab Controls */}
      <div className="c7-live-tabs-header" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "lyrics"}
          className={`c7-live-tab-btn ${activeTab === "lyrics" ? "active" : ""}`}
          onClick={() => setActiveTab("lyrics")}
        >
          <Mic2 size={16} />
          <span>{t.tab_lyrics}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "request"}
          className={`c7-live-tab-btn ${activeTab === "request" ? "active" : ""}`}
          onClick={() => setActiveTab("request")}
        >
          <Radio size={16} />
          <span>{t.tab_request}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "history"}
          className={`c7-live-tab-btn ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <History size={16} />
          <span>{t.tab_history}</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="c7-live-tab-content">
        {activeTab === "lyrics" && (
          <div role="tabpanel" aria-label={t.tab_lyrics}>
            <C7LyricsView
              lyricsText={lyricsText}
              playedAt={track?.playedAt}
              isLoading={isLyricsLoading}
              isPlaying={isPlaying}
              textAccentColor={accentColor}
              onRetry={onRetryLyrics}
              title={track?.title}
              artist={track?.artist}
              artworkUrl={track?.artworkUrl}
            />
          </div>
        )}

        {activeTab === "request" && (
          <div role="tabpanel" aria-label={t.tab_request}>
            <p className="c7-live-tagline" style={{ marginBottom: "1rem" }}>
              {t.request_subtitle}
            </p>
            <C7SongRequestPanel
              stationSlug={stationSlug}
              accentColor={accentColor}
            />
          </div>
        )}

        {activeTab === "history" && (
          <div role="tabpanel" aria-label={t.tab_history}>
            {history.length > 0 ? (
              <ul className="c7-live-history-list">
                {history.map((item, idx) => (
                  <li key={`${item.title}-${item.playedAt || idx}`} className="c7-live-history-item">
                    {item.artworkUrl ? (
                      <img
                        src={item.artworkUrl}
                        alt={`${item.title} - ${item.artist}`}
                        className="c7-live-history-art"
                        loading="lazy"
                      />
                    ) : (
                      <div className="c7-live-history-art" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Music size={20} />
                      </div>
                    )}
                    <div className="c7-live-history-info">
                      <h4 className="c7-live-history-title">{item.title}</h4>
                      <p className="c7-live-history-artist">{item.artist}</p>
                    </div>
                    {item.playedAt && (
                      <span className="c7-live-history-time">
                        {formatRelativeTime(item.playedAt, locale)}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="c7-live-empty-state">
                <Music size={36} strokeWidth={1.5} />
                <p>{t.history_empty}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default C7LiveInteractiveDeck;
