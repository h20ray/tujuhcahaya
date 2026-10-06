import React, { useState } from "react";
import { Mic2, Send, MessageSquare, History, Disc3 } from "lucide-react";
import type { NowPlayingData } from "@tujuhcahaya/radio-player";
import {
  C7LyricsView,
  C7SongRequestPanel,
  C7TrackPreviewButton,
} from "@tujuhcahaya/radio-player/client";
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

  const tabsList: InteractiveDeckTab[] = ["lyrics", "request", "chat", "history"];
  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = tabsList.indexOf(activeTab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextTab = tabsList[(currentIndex + 1) % tabsList.length];
      setActiveTab(nextTab);
      document.getElementById(`c7-live-tab-${nextTab}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevTab = tabsList[(currentIndex - 1 + tabsList.length) % tabsList.length];
      setActiveTab(prevTab);
      document.getElementById(`c7-live-tab-${prevTab}`)?.focus();
    }
  };

  return (
    <div className="c7-live-deck">
      {/* WCAG-Compliant Roving Tablist Navigation (Mirrored from Plugin) */}
      <div
        className="c7-live-tabs"
        role="tablist"
        aria-label="Navigasi Fitur Siaran Langsung"
        onKeyDown={handleTabKeyDown}
      >
        <button
          type="button"
          id="c7-live-tab-lyrics"
          role="tab"
          aria-selected={activeTab === "lyrics"}
          aria-controls="c7-live-panel-lyrics"
          tabIndex={activeTab === "lyrics" ? 0 : -1}
          className={`c7-live-tab ${activeTab === "lyrics" ? "is-active" : ""}`}
          onClick={() => setActiveTab("lyrics")}
        >
          <Mic2 size={15} aria-hidden="true" />
          <span>{t.tab_lyrics}</span>
        </button>

        <button
          type="button"
          id="c7-live-tab-request"
          role="tab"
          aria-selected={activeTab === "request"}
          aria-controls="c7-live-panel-request"
          tabIndex={activeTab === "request" ? 0 : -1}
          className={`c7-live-tab ${activeTab === "request" ? "is-active" : ""}`}
          onClick={() => setActiveTab("request")}
        >
          <Send size={14} aria-hidden="true" />
          <span>{t.tab_request}</span>
        </button>

        <button
          type="button"
          id="c7-live-tab-chat"
          role="tab"
          aria-selected={activeTab === "chat"}
          aria-controls="c7-live-panel-chat"
          tabIndex={activeTab === "chat" ? 0 : -1}
          className={`c7-live-tab ${activeTab === "chat" ? "is-active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          <MessageSquare size={15} aria-hidden="true" />
          <span>{t.tab_chat}</span>
        </button>

        <button
          type="button"
          id="c7-live-tab-history"
          role="tab"
          aria-selected={activeTab === "history"}
          aria-controls="c7-live-panel-history"
          tabIndex={activeTab === "history" ? 0 : -1}
          className={`c7-live-tab ${activeTab === "history" ? "is-active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          <History size={15} aria-hidden="true" />
          <span>{t.tab_history}</span>
          {history.length > 0 && <span className="c7-tab-count">{history.length}</span>}
        </button>
      </div>

      {/* Tab Panels */}
      <div className={`c7-live-pane c7-live-pane-${activeTab}`}>
        {activeTab === "lyrics" && (
          <div
            id="c7-live-panel-lyrics"
            role="tabpanel"
            aria-labelledby="c7-live-tab-lyrics"
            tabIndex={0}
            className="c7-live-tab-pane c7-live-tab-pane-lyrics"
          >
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
          <div
            id="c7-live-panel-request"
            role="tabpanel"
            aria-labelledby="c7-live-tab-request"
            tabIndex={0}
            className="c7-live-tab-pane"
          >
            <C7SongRequestPanel
              stationSlug={stationSlug}
              accentColor={accentColor}
            />
          </div>
        )}

        {activeTab === "chat" && (
          <div
            id="c7-live-panel-chat"
            role="tabpanel"
            aria-labelledby="c7-live-tab-chat"
            tabIndex={0}
            className="c7-live-tab-pane c7-live-tab-pane-chat"
          >
            <C7LiveChatPanel
              stationName={nowPlaying?.station?.name || "7Stream"}
              accentColor={accentColor}
            />
          </div>
        )}

        {activeTab === "history" && (
          <div
            id="c7-live-panel-history"
            role="tabpanel"
            aria-labelledby="c7-live-tab-history"
            tabIndex={0}
            className="c7-live-tab-pane"
          >
            {history.length > 0 ? (
              <div className="c7-live-history-container">
                <div className="c7-live-history-list">
                  {history.map((item, idx) => (
                    <div
                      key={`${item.title}-${item.playedAt || idx}`}
                      className="c7-live-history-card"
                    >
                      <div className="c7-live-history-thumb">
                        {item.artworkUrl ? (
                          <img
                            src={item.artworkUrl}
                            alt={item.title}
                            loading="lazy"
                          />
                        ) : (
                          <Disc3 size={22} className="c7-history-fallback" aria-hidden="true" />
                        )}
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
                      <div className="c7-live-history-action">
                        <C7TrackPreviewButton
                          title={item.title}
                          artist={item.artist}
                          previewUrl={item.previewUrl}
                          appleMusicUrl={item.appleMusicUrl}
                          artworkUrl={item.artworkUrl}
                          accentColor={accentColor}
                          size="sm"
                        />
                      </div>
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

