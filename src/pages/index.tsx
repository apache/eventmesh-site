import React from 'react';
import Head from '@docusaurus/Head';
import {useEffect} from 'react';

const publishCode = `<span class="com"># Publish a CloudEvent via HTTP</span>
<span class="fn">curl</span> -X POST \
  http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{
    "name": "eventmesh",
    "pass": "password"
  }'</span>

<span class="com"># Response:</span>
<span class="com">{</span>
<span class="com">  "success": true,</span>
<span class="com">  "retCode": 0</span>
<span class="com">}  🚀 Event published!</span>`;

const subscribeCode = `<span class="com"># Subscribe to a topic via HTTP webhook</span>
<span class="fn">curl</span> -X POST \
  http://127.0.0.1:10105/eventmesh/subscribe/local \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{
    "url": "http://127.0.0.1:8088/sub/test",
    "consumerGroup": "TEST-GROUP",
    "topic": [{"mode":"CLUSTERING","topic":"TEST-TOPIC-HTTP-ASYNC","type":"ASYNC"}]
  }'</span>

<span class="com"># Events arrive at your webhook in CloudEvents format 📨</span>`;

export default function Home() {
  useEffect(() => {
    document.body.classList.add('is-homepage');
    return () => document.body.classList.remove('is-homepage');
  }, []);

  return (
    <div className="homepage-wrapper">
      <Head>
        <title>Apache EventMesh — Event-Driven Infrastructure for the Cloud-Native Era</title>
        <meta name="description" content="Apache EventMesh is a serverless event middleware for building distributed event-driven applications, now evolving into an Agent message bus with A2A protocol support." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* ===== Navigation ===== */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-brand">
            <div className="nav-brand-logo">
              <img src="/images/logo.svg" alt="Apache EventMesh Logo" width="36" height="36" />
            </div>
            <span className="nav-brand-text">Apache <span>EventMesh</span></span>
          </a>

          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#architecture" className="nav-link">Architecture</a>
            <a href="#a2a" className="nav-link">Agent Mesh</a>
            <a href="/docs/introduction" className="nav-link">Documentation</a>
            <a href="/download" className="nav-link">Download</a>
            <div className="nav-dropdown">
              <span className="nav-link nav-dropdown-toggle">Community</span>
              <div className="nav-dropdown-menu">
                <a href="/community/how-to-subscribe" className="nav-dropdown-item">Subscribe</a>
                <a href="/team" className="nav-dropdown-item">Team</a>
              </div>
            </div>
            <a href="/blog" className="nav-link">Blog</a>
          </div>

          <div className="nav-actions">
            <a href="/zh/" className="nav-lang">中文</a>
            <button className="nav-theme-toggle" aria-label="Switch between dark and light mode" title="Switch between dark and light mode">
              <svg className="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
              <svg className="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" style={{display:'none'}}><path fill="currentColor" d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/></svg>
            </button>
            <a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer" className="btn-gh-stars">
              <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              <span className="count" data-count="2100">0</span>
            </a>
            <button className="nav-mobile-toggle" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <a href="/docs/introduction">Documentation</a>
        <a href="#features">Features</a>
        <a href="#architecture">Architecture</a>
        <a href="#a2a">A2A Agent Mesh</a>
        <a href="/download">Download</a>
        <a href="/community/how-to-subscribe">Community</a>
        <a href="/blog">Blog</a>
        <a href="/zh/">中文</a>
      </div>

      {/* ===== Hero ===== */}
      <section className="hero">
        <canvas id="hero-canvas"></canvas>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>

        <div className="container hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            v1.12.0 Released — Now with A2A Protocol Support
          </div>

          <h1>
            Event-Driven<br />
            Infrastructure for<br />
            <span className="gradient-text">the Agent Era</span>
          </h1>

          <p className="hero-desc">
            Apache EventMesh is a cloud-native event middleware that connects services,
            systems, and AI agents through a unified event bus. Serverless, scalable,
            and protocol-agnostic — built for the next generation of distributed applications.
          </p>

          <div className="hero-actions">
            <a href="/docs/introduction" className="btn btn-primary btn-lg">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              View on GitHub
            </a>
          </div>

          <div className="hero-terminal">
            <div className="terminal-bar">
              <div className="terminal-dot r"></div>
              <div className="terminal-dot y"></div>
              <div className="terminal-dot g"></div>
              <span className="terminal-title">bash — eventmesh-quickstart</span>
            </div>
            <div className="terminal-body">
              <div className="term-line"></div>
              <div className="term-line"></div>
              <div className="term-line"></div>
              <div className="term-line"></div>
              <div className="term-line"></div>
              <div className="term-line"></div>
              <span className="cursor" style={{display:'none'}}></span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-value">v1.12<span className="unit">.0</span></div>
              <div className="stat-label">Latest Release</div>
            </div>
            <div className="stat">
              <div className="stat-value">2.1<span className="unit">k+</span></div>
              <div className="stat-label">GitHub Stars</div>
            </div>
            <div className="stat">
              <div className="stat-value">300<span className="unit">+</span></div>
              <div className="stat-label">Contributors</div>
            </div>
            <div className="stat">
              <div className="stat-value">20<span className="unit">+</span></div>
              <div className="stat-label">Connectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="section" id="features">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Core Capabilities</div>
            <h2 className="section-title">Everything you need for<br /><span className="gradient-text">event-driven architecture</span></h2>
            <p className="section-subtitle">
              From simple pub/sub to complex event orchestration, EventMesh provides the building blocks
              for resilient, scalable, and decoupled distributed systems.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>High-Throughput Eventing</h3>
              <p>Millions of events per second with sub-millisecond latency. Powered by pluggable event stores including RocketMQ, Kafka, and AutoMQ.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>CloudEvents Native</h3>
              <p>First-class support for CNCF CloudEvents specification. Standardized event format across all connectors and protocols.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>Multi-Protocol Gateway</h3>
              <p>HTTP, gRPC, TCP, and WebSocket protocols unified into one event mesh. Seamless protocol translation without code changes.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M3 15h6M15 9h6M15 15h6"/></svg>
              </div>
              <h3>Event Orchestration</h3>
              <p>Built-in event workflow engine based on Serverless Workflow. Define complex event choreography with declarative YAML.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              </div>
              <h3>Reliable Delivery Guarantees</h3>
              <p>At-least-once, at-most-once, and exactly-once delivery semantics. Event store with retry, dead letter queue, and transaction support.</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Security & Governance</h3>
              <p>mTLS, OAuth2, and RBAC built-in. Event schema registry, audit logging, and rate limiting for production-grade security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Architecture ===== */}
      <section className="section arch-section" id="architecture">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Architecture</div>
            <h2 className="section-title">Layered design for<br /><span className="gradient-text">maximum flexibility</span></h2>
            <p className="section-subtitle">
              Four decoupled layers — each independently scalable and replaceable.
              Mix and match connectors, protocols, and event stores to fit your infrastructure.
            </p>
          </div>

          <div className="arch-diagram reveal">
            <img src="/images/diagrams/architecture.svg" alt="EventMesh Architecture Diagram" style={{width: '100%', maxWidth: '960px', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      {/* ===== A2A Agent Mesh ===== */}
      <section className="section a2a-section" id="a2a">
        <div className="container">
          <div className="a2a-grid">
            <div className="reveal">
              <div className="section-label">New in v1.12</div>
              <h2 className="section-title">A2A Protocol Support<br /><span className="gradient-text">Agent Message Bus</span></h2>
              <p className="section-subtitle" style={{marginBottom: '32px'}}>
                EventMesh is evolving beyond traditional event middleware into a unified message bus
                for AI agent-to-agent communication, powered by the A2A (Agent-to-Agent) protocol.
              </p>

              <ul className="a2a-features">
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Agent Discovery & Routing</strong> — Agents register capabilities and discover peers dynamically through the event mesh</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Async Task Delegation</strong> — Long-running agent tasks with callback-based event completion semantics</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Streaming Communication</strong> — SSE and gRPC streaming for real-time agent interactions</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Protocol Bridge</strong> — Seamlessly bridge A2A with existing CloudEvents and legacy messaging systems</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Observability</strong> — OpenTelemetry-native tracing across the entire agent communication chain</span>
                </li>
              </ul>

              <div style={{marginTop: '32px'}}>
                <a href="/docs/introduction" className="btn btn-primary">
                  Explore A2A Documentation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            <div className="a2a-visual reveal">
              <div className="a2a-card">
                <div className="icon">🔍</div>
                <div className="name">Research Agent</div>
                <div className="desc">Data gathering</div>
              </div>
              <div className="a2a-card center">
                <div className="icon">🪨</div>
                <div className="name">EventMesh Bus</div>
                <div className="desc">A2A Protocol</div>
              </div>
              <div className="a2a-card">
                <div className="icon">📊</div>
                <div className="name">Analysis Agent</div>
                <div className="desc">Signal processing</div>
              </div>
              <div className="a2a-card">
                <div className="icon">⚡</div>
                <div className="name">Execution Agent</div>
                <div className="desc">Order routing</div>
              </div>
              <div className="a2a-card">
                <div className="icon">🛡️</div>
                <div className="name">Risk Agent</div>
                <div className="desc">Compliance check</div>
              </div>
              <div className="a2a-card">
                <div className="icon">📝</div>
                <div className="name">Report Agent</div>
                <div className="desc">Summary generation</div>
              </div>
              <div className="a2a-card">
                <div className="icon">🤖</div>
                <div className="name">LLM Agent</div>
                <div className="desc">Reasoning engine</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ecosystem ===== */}
      <section className="section" id="ecosystem">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Ecosystem</div>
            <h2 className="section-title">Connects to <span className="gradient-text">everything</span></h2>
            <p className="section-subtitle">
              Connectors out of the box. EventMesh integrates with your existing infrastructure —
              no rip-and-replace required.
            </p>
          </div>

          <div className="eco-bus reveal">
            <img src="/images/diagrams/ecosystem.svg" alt="EventMesh Ecosystem Diagram" style={{width: '100%', maxWidth: '960px', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      {/* ===== Code Example ===== */}
      <section className="section code-section" id="code">
        <div className="container">
          <div className="code-grid">
            <div className="reveal">
              <div className="section-label">Quick Start</div>
              <h2 className="section-title">Up and running<br />in <span className="gradient-text">under a minute</span></h2>
              <p className="section-subtitle" style={{marginBottom: '32px'}}>
                Deploy EventMesh with Docker, publish your first event, and subscribe to it —
                all with a few lines of code. No complex setup required.
              </p>
              <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                <a href="/docs/introduction" className="btn btn-primary">Full Documentation</a>
                <a href="/download" className="btn btn-ghost">Download v1.12.0</a>
              </div>
            </div>

            <div className="code-block reveal">
              <div className="code-tabs">
                <div className="code-tab active" data-tab="publish">Publish</div>
                <div className="code-tab" data-tab="subscribe">Subscribe</div>
              </div>
              <div className="code-body" data-tab="publish" style={{display:'block'}}>
                <pre dangerouslySetInnerHTML={{__html: publishCode}} />
              </div>
              <div className="code-body" data-tab="subscribe" style={{display:'none'}}>
                <pre dangerouslySetInnerHTML={{__html: subscribeCode}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Community CTA ===== */}
      <section className="cta-section">
        <div className="cta-bg"></div>
        <div className="container cta-content reveal">
          <h2>Join the <span className="gradient-text">EventMesh Community</span></h2>
          <p>
            Apache EventMesh is an Apache Software Foundation top-level project.
            Join 300+ contributors building the future of event-driven infrastructure.
          </p>
          <div className="cta-actions">
            <a href="/community/how-to-subscribe" className="btn btn-primary btn-lg">Get Involved</a>
            <a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">Star on GitHub</a>
            <a href="/team" className="btn btn-ghost btn-lg">Meet the Team</a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <a href="/" style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)'}}>
                  <img src="/images/logo.svg" alt="Apache EventMesh Logo" width="32" height="32" />
                  Apache <span style={{color: 'var(--em-green)'}}>EventMesh</span>
                </a>
              </div>
              <p>A cloud-native event middleware for building distributed event-driven applications. An Apache Software Foundation top-level project.</p>
            </div>

            <div className="footer-col">
              <h4>EventMesh</h4>
              <ul>
                <li><a href="/docs/introduction">Documentation</a></li>
                <li><a href="/download">Download</a></li>
                <li><a href="/events/release-notes/v1.12.0">Release Notes</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Community</h4>
              <ul>
                <li><a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://github.com/apache/eventmesh/issues" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
                <li><a href="https://github.com/apache/eventmesh/pulls" target="_blank" rel="noopener noreferrer">Pull Requests</a></li>
                <li><a href="/community/how-to-subscribe">Mailing Lists</a></li>
                <li><a href="/team">Team</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#architecture">Architecture</a></li>
                <li><a href="#a2a">A2A Protocol</a></li>
                <li><a href="#ecosystem">Ecosystem</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Apache</h4>
              <ul>
                <li><a href="https://www.apache.org/" target="_blank" rel="noopener noreferrer">Foundation</a></li>
                <li><a href="https://www.apache.org/licenses/" target="_blank" rel="noopener noreferrer">License</a></li>
                <li><a href="https://www.apache.org/foundation/sponsorship.html" target="_blank" rel="noopener noreferrer">Sponsorship</a></li>
                <li><a href="https://www.apache.org/foundation/thanks.html" target="_blank" rel="noopener noreferrer">Thanks</a></li>
                <li><a href="https://www.apache.org/security/" target="_blank" rel="noopener noreferrer">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              Copyright © 2026 The Apache Software Foundation. Apache EventMesh, EventMesh, Apache,
              the Apache feather logo, and the Apache EventMesh logo are trademarks of The Apache Software Foundation.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
