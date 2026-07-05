import React from 'react';
import Head from '@docusaurus/Head';
import {useEffect} from 'react';

const publishCode = `<span class="com"># 通过 HTTP 发布 CloudEvent</span>
<span class="fn">curl</span> -X POST \
  http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{
    "name": "eventmesh",
    "pass": "password"
  }'</span>

<span class="com"># 响应:</span>
<span class="com">{</span>
<span class="com">  "success": true,</span>
<span class="com">  "retCode": 0</span>
<span class="com">}  🚀 事件已发布！</span>`;

const subscribeCode = `<span class="com"># 通过 HTTP Webhook 订阅主题</span>
<span class="fn">curl</span> -X POST \
  http://127.0.0.1:10105/eventmesh/subscribe/local \
  -H <span class="str">"Content-Type: application/json"</span> \
  -d <span class="str">'{
    "url": "http://127.0.0.1:8088/sub/test",
    "consumerGroup": "TEST-GROUP",
    "topic": [{"mode":"CLUSTERING","topic":"TEST-TOPIC-HTTP-ASYNC","type":"ASYNC"}]
  }'</span>

<span class="com"># 事件以 CloudEvents 格式推送到你的 Webhook 📨</span>`;

export default function Home() {
  useEffect(() => {
    document.body.classList.add('is-homepage');
    return () => document.body.classList.remove('is-homepage');
  }, []);

  return (
    <div className="homepage-wrapper">
      <Head>
        <title>Apache EventMesh — 云原生时代的事件驱动基础设施</title>
        <meta name="description" content="Apache EventMesh 是构建分布式事件驱动应用的新一代无服务器事件中间件，现已演进为支持 A2A 协议的 Agent 消息总线。" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* ===== Navigation ===== */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/zh/" className="nav-brand">
            <div className="nav-brand-logo">
              <img src="/images/logo.svg" alt="Apache EventMesh Logo" width="36" height="36" />
            </div>
            <span className="nav-brand-text">Apache <span>EventMesh</span></span>
          </a>

          <div className="nav-links">
            <a href="#features" className="nav-link">特性</a>
            <a href="#architecture" className="nav-link">架构</a>
            <a href="#a2a" className="nav-link">Agent Mesh</a>
            <a href="/zh/docs/introduction" className="nav-link">文档</a>
            <a href="/zh/download" className="nav-link">下载</a>
            <div className="nav-dropdown">
              <span className="nav-link nav-dropdown-toggle">社区</span>
              <div className="nav-dropdown-menu">
                <a href="/zh/community/how-to-subscribe" className="nav-dropdown-item">订阅</a>
                <a href="/zh/team" className="nav-dropdown-item">团队</a>
              </div>
            </div>
            <a href="/zh/blog" className="nav-link">博客</a>
          </div>

          <div className="nav-actions">
            <a href="/" className="nav-lang">EN</a>
            <button className="nav-theme-toggle" aria-label="切换明暗主题" title="切换明暗主题">
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
        <a href="/zh/docs/introduction">文档</a>
        <a href="#features">特性</a>
        <a href="#architecture">架构</a>
        <a href="#a2a">Agent Mesh</a>
        <a href="/zh/download">下载</a>
        <a href="/zh/community/how-to-subscribe">社区</a>
        <a href="/zh/blog">博客</a>
        <a href="/">English</a>
      </div>

      {/* ===== Hero ===== */}
      <section className="hero">
        <canvas id="hero-canvas"></canvas>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>

        <div className="container hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            v1.12.0 已发布 — 新增 A2A 协议支持
          </div>

          <h1>
            面向 Agent 时代的<br />
            <span className="gradient-text">事件驱动基础设施</span>
          </h1>

          <p className="hero-desc">
            Apache EventMesh 是云原生事件中间件，通过统一事件总线连接服务、系统和 AI Agent。
            无服务器、可扩展、协议无关 — 为下一代分布式应用而生。
          </p>

          <div className="hero-actions">
            <a href="/zh/docs/introduction" className="btn btn-primary btn-lg">
              快速开始
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              在 GitHub 上查看
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
              <div className="stat-label">最新版本</div>
            </div>
            <div className="stat">
              <div className="stat-value">2.1<span className="unit">k+</span></div>
              <div className="stat-label">GitHub Stars</div>
            </div>
            <div className="stat">
              <div className="stat-value">300<span className="unit">+</span></div>
              <div className="stat-label">贡献者</div>
            </div>
            <div className="stat">
              <div className="stat-value">20<span className="unit">+</span></div>
              <div className="stat-label">连接器</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="section" id="features">
        <div className="container">
          <div className="reveal">
            <div className="section-label">核心能力</div>
            <h2 className="section-title">构建<span className="gradient-text">事件驱动架构</span><br />所需的一切</h2>
            <p className="section-subtitle">
              从简单的发布/订阅到复杂的事件编排，EventMesh 提供构建弹性、可扩展、
              解耦分布式系统的全套基础设施。
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>高吞吐事件处理</h3>
              <p>每秒百万级事件，亚毫秒延迟。支持 RocketMQ、Kafka、AutoMQ 等可插拔事件存储引擎。</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>CloudEvents 原生</h3>
              <p>CNCF CloudEvents 规范一等公民支持。跨所有连接器和协议的标准化事件格式。</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>多协议网关</h3>
              <p>HTTP、gRPC、TCP、WebSocket 协议统一到一个事件网格。无需改码即可协议转换。</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M3 15h6M15 9h6M15 15h6"/></svg>
              </div>
              <h3>事件编排</h3>
              <p>基于 Serverless Workflow 的内置事件工作流引擎。用声明式 YAML 定义复杂事件编排。</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
              </div>
              <h3>可靠投递保障</h3>
              <p>支持至少一次、最多一次、精确一次投递语义。事件存储内置重试、死信队列和事务支持。</p>
            </div>

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>安全与治理</h3>
              <p>内置 mTLS、OAuth2 和 RBAC。事件 Schema 注册中心、审计日志和限流，满足生产级安全需求。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Architecture ===== */}
      <section className="section arch-section" id="architecture">
        <div className="container">
          <div className="reveal">
            <div className="section-label">架构设计</div>
            <h2 className="section-title">分层设计<br /><span className="gradient-text">极致灵活</span></h2>
            <p className="section-subtitle">
              四层解耦架构 — 每层可独立扩展和替换。
              自由组合连接器、协议和事件存储，适配你的基础设施。
            </p>
          </div>

          <div className="arch-diagram reveal">
            <img src="/images/diagrams/architecture.svg" alt="EventMesh 架构图" style={{width: '100%', maxWidth: '960px', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      {/* ===== A2A Agent Mesh ===== */}
      <section className="section a2a-section" id="a2a">
        <div className="container">
          <div className="a2a-grid">
            <div className="reveal">
              <div className="section-label">v1.12 新特性</div>
              <h2 className="section-title">A2A 协议支持<br /><span className="gradient-text">Agent 消息总线</span></h2>
              <p className="section-subtitle" style={{marginBottom: '32px'}}>
                EventMesh 正在从传统事件中间件演进为 AI Agent 间通信的统一消息总线，
                基于 A2A（Agent-to-Agent）协议构建。
              </p>

              <ul className="a2a-features">
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>Agent 发现与路由</strong> — Agent 通过事件网格注册能力并动态发现对等节点</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>异步任务委派</strong> — 长时间运行的 Agent 任务，基于回调的事件完成语义</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>流式通信</strong> — SSE 和 gRPC streaming 支持实时 Agent 交互</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>协议桥接</strong> — 无缝桥接 A2A 与现有 CloudEvents 和遗留消息系统</span>
                </li>
                <li>
                  <span className="check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </span>
                  <span><strong>可观测性</strong> — OpenTelemetry 原生链路追踪，贯穿整个 Agent 通信链</span>
                </li>
              </ul>

              <div style={{marginTop: '32px'}}>
                <a href="/zh/docs/design-document/a2a-protocol" className="btn btn-primary">
                  探索 A2A 文档
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>

            <div className="a2a-visual reveal">
              <div className="a2a-card">
                <div className="icon">🔍</div>
                <div className="name">研究 Agent</div>
                <div className="desc">数据采集</div>
              </div>
              <div className="a2a-card center">
                <div className="icon">🪨</div>
                <div className="name">EventMesh 总线</div>
                <div className="desc">A2A 协议</div>
              </div>
              <div className="a2a-card">
                <div className="icon">📊</div>
                <div className="name">分析 Agent</div>
                <div className="desc">信号处理</div>
              </div>
              <div className="a2a-card">
                <div className="icon">⚡</div>
                <div className="name">执行 Agent</div>
                <div className="desc">订单路由</div>
              </div>
              <div className="a2a-card">
                <div className="icon">🛡️</div>
                <div className="name">风控 Agent</div>
                <div className="desc">合规检查</div>
              </div>
              <div className="a2a-card">
                <div className="icon">📝</div>
                <div className="name">报告 Agent</div>
                <div className="desc">摘要生成</div>
              </div>
              <div className="a2a-card">
                <div className="icon">🤖</div>
                <div className="name">LLM Agent</div>
                <div className="desc">推理引擎</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ecosystem ===== */}
      <section className="section" id="ecosystem">
        <div className="container">
          <div className="reveal">
            <div className="section-label">生态系统</div>
            <h2 className="section-title">连接<span className="gradient-text">一切</span></h2>
            <p className="section-subtitle">
              开箱即用的连接器。EventMesh 与你现有的基础设施无缝集成 —
              无需推倒重来。
            </p>
          </div>

          <div className="eco-bus reveal">
            <img src="/images/diagrams/ecosystem.svg" alt="EventMesh 生态图" style={{width: '100%', maxWidth: '960px', height: 'auto', borderRadius: '12px'}} />
          </div>
        </div>
      </section>

      {/* ===== Code Example ===== */}
      <section className="section code-section" id="code">
        <div className="container">
          <div className="code-grid">
            <div className="reveal">
              <div className="section-label">快速开始</div>
              <h2 className="section-title"><span className="gradient-text">一分钟</span><br />快速上手</h2>
              <p className="section-subtitle" style={{marginBottom: '32px'}}>
                用 Docker 部署 EventMesh，发布你的第一个事件并订阅 —
                只需几行代码。无需复杂配置。
              </p>
              <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                <a href="/zh/docs/introduction" className="btn btn-primary">完整文档</a>
                <a href="/zh/download" className="btn btn-ghost">下载 v1.12.0</a>
              </div>
            </div>

            <div className="code-block reveal">
              <div className="code-tabs">
                <div className="code-tab active" data-tab="publish">发布</div>
                <div className="code-tab" data-tab="subscribe">订阅</div>
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
          <h2>加入 <span className="gradient-text">EventMesh 社区</span></h2>
          <p>
            Apache EventMesh 是 Apache 软件基金会顶级项目。
            加入 300+ 贡献者，共建事件驱动基础设施的未来。
          </p>
          <div className="cta-actions">
            <a href="/zh/community/how-to-subscribe" className="btn btn-primary btn-lg">参与贡献</a>
            <a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">在 GitHub 上 Star</a>
            <a href="/zh/team" className="btn btn-ghost btn-lg">团队介绍</a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <a href="/zh/" style={{display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)'}}>
                  <img src="/images/logo.svg" alt="Apache EventMesh Logo" width="32" height="32" />
                  Apache <span style={{color: 'var(--em-green)'}}>EventMesh</span>
                </a>
              </div>
              <p>构建分布式事件驱动应用的云原生事件中间件。Apache 软件基金会顶级项目。</p>
            </div>

            <div className="footer-col">
              <h4>EventMesh</h4>
              <ul>
                <li><a href="/zh/docs/introduction">文档</a></li>
                <li><a href="/zh/download">下载</a></li>
                <li><a href="/zh/events/release-notes/v1.12.0">发布日志</a></li>
                <li><a href="/zh/blog">博客</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>社区</h4>
              <ul>
                <li><a href="https://github.com/apache/eventmesh" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://github.com/apache/eventmesh/issues" target="_blank" rel="noopener noreferrer">Issue 跟踪</a></li>
                <li><a href="https://github.com/apache/eventmesh/pulls" target="_blank" rel="noopener noreferrer">Pull Requests</a></li>
                <li><a href="/zh/community/how-to-subscribe">邮件列表</a></li>
                <li><a href="/zh/team">团队</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>资源</h4>
              <ul>
                <li><a href="#features">特性</a></li>
                <li><a href="#architecture">架构</a></li>
                <li><a href="#a2a">A2A 协议</a></li>
                <li><a href="#ecosystem">生态系统</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Apache</h4>
              <ul>
                <li><a href="https://www.apache.org/" target="_blank" rel="noopener noreferrer">基金会</a></li>
                <li><a href="https://www.apache.org/licenses/" target="_blank" rel="noopener noreferrer">许可证</a></li>
                <li><a href="https://www.apache.org/foundation/sponsorship.html" target="_blank" rel="noopener noreferrer">赞助</a></li>
                <li><a href="https://www.apache.org/foundation/thanks.html" target="_blank" rel="noopener noreferrer">致谢</a></li>
                <li><a href="https://www.apache.org/security/" target="_blank" rel="noopener noreferrer">安全</a></li>
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
