import React, { useState } from "react";
import { Mic2, Radio, MessageSquare, History } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import { C7LyricsView, C7SongRequestPanel } from "@tujuhcahaya/radio-player/client";
import { C7LiveChatPanel } from "@tujuhcahaya/live-chat/react";
import type { LiveDict } from "../../i18n/types.js";

export type InteractiveDeckTab = "lyrics" | "request" | "chat" | "history";

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
    <div className="c7-live-deck">
      {/* Minimalist Tab Navigation */}
      <div className="c7-live-tabs" role="tablist" aria-label="Navigasi Siaran">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "lyrics"}
          className={`c7-live-tab ${activeTab === "lyrics" ? "is-active" : ""}`}
          onClick={() => setActiveTab("lyrics")}
        >
          <Mic2 size={15} />
          <span>{t.tab_lyrics}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "request"}
          className={`c7-live-tab ${activeTab === "request" ? "is-active" : ""}`}
          onClick={() => setActiveTab("request")}
        >
          <Radio size={15} />
          <span>{t.tab_request}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "chat"}
          className={`c7-live-tab ${activeTab === "chat" ? "is-active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          <MessageSquare size={15} />
          <span>{t.tab_chat}</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "history"}
          className={`c7-live-tab ${activeTab === "history" ? "is-active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <History size={15} />
          <span>{t.tab_history}</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className={`c7-live-pane c7-live-pane-${activeTab}`}>
        {activeTab === "lyrics" && (
          <div role="tabpanel" aria-label={t.tab_lyrics} className="c7-live-tab-pane c7-live-tab-pane-lyrics">
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
              disableWheelHijack={true}
            />
          </div>
        )}

        {activeTab === "request" && (
          <div role="tabpanel" aria-label={t.tab_request} className="c7-live-tab-pane">
            <C7SongRequestPanel
              stationSlug={stationSlug}
              accentColor={accentColor}
            />
          </div>
        )}

        {activeTab === "chat" && (
          <div role="tabpanel" aria-label={t.tab_chat} className="c7-live-tab-pane c7-live-tab-pane-chat">
            <C7LiveChatPanel
              stationName={nowPlaying?.station?.name || "7Stream"}
              accentColor={accentColor}
            />
          </div>
        )}

        {activeTab === "history" && (
          <div role="tabpanel" aria-label={t.tab_history} className="c7-live-tab-pane">
            {history.length > 0 ? (
              <div className="c7-live-history-container">
                <div className="c7-live-history-list">
                  {history.map((item, idx) => (
                    <div
                      key={`${item.title}-${item.playedAt || idx}`}
                      className="c7-live-history-card"
                    >
                      <div className="c7-live-history-thumb">
                        <img
                          src={item.artworkUrl || "/favicon.svg"}
                          alt={item.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="c7-live-history-meta">
                        <span className="c7-live-history-title">{item.title}</span>
                        <span className="c7-live-history-artist">
                          {item.artist}
                          {item.album ? ` • ${item.album}` : ""}
                        </span>
                      </div>
                      {item.playedAt && (
                        <span className="c7-live-history-time">
                          {formatRelativeTime(item.playedAt, locale)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="c7-history-empty">{t.history_empty}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default C7LiveInteractiveDeck;
