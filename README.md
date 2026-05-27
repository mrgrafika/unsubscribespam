<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gmail Unsubscribe Link Finder — Documentation</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: #1a1a1a;
    background: #f8f8f6;
  }

  .page-header {
    background: #fff;
    border-bottom: 1px solid #e5e5e0;
    padding: 2.5rem 0 2rem;
  }

  .page-header .inner {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background: #eef4ff;
    color: #2563eb;
    border-radius: 4px;
    padding: 3px 10px;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.4px;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 15px;
    color: #666;
  }

  .meta-row {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }

  .meta-item {
    font-size: 13px;
    color: #888;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .meta-item span { color: #444; font-weight: 500; }

  .layout {
    max-width: 860px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  /* Sidebar nav */
  .sidebar {
    position: sticky;
    top: 1.5rem;
  }

  .nav-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 0.75rem;
  }

  .nav-list { list-style: none; }

  .nav-list li { margin-bottom: 2px; }

  .nav-list a {
    display: block;
    font-size: 13px;
    color: #555;
    text-decoration: none;
    padding: 4px 8px;
    border-radius: 5px;
    transition: background 0.1s, color 0.1s;
  }

  .nav-list a:hover { background: #eee; color: #111; }
  .nav-list a.active { background: #eef4ff; color: #2563eb; font-weight: 500; }

  .nav-section-label {
    font-size: 11px;
    color: #bbb;
    padding: 4px 8px;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* Main content */
  .content section {
    margin-bottom: 3rem;
    scroll-margin-top: 1.5rem;
  }

  .content h2 {
    font-size: 20px;
    font-weight: 700;
    color: #111;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e5e0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .content h2 .icon {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
  }

  .content h3 {
    font-size: 15px;
    font-weight: 700;
    color: #222;
    margin: 1.5rem 0 0.5rem;
  }

  .content p { color: #333; margin-bottom: 0.75rem; }

  /* Feature cards */
  .feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 1rem;
  }

  .feature-card {
    background: #fff;
    border: 1px solid #e5e5e0;
    border-radius: 8px;
    padding: 0.9rem 1rem;
  }

  .feature-card .fc-icon {
    font-size: 18px;
    margin-bottom: 6px;
  }

  .feature-card .fc-title {
    font-size: 13px;
    font-weight: 700;
    color: #111;
    margin-bottom: 3px;
  }

  .feature-card .fc-desc {
    font-size: 12px;
    color: #666;
    line-height: 1.5;
  }

  /* Config table */
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13.5px;
    margin-top: 0.75rem;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e5e5e0;
  }

  th {
    background: #f4f3ef;
    color: #555;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 9px 14px;
    text-align: left;
    border-bottom: 1px solid #e5e5e0;
  }

  td {
    padding: 10px 14px;
    border-bottom: 1px solid #f0f0ec;
    color: #333;
    vertical-align: top;
  }

  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fafafa; }

  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 12px;
    background: #f0efeb;
    color: #c0392b;
    padding: 1px 6px;
    border-radius: 4px;
  }

  /* Code blocks */
  .code-block {
    background: #1e1e2e;
    border-radius: 8px;
    overflow: hidden;
    margin: 0.75rem 0;
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    background: #2a2a3e;
    border-bottom: 1px solid #3a3a50;
  }

  .code-lang {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #8888aa;
  }

  .code-block pre {
    margin: 0;
    padding: 1rem 1.25rem;
    overflow-x: auto;
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: 12.5px;
    line-height: 1.6;
    color: #cdd6f4;
  }

  .kw { color: #cba6f7; }
  .fn { color: #89b4fa; }
  .str { color: #a6e3a1; }
  .cm { color: #6c7086; font-style: italic; }
  .num { color: #fab387; }
  .var { color: #f38ba8; }

  /* Steps */
  .steps { counter-reset: step; list-style: none; }
  .steps li {
    counter-increment: step;
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    padding: 0.6rem 0;
    border-bottom: 1px solid #f0f0ec;
  }
  .steps li:last-child { border-bottom: none; }
  .steps li::before {
    content: counter(step);
    min-width: 22px;
    height: 22px;
    background: #2563eb;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .steps li p { margin: 0; font-size: 13.5px; color: #333; }

  /* Note box */
  .note {
    display: flex;
    gap: 0.75rem;
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 8px;
    padding: 0.85rem 1rem;
    margin: 0.75rem 0;
    font-size: 13.5px;
    color: #78350f;
    align-items: flex-start;
  }

  .note-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

  /* Pills */
  .pill-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 0.5rem; }
  .pill {
    font-size: 12px;
    font-family: 'SFMono-Regular', Consolas, monospace;
    background: #f0efeb;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 3px 10px;
  }

  /* Flow diagram */
  .flow {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 1rem 0;
  }

  .flow-step {
    display: flex;
    align-items: stretch;
    gap: 0;
  }

  .flow-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 36px;
    flex-shrink: 0;
  }

  .flow-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #2563eb;
    flex-shrink: 0;
    margin-top: 14px;
  }

  .flow-line {
    width: 2px;
    background: #dbeafe;
    flex: 1;
    min-height: 12px;
  }

  .flow-step:last-child .flow-line { display: none; }

  .flow-body {
    background: #fff;
    border: 1px solid #e5e5e0;
    border-radius: 8px;
    padding: 0.65rem 1rem;
    margin: 6px 0;
    flex: 1;
  }

  .flow-title { font-size: 13px; font-weight: 700; color: #111; margin-bottom: 2px; }
  .flow-desc { font-size: 12.5px; color: #555; }

  /* Sheet columns */
  .col-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 0.75rem;
  }

  .col-card {
    background: #fff;
    border: 1px solid #e5e5e0;
    border-radius: 8px;
    padding: 0.75rem;
    text-align: center;
  }

  .col-letter {
    font-size: 18px;
    font-weight: 800;
    color: #2563eb;
    margin-bottom: 4px;
  }

  .col-name {
    font-size: 11px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 6px;
  }

  .col-desc { font-size: 11.5px; color: #666; line-height: 1.4; }

  /* Limitations */
  .limit-list { list-style: none; }
  .limit-list li {
    display: flex;
    gap: 0.75rem;
    padding: 0.65rem 0;
    border-bottom: 1px solid #f0f0ec;
    font-size: 13.5px;
    color: #333;
    align-items: flex-start;
  }
  .limit-list li:last-child { border-bottom: none; }
  .limit-icon { color: #f59e0b; flex-shrink: 0; margin-top: 1px; }

  footer {
    text-align: center;
    font-size: 12px;
    color: #aaa;
    padding: 2rem 0 3rem;
    border-top: 1px solid #e5e5e0;
    margin-top: 1rem;
    background: #fff;
  }

  @media (max-width: 700px) {
    .layout { grid-template-columns: 1fr; }
    .sidebar { display: none; }
    .feature-grid { grid-template-columns: 1fr; }
    .col-grid { grid-template-columns: 1fr 1fr; }
  }
</style>
</head>
<body>

<header class="page-header">
  <div class="inner">
    <div class="badge">Google Apps Script</div>
    <h1>Gmail Unsubscribe Link Finder</h1>
    <p class="subtitle">Scans Gmail for institutional marketing emails and extracts unsubscribe links into a Google Sheet.</p>
    <div class="meta-row">
      <div class="meta-item">Runtime: <span>Apps Script V8</span></div>
      <div class="meta-item">Functions: <span>2</span></div>
      <div class="meta-item">Services: <span>Gmail, Sheets, Properties</span></div>
      <div class="meta-item">Version: <span>1.0</span></div>
    </div>
  </div>
</header>

<div class="layout">

  <!-- Sidebar -->
  <nav class="sidebar" aria-label="Page navigation">
    <div class="nav-label">On this page</div>
    <ul class="nav-list">
      <li><a href="#overview">Overview</a></li>
      <li><a href="#configuration">Configuration</a></li>
      <li><a href="#functions">Functions</a></li>
      <li class="nav-section-label">Functions</li>
      <li><a href="#find-fn" style="padding-left: 16px;">findUnsubscribeLinks()</a></li>
      <li><a href="#reset-fn" style="padding-left: 16px;">resetBookmark()</a></li>
      <li><a href="#output">Sheet output</a></li>
      <li><a href="#bookmark">Bookmark system</a></li>
      <li><a href="#dedup">Deduplication</a></li>
      <li><a href="#permissions">Permissions</a></li>
      <li><a href="#setup">Setup &amp; usage</a></li>
      <li><a href="#limitations">Limitations</a></li>
    </ul>
  </nav>

  <!-- Main -->
  <main class="content">

    <!-- Overview -->
    <section id="overview">
      <h2>
        <span class="icon" style="background:#eef4ff; color:#2563eb;">📋</span>
        Overview
      </h2>
      <p>This script searches a Gmail account for emails containing the word "unsubscribe", filters them to retain only messages from educational institutions, extracts unsubscribe links from those emails, and writes the results to a Google Sheet. A bookmark system allows the script to run in batches without re-processing the same emails.</p>

      <div class="feature-grid">
        <div class="feature-card">
          <div class="fc-icon">📦</div>
          <div class="fc-title">Batch processing</div>
          <div class="fc-desc">Scans emails in configurable chunks to avoid Apps Script timeout limits.</div>
        </div>
        <div class="feature-card">
          <div class="fc-icon">🚫</div>
          <div class="fc-title">Duplicate prevention</div>
          <div class="fc-desc">Tracks previously seen senders so each institution appears only once.</div>
        </div>
        <div class="feature-card">
          <div class="fc-icon">🏫</div>
          <div class="fc-title">Institution filtering</div>
          <div class="fc-desc">Ignores non-educational senders using configurable keyword matching.</div>
        </div>
        <div class="feature-card">
          <div class="fc-icon">🔗</div>
          <div class="fc-title">Link extraction</div>
          <div class="fc-desc">Uses regex to pull unsubscribe-style URLs from HTML email bodies.</div>
        </div>
        <div class="feature-card">
          <div class="fc-icon">🔖</div>
          <div class="fc-title">Persistent bookmarks</div>
          <div class="fc-desc">Saves the scan position using Script Properties across executions.</div>
        </div>
        <div class="feature-card">
          <div class="fc-icon">📊</div>
          <div class="fc-title">Sheet output</div>
          <div class="fc-desc">Appends results directly to a Google Sheet with auto-created headers.</div>
        </div>
      </div>
    </section>

    <!-- Configuration -->
    <section id="configuration">
      <h2>
        <span class="icon" style="background:#fef3c7; color:#b45309;">⚙️</span>
        Configuration
      </h2>
      <p>All user-configurable values are grouped at the top of <code>findUnsubscribeLinks()</code> under the <code>// --- CONFIGURATION ---</code> comment block.</p>

      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>SHEET_ID</code></td>
            <td>String</td>
            <td><em>(your Sheet ID)</em></td>
            <td>The ID of the Google Sheet where results are written. Found in the Sheet URL between <code>/d/</code> and <code>/edit</code>.</td>
          </tr>
          <tr>
            <td><code>SEARCH_QUERY</code></td>
            <td>String</td>
            <td><code>"unsubscribe"</code></td>
            <td>Gmail search query used to locate candidate emails. Supports any Gmail search syntax.</td>
          </tr>
          <tr>
            <td><code>BATCH_SIZE</code></td>
            <td>Number</td>
            <td><code>500</code></td>
            <td>Maximum number of email threads to process per run. Reduce if hitting execution time limits.</td>
          </tr>
          <tr>
            <td><code>INSTITUTION_KEYWORDS</code></td>
            <td>Array&lt;String&gt;</td>
            <td>See below</td>
            <td>Substrings matched against the sender's From header to identify institutional emails.</td>
          </tr>
          <tr>
            <td><code>LINK_PATTERNS</code></td>
            <td>Array&lt;String&gt;</td>
            <td>See below</td>
            <td>URL path substrings used to identify unsubscribe-related links in email HTML bodies.</td>
          </tr>
        </tbody>
      </table>

      <h3>INSTITUTION_KEYWORDS</h3>
      <p>A sender is considered institutional if any of these strings appear (case-insensitively) in the From header value.</p>
      <div class="pill-list">
        <span class="pill">university</span>
        <span class="pill">college</span>
        <span class="pill">institute</span>
        <span class="pill">academy</span>
        <span class="pill">school</span>
        <span class="pill">edu</span>
        <span class="pill">alumni</span>
        <span class="pill">admissions</span>
        <span class="pill">registrar</span>
        <span class="pill">department of</span>
      </div>

      <h3>LINK_PATTERNS</h3>
      <p>Any <code>href</code> in the email body matching at least one of these patterns is captured. Multiple matches are joined with newlines in a single cell.</p>
      <div class="pill-list">
        <span class="pill">unsubscribe</span>
        <span class="pill">optout</span>
        <span class="pill">preferences</span>
        <span class="pill">stop-mail</span>
        <span class="pill">click-here</span>
        <span class="pill">manage</span>
        <span class="pill">remove</span>
      </div>
    </section>

    <!-- Functions -->
    <section id="functions">
      <h2>
        <span class="icon" style="background:#f0fdf4; color:#16a34a;">ƒ</span>
        Functions
      </h2>
      <p>The script exposes two callable functions.</p>
      <table>
        <thead><tr><th>Function</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td><code>findUnsubscribeLinks()</code></td><td>Main entry point. Runs a batch scan and writes results to the sheet.</td></tr>
          <tr><td><code>resetBookmark()</code></td><td>Helper. Resets the scan position so the next run starts from the most recent email.</td></tr>
        </tbody>
      </table>
    </section>

    <!-- findUnsubscribeLinks -->
    <section id="find-fn">
      <h2>
        <span class="icon" style="background:#f0fdf4; color:#16a34a;">→</span>
        findUnsubscribeLinks()
      </h2>
      <p>Main entry point. Orchestrates the full scan-and-write pipeline. Returns <code>void</code> — results are written directly to the configured Google Sheet.</p>

      <h3>Execution flow</h3>
      <div class="flow">
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Load bookmark</div>
            <div class="flow-desc">Reads <code>GMAIL_OFFSET</code> from Script Properties. Defaults to <code>0</code> on first run.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Build duplicate set</div>
            <div class="flow-desc">Scans all existing sheet rows and stores previously seen sender email addresses (case-insensitive) in a <code>Set</code>.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Initialize sheet headers</div>
            <div class="flow-desc">If the sheet is empty, writes column headers (<em>Institution/Sender, Last Subject, Unsubscribe Link, Date</em>) and bolds them.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Search Gmail</div>
            <div class="flow-desc">Calls <code>GmailApp.search(SEARCH_QUERY, startOffset, BATCH_SIZE)</code> to fetch the next batch of threads.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Filter &amp; extract</div>
            <div class="flow-desc">For each thread: checks institution keywords against the From header, skips duplicates, then regex-extracts matching <code>href</code> values from the last message's HTML body.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div><div class="flow-line"></div></div>
          <div class="flow-body">
            <div class="flow-title">Write results</div>
            <div class="flow-desc">Appends qualifying rows to the sheet. Each institution produces exactly one row.</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-left"><div class="flow-dot"></div></div>
          <div class="flow-body">
            <div class="flow-title">Update bookmark</div>
            <div class="flow-desc">Saves <code>startOffset + threads.length</code> back to Script Properties for the next run.</div>
          </div>
        </div>
      </div>

      <h3>Source</h3>
      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript (Apps Script)</span></div>
        <pre><span class="cm">// Core search call</span>
<span class="kw">const</span> threads = <span class="var">GmailApp</span>.<span class="fn">search</span>(SEARCH_QUERY, startOffset, BATCH_SIZE);

<span class="cm">// Institution check</span>
<span class="kw">const</span> isInstitution = INSTITUTION_KEYWORDS.<span class="fn">some</span>(
  keyword => lowerFrom.<span class="fn">includes</span>(keyword)
);

<span class="cm">// Link extraction regex</span>
<span class="kw">const</span> regex = <span class="kw">new</span> <span class="fn">RegExp</span>(
  <span class="str">`href="([^"]*(?:${patternString})[^"]*)"`</span>, <span class="str">'gi'</span>
);

<span class="cm">// Bookmark update</span>
<span class="kw">const</span> newOffset = startOffset + threads.length;
<span class="var">scriptProperties</span>.<span class="fn">setProperty</span>(<span class="str">'GMAIL_OFFSET'</span>, newOffset.<span class="fn">toString</span>());</pre>
      </div>

      <h3>Edge cases</h3>
      <ul style="padding-left: 1.25rem; color: #333; font-size: 13.5px; line-height: 1.8;">
        <li>If no threads are returned, the bookmark is reset to <code>0</code> and the function exits early.</li>
        <li>If the sheet is completely empty (no header row), headers are automatically written before any data rows.</li>
        <li>Only the <strong>last message</strong> in each thread is inspected for links — earlier messages in the same thread are ignored.</li>
      </ul>
    </section>

    <!-- resetBookmark -->
    <section id="reset-fn">
      <h2>
        <span class="icon" style="background:#fdf2f8; color:#9333ea;">↺</span>
        resetBookmark()
      </h2>
      <p>Helper function. Sets <code>GMAIL_OFFSET</code> back to <code>"0"</code> in Script Properties, causing the next call to <code>findUnsubscribeLinks()</code> to start from the most recent email.</p>

      <div class="note">
        <span class="note-icon">⚠️</span>
        <span>Run this before starting a fresh scan of your inbox, or after modifying <code>INSTITUTION_KEYWORDS</code> or <code>LINK_PATTERNS</code> — otherwise the script will skip already-processed emails.</span>
      </div>

      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript (Apps Script)</span></div>
        <pre><span class="kw">function</span> <span class="fn">resetBookmark</span>() {
  <span class="var">PropertiesService</span>.<span class="fn">getScriptProperties</span>()
    .<span class="fn">setProperty</span>(<span class="str">'GMAIL_OFFSET'</span>, <span class="str">'0'</span>);
  <span class="var">Logger</span>.<span class="fn">log</span>(<span class="str">'Bookmark reset to 0.'</span>);
}</pre>
      </div>
    </section>

    <!-- Sheet output -->
    <section id="output">
      <h2>
        <span class="icon" style="background:#f0fdf4; color:#16a34a;">📊</span>
        Sheet output
      </h2>
      <p>Results are appended to the active sheet of the Google Sheet identified by <code>SHEET_ID</code>. Each qualifying sender produces one row.</p>
      <div class="col-grid">
        <div class="col-card">
          <div class="col-letter">A</div>
          <div class="col-name">Institution / Sender</div>
          <div class="col-desc">Full From header, e.g. <em>"Stanford Admissions &lt;admissions@stanford.edu&gt;"</em></div>
        </div>
        <div class="col-card">
          <div class="col-letter">B</div>
          <div class="col-name">Last Subject</div>
          <div class="col-desc">Subject line of the last message in the thread.</div>
        </div>
        <div class="col-card">
          <div class="col-letter">C</div>
          <div class="col-name">Unsubscribe Link</div>
          <div class="col-desc">All matching href URLs found in the body, joined by newlines.</div>
        </div>
        <div class="col-card">
          <div class="col-letter">D</div>
          <div class="col-name">Date</div>
          <div class="col-desc">Date of the last message in the thread.</div>
        </div>
      </div>
    </section>

    <!-- Bookmark system -->
    <section id="bookmark">
      <h2>
        <span class="icon" style="background:#eff6ff; color:#2563eb;">🔖</span>
        Bookmark system
      </h2>
      <p>The script uses <code>PropertiesService.getScriptProperties()</code> to persist the email scan position between executions — no database or external storage needed.</p>

      <table>
        <thead><tr><th>Property key</th><th>Type</th><th>Behaviour</th></tr></thead>
        <tbody>
          <tr>
            <td><code>GMAIL_OFFSET</code></td>
            <td>String (numeric)</td>
            <td>Index of the first thread to fetch on the next run. Incremented by <code>threads.length</code> each run. Automatically reset to <code>"0"</code> when all threads are exhausted, or manually via <code>resetBookmark()</code>.</td>
          </tr>
        </tbody>
      </table>

      <div class="note">
        <span class="note-icon">ℹ️</span>
        <span><code>GmailApp.search()</code> returns results ordered from most recent to oldest, so offset <code>0</code> corresponds to the newest email. Running the script repeatedly advances the offset deeper into older mail.</span>
      </div>
    </section>

    <!-- Deduplication -->
    <section id="dedup">
      <h2>
        <span class="icon" style="background:#fdf4ff; color:#a21caf;">🔁</span>
        Deduplication logic
      </h2>
      <p>At startup, the script reads all existing rows in the sheet and extracts the sender's email address — the part inside angle brackets, or the full From value if no brackets are present. These are stored case-insensitively in a JavaScript <code>Set</code> called <code>seenInstitutions</code>.</p>
      <p>Before writing any new row, the extracted email is checked against the set. If present, the thread is skipped entirely. This ensures each institution appears at most once across multiple batch runs.</p>

      <div class="code-block">
        <div class="code-header"><span class="code-lang">JavaScript (Apps Script)</span></div>
        <pre><span class="cm">// Extract email from "Name &lt;email@domain.com&gt;" format</span>
<span class="kw">const</span> emailMatch = from.<span class="fn">match</span>(<span class="str">/&lt;([^&gt;]+)&gt;/</span>);
<span class="kw">const</span> emailOnly = emailMatch
  ? emailMatch[<span class="num">1</span>].<span class="fn">toLowerCase</span>()
  : lowerFrom;

<span class="cm">// Skip if already processed</span>
<span class="kw">if</span> (seenInstitutions.<span class="fn">has</span>(emailOnly)) <span class="kw">return</span>;</pre>
      </div>
    </section>

    <!-- Permissions -->
    <section id="permissions">
      <h2>
        <span class="icon" style="background:#fff7ed; color:#c2410c;">🔑</span>
        Dependencies &amp; permissions
      </h2>
      <p>The script uses the following Google Apps Script services. OAuth consent is requested on first run.</p>
      <table>
        <thead><tr><th>Service</th><th>Scope</th><th>Usage</th></tr></thead>
        <tbody>
          <tr>
            <td><code>GmailApp</code></td>
            <td>Read Gmail</td>
            <td>Searching threads, reading message headers, body, and date.</td>
          </tr>
          <tr>
            <td><code>SpreadsheetApp</code></td>
            <td>Read &amp; write Sheets</td>
            <td>Opening the target sheet, reading existing rows, and appending new data.</td>
          </tr>
          <tr>
            <td><code>PropertiesService</code></td>
            <td>Script Properties</td>
            <td>Persisting the <code>GMAIL_OFFSET</code> bookmark between executions.</td>
          </tr>
          <tr>
            <td><code>Logger</code></td>
            <td>Internal</td>
            <td>Writing progress messages to the Apps Script log console.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Setup -->
    <section id="setup">
      <h2>
        <span class="icon" style="background:#f0fdf4; color:#16a34a;">🚀</span>
        Setup &amp; usage
      </h2>

      <h3>Initial setup</h3>
      <ol class="steps">
        <li><p>Open the target Google Sheet and copy its ID from the URL — the string between <code>/d/</code> and <code>/edit</code>.</p></li>
        <li><p>Paste the ID into the <code>SHEET_ID</code> constant at the top of <code>findUnsubscribeLinks()</code>.</p></li>
        <li><p>Open Google Apps Script via <strong>Extensions → Apps Script</strong> in any Google Sheet, or go to <a href="https://script.google.com">script.google.com</a>.</p></li>
        <li><p>Paste the script, save it, and select <code>findUnsubscribeLinks</code> as the function to run.</p></li>
        <li><p>Click <strong>Run</strong> and grant the required OAuth permissions when prompted.</p></li>
      </ol>

      <h3>Running subsequent batches</h3>
      <p>Run <code>findUnsubscribeLinks()</code> again to process the next <code>BATCH_SIZE</code> threads. The script automatically picks up where it left off. Repeat until the <em>"No more emails found"</em> alert appears.</p>

      <h3>Starting a fresh scan</h3>
      <p>Call <code>resetBookmark()</code> from the Apps Script editor, then run <code>findUnsubscribeLinks()</code> again. The script will restart scanning from the most recent email.</p>

      <div class="note">
        <span class="note-icon">💡</span>
        <span>To automate batch runs, set a time-based trigger in Apps Script (<strong>Triggers → Add Trigger</strong>) to call <code>findUnsubscribeLinks</code> every few minutes or hours until the inbox is fully scanned.</span>
      </div>
    </section>

    <!-- Limitations -->
    <section id="limitations">
      <h2>
        <span class="icon" style="background:#fef9c3; color:#a16207;">⚠️</span>
        Known limitations
      </h2>
      <ul class="limit-list">
        <li>
          <span class="limit-icon">⚠</span>
          <span>Only the <strong>last message</strong> in each thread is scanned. If an earlier message contains the unsubscribe link but the most recent one does not, the link will be missed.</span>
        </li>
        <li>
          <span class="limit-icon">⚠</span>
          <span>Institution detection is based on simple substring matching. Senders whose name or domain does not include any keyword are excluded, regardless of their actual nature.</span>
        </li>
        <li>
          <span class="limit-icon">⚠</span>
          <span><code>LINK_PATTERNS</code> is intentionally broad — patterns like <code>manage</code> or <code>click-here</code> may match URLs that are not genuine unsubscribe links.</span>
        </li>
        <li>
          <span class="limit-icon">⚠</span>
          <span><code>GmailApp.search()</code> has undocumented rate limits. Very large inboxes may require multiple batch runs spread over time to avoid quota errors.</span>
        </li>
        <li>
          <span class="limit-icon">⚠</span>
          <span>All matched links for a sender are concatenated in a single cell separated by newlines. Cells with many matches may require manual row height adjustment to read comfortably.</span>
        </li>
      </ul>
    </section>

  </main>
</div>

<footer>
  Gmail Unsubscribe Link Finder &nbsp;·&nbsp; Google Apps Script &nbsp;·&nbsp; Version 1.0
</footer>

<script>
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-list a[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-10% 0px -80% 0px' });

  sections.forEach(s => observer.observe(s));
</script>
</body>
</html>
