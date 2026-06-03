import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Shield, Bell, Eye, Headphones, Sparkles, Check, CheckSquare } from 'lucide-react';

export default function Settings() {
  const [audioQuality, setAudioQuality] = useState('ultra');
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    friendActivity: true,
    newReleases: true,
  });
  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    shareListening: true,
    showBadges: true,
  });
  const [themeAccent, setThemeAccent] = useState('purple');

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePrivacy = (key: keyof typeof privacy) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const Toggle = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
    <button 
      onClick={onClick}
      className={`w-12 h-6.5 rounded-full p-1 transition-all duration-300 ${active ? 'bg-primary' : 'bg-white/10'}`}
    >
      <div 
        className={`w-4.5 h-4.5 rounded-full bg-white transition-transform duration-300 ${active ? 'translate-x-5.5' : 'translate-x-0'}`} 
      />
    </button>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 md:p-8 pt-6 pb-32 max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-extrabold text-white">Settings</h1>
        <p className="text-sm text-zinc-400">Configure your PULSE playback, theme, and security preferences.</p>
      </div>

      <div className="space-y-8">
        {/* Theme Settings */}
        <section className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-white">Appearance & Theme</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-white mb-3">Accent Theme Accent</p>
              <div className="flex gap-4">
                {[
                  { id: 'purple', name: 'Neon Purple', color: 'bg-primary border-primary' },
                  { id: 'blue', name: 'Electric Blue', color: 'bg-cyan-500 border-cyan-500' },
                  { id: 'pink', name: 'Vibrant Pink', color: 'bg-pink-500 border-pink-500' },
                ].map((accent) => (
                  <button
                    key={accent.id}
                    onClick={() => setThemeAccent(accent.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border text-sm font-medium transition-all ${
                      themeAccent === accent.id 
                        ? 'border-white/20 bg-white/10 text-white' 
                        : 'border-transparent bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${accent.color}`} />
                    {accent.name}
                    {themeAccent === accent.id && <Check className="w-4 h-4 ml-1.5 text-primary" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div>
                <p className="text-sm font-semibold text-white">Glassmorphism Overlay Effects</p>
                <p className="text-xs text-zinc-400">Enable premium blurred backgrounds and border glow</p>
              </div>
              <Toggle active={true} onClick={() => {}} />
            </div>
          </div>
        </section>

        {/* Audio Quality Settings */}
        <section className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Headphones className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-white">Audio Quality</h3>
          </div>

          <div className="space-y-4">
            {[
              { id: 'normal', title: 'Normal (96kbps)', desc: 'Balanced for low data usage and unstable connections' },
              { id: 'high', title: 'High (320kbps)', desc: 'Great crisp detail, standard for high fidelity streaming' },
              { id: 'ultra', title: 'Lossless Ultra HD (24-bit/192kHz FLAC)', desc: 'True studio sound quality, recommendation for audiophiles' },
            ].map((option) => (
              <div 
                key={option.id}
                onClick={() => setAudioQuality(option.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  audioQuality === option.id 
                    ? 'bg-primary/5 border-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.15)]' 
                    : 'bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-white">{option.title}</p>
                  <p className="text-xs text-zinc-400 mt-1">{option.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${audioQuality === option.id ? 'border-primary bg-primary text-white' : 'border-zinc-600'}`}>
                  {audioQuality === option.id && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications Settings */}
        <section className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-white">Notification Preferences</h3>
          </div>

          <div className="space-y-4">
            {[
              { key: 'push', title: 'Desktop Push Notifications', desc: 'Alert me on play updates or system news' },
              { key: 'email', title: 'Email Summaries', desc: 'Send occasional newsletters or recommendations digests' },
              { key: 'friendActivity', title: 'Friend Activity Updates', desc: 'Notify me when friends start listening together' },
              { key: 'newReleases', title: 'New Releases & Albums', desc: 'Get updates on followed artist launches' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                </div>
                <Toggle 
                  active={notifications[item.key as keyof typeof notifications]} 
                  onClick={() => toggleNotification(item.key as keyof typeof notifications)} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-white">Privacy & Security</h3>
          </div>

          <div className="space-y-4">
            {[
              { key: 'publicProfile', title: 'Public Profile Visibility', desc: 'Allow others to search for your profile name and avatar' },
              { key: 'shareListening', title: 'Share Listening Activity', desc: 'Display what you are currently listening to on the Friend Activity bar' },
              { key: 'showBadges', title: 'Display Achievement Badges', desc: 'Show badges on your profile page dashboard' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                </div>
                <Toggle 
                  active={privacy[item.key as keyof typeof privacy]} 
                  onClick={() => togglePrivacy(item.key as keyof typeof privacy)} 
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
