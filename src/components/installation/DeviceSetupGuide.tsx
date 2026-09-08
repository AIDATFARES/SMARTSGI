"use client";

import { Apple, Box, ChevronDown, Download, HelpCircle, Monitor, Satellite, Smartphone, Tv, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const devices = [
  { 
    id: "smart-tv", 
    label: "Smart TV", 
    icon: Monitor, 
    title: "Smart TV Setup (Samsung, LG, Sony)", 
    app: "Smart IPTV, IPTV Smarters, or IBO Player", 
    steps: [
      "Open your TV app store (Samsung App Store or LG Content Store) and search for a player like IBO Player, IPTV Smarters, or Smart IPTV.",
      "Install and launch the application on your TV.",
      "Select 'Login with Xtream Codes API' or enter your M3U Playlist URL provided in your SMARTSGI activation details.",
      "Enter your Server URL, Username, and Password, then click 'Add User' or 'Save'.",
      "Allow the channels and EPG data to sync, and begin enjoying your live TV and movies."
    ]
  },
  { 
    id: "firestick", 
    label: "Firestick", 
    icon: Tv, 
    title: "Amazon Fire TV Stick Setup", 
    app: "TiviMate or IPTV Smarters Pro", 
    steps: [
      "From your Firestick home screen, navigate to 'Find' and search for the 'Downloader' app.",
      "Enable Unknown Apps in your Firestick developer options for Downloader.",
      "Install your preferred IPTV player (e.g., TiviMate or IPTV Smarters Pro).",
      "Open the application and select 'Add Playlist' -> 'Xtream Codes API'.",
      "Type the server connection URL, your username, and your password from your SMARTSGI welcome message.",
      "Click connect to load your live channels, EPG guide, and video on demand."
    ]
  },
  { 
    id: "android", 
    label: "Android TV / Phone", 
    icon: Smartphone, 
    title: "Android Device Setup", 
    app: "TiviMate, IPTV Smarters Pro, or XCIPTV", 
    steps: [
      "Open Google Play Store on your Android TV box or smartphone.",
      "Search for and install 'TiviMate IPTV Player' or 'IPTV Smarters Pro'.",
      "Open the app and choose 'Add Playlist' -> 'Xtream Codes'.",
      "Input your SMARTSGI login credentials (Server URL, Username, Password).",
      "Confirm and let the channel lists and EPG schedules populate automatically."
    ]
  },
  { 
    id: "ios", 
    label: "Apple iOS / iPadOS", 
    icon: Apple, 
    title: "Apple iPhone & iPad Setup", 
    app: "IPTV Smarters Player or GSE Smart IPTV", 
    steps: [
      "Open the Apple App Store on your iPhone or iPad.",
      "Search for and install 'Smarters Player Lite' or 'GSE Smart IPTV'.",
      "Launch the app and tap 'Add Your Playlist (Xtream Codes API)'.",
      "Fill in your SMARTSGI account credentials.",
      "Save and immediately access your streams on mobile."
    ]
  },
  { 
    id: "apple-tv", 
    label: "Apple TV 4K", 
    icon: Box, 
    title: "Apple TV 4K Setup", 
    app: "iPlayTV, IPTVX, or Smarters", 
    steps: [
      "Open the tvOS App Store on your Apple TV.",
      "Download a top-rated player such as iPlayTV or Smarters Player Lite.",
      "Add a new Xtream Codes connection using your SMARTSGI server URL and login details.",
      "Sync playlist data and start watching in fluid 60 FPS quality."
    ]
  },
  { 
    id: "windows-mac", 
    label: "PC / Mac", 
    icon: Monitor, 
    title: "Windows & macOS Setup", 
    app: "IPTV Smarters Pro or VLC Media Player", 
    steps: [
      "Download IPTV Smarters Pro for Windows/Mac or open VLC Media Player.",
      "In Smarters: select 'Add New User', enter Xtream Codes info, and login.",
      "In VLC: press Ctrl+N (Cmd+N on Mac) and paste your full SMARTSGI M3U playlist link.",
      "Enjoy live TV streams directly from your desktop or laptop."
    ]
  },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="max-w-5xl mx-auto">
      {/* Device Selector Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all uppercase tracking-wider ${
                active 
                  ? "btn-primary-purple shadow-[0_0_20px_rgba(155,63,242,0.4)]" 
                  : "glass-card text-[#A8A0B8] hover:text-white hover:border-[#9B3FF2]/40"
              }`} 
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Guide Content Card */}
      <article className="rounded-3xl glass-card p-6 sm:p-10 border-[#9B3FF2]/30 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9B3FF2]/15 border border-[#9B3FF2]/30 shrink-0">
              <DeviceIcon className="h-7 w-7 text-[#C084FC]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">{device.title}</h2>
              <p className="text-xs text-[#A8A0B8] mt-1">Recommended Apps: <span className="text-white font-semibold">{device.app}</span></p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#FF7A00] mb-4">
            Step-by-Step Instructions
          </h3>
          <ol className="space-y-3.5">
            {device.steps.map((stepText, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-sm text-[#A8A0B8] leading-relaxed">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B3FF2]/20 border border-[#9B3FF2]/40 text-xs font-bold text-[#C084FC] mt-0.5">
                  {idx + 1}
                </span>
                <span>{stepText}</span>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </section>
  );
}
