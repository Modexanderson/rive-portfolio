import { useState } from "react";
import RivePlayer from "./components/RivePlayer";
import "./App.css";

const projects = [
  {
    title: "Cloud Mascot — 6 Expressions",
    desc: "App mascot with state-machine-driven expressions: happy, sad, surprised, sleepy, angry, and neutral. Runtime-controlled via named inputs.",
    tags: ["State Machine", "Mascot", "App Ready"],
    riv: "/riv/cloud-mascot.riv",
  },
  {
    title: "Avatar Pack — Emotion States",
    desc: "3 animated avatars sharing a reusable rig. Each includes idle, happy, and sad states controlled by boolean inputs.",
    tags: ["Modular Rig", "Boolean Inputs", "Avatars"],
    riv: "/riv/avatar-pack.riv",
  },
  {
    title: "Character Facial Rig",
    desc: "Expressive character with facial animation and particle effects. Click-triggered state changes with randomized responses.",
    tags: ["Facial Rig", "Particles", "Triggers"],
    riv: "/riv/facial-animation.riv",
  },
  {
    title: "UI Toggle Component",
    desc: "Smooth toggle switch with boolean state machine input. Production-ready micro-interaction for settings and preferences.",
    tags: ["UI Component", "Boolean", "Micro-interaction"],
    riv: "/riv/toggle-switch.riv",
  },
  {
    title: "Animated Download Button",
    desc: "Stateful button with loading, progress, and completion animations. Driven by trigger and number inputs for seamless integration.",
    tags: ["UI Component", "Progress", "Stateful"],
    riv: "/riv/download-button.riv",
  },
  {
    title: "Cursor-Tracking Character",
    desc: "2D character that follows the cursor and changes to 3D on click. Demonstrates advanced input-driven bone animation.",
    tags: ["Cursor Input", "Bones", "Interactive"],
    riv: "/riv/cursor-character.riv",
  },
  {
    title: "Bone Character — Secondary Motion",
    desc: "A character study focused on articulated bone movement, layered timing, and natural follow-through for lively interactions.",
    tags: ["Bone Rig", "Secondary Motion", "Character"],
    riv: "/riv/bones-character.riv",
  },
  {
    title: "Cute Character — Arrival States",
    desc: "A compact character system built around readable entrances, expressive idle behavior, and reusable state transitions.",
    tags: ["Arrival", "Idle Loop", "State Machine"],
    riv: "/riv/cute-character.riv",
  },
  {
    title: "Gitty Mascot — Interactive Personality",
    desc: "Interactive mascot showcase with cursor response and click-driven personality, designed as a reusable app character system.",
    tags: ["Mascot", "Input Driven", "Rive"],
    riv: "/riv/gitty-character.riv",
  },
  {
    title: "Windy Tree — Ambient Motion",
    desc: "A real Rive tree asset with organic wind motion, ideal for studying painterly vegetation, ambient sway, and calm idle life.",
    tags: ["Botanical", "Ambient Motion", "Rive"],
    riv: "/riv/windy-tree.riv",
  },
  {
    title: "Snake — Raster Motion Study",
    desc: "Marketplace animation study with organic raster motion, useful for exploring texture-rich movement and expressive timing in Rive.",
    tags: ["Raster", "Organic Motion", "Marketplace"],
    riv: "/riv/snake-raster-animation.riv",
  },
  {
    title: "Vintage Bike — Mechanical Motion",
    desc: "Detailed vehicle animation study demonstrating layered mechanical movement, timing, and visual storytelling inside a Rive scene.",
    tags: ["Mechanical", "Layered Motion", "Rive"],
    riv: "/riv/vintage-bike-motion.riv",
  },
  {
    title: "Maasai Event Hero — Editorial Scene",
    desc: "Atmospheric hero-scene study with a strong visual composition, showing how Rive can power rich animated banners and event experiences.",
    tags: ["Hero Scene", "Editorial", "Composition"],
    riv: "/riv/maasai-event-hero.riv",
  },
  {
    title: "Posture Coach — Body Mechanics",
    desc: "Interactive movement study focused on readable posture changes, pose transitions, and expressive body mechanics in Rive.",
    tags: ["Body Mechanics", "Pose States", "Rive"],
    riv: "/riv/posture-animation.riv",
  },
];

function StateMachineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="12" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M9 6h3a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9" />
      <path d="M9 18h3a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3H9" />
    </svg>
  );
}

function RiggingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4.5" r="2.5" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="19.5" r="2" />
      <circle cx="18" cy="19.5" r="2" />
      <path d="M12 7v3" />
      <path d="M10.5 13.5 7.5 18" />
      <path d="M13.5 13.5 16.5 18" />
    </svg>
  );
}

function MicroInteractionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 8.6-8.6" />
      <path d="M9.4 14.6 3 21" />
      <circle cx="15" cy="9" r="6" />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M9 6h6" />
      <path d="M8 10l3 2-3 2" />
    </svg>
  );
}

function VectorArtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      <path d="M4 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      <path d="M18 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      <path d="M6 11c4-1 6-4 13-5" />
      <path d="M6 11c2 4 4 7 7 9" />
    </svg>
  );
}

function ModularIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4" />
      <path d="M6.5 10v4" />
      <path d="M17.5 10v4" />
      <path d="M10 17.5h4" />
    </svg>
  );
}

const services = [
  {
    icon: <StateMachineIcon />,
    title: "State Machines",
    desc: "Complex state machine architectures with boolean, number, and trigger inputs. Clean named inputs your devs control at runtime.",
  },
  {
    icon: <RiggingIcon />,
    title: "Character Rigging",
    desc: "Modular bone-based rigs with swappable parts, expression libraries, and animation reuse across character variants.",
  },
  {
    icon: <MicroInteractionIcon />,
    title: "UI Micro-interactions",
    desc: "Buttons, toggles, loaders, and transitions that respond to user input with smooth, performant animations.",
  },
  {
    icon: <IntegrationIcon />,
    title: "Runtime Integration",
    desc: "React, React Native, Flutter, SwiftUI, and web. Seamless handoff from .riv to production code.",
  },
  {
    icon: <VectorArtIcon />,
    title: "Flat Vector Art",
    desc: "Clean illustration with soft palettes, consistent stroke weights, and resolution-independent vector art.",
  },
  {
    icon: <ModularIcon />,
    title: "Modular Systems",
    desc: "Reusable component architectures with boolean-driven visibility, shared skeletons, and accessory slots.",
  },
];

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function BotanicalStudy() {
  const [growth, setGrowth] = useState(68);
  const [pulse, setPulse] = useState(false);

  return (
    <section id="botanical-study" className="botanical-study" aria-labelledby="botanical-title">
      <div className="botanical-copy">
        <p className="section-eyebrow">Concept Study · Rive Direction</p>
        <h2 id="botanical-title" className="section-title">
          A living system, not a video.
        </h2>
        <p className="section-desc">
          A small interaction study for a data-driven tree: growth is a number,
          arrival is a trigger, and ambient life keeps running underneath.
        </p>
        <div className="botanical-controls">
          <label htmlFor="growth-range">
            <span>Growth progress</span>
            <strong>{growth}%</strong>
          </label>
          <input
            id="growth-range"
            type="range"
            min="0"
            max="100"
            value={growth}
            onChange={(event) => setGrowth(Number(event.target.value))}
          />
          <button
            type="button"
            className="botanical-pulse"
            aria-pressed={pulse}
            onClick={() => setPulse(true)}
          >
            Send a light pulse
          </button>
        </div>
        <div className="botanical-inputs" aria-label="Proposed Rive inputs">
          <span><i className="input-dot input-number" />growthProgress</span>
          <span><i className="input-dot input-trigger" />pulse</span>
          <span><i className="input-dot input-boolean" />ambientIdle</span>
        </div>
      </div>
      <div className={`botanical-stage ${pulse ? "is-pulsing" : ""}`}>
        <div className="botanical-stars" />
        <div className="botanical-glow" style={{ opacity: growth / 150 }} />
        <svg className="botanical-tree" viewBox="0 0 520 440" role="img" aria-label="Interactive concept tree">
          <defs>
            <linearGradient id="trunkGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8e6547" />
              <stop offset="0.55" stopColor="#bd8d5b" />
              <stop offset="1" stopColor="#4d3831" />
            </linearGradient>
            <filter id="leafShadow"><feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#090b0c" floodOpacity="0.7" /></filter>
          </defs>
          <path className="tree-ground" d="M64 398 Q260 370 456 398" />
          <g className="tree-branches" style={{ transform: `scaleY(${0.62 + growth / 265})`, transformOrigin: "260px 390px" }}>
            <path className="tree-trunk" d="M255 396 C244 342 252 292 245 244 C237 190 204 157 161 128 M248 252 C282 206 327 173 388 151 M244 309 C205 269 150 250 101 238 M251 214 C264 158 261 112 239 68" />
            <path className="tree-trunk thin" d="M162 128 C140 102 119 91 96 85 M388 151 C414 121 438 111 464 111 M101 238 C78 218 63 202 51 181 M239 68 C227 45 218 31 204 19" />
          </g>
          <g className="tree-canopy" style={{ opacity: Math.max(0.12, growth / 100) }} filter="url(#leafShadow)">
            <ellipse cx="96" cy="78" rx="38" ry="21" /><ellipse cx="157" cy="124" rx="48" ry="25" />
            <ellipse cx="389" cy="145" rx="55" ry="28" /><ellipse cx="465" cy="106" rx="35" ry="19" />
            <ellipse cx="100" cy="233" rx="48" ry="24" /><ellipse cx="51" cy="177" rx="28" ry="16" />
            <ellipse cx="238" cy="61" rx="38" ry="22" /><ellipse cx="204" cy="18" rx="24" ry="13" />
          </g>
          <circle className="tree-pulse" cx="245" cy="244" r="7" />
        </svg>
        <div className="botanical-status"><span /> Live concept · {growth < 40 ? "Dormant" : growth < 75 ? "Growing" : "Full canopy"}</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <div className="nav-logo">M</div>
            <span className="nav-name">mordecai</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#botanical-study">Tree Study</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for projects
        </div>
        <h1 className="hero-title">
          Interactive animation
          <br />
          with <span className="hero-gradient">Rive</span>
        </h1>
        <p className="hero-sub">
          State-machine-driven characters, UI micro-interactions, and modular
          rigs — delivered as production-ready .riv files for your app.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start a Project
          </a>
          <a href="#work" className="btn btn-outline">
            View Work
          </a>
        </div>
      </section>

      {/* Featured / Showreel */}
      <div className="showreel">
        <div className="showreel-card">
          <div className="showreel-canvas">
            <RivePlayer src="/riv/gitty-character.riv" />
          </div>
          <div className="showreel-info">
            <span className="showreel-label">
              Interactive Character System — Hover & Click
            </span>
            <span className="showreel-hint">Live Rive animation</span>
          </div>
        </div>
      </div>

      <BotanicalStudy />

      {/* Work */}
      <section id="work" className="section">
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-desc">
          Interactive Rive animations built with clean state machine
          architectures. Hover and click to interact.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <div className="project-preview">
                <RivePlayer src={p.riv!} />
                <span className="project-interact">
                  Interactive — hover & click
                </span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <p className="section-eyebrow">Services</p>
        <h2 className="section-title">What I Deliver</h2>
        <p className="section-desc">
          End-to-end Rive animation — from concept to a .riv file your team
          can integrate in minutes.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon as React.ReactNode}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section">
        <p className="section-eyebrow">How I Work</p>
        <h2 className="section-title">Simple Process</h2>
        <p className="section-desc">
          From brief to delivery — clear milestones, no surprises.
        </p>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-num">01</div>
            <h3>Brief</h3>
            <p>
              You share your vision, reference art, and technical requirements.
              I ask the right questions.
            </p>
          </div>
          <div className="process-step">
            <div className="process-num">02</div>
            <h3>Design</h3>
            <p>
              Flat vector art direction and rig architecture. You approve
              the look before animation begins.
            </p>
          </div>
          <div className="process-step">
            <div className="process-num">03</div>
            <h3>Animate</h3>
            <p>
              State machine setup, animation library, and interactive
              behaviors — all built in Rive.
            </p>
          </div>
          <div className="process-step">
            <div className="process-num">04</div>
            <h3>Deliver</h3>
            <p>
              Production-ready .riv file with documented inputs. Drop it into
              your app and ship.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div id="contact" className="cta-section">
        <div className="cta-box">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="cta-title">Ready to bring your app to life?</h2>
          <p className="cta-sub">
            Fixed-price or milestone-based. Fast turnaround. Reach out on any
            of these channels.
          </p>
          <div className="cta-links">
            <a
              href="https://t.me/modex_anderson"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <TelegramIcon />
              Telegram
            </a>
            <a
              href="https://wa.me/2348173227654"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-link"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a href="mailto:mordecai.a.d@gmail.com" className="cta-link">
              <EmailIcon />
              Email
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        Mordecai &middot; Interactive Rive Animator
      </footer>
    </>
  );
}
