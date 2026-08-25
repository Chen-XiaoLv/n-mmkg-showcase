(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const Ze=document.querySelector("#app");if(!Ze)throw new Error("缺少 #app 容器");Ze.innerHTML=`
  <section id="landingCover" class="landing-cover">
    <nav class="landing-nav"><div class="landing-logo"><i>◇</i><strong>N-MMKG</strong></div><div class="landing-links"><a href="#landingCapabilities">能力</a><a href="#landingWorkflow">工作流</a><a href="#landingResults">成果沉淀</a></div><div class="landing-nav-actions"><div class="landing-theme-picker"><span>界面主题</span><div class="app-theme-options" role="group" aria-label="切换界面主题"><button class="app-theme-swatch theme-gold" type="button" data-theme-choice="gold" aria-label="暗金主题" title="暗金"></button><button class="app-theme-swatch theme-aurora" type="button" data-theme-choice="aurora" aria-label="极光主题" title="极光"></button></div></div><button class="enter-workspace">开始使用 N-MMKG <span>→</span></button></div></nav>
    <div class="landing-hero">
      <div class="landing-copy"><span class="landing-kicker">✦ 让多模态知识持续生长</span><h1>看见数据，<br><em>连接知识。</em></h1><p>从文档解析、实体消歧到图像检索与测评数据集，<br>把分散的多模态信息沉淀为清晰、可信、可追踪的知识网络。</p><div class="landing-actions"><button class="enter-workspace">进入工作台 <span>→</span></button><small>本地运行 · 数据可控 · 持续积累</small></div></div>
      <div class="landing-preview" aria-label="N-MMKG 工作台预览"><div class="preview-glow"></div><article><header><div><i></i><span><b>N-MMKG</b><small>多模态知识正在汇聚</small></span></div><em>LIVE</em></header><div class="preview-query">从图片和文档中，发现能够相互印证的知识。</div><section><span>✦ 当前知识链路</span><div><i>01</i><p><b>文档解析</b><small>标准化多模态资产</small></p><strong>完成</strong></div><div><i>02</i><p><b>实体消歧</b><small>合并同一真实对象</small></p><strong>进行中</strong></div><div><i>03</i><p><b>图像检索</b><small>连接 ImageEntity</small></p><strong>就绪</strong></div></section><footer><span>知识不是终点，而是下一次探索的起点</span><b>◇</b></footer></article></div>
    </div>
    <section id="landingCapabilities" class="landing-capabilities">
      <header><span>CORE CAPABILITIES</span><h2>一套轻量工作台，串起多模态数据全流程</h2><p>从原始文档到检索与测评样本，把常用工作收拢到清晰、可追踪的流程中。</p></header>
      <div class="landing-capability-grid">
        <article><i>01</i><small>MINERU PARSING</small><h3>集成 MinerU 的快速解析</h3><p>快速处理 PDF、Office、网页与图片输入，保留文本、图片及来源信息，为知识构建准备标准化内容。</p><span>文档解析 · 结构保留 · 来源追踪</span></article>
        <article><i>02</i><small>FG-CLIP2 RETRIEVAL</small><h3>图文向量检索与对比</h3><p>使用 FG-CLIP2 建立图像与文本的统一向量表示，支持跨模态召回、相似度排序与结果对比。</p><span>图文检索 · 向量对比 · ImageEntity</span></article>
        <article><i>03</i><small>DATA ANNOTATION</small><h3>快速数据标注与 AI 辅助</h3><p>围绕 Query、Answer、Cue 与图片路径构造多模态 RAG 测评样本，并为后续 AI 辅助标注预留入口。</p><span>JSONL · 增量保存 · AI 辅助</span></article>
      </div>
    </section>
    <div class="landing-foot"><span>SCROLL TO DISCOVER</span><i>⌄</i></div>
  </section>
  <div id="workspaceShell" class="shell hidden">
    <aside class="sidebar">
      <button id="homeButton" class="brand" type="button" title="返回首页">
        <div class="brand-orbit"><img src="/n-mmkg-showcase/assets/n-mmkg-avatar-aurora.png" alt="N-MMKG"></div>
        <div>
          <h1>N-MMKG</h1>
          <p>多模态知识图谱</p>
        </div>
      </button>
      <nav class="nav-list" aria-label="主导航">
        <section class="nav-group open">
          <button class="nav-group-toggle" type="button" aria-expanded="true"><span>基本功能</span><i>⌄</i></button>
          <div class="nav-group-items">
            <button id="navParse" class="nav-item active"><span>＋</span><b>文档解析</b></button>
            <button id="navBuild" class="nav-item active-secondary"><span>⌘</span><b>知识构建</b></button>
            <button id="navStorage" class="nav-item"><span>▦</span><b>图谱存储</b></button>
            <button id="navQuery" class="nav-item"><span>⌕</span><b>用户问答</b></button>
            <button id="navImage" class="nav-item"><span>▧</span><b>图片理解</b></button>
            <button id="navEntity" class="nav-item"><span>◇</span><b>实体检索</b></button>
          </div>
        </section>
        <section class="nav-group open">
          <button class="nav-group-toggle" type="button" aria-expanded="true"><span>数据构造</span><i>⌄</i></button>
          <div class="nav-group-items">
            <button id="navAnnotation" class="nav-item"><span>✓</span><b>数据标注</b></button>
            <button id="navConfigdetails" class="nav-item"><span>⚙</span><b>配置明细</b></button>
          </div>
        </section>
        <section class="nav-group open">
          <button class="nav-group-toggle" type="button" aria-expanded="true"><span>资产沉淀</span><i>⌄</i></button>
          <div class="nav-group-items">
            <button id="navOptimize" class="nav-item"><span>↗</span><b>优化方向</b></button>
            <button id="navProjects" class="nav-item"><span>✦</span><b>项目星图</b></button>
            <button id="navExplore" class="nav-item"><span>⌗</span><b>数据探索</b></button>
            <button id="navAccumulation" class="nav-item"><span>▤</span><b>积累沉淀</b></button>
          </div>
        </section>
        <button class="nav-item" disabled><span>◎</span><b>图谱浏览</b><em>规划中</em></button>
      </nav>
      <div class="sidebar-foot">
        <div class="system-state"><i id="serviceDot"></i><span>本地服务</span><strong id="serviceState">连接中</strong></div>
        <p>MinerU Precise API</p>
      </div>
    </aside>

    <main class="content">
      <header class="hero">
        <div>
          <span id="heroEyebrow" class="eyebrow">MULTIMODAL INGESTION</span>
          <h2 id="heroTitle">让散落的知识，汇入同一片语义之海</h2>
          <p id="heroDescription">选择本地文档，经 MinerU 完成版面、表格、公式与图片解析，为后续知识网络构建准备标准化内容。</p>
        </div>
        <div class="hero-badge"><span id="headerDot"></span><b id="headerStatus">就绪</b></div>
      </header>

      <section id="metricGrid" class="metric-grid">
        <article class="metric-card"><span>配置状态</span><strong id="metricConfig">检测中</strong><small>config.yaml</small></article>
        <article class="metric-card"><span>待处理文件</span><strong id="metricFiles">0</strong><small>支持文件或文件夹</small></article>
        <article class="metric-card"><span>成功解析</span><strong id="metricSuccess">0</strong><small>本次运行</small></article>
        <article class="metric-card"><span>失败项目</span><strong id="metricFailed">0</strong><small>本次运行</small></article>
      </section>

      <section id="parseWorkspace" class="workspace-grid">
        <div class="left-column">
          <article class="panel key-panel">
            <div class="panel-heading">
              <div class="step-number">01</div>
              <div><h3>连接 MinerU</h3><p>API Key 将写入本地配置，旧配置自动进入检查点。</p></div>
              <span id="keyBadge" class="badge neutral">未配置</span>
            </div>
            <div class="field-row">
              <label class="secret-field">
                <span>MinerU API Key</span>
                <div><input id="apiKey" type="password" autocomplete="off" placeholder="输入新的 API Key，留空则保持现有配置" /><button id="toggleKey" class="icon-button" title="显示或隐藏">◉</button></div>
              </label>
              <button id="saveKey" class="secondary-button">保存配置</button>
            </div>
            <p class="checkpoint-note"><span>↺</span> 每次覆盖前保存至 <code>checkpoint/config.yaml</code></p>
          </article>

          <article class="panel source-panel">
            <div class="panel-heading">
              <div class="step-number">02</div>
              <div><h3>选择知识载体</h3><p>调用 Windows 原生选择窗口，获取真实的本机路径。</p></div>
            </div>
            <div id="dropZone" class="source-zone">
              <div class="source-icon">⌁</div>
              <h4 id="sourceTitle">尚未选择输入</h4>
              <p id="sourcePath">支持 PDF、Office、HTML 与常见图片格式</p>
              <div class="source-actions">
                <button id="chooseFile" class="secondary-button">打开文件</button>
                <button id="chooseFolder" class="secondary-button">打开文件夹</button>
              </div>
            </div>
            <div class="remote-source">
              <label for="remoteUrl">或提交远程文件直链</label>
              <div class="remote-source-row"><input id="remoteUrl" type="url" placeholder="https://example.com/document.pdf" autocomplete="url" /><button id="useRemoteUrl" class="secondary-button">使用链接</button></div>
              <small>使用 MinerU 精准解析；可填写 PDF/Office/图片直链，或可公网访问的网页文章地址。</small>
            </div>
            <label id="recursiveLabel" class="check-row hidden"><input id="recursive" type="checkbox" /><span>递归扫描子文件夹</span></label>
          </article>

          <article class="action-card">
            <div>
              <span class="action-kicker">READY TO PARSE</span>
              <h3>开始生成标准化文档</h3>
              <p>任务会等待 MinerU 完成解析，并自动下载、校验和解压结果。</p>
            </div>
            <button id="startParse" class="primary-button" disabled><span>✦</span> 开始解析</button>
          </article>
        </div>

        <div class="right-column">
          <article class="panel progress-panel">
            <div class="panel-heading compact">
              <div><h3>任务进度</h3><p id="jobMessage">等待提交任务</p></div>
              <span id="jobBadge" class="badge neutral">IDLE</span>
            </div>
            <div class="progress-visual">
              <div class="progress-ring" id="progressRing"><span id="progressValue">0%</span></div>
              <div class="progress-data">
                <div><span>已完成</span><strong id="completeCount">0 / 0</strong></div>
                <div><span>总耗时</span><strong id="parseElapsed">0.00s</strong></div>
                <div><span>处理速度</span><strong id="parseRate">0.000 items/s</strong></div>
                <div><span>平均单项耗时</span><strong id="parseAverage">0.00 s/item</strong></div>
                <div><span>输出目录</span><button id="openOutput" class="path-button">加载中…</button></div>
              </div>
            </div>
          </article>

          <article class="panel log-panel">
            <div class="panel-heading compact">
              <div><h3>运行日志</h3><p>解析状态、上传和下载信息</p></div>
              <button id="clearLogs" class="text-button">清空显示</button>
            </div>
            <div id="logs" class="terminal"><p class="terminal-empty">等待任务开始…</p></div>
          </article>
        </div>
      </section>
      <section id="buildWorkspace" class="mmkg-section">
        <article class="panel mmkg-panel">
          <div class="panel-heading">
            <div class="step-number">03</div>
            <div><h3>构建 N-MMKG</h3><p>读取 MinerU 的 content_list 产物，抽取实体与关系并写入多模态语义知识网络。</p></div>
            <span id="buildBadge" class="badge neutral">检测中</span>
          </div>
          <div class="build-layout">
            <div class="corpus-summary">
              <div><span>解析文档</span><strong id="corpusTotal">0</strong></div>
              <div><span>已入库</span><strong id="corpusIngested">0</strong></div>
              <div><span>待构建</span><strong id="corpusPending">0</strong></div>
            </div>
            <div class="build-options">
              <label class="check-row"><input id="verifyEmbedding" type="checkbox" checked /><span>构建前校验 Embedding 维度</span></label>
              <label class="check-row"><input id="reingest" type="checkbox" /><span>重新提交全部文档</span></label>
            </div>
            <div class="build-actions">
              <button id="refreshCorpus" class="secondary-button">重新检测</button>
              <button id="openMmkgOutput" class="secondary-button">打开知识库</button>
              <button id="startBuild" class="primary-button" disabled><span>⌘</span> 开始构建</button>
            </div>
          </div>
          <div class="build-progress">
            <div><span id="buildMessage">等待检测 MinerU 文件库</span><strong id="buildCount">0 / 0</strong></div>
            <div class="progress-track"><i id="buildProgressBar"></i></div>
            <div class="timing-grid">
              <span>总耗时 <strong id="buildElapsed">0.00s</strong></span>
              <span>处理速度 <strong id="buildRate">0.000 items/s</strong></span>
              <span>平均单项 <strong id="buildAverage">0.00 s/item</strong></span>
            </div>
          </div>
          <div id="buildDocuments" class="document-list"><p class="terminal-empty">尚未检测到文档</p></div>
          <div class="panel-heading compact build-log-heading">
            <div><h3>构建日志</h3><p>实体抽取、关系生成与向量持久化状态</p></div>
            <button id="clearBuildLogs" class="text-button">清空显示</button>
          </div>
          <div id="buildLogs" class="terminal build-terminal"><p class="terminal-empty">等待构建任务开始…</p></div>
        </article>
      </section>
      <section id="storageWorkspace" class="storage-section hidden">
        <article class="panel storage-panel">
          <div class="panel-heading">
            <div class="step-number">04</div>
            <div><h3>持久化与交换</h3><p>将同一份 N-MMKG 投影为 Richpedia 风格 RDF，或写入本机 Neo4j 属性图。</p></div>
            <span id="storageBadge" class="badge neutral">检测中</span>
          </div>

          <div class="storage-grid">
            <article class="storage-card">
              <div class="storage-card-head"><span class="storage-icon">RDF</span><div><h4>Turtle 语义交换文件</h4><p>图片、表格与 Chunk 均作为一等资源节点。</p></div></div>
              <dl>
                <div><dt>文件状态</dt><dd id="rdfState">检测中</dd></div>
                <div><dt>文件大小</dt><dd id="rdfSize">—</dd></div>
                <div><dt>更新时间</dt><dd id="rdfUpdated">—</dd></div>
              </dl>
              <button id="rdfPath" class="storage-path" title="">—</button>
              <div class="storage-actions">
                <button id="exportRdf" class="primary-button">生成 .ttl</button>
                <button id="openRdf" class="secondary-button">打开文件</button>
              </div>
            </article>

            <article class="storage-card">
              <div class="storage-card-head"><span class="storage-icon neo">N4J</span><div><h4>Neo4j 图数据库</h4><p>实体、跨模态资源、来源 Chunk 与关系批量写入；表格保留正文、坐标、标题和脚注，并生成语义摘要。</p></div></div>
              <dl>
                <div><dt>服务状态</dt><dd id="neo4jState">检测中</dd></div>
                <div><dt>连接地址</dt><dd id="neo4jUri">—</dd></div>
                <div><dt>目标数据库</dt><dd id="neo4jDatabase">—</dd></div>
              </dl>
              <label class="check-row danger-check"><input id="replaceNeo4j" type="checkbox" checked /><span>写入前清理旧的 MMKGNode（建议结构升级后勾选）</span></label>
              <div class="storage-actions">
                <button id="writeNeo4j" class="primary-button">写入 Neo4j</button>
                <button id="refreshStorage" class="secondary-button">刷新状态</button>
              </div>
            </article>
          </div>

          <div class="storage-job-summary">
            <div><span>当前任务</span><strong id="storageMessage">等待提交</strong></div>
            <div><span>耗时</span><strong id="storageElapsed">0.00s</strong></div>
            <div><span>结果</span><strong id="storageResult">0 / 0</strong></div>
          </div>
          <div class="panel-heading compact storage-log-heading">
            <div><h3>存储日志</h3><p>RDF 序列化、Neo4j 连接与批量写入状态</p></div>
            <button id="clearStorageLogs" class="text-button">清空显示</button>
          </div>
          <div id="storageLogs" class="terminal storage-terminal"><p class="terminal-empty">等待存储任务开始…</p></div>
        </article>
      </section>
      <section id="queryWorkspace" class="query-section hidden">
        <article class="panel query-panel">
          <div class="panel-heading">
            <div class="step-number">05</div>
            <div><h3>用户文本问答</h3><p>模拟用户输入文本，由 LightRAG 从已构建的实体、关系和文本切片中召回证据并生成回答。</p></div>
            <span id="queryBadge" class="badge neutral">等待提问</span>
          </div>
          <div class="query-layout">
            <div class="query-compose">
              <label class="query-field"><span>用户输入（文本）</span><textarea id="queryText" rows="6" maxlength="10000" placeholder="例如：这份文档主要介绍了哪些内容？"></textarea></label>
              <div class="query-toolbar">
                <label><span>检索模式</span><select id="queryMode"><option value="hybrid">Hybrid · 综合</option><option value="mix">Mix · 图与向量</option><option value="local">Local · 局部实体</option><option value="global">Global · 全局关系</option><option value="naive">Naive · 纯切片</option><option value="bypass">Bypass · 不检索</option></select></label>
                <label><span>实体 Top-K</span><input id="queryTopK" type="number" min="1" max="200" value="40" /></label>
                <label><span>切片 Top-K</span><input id="queryChunkTopK" type="number" min="1" max="200" value="20" /></label>
              </div>
              <div class="query-options">
                <label class="check-row"><input id="queryReferences" type="checkbox" checked /><span>返回参考来源</span></label>
                <label class="check-row"><input id="queryRerank" type="checkbox" /><span>启用重排序（需单独配置模型）</span></label>
                <label class="check-row disabled-option"><input id="queryVlm" type="checkbox" disabled /><span>启用 VLM（图片向量接入后开放）</span></label>
              </div>
              <button id="startQuery" class="primary-button query-submit" disabled><span>⌕</span> 发送问题</button>
              <p class="query-note">当前已启用文本输入。图片输入将扩展为“CLIP 以图搜图 + VLM/OCR 文本图谱检索”双路径。</p>
            </div>
            <div class="query-result-wrap">
              <div class="query-result-head"><div><span>RAG ANSWER</span><strong id="queryMessage">等待输入问题</strong></div><small id="queryElapsed">0.00s</small></div>
              <div id="queryAnswer" class="query-answer"><p>回答将在这里显示。LightRAG 会先检索现有 N-MMKG，再结合召回上下文生成结果。</p></div>
              <div id="queryError" class="query-error hidden"></div>
            </div>
          </div>
        </article>
      </section>
      <section id="imageWorkspace" class="image-section hidden">
        <article class="panel image-panel">
          <div class="panel-heading">
            <div class="step-number">06</div>
            <div><h3>图谱图片检索与理解</h3><p>图片先作为 N-MMKG 节点入库，再以 FG-CLIP2 生成向量索引；检索结果可直接回链图谱上下文。</p></div>
            <span id="imageBadge" class="badge neutral">等待图片</span>
          </div>
          <div class="image-layout">
            <div class="image-compose">
              <label class="image-upload" for="imageFile">
                <input id="imageFile" type="file" accept="image/png,image/jpeg,image/webp,image/gif" />
                <span>⌁</span><strong id="imageFileName">选择本地图片</strong><small>支持 PNG、JPEG、WebP、GIF，最大 8 MB</small>
              </label>
              <img id="imagePreview" class="image-preview hidden" alt="待匹配图片预览" />
              <label class="query-field"><span>候选描述（每行一条）</span><textarea id="imageCaptions" rows="7" maxlength="12000" placeholder="例如：&#10;一个办公系统的截图&#10;一张包含数据表格的页面&#10;客服业务系统页面"></textarea></label>
              <div class="image-action-row"><button id="startImageIndex" class="secondary-button"><span>↻</span> 同步图谱图片</button><button id="startImageScore" class="secondary-button" disabled><span>◈</span> 描述匹配</button><label><span>图片 Top-K</span><input id="imageTopK" type="number" min="1" max="50" value="5" /></label><button id="startImageSearch" class="primary-button" disabled><span>⌕</span> 以图搜图</button><button id="startImageUserQA" class="primary-button" disabled><span>⇄</span> 图片双路测试</button></div>
              <p class="query-note">百分比仅在本次填写的候选描述之间归一化，合计为 100%，用于比较相对匹配程度。</p>
            </div>
            <div class="image-result-wrap">
              <div class="query-result-head"><div><span>FG-CLIP2 MATCH</span><strong id="imageMessage">等待上传图片与描述</strong></div><small id="imageElapsed">0.00s</small></div>
              <div id="imageIndexInfo" class="image-vector-info">正在检测图谱图片向量索引…</div>
              <div id="imageVectorInfo" class="image-vector-info">用户图片只作为查询向量，不会写入知识库。</div>
              <div id="imageResults" class="image-results"><p>填写多条候选描述后，结果会按匹配概率从高到低显示。</p></div>
              <div id="imageSearchResults" class="image-search-results"><p>以图搜图将返回相似图片及其图谱关联实体。</p></div>
              <div id="imageUserQAResults" class="image-user-qa"><p>图片双路测试会并列展示 VLM 简短描述与 CLIP 命中图片节点属性。</p></div>
              <div id="imageError" class="query-error hidden"></div>
            </div>
          </div>
        </article>
      </section>
      <section id="entityWorkspace" class="entity-section hidden">
        <article class="panel entity-panel">
          <div class="panel-heading">
            <div class="step-number">07</div>
            <div><h3>Baseline 实体名称检索</h3><p>从 Baseline 的 LightRAG GraphML 增量维护实体名称向量库。同步时仅计算新增或改名实体；检索时只计算本次输入名称。</p></div>
            <span id="entityBadge" class="badge neutral">等待同步</span>
          </div>
          <div class="entity-layout">
            <div class="entity-compose">
              <div id="entityIndexInfo" class="entity-index-info">正在检测 Baseline 实体向量库…</div>
              <label class="query-field"><span>实体名称</span><input id="entitySearchText" maxlength="500" placeholder="例如：冰激凌套餐、宽带预约单、会员权益" /></label>
              <div class="entity-actions"><button id="syncEntityIndex" class="secondary-button"><span>↻</span> 同步实体向量库</button><button id="startEntitySearch" class="primary-button" disabled><span>⌕</span> 检索 Top-10</button></div>
              <p class="query-note">结果中的百分比是 Top-10 候选之间的相对匹配概率，合计为 100%；原始余弦相似度仅用于排序。</p>
            </div>
            <div class="entity-result-wrap">
              <div class="query-result-head"><div><span>BASELINE ENTITY MATCH</span><strong id="entityMessage">等待输入实体名称</strong></div><small id="entityElapsed">0.00s</small></div>
              <div id="entityResults" class="entity-results"><p>同步 Baseline 实体向量库后，可按名称检索最相近的十个实体。</p></div>
              <div id="entityError" class="query-error hidden"></div>
            </div>
          </div>
        </article>
      </section>
      <section id="configdetailsWorkspace" class="config-details-section hidden">
        <div class="config-details-toolbar"><div class="config-search"><input id="configDetailsSearch" placeholder="搜索参数名、值、别名或备注"><button id="configDetailsSearchButton">搜索配置</button></div><button id="addConfigFile" class="config-add-button">＋ 增加配置文件</button></div>
        <div id="configDetailsList" class="config-details-list"></div>
      </section>
      <dialog id="configMetadataDialog" class="config-metadata-dialog"><form method="dialog"><header><div><small>CONFIG CARD</small><h3>编辑配置卡片</h3><p id="configMetadataKey"></p></div><button value="cancel" class="dialog-close">×</button></header><label>别名<input id="configMetadataAlias" placeholder="为参数增加易读名称"></label><label>备注<textarea id="configMetadataRemark" rows="4" placeholder="记录参数用途、取值建议或注意事项"></textarea></label><footer><button value="cancel" class="secondary-button">取消</button><button id="saveConfigMetadata" value="default" class="primary-button">保存卡片</button></footer></form></dialog>
      <dialog id="configDetailDialog" class="config-detail-dialog"><article><header><div><small>CONFIGURATION DETAIL</small><h3 id="configDetailTitle"></h3><p id="configDetailPath"></p></div><button id="closeConfigDetail" class="dialog-close">×</button></header><div class="config-detail-glass"><div><span>参数名称</span><strong id="configDetailKey"></strong></div><div><span>具体值</span><strong id="configDetailValue"></strong></div><div><span>别名</span><strong id="configDetailAlias"></strong></div><div><span>备注</span><p id="configDetailRemark"></p></div></div></article></dialog>
      <section id="annotationWorkspace" class="annotation-section hidden">
        <div class="annotation-layout">
          <article class="panel annotation-editor"><header><div><span>RAG EVALUATION SAMPLE</span><h3 id="annotationFormTitle">新增测评标注</h3><p>构造用户问题、标准答案及其证据来源</p></div><div class="annotation-header-actions"><button id="aiAssistAnnotation" class="ai-assist-button" type="button">AI 辅助</button><button id="resetAnnotation" class="secondary-button">清空表单</button></div></header><label>Query · 用户提问<textarea id="annotationQuery" rows="3" placeholder="输入模拟用户的真实问题"></textarea></label><label>Answer · 标准答案<textarea id="annotationAnswer" rows="5" placeholder="输入可用于自动测评的标准答案"></textarea></label><label>Cue · 答案出处文档 <small>每行一条，保存时转换为列表</small><textarea id="annotationCue" rows="4" placeholder="5G通信壳客服文档.md&#10;测试.md"></textarea></label><div class="annotation-images"><div><span>Images · 多模态输入路径</span><small>只保存路径，实际图片由测评管线处理</small></div><button id="chooseAnnotationImages" class="secondary-button">＋ 选择本地图片</button><div id="annotationImagePaths" class="annotation-paths"></div></div><footer><span id="annotationSaveStatus"></span><button id="saveAnnotation" class="primary-button">保存为 JSONL</button></footer></article>
          <article class="panel annotation-list-panel"><header><div><h3>已标注数据</h3><p id="annotationCount">共 0 条</p></div><button id="selectAnnotationDataset" class="secondary-button">⌑ 选择数据</button></header><div id="annotationDatasetPath" class="annotation-dataset-path">默认：mmkg_rag_eval.jsonl</div><div id="annotationList" class="annotation-list"></div></article>
        </div>
      </section>

      <section id="accumulationWorkspace" class="accumulation-section hidden">
        <article class="panel accumulation-group" data-accumulation-section="data"><header><div><span>01</span><div><h3>数据沉淀</h3><p>突出展示已经完成的量化工作</p></div></div><button class="add-accumulation" data-section="data">＋ 新增卡片</button></header><div id="dataCards" class="accumulation-grid"></div></article>
        <article class="panel accumulation-group" data-accumulation-section="documents"><header><div><span>02</span><div><h3>文档积累</h3><p>收纳文档成果、数量及访问入口</p></div></div><button class="add-accumulation" data-section="documents">＋ 新增卡片</button></header><div id="documentsCards" class="accumulation-grid"></div></article>
        <article class="panel accumulation-group" data-accumulation-section="research"><header><div><span>03</span><div><h3>专利论文</h3><p>记录专利、论文及阶段研究成果</p></div></div><button class="add-accumulation" data-section="research">＋ 新增卡片</button></header><div id="researchCards" class="accumulation-grid"></div></article>
      </section>

      <section id="exploreWorkspace" class="explore-section hidden">
        <div class="explore-tabbar"><div id="exploreTabs" class="explore-tabs" role="tablist" aria-label="数据集标签"></div><button id="addExploreTag" class="add-explore-tag">＋ 增加标签</button></div>
        <article class="panel dataset-panel">
          <header class="dataset-heading"><div><span>DATASET EXPLORER</span><h3 id="datasetTitle">请选择数据集标签</h3><p id="datasetMeta">增加标签后即可绑定 JSONL 数据集</p></div><div class="dataset-actions"><label class="dataset-bind">＋ 绑定 JSONL<input id="datasetFile" type="file" accept=".jsonl,application/json"></label><button id="openDatasetFolder" class="dataset-open">⌑ 打开本地数据</button></div></header>
          <div id="datasetEmpty" class="dataset-empty"><b>⌗</b><h3>绑定一个本地数据集</h3><p>选择 JSONL 文件后，文件会复制到项目数据目录，并按当前标签独立保存。</p></div>
          <div id="datasetViewer" class="dataset-viewer hidden">
            <div class="dataset-record-head"><span id="datasetRecordLabel">第 1 条</span><div><button id="datasetPrev" class="secondary-button">← 上一条</button><label><input id="datasetIndex" type="number" min="1" value="1"><span id="datasetTotal">/ 1</span></label><button id="datasetNext" class="secondary-button">下一条 →</button></div></div>
            <pre id="datasetRecord"></pre>
          </div>
        </article>
      </section>

      <section id="projectsWorkspace" class="project-section hidden">
        <header class="project-header">
          <div><span class="project-eyebrow">PROJECT CONSTELLATION</span><h2>✦ 项目星图</h2><p>点亮每一个里程碑，追踪项目的思考与进展。</p></div>
          <div class="project-selector"><span>当前项目</span><button class="project-tag active">N-MMKG</button></div>
        </header>
        <div class="project-workspace" id="projectWorkspace">
          <div class="project-map-panel">
            <div class="project-map-toolbar"><div><i></i>N-MMKG · 正在推进</div><div class="project-overall"><span>总进度</span><strong id="projectOverallProgress">57%</strong><div><b id="projectOverallProgressBar"></b></div></div></div>
            <div class="project-map"><img src="/n-mmkg-showcase/assets/mmgk-project-map.png" alt="N-MMKG 项目星图背景"><div id="projectNodes"></div><div class="project-map-hint"><b>✦</b><span><strong>探索项目节点</strong><small>悬停预览 · 点击编辑详情</small></span></div></div>
          </div>
          <aside class="project-detail">
            <div class="project-detail-empty" id="projectDetailEmpty"><b>✦</b><h3>选择一个光点</h3><p>节点名称、当前进度和项目文稿将在这里展开。</p></div>
            <div class="project-detail-content hidden" id="projectDetailContent">
              <div class="project-detail-topline"><span id="projectDetailIndex">NODE 01</span><button id="projectDetailClose">×</button></div>
              <label>节点名称<input id="projectDetailTitle" maxlength="80"></label>
              <label>当前进度<div class="project-progress-input"><input id="projectDetailProgress" type="number" min="0" max="100"><span>%</span></div></label>
              <div class="project-progress-track"><b id="projectDetailProgressBar"></b></div>
              <label>项目文稿<textarea id="projectDetailManuscript" rows="13" placeholder="在这里记录当前节点的阶段成果……"></textarea></label>
              <div class="project-save-row"><span id="projectSaveStatus"></span><button id="projectSaveButton" class="primary-button">保存修改</button></div>
            </div>
          </aside>
        </div>
      </section>

      <section id="optimizeWorkspace" class="optimize-section hidden">
        <div class="optimization-tabs" role="tablist" aria-label="优化方向筛选">
          <button class="optimization-tab active" data-optimization="clip" role="tab" aria-selected="true">FG-CLIP2</button>
          <button class="optimization-tab" data-optimization="entity" role="tab" aria-selected="false">实体消歧</button>
          <button class="optimization-tab" data-optimization="parse" role="tab" aria-selected="false">文档解析</button>
          <button class="optimization-tab" data-optimization="reflect" role="tab" aria-selected="false">Reflect增强</button>
        </div>

        <article class="panel optimization-block architecture-block">
          <div class="optimization-heading"><span>01</span><div><h3>架构图</h3><p>从原始资料到可检索知识网络的四段优化链路</p></div><div class="optimization-tools"><button class="showcase-tool edit-showcase" data-block="architecture">✎ 编辑内容</button><button class="showcase-tool auto-layout" data-block="architecture">▦ 自动排版</button></div></div>
          <div id="architectureShowcase" class="showcase-content layout-grid"></div>
          <div id="architectureEditor" class="showcase-editor hidden"><textarea data-showcase-text="architecture" placeholder="支持 Markdown，例如：&#10;## 架构说明&#10;- 解析流程&#10;- 核心模块&#10;**重点内容**"></textarea><div class="showcase-editor-actions"><label class="showcase-file">＋ 选择本地图片<input type="file" accept="image/*" multiple data-showcase-file="architecture"></label><button class="primary-button add-showcase" data-block="architecture">加入本块展示</button></div><div id="architecturePending" class="showcase-pending"></div></div>
        </article>

        <article class="panel optimization-block">
          <div class="optimization-heading"><span>02</span><div><h3>主要优化方向</h3><p>按标签聚焦当前模块的工程目标</p></div><div class="optimization-tools"><button class="showcase-tool edit-showcase" data-block="direction">✎ 编辑内容</button><button class="showcase-tool auto-layout" data-block="direction">▦ 自动排版</button></div></div>
          <div id="directionShowcase" class="showcase-content layout-grid"></div>
          <div id="directionEditor" class="showcase-editor hidden"><textarea data-showcase-text="direction" placeholder="支持 Markdown：标题、列表、粗体、引用、代码与链接"></textarea><div class="showcase-editor-actions"><label class="showcase-file">＋ 选择本地图片<input type="file" accept="image/*" multiple data-showcase-file="direction"></label><button class="primary-button add-showcase" data-block="direction">加入本块展示</button></div><div id="directionPending" class="showcase-pending"></div></div>
        </article>

        <article class="panel optimization-block">
          <div class="optimization-heading"><span>03</span><div><h3>效果展示</h3><p>用图片和文字集中展示优化前后的结果</p></div><div class="optimization-tools"><button class="showcase-tool edit-showcase" data-block="effect">✎ 编辑内容</button><button class="showcase-tool auto-layout" data-block="effect">▦ 自动排版</button></div></div>
          <div id="effectShowcase" class="showcase-content layout-grid"></div>
          <div id="effectEditor" class="showcase-editor hidden"><textarea data-showcase-text="effect" placeholder="使用 Markdown 记录指标、对比结论和效果说明"></textarea><div class="showcase-editor-actions"><label class="showcase-file">＋ 选择本地图片<input type="file" accept="image/*" multiple data-showcase-file="effect"></label><button class="primary-button add-showcase" data-block="effect">加入本块展示</button></div><div id="effectPending" class="showcase-pending"></div></div>
        </article>

        <article class="optimization-summary">
          <div class="summary-main"><div class="summary-heading"><span>04 · 总结</span><div class="optimization-tools"><button class="showcase-tool edit-showcase" data-block="summary">✎ 编辑内容</button><button class="showcase-tool auto-layout" data-block="summary">▦ 自动排版</button></div></div><div id="summaryShowcase" class="showcase-content layout-grid"></div><div id="summaryEditor" class="showcase-editor hidden"><textarea data-showcase-text="summary" placeholder="使用 Markdown 输入阶段总结、经验沉淀或下一步计划"></textarea><div class="showcase-editor-actions"><label class="showcase-file">＋ 选择本地图片<input type="file" accept="image/*" multiple data-showcase-file="summary"></label><button class="primary-button add-showcase" data-block="summary">加入本块展示</button></div><div id="summaryPending" class="showcase-pending"></div></div></div>
        </article>
      </section>
    </main>
  </div>
  <dialog id="exploreTagDialog" class="accumulation-dialog"><form method="dialog"><header><div><span>DATASET TAG</span><h3>增加数据集标签</h3></div><button value="cancel" aria-label="关闭">×</button></header><label>标签名称<input id="exploreTagName" maxlength="60" placeholder="例如：图文实体对齐"></label><footer><button value="cancel" class="secondary-button">取消</button><button id="saveExploreTag" value="default" class="primary-button">增加标签</button></footer></form></dialog>
  <dialog id="accumulationDialog" class="accumulation-dialog"><form method="dialog"><header><div><span>ACCUMULATION CARD</span><h3 id="accumulationDialogTitle">新增卡片</h3></div><button value="cancel" aria-label="关闭">×</button></header><label>卡片名<input id="accumulationName" maxlength="100" placeholder="例如：入库文档"></label><div class="accumulation-form-row"><label>数据量<input id="accumulationValue" maxlength="40" placeholder="例如：141"></label><label>尾页单位<input id="accumulationUnit" maxlength="30" placeholder="例如：篇"></label></div><label id="accumulationUrlField" class="hidden">URL<input id="accumulationUrl" type="url" placeholder="https://..."></label><footer><button value="cancel" class="secondary-button">取消</button><button id="saveAccumulation" value="default" class="primary-button">保存卡片</button></footer></form></dialog>
  <div id="toast" class="toast" role="status"></div>
`;const a=e=>{const t=document.getElementById(e);if(!t)throw new Error(`缺少元素 #${e}`);return t},et=e=>{document.documentElement.dataset.appTheme=e,localStorage.setItem("nmmkg-app-theme",e),document.querySelectorAll("[data-theme-choice]").forEach(t=>{const s=t.dataset.themeChoice===e;t.classList.toggle("active",s),t.setAttribute("aria-pressed",String(s))})};document.querySelectorAll("[data-theme-choice]").forEach(e=>{e.addEventListener("click",()=>et(e.dataset.themeChoice))});et(localStorage.getItem("nmmkg-app-theme")==="aurora"?"aurora":"gold");document.querySelectorAll(".enter-workspace").forEach(e=>e.addEventListener("click",()=>{a("landingCover").classList.add("is-leaving"),window.setTimeout(()=>{a("landingCover").classList.add("hidden"),a("workspaceShell").classList.remove("hidden"),window.scrollTo({top:0,behavior:"auto"})},360)}));a("homeButton").addEventListener("click",()=>{a("workspaceShell").classList.add("hidden"),a("landingCover").classList.remove("hidden","is-leaving"),window.scrollTo({top:0,behavior:"auto"})});document.querySelectorAll(".nav-group-toggle").forEach(e=>e.addEventListener("click",()=>{const t=e.closest(".nav-group");if(!t)return;const s=t.classList.toggle("open");e.setAttribute("aria-expanded",String(s))}));const C=a("apiKey"),St=a("toggleKey"),Lt=a("saveKey"),kt=a("chooseFile"),Ct=a("chooseFolder"),Tt=a("recursive"),$t=a("recursiveLabel"),Mt=a("sourceTitle"),_e=a("sourcePath"),Oe=a("startParse"),Ie=a("openOutput"),It=a("clearLogs"),ce=a("logs"),Me=a("toast"),pe=a("startBuild"),Nt=a("verifyEmbedding"),ge=a("reingest"),le=a("buildLogs"),Ne=a("exportRdf"),Ae=a("writeNeo4j"),tt=a("replaceNeo4j"),de=a("storageLogs"),V=a("queryText"),je=a("queryMode"),Re=a("queryTopK"),qe=a("queryChunkTopK"),Fe=a("queryReferences"),Be=a("queryRerank"),Ge=a("startQuery"),z=a("imageFile"),Ke=a("imageCaptions"),De=a("startImageIndex"),at=a("startImageScore"),st=a("imageTopK"),it=a("startImageSearch"),nt=a("startImageUserQA"),A=a("entitySearchText"),me=a("syncEntityIndex"),be=a("startEntitySearch"),At=a("remoteUrl"),Dt=a("useRemoteUrl");let H=!1,Q="",ve="",M,Ue=!1,O,ze=!1,ue=null,j,He=!1,R,Ye=!1,q,F,B,G,K,U,b="",$="parse";const Pt=!0;let ot=Pt;window.setTimeout(()=>{ot=!1},1200);async function l(e,t){throw new Error("请稍后再试～")}function r(e,t=!1){ot&&t||(Me.textContent=t?"请稍后再试～":e,Me.className=`toast show${t?" error":""}`,window.setTimeout(()=>{Me.className="toast"},2800))}function fe(e=!1){Oe.disabled=e||!Q||!H&&!C.value.trim()}function rt(e,t){Q=e,ve=t,Mt.textContent=t==="file"?"已选择单个文件":t==="folder"?"已选择文件夹":"已选择远程文件链接",_e.textContent=e,_e.title=e,$t.classList.toggle("hidden",t!=="folder"),a("metricFiles").textContent=t==="folder"?"待扫描":"1",fe()}function Ot(e){H=e.configured,a("serviceState").textContent="已连接",a("serviceDot").className="online",a("metricConfig").textContent=H?"已连接":"未配置";const t=a("keyBadge");t.textContent=H?"已配置":"未配置",t.className=`badge ${H?"success":"neutral"}`,Ie.textContent=e.outputDir,Ie.title=e.outputDir,jt(e.job),fe(e.job.state==="running")}function jt(e){const t=e.state==="running",s=e.succeeded+e.failed,i=e.total>0?Math.round(s/e.total*100):0;$==="parse"&&(a("headerStatus").textContent=t?"解析进行中":e.state==="failed"?"任务异常":"就绪",a("headerDot").className=t?"pulse":e.state==="failed"?"danger":""),a("jobMessage").textContent=e.message||"等待提交任务";const n=a("jobBadge");n.textContent=e.state.toUpperCase(),n.className=`badge ${e.state==="done"?"success":e.state==="failed"?"danger":t?"running":"neutral"}`,a("metricFiles").textContent=e.total?String(e.total):ve==="file"?"1":Q?"待扫描":"0",a("metricSuccess").textContent=String(e.succeeded),a("metricFailed").textContent=String(e.failed),a("completeCount").textContent=`${s} / ${e.total}`,a("parseElapsed").textContent=Je(e.elapsedSeconds),a("parseRate").textContent=`${e.itemsPerSecond.toFixed(3)} items/s`,a("parseAverage").textContent=`${e.secondsPerItem.toFixed(2)} s/item`,a("progressValue").textContent=t&&e.total===0?"…":`${i}%`,a("progressRing").style.setProperty("--progress",`${i*3.6}deg`),Oe.innerHTML=t?"<span class='spinner'></span> 正在解析":"<span>✦</span> 开始解析",fe(t),!Ue&&e.logs.length&&(ce.innerHTML=e.logs.map(o=>`<p><span>›</span>${d(o)}</p>`).join(""),ce.scrollTop=ce.scrollHeight),t&&!M&&(M=window.setInterval(Y,1200)),!t&&M&&(window.clearInterval(M),M=void 0)}function d(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function Rt(e){const t=c=>d(c).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),s=e.replace(/\r/g,"").split(`
`),i=[];let n=null;const o=()=>{n&&i.push(`</${n}>`),n=null};for(const c of s){const u=c.match(/^\s*[-*+]\s+(.+)$/),g=c.match(/^\s*\d+[.)]\s+(.+)$/);if(u||g){const v=u?"ul":"ol";n!==v&&(o(),n=v,i.push(`<${v}>`)),i.push(`<li>${t((u??g)[1])}</li>`);continue}if(o(),!c.trim()){i.push("<br>");continue}const E=c.match(/^(#{1,3})\s+(.+)$/);if(E){const v=E[1].length+1;i.push(`<h${v}>${t(E[2])}</h${v}>`);continue}const y=c.match(/^>\s?(.*)$/);if(y){i.push(`<blockquote>${t(y[1])}</blockquote>`);continue}i.push(`<p>${t(c)}</p>`)}return o(),i.join("")}function Je(e){if(e<60)return`${e.toFixed(2)}s`;const t=Math.floor(e/3600),s=Math.floor(e%3600/60),i=e%60;return`${t?`${t}h `:""}${s}m ${i.toFixed(1)}s`}async function Y(){try{const e=await l("/api/status");Ot(e)}catch(e){a("serviceState").textContent="连接失败",a("serviceDot").className="offline",M||r(e instanceof Error?e.message:String(e),!0)}}St.addEventListener("click",()=>{C.type=C.type==="password"?"text":"password"});C.addEventListener("input",()=>fe());Lt.addEventListener("click",async()=>{const e=C.value.trim();if(!e)return r("请输入新的 MinerU API Key",!0);try{await l("/api/config/key",{method:"POST",body:JSON.stringify({apiKey:e})}),C.value="",r("API Key 已保存，旧配置已进入 checkpoint"),await Y()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});async function ct(e){try{const t=await l(`/api/dialog/${e}`,{method:"POST",body:"{}"});t.path&&rt(t.path,e)}catch(t){r(t instanceof Error?t.message:String(t),!0)}}kt.addEventListener("click",()=>{ct("file")});Ct.addEventListener("click",()=>{ct("folder")});Dt.addEventListener("click",()=>{const e=At.value.trim();if(!/^https?:\/\/.+/.test(e))return r("请输入 http(s) 格式的远程文件直链",!0);rt(e,"url")});Oe.addEventListener("click",async()=>{const e=C.value.trim();try{Ue=!1;const s=await l(ve==="url"?"/api/parse/url":"/api/parse",{method:"POST",body:JSON.stringify(ve==="url"?{url:Q,apiKey:e||void 0}:{path:Q,recursive:Tt.checked,apiKey:e||void 0})});C.value="",r(s.message??"解析任务已启动"),await Y()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});Ie.addEventListener("click",async()=>{try{await l("/api/open-output",{method:"POST",body:"{}"})}catch(e){r(e instanceof Error?e.message:String(e),!0)}});It.addEventListener("click",()=>{Ue=!0,ce.innerHTML='<p class="terminal-empty">日志显示已清空，不影响后台任务。</p>'});Y();function qt(e){ue=e.inventory;const{inventory:t,job:s}=e;a("corpusTotal").textContent=String(t.total),a("corpusIngested").textContent=String(t.ingested),a("corpusPending").textContent=String(t.pending);const i=s.state==="running";$==="build"&&(a("headerStatus").textContent=i?"构建进行中":s.state==="failed"?"构建异常":"就绪",a("headerDot").className=i?"pulse":s.state==="failed"?"danger":"");const n=ge.checked?t.total:t.pending;pe.disabled=i||n===0,pe.innerHTML=i?"<span class='spinner'></span> 正在构建":"<span>⌘</span> 开始构建";const o=a("buildBadge");o.textContent=i?"BUILDING":s.state==="failed"?"FAILED":t.pending?"READY":t.total?"SYNCED":"EMPTY",o.className=`badge ${i?"running":s.state==="failed"?"danger":t.total?"success":"neutral"}`,a("buildMessage").textContent=s.message||"等待构建 N-MMKG";const c=s.succeeded+s.failed,u=s.total?Math.round(c/s.total*100):0;a("buildCount").textContent=`${c} / ${s.total}`,a("buildProgressBar").style.width=`${u}%`,a("buildElapsed").textContent=Je(s.elapsedSeconds),a("buildRate").textContent=`${s.itemsPerSecond.toFixed(3)} items/s`,a("buildAverage").textContent=`${s.secondsPerItem.toFixed(2)} s/item`,a("buildDocuments").innerHTML=t.items.length?t.items.map(g=>`<div class="document-item"><span>${d(g.name)}</span><em class="${g.ingested?"done":"pending"}">${g.ingested?"已入库":"待构建"}</em></div>`).join(""):'<p class="terminal-empty">请先使用 MinerU 解析文档</p>',!ze&&s.logs.length&&(le.innerHTML=s.logs.map(g=>`<p><span>›</span>${d(g)}</p>`).join(""),le.scrollTop=le.scrollHeight),i&&!O&&(O=window.setInterval(X,1200)),!i&&O&&(window.clearInterval(O),O=void 0)}async function X(){try{qt(await l("/api/mmkg/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}pe.addEventListener("click",async()=>{try{ze=!1;const e=await l("/api/mmkg/build",{method:"POST",body:JSON.stringify({verifyEmbedding:Nt.checked,reingest:ge.checked})});r(e.message??"N-MMKG 构建任务已启动"),await X()}catch(e){r(e instanceof Error?e.message:String(e),!0)}});ge.addEventListener("change",()=>{ue&&(pe.disabled=(ge.checked?ue.total:ue.pending)===0)});a("refreshCorpus").addEventListener("click",()=>{X()});a("openMmkgOutput").addEventListener("click",async()=>{try{await l("/api/mmkg/open-output",{method:"POST",body:"{}"})}catch(e){r(e instanceof Error?e.message:String(e),!0)}});a("clearBuildLogs").addEventListener("click",()=>{ze=!0,le.innerHTML='<p class="terminal-empty">构建日志显示已清空，不影响后台任务。</p>'});function lt(e){if(!e)return"0 B";const t=["B","KB","MB","GB"],s=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**s).toFixed(s?2:0)} ${t[s]}`}function Ft(e){const{rdf:t,neo4j:s}=e.storage,{job:i}=e,n=i.state==="running";$==="storage"&&(a("headerStatus").textContent=n?"存储任务进行中":i.state==="failed"?"存储异常":"就绪",a("headerDot").className=n?"pulse":i.state==="failed"?"danger":"");const o=a("storageBadge");o.textContent=n?"RUNNING":i.state==="failed"?"FAILED":"READY",o.className=`badge ${n?"running":i.state==="failed"?"danger":"success"}`,a("rdfState").textContent=t.exists?"已生成":"尚未生成",a("rdfState").className=t.exists?"status-good":"status-muted",a("rdfSize").textContent=lt(t.sizeBytes),a("rdfUpdated").textContent=t.updatedAt?new Date(t.updatedAt).toLocaleString("zh-CN"):"—";const c=a("rdfPath");c.textContent=t.path,c.title=t.path,a("openRdf").toggleAttribute("disabled",!t.exists||n),a("neo4jState").textContent=s.reachable?"可连接":"未连接",a("neo4jState").className=s.reachable?"status-good":"status-danger",a("neo4jUri").textContent=s.uri,a("neo4jDatabase").textContent=s.database,Ne.disabled=n,Ae.disabled=n||!s.reachable,tt.disabled=n,a("storageMessage").textContent=i.message||"等待提交",a("storageElapsed").textContent=Je(i.elapsedSeconds),a("storageResult").textContent=`${i.succeeded} 成功 / ${i.failed} 失败`,Ne.innerHTML=n&&i.inputPath==="rdf"?"<span class='spinner'></span> 正在导出":"生成 .ttl",Ae.innerHTML=n&&i.inputPath==="neo4j"?"<span class='spinner'></span> 正在写入":"写入 Neo4j",!He&&i.logs.length&&(de.innerHTML=i.logs.map(u=>`<p><span>›</span>${d(u)}</p>`).join(""),de.scrollTop=de.scrollHeight),n&&!j&&(j=window.setInterval(Z,1200)),!n&&j&&(window.clearInterval(j),j=void 0)}async function Z(){try{Ft(await l("/api/storage/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}async function dt(e){try{He=!1;const s=await l(e==="rdf"?"/api/storage/rdf":"/api/storage/neo4j",{method:"POST",body:JSON.stringify({replace:e==="neo4j"&&tt.checked})});r(s.message??"存储任务已启动"),await Z()}catch(t){r(t instanceof Error?t.message:String(t),!0)}}Ne.addEventListener("click",()=>{dt("rdf")});Ae.addEventListener("click",()=>{dt("neo4j")});a("refreshStorage").addEventListener("click",()=>{Z()});a("openRdf").addEventListener("click",async()=>{try{await l("/api/storage/open-rdf",{method:"POST",body:"{}"})}catch(e){r(e instanceof Error?e.message:String(e),!0)}});a("rdfPath").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(a("rdfPath").textContent??""),r("TTL 路径已复制")}catch{r("无法访问剪贴板，请手动复制路径",!0)}});a("clearStorageLogs").addEventListener("click",()=>{He=!0,de.innerHTML='<p class="terminal-empty">存储日志显示已清空，不影响后台任务。</p>'});function Bt(e){Ye||(je.value=e.mode,Re.value=String(e.top_k),qe.value=String(e.chunk_top_k),Fe.checked=e.include_references,Be.checked=e.enable_rerank,Ye=!0)}function Gt(e){Bt(e.defaults);const{job:t}=e,s=t.state==="running",i=a("queryBadge");i.textContent=s?"召回中":t.state==="done"?"已完成":t.state==="failed"?"失败":"等待提问",i.className=`badge ${s?"running":t.state==="done"?"success":t.state==="failed"?"danger":"neutral"}`,a("queryMessage").textContent=t.message,a("queryElapsed").textContent=`${t.elapsedSeconds.toFixed(2)}s`;const n=a("queryAnswer"),o=a("queryError");t.answer&&(n.textContent=t.answer,n.classList.add("has-answer")),o.textContent=t.error,o.classList.toggle("hidden",!t.error),Ge.disabled=s||!V.value.trim(),V.disabled=s,je.disabled=s,Re.disabled=s,qe.disabled=s,Fe.disabled=s,Be.disabled=s,$==="query"&&(a("headerStatus").textContent=s?"正在召回":t.state==="failed"?"查询异常":"就绪",a("headerDot").className=s?"pulse":t.state==="failed"?"danger":""),s&&!R&&(R=window.setInterval(()=>{ye()},1e3)),!s&&R&&(window.clearInterval(R),R=void 0)}async function ye(){try{Gt(await l("/api/rag/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}V.addEventListener("input",()=>{Ge.disabled=!V.value.trim()});Ge.addEventListener("click",async()=>{const e=Number(Re.value),t=Number(qe.value);if(!Number.isInteger(e)||e<1||e>200||!Number.isInteger(t)||t<1||t>200)return r("Top-K 参数必须是 1 到 200 之间的整数",!0);try{a("queryAnswer").innerHTML="<p>正在检索实体、关系和文本切片…</p>",a("queryError").classList.add("hidden");const s=await l("/api/rag/query",{method:"POST",body:JSON.stringify({query:V.value.trim(),mode:je.value,topK:e,chunkTopK:t,includeReferences:Fe.checked,enableRerank:Be.checked,enableVlm:!1,onlyNeedContext:!1})});r(s.message??"召回任务已启动"),await ye()}catch(s){r(s instanceof Error?s.message:String(s),!0)}});function ut(){return Ke.value.split(/\r?\n/).map(e=>e.trim()).filter(Boolean)}function ee(e=!1){at.disabled=e||!b||ut().length===0,it.disabled=e||!b,nt.disabled=e||!b}function Kt(e){const{inventory:t,job:s}=e,i=s.state==="running",n=a("imageIndexInfo");if(i)n.textContent=`${s.message}（${s.elapsedSeconds.toFixed(2)}s）`;else if(s.state==="failed")n.textContent=`同步失败：${s.error||s.message}`;else if(t.exists){const o=t.graphProjectionStale?"向量库已更新：请到“图谱存储”重新导出 RDF；如需 Neo4j 向量属性，也请重新写入 Neo4j。":"RDF 已包含 CLIP 向量引用；Neo4j 写入时会包含原始 clipVector 属性。";n.textContent=`已建立 ${t.linked} 个图谱图片节点的 FG-CLIP2 向量索引。${t.excludedLegacy?`已排除 ${t.excludedLegacy} 条历史孤立向量。`:"全部向量均可回链 N-MMKG。"}${o}`}else n.textContent=t.rdfReady?"尚未同步图谱图片向量。请点击“同步图谱图片”。":"请先完成 RDF 存储，再同步图谱图片向量。";De.disabled=i||!t.rdfReady,De.innerHTML=i?"<span class='spinner'></span> 正在同步":"<span>↻</span> 同步图谱图片",i&&!F&&(F=window.setInterval(()=>{we()},900)),!i&&F&&(window.clearInterval(F),F=void 0)}async function we(){try{Kt(await l("/api/image/index/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}function Ut(e){const{job:t}=e,s=t.state==="running",i=a("imageBadge");i.textContent=s?"匹配中":t.state==="done"?"已完成":t.state==="failed"?"失败":"等待图片",i.className=`badge ${s?"running":t.state==="done"?"success":t.state==="failed"?"danger":"neutral"}`,a("imageMessage").textContent=t.message,a("imageElapsed").textContent=`${t.elapsedSeconds.toFixed(2)}s`,a("imageError").textContent=t.error,a("imageError").classList.toggle("hidden",!t.error);const n=a("imageVectorInfo");n.textContent=t.vectorDim?`已生成 ${t.vectorDim} 维 L2 归一化图片向量：${t.vectorPath}`:"用户图片只作为查询向量，不会写入知识库。";const o=a("imageResults");o.innerHTML=t.results.length?t.results.map(c=>`<div class="image-score-row"><div><strong>${d(c.caption)}</strong><span>${c.percent.toFixed(2)}%</span></div><i><b style="width:${Math.max(0,Math.min(100,c.percent))}%"></b></i></div>`).join(""):"<p>填写多条候选描述后，结果会按匹配概率从高到低显示。</p>",z.disabled=s,Ke.disabled=s,ee(s),$==="image"&&(a("headerStatus").textContent=s?"正在理解图片":t.state==="failed"?"图片任务异常":"就绪",a("headerDot").className=s?"pulse":t.state==="failed"?"danger":""),s&&!q&&(q=window.setInterval(()=>{xe()},800)),!s&&q&&(window.clearInterval(q),q=void 0)}async function xe(){try{Ut(await l("/api/image/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}z.addEventListener("change",async()=>{const e=z.files?.[0];if(!e)return;if(!e.type.startsWith("image/")){r("请选择图片文件",!0),z.value="";return}if(e.size>8*1024*1024){r("图片不能超过 8 MB",!0),z.value="";return}b=await new Promise((s,i)=>{const n=new FileReader;n.onload=()=>s(String(n.result)),n.onerror=()=>i(new Error("读取图片失败")),n.readAsDataURL(e)}),a("imageFileName").textContent=`${e.name} · ${lt(e.size)}`;const t=a("imagePreview");t.src=b,t.classList.remove("hidden"),ee()});Ke.addEventListener("input",()=>ee());De.addEventListener("click",async()=>{try{const e=await l("/api/image/index",{method:"POST",body:"{}"});r(e.message??"图谱图片向量同步已启动"),await we()}catch(e){r(e instanceof Error?e.message:String(e),!0)}});at.addEventListener("click",async()=>{const e=ut();if(!b||!e.length)return r("请先上传图片并填写至少一条描述",!0);try{a("imageResults").innerHTML="<p>正在生成图片向量并计算候选描述匹配度…</p>",a("imageError").classList.add("hidden");const t=await l("/api/image/score",{method:"POST",body:JSON.stringify({imageData:b,captions:e})});r(t.message??"图片描述匹配任务已启动"),await xe()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});function zt(e){const{job:t}=e,s=t.state==="running",i=a("imageSearchResults");t.results.length?i.innerHTML=t.results.map(n=>{const o=n.context?.attributes??{},c=(o.semanticDescription??o.caption??[""])[0],u=(n.context?.neighbors??[]).map(g=>g.label).filter(Boolean).slice(0,6);return`<article class="image-hit"><img class="image-hit-thumb" src="/api/image/asset?vectorIndex=${n.vector_index}" alt="Top ${n.rank} 相似图片" loading="lazy" /><div class="image-hit-body"><div><b>TOP ${n.rank}</b><strong>${(n.score*100).toFixed(2)}%</strong></div><p>${d(c||n.image_path)}</p><small>文档：${d(n.source_document_id??"未知")} · 页码：${n.page_idx??"—"}</small><em>${u.map(d).join(" · ")||"未发现关联实体"}</em></div></article>`}).join(""):s?i.innerHTML="<p>正在检索图片向量，并回链 N-MMKG 图谱上下文…</p>":t.error&&(i.innerHTML="<p>检索失败，请查看错误信息。</p>"),a("imageMessage").textContent=t.message,a("imageElapsed").textContent=`${t.elapsedSeconds.toFixed(2)}s`,t.error&&(a("imageError").textContent=t.error,a("imageError").classList.remove("hidden")),ee(s),s&&!B&&(B=window.setInterval(()=>{pt()},800)),!s&&B&&(window.clearInterval(B),B=void 0)}async function pt(){try{zt(await l("/api/image/search/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}it.addEventListener("click",async()=>{const e=Number(st.value);if(!b||!Number.isInteger(e)||e<1||e>50)return r("请上传图片，并设置 1 到 50 的 Top-K",!0);try{const t=await l("/api/image/search",{method:"POST",body:JSON.stringify({imageData:b,topK:e})});r(t.message??"以图搜图已启动"),await pt()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});function Ht(e){const{job:t}=e,s=t.state==="running",i=a("imageUserQAResults"),n=t.clipResults.map(o=>{const c=o.context?.attributes??{},u=Object.entries(c).flatMap(([y,v])=>v.map($e=>`${y}: ${$e}`)),E=(o.context?.neighbors??[]).filter(y=>y.label).slice(0,8).map(y=>{const v=Object.entries(y.properties??{}).flatMap(([$e,xt])=>xt.map(Et=>`${$e}: ${Et}`));return`${y.relation} → ${y.label}${v.length?`（${v.join("；")}）`:""}`});return`<article class="image-user-hit"><img src="/api/image/asset?vectorIndex=${o.vector_index}" alt="Top ${o.rank} 相似图片" loading="lazy" /><div><header><b>CLIP TOP ${o.rank}</b><strong>${(o.score*100).toFixed(2)}%</strong></header><p>${d(o.image_path)}</p><small>图片节点属性：${d(u.join("；")||"该图片尚未关联 RDF 节点属性")}</small><em>一跳节点内容：${d(E.join(" ｜ ")||"未发现关联实体")}</em></div></article>`}).join("");if(s)i.innerHTML="<p>正在并行调用 VLM 生成描述，并用 FG-CLIP2 检索相似图片节点…</p>";else if(t.state==="done"){const o=t.vlmDescription?`<section class="image-user-vlm"><b>VLM 简短描述</b><p>${d(t.vlmDescription)}</p></section>`:`<section class="image-user-vlm error"><b>VLM 简短描述未返回</b><p>${d(t.vlmError||"视觉模型未返回内容")}</p></section>`;i.innerHTML=`${o}<section class="image-user-clip"><header><b>FG-CLIP2 相似图片节点 · Top ${t.clipResults.length}</b><small>以下展示图片节点在 RDF 图谱中的属性及关联节点</small></header>${n||"<p>未找到图片节点。</p>"}</section>`}else t.error&&(i.innerHTML=`<p>图片双路处理失败：${d(t.error)}</p>`);a("imageMessage").textContent=t.message,a("imageElapsed").textContent=`${t.elapsedSeconds.toFixed(2)}s`,ee(s),s&&!G&&(G=window.setInterval(()=>{gt()},900)),!s&&G&&(window.clearInterval(G),G=void 0)}async function gt(){try{Ht(await l("/api/image/user-qa/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}nt.addEventListener("click",async()=>{const e=Number(st.value);if(!b||!Number.isInteger(e)||e<1||e>50)return r("请上传图片，并设置 1 到 50 的 Top-K",!0);try{a("imageUserQAResults").innerHTML="<p>正在并行启动 VLM 描述与 CLIP 图片节点检索…</p>";const t=await l("/api/image/user-qa",{method:"POST",body:JSON.stringify({imageData:b,topK:e})});r(t.message??"图片双路任务已启动"),await gt()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});function Jt(e){const{inventory:t,job:s}=e,i=s.state==="running",n=a("entityBadge");n.textContent=i?"同步中":s.state==="failed"?"同步失败":t.exists?t.stale?"需要同步":"索引就绪":"等待同步",n.className=`badge ${i?"running":s.state==="failed"?"danger":t.exists&&!t.stale?"success":"neutral"}`;const o=a("entityIndexInfo");i?o.textContent=`${s.message}（${s.elapsedSeconds.toFixed(2)}s）`:s.state==="failed"?o.textContent=`同步失败：${s.error||s.message}`:t.graphExists?t.exists?o.textContent=`已缓存 ${t.total} 个实体名称的 ${t.dimension} 维向量。${t.stale?"Baseline 图谱已更新，可点击同步仅补算新增/改名实体。":"当前索引与 Baseline 图谱同步。"}`:o.textContent=`检测到 Baseline 图谱：${t.graphPath}。尚未建立独立实体名称向量库。`:o.textContent="Baseline 尚未生成 GraphML。请先在 baseline 中完成至少一篇 Markdown 建库。",me.disabled=i||!t.graphExists,me.innerHTML=i?"<span class='spinner'></span> 正在同步":"<span>↻</span> 同步实体向量库",be.disabled=i||!t.exists||!A.value.trim(),$==="entity"&&(a("headerStatus").textContent=i?"实体向量同步中":s.state==="failed"?"实体索引异常":"就绪",a("headerDot").className=i?"pulse":s.state==="failed"?"danger":""),i&&!K&&(K=window.setInterval(()=>{Ee()},900)),!i&&K&&(window.clearInterval(K),K=void 0)}async function Ee(){try{Jt(await l("/api/baseline/entities/index/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}function Vt(e){const{job:t}=e,s=t.state==="running";a("entityMessage").textContent=t.message,a("entityElapsed").textContent=`${t.elapsedSeconds.toFixed(2)}s`;const i=a("entityResults");s?i.innerHTML="<p>正在生成输入实体名称的向量，并与本地缓存的 Baseline 实体向量进行匹配…</p>":t.results.length?i.innerHTML=t.results.map(n=>`<article class="entity-hit${n.rank===1?" top-hit":""}"><header><b>TOP ${n.rank}</b><strong>${n.percent.toFixed(2)}%</strong></header><h4>${d(n.entity_name)}</h4><p>${d(n.entity_type||"未标注类型")} · 余弦相似度 ${n.similarity.toFixed(4)}</p></article>`).join(""):t.error&&(i.innerHTML="<p>检索失败，请查看错误信息。</p>"),a("entityError").textContent=t.error,a("entityError").classList.toggle("hidden",!t.error),A.disabled=s,me.disabled=s,be.disabled=s||!A.value.trim(),$==="entity"&&(a("headerStatus").textContent=s?"实体名称匹配中":t.state==="failed"?"实体检索异常":"就绪",a("headerDot").className=s?"pulse":t.state==="failed"?"danger":""),s&&!U&&(U=window.setInterval(()=>{Se()},800)),!s&&U&&(window.clearInterval(U),U=void 0)}async function Se(){try{Vt(await l("/api/baseline/entities/search/status"))}catch(e){r(e instanceof Error?e.message:String(e),!0)}}A.addEventListener("input",()=>{be.disabled=!A.value.trim()});me.addEventListener("click",async()=>{try{const e=await l("/api/baseline/entities/index",{method:"POST",body:"{}"});r(e.message??"Baseline 实体向量同步已启动"),await Ee()}catch(e){r(e instanceof Error?e.message:String(e),!0)}});be.addEventListener("click",async()=>{const e=A.value.trim();if(!e)return r("请输入实体名称",!0);try{a("entityResults").innerHTML="<p>正在匹配 Top-10 Baseline 实体…</p>";const t=await l("/api/baseline/entities/search",{method:"POST",body:JSON.stringify({entityName:e})});r(t.message??"实体名称检索已启动"),await Se()}catch(t){r(t instanceof Error?t.message:String(t),!0)}});const Qt={parse:{eyebrow:"MULTIMODAL INGESTION",title:"让散落的知识，汇入同一片语义之海",description:"选择本地文档，经 MinerU 完成版面、表格、公式与图片解析，为后续知识网络构建准备标准化内容。"},build:{eyebrow:"NATIVE LIGHTRAG PIPELINE",title:"从结构化文档，生长出可查询的知识网络",description:"直接消费 MinerU content_list，完成多模态语义分析、实体关系抽取、向量化与图结构持久化。"},storage:{eyebrow:"GRAPH PERSISTENCE",title:"让同一张图，在开放标准与图数据库中流动",description:"导出 Richpedia 风格 RDF/Turtle，或将统一多模态节点、关系与来源 Chunk 写入 Neo4j。"},query:{eyebrow:"RETRIEVAL AUGMENTED GENERATION",title:"向知识网络提问，让证据参与回答",description:"通过 LightRAG 联合召回实体、关系和文本切片，并使用现有语言模型生成带来源的文本回答。"},image:{eyebrow:"FG-CLIP2 IMAGE ENCODING",title:"用图片向量命中图谱节点",description:"库内图片先绑定 N-MMKG 节点，再由 FG-CLIP2 建立向量索引；用户图片只做检索，通过命中节点返回图谱上下文。"},entity:{eyebrow:"BASELINE ENTITY VECTOR RETRIEVAL",title:"把实体名称变成可直观看到的相似度",description:"独立维护 Baseline LightRAG 实体名称向量库；输入一个名称后，仅计算这一次 Query 向量并返回最相近的十个实体。"},optimize:{eyebrow:"OPTIMIZATION ROADMAP",title:"聚焦关键链路，让知识图谱持续变轻、变准",description:"从文档解析、Reflect增强、实体消歧到图片向量检索，集中查看各模块的架构位置、优化目标与效果指标。"},projects:{eyebrow:"PROJECT CONSTELLATION",title:"把项目进展，沉淀成可以持续点亮的星图",description:"用节点组织 N-MMKG 的关键里程碑，记录每个阶段的进度、思考与成果文稿。"},explore:{eyebrow:"LOCAL DATASET EXPLORER",title:"逐条查看数据，让每一份测评样本都清晰可读",description:"自由创建数据集标签，分别绑定本地 JSONL 文件，并逐条检查其中的数据内容。"},accumulation:{eyebrow:"QUANTIFIED ACHIEVEMENTS",title:"把持续积累，变成一眼可见的成果",description:"集中呈现数据沉淀、文档积累与专利论文，用醒目的量化卡片记录项目进展。"},annotation:{eyebrow:"MULTIMODAL RAG EVALUATION ANNOTATION",title:"从真实问题出发，构造可信的测评数据",description:"标注 Query、标准 Answer、多条证据 Cue 与可选图片路径，形成可直接进入测评管线的 JSONL 数据集。"},configdetails:{eyebrow:"LOCAL CONFIGURATION INVENTORY",title:"把散落的配置，整理成一眼可查的参数明细",description:"绑定本地 YAML 配置文件，横向浏览全部参数，并通过别名、备注和搜索快速定位关键配置。"}};function m(e){$=e;for(const s of["parse","build","storage","query","image","entity","optimize","projects","explore","accumulation","annotation","configdetails"]){a(`${s}Workspace`).classList.toggle("hidden",s!==e);const i=a(`nav${s[0].toUpperCase()}${s.slice(1)}`);i.classList.toggle("active",s===e),i.classList.toggle("active-secondary",s!==e)}const t=Qt[e];a("metricGrid").classList.toggle("hidden",["optimize","projects","explore","accumulation","annotation","configdetails"].includes(e)),a("heroEyebrow").textContent=t.eyebrow,a("heroTitle").textContent=t.title,a("heroDescription").textContent=t.description,e==="parse"&&Y(),e==="build"&&X(),e==="storage"&&Z(),e==="query"&&ye(),e==="image"&&(xe(),we()),e==="entity"&&(Ee(),Se())}a("navParse").addEventListener("click",()=>m("parse"));a("navBuild").addEventListener("click",()=>m("build"));a("navStorage").addEventListener("click",()=>m("storage"));a("navQuery").addEventListener("click",()=>m("query"));a("navImage").addEventListener("click",()=>m("image"));a("navEntity").addEventListener("click",()=>m("entity"));a("navOptimize").addEventListener("click",()=>m("optimize"));a("navProjects").addEventListener("click",()=>m("projects"));a("navExplore").addEventListener("click",()=>m("explore"));a("navAccumulation").addEventListener("click",()=>m("accumulation"));a("navAnnotation").addEventListener("click",()=>m("annotation"));a("navConfigdetails").addEventListener("click",()=>m("configdetails"));let S=[];const te={};let p="";function mt(){return S.find(e=>e.id===p)?.name??"数据集"}function Ve(){a("exploreTabs").innerHTML=S.map(e=>`<button class="explore-tab${e.id===p?" active":""}" data-explore-track="${e.id}">${d(e.name)}</button>`).join("")}function vt(e){a("datasetTitle").textContent=`${mt()} 数据集`,a("datasetMeta").textContent=e.bound?`${e.name} · 共 ${e.total} 条`:"尚未绑定 JSONL 数据集",a("datasetEmpty").classList.toggle("hidden",e.bound),a("datasetViewer").classList.toggle("hidden",!e.bound),e.bound&&(te[p]=e.index,a("datasetRecordLabel").textContent=`第 ${e.total?e.index+1:0} 条`,a("datasetTotal").textContent=`/ ${e.total}`,a("datasetIndex").value=String(e.total?e.index+1:0),a("datasetIndex").max=String(e.total),a("datasetPrev").disabled=e.index<=0,a("datasetNext").disabled=e.index>=e.total-1,a("datasetRecord").textContent=e.item===null?"该数据集为空":JSON.stringify(e.item,null,2))}async function D(e=te[p]??0){if(!p){a("datasetTitle").textContent="请选择数据集标签",a("datasetMeta").textContent="增加标签后即可绑定 JSONL 数据集",a("datasetViewer").classList.add("hidden"),a("datasetEmpty").classList.remove("hidden");return}try{const t=await l(`/api/optimization-dataset?track=${p}&index=${e}`);vt(t)}catch(t){r(t instanceof Error?t.message:"数据集读取失败",!0)}}a("exploreTabs").addEventListener("click",e=>{const t=e.target.closest("[data-explore-track]");t&&(p=t.dataset.exploreTrack??"",Ve(),D())});async function Wt(){try{S=(await l("/api/optimization-dataset/tags")).tags,!p&&S.length&&(p=S[0].id),Ve(),D()}catch(e){r(e instanceof Error?e.message:"标签读取失败",!0)}}a("addExploreTag").addEventListener("click",()=>{a("exploreTagName").value="",a("exploreTagDialog").showModal()});a("saveExploreTag").addEventListener("click",async e=>{e.preventDefault();const t=a("exploreTagName").value.trim();if(!t){r("请输入标签名称",!0);return}try{S=(await l("/api/optimization-dataset/tags",{method:"POST",body:JSON.stringify({name:t})})).tags,p=S[S.length-1].id,Ve(),a("exploreTagDialog").close(),D(),r("数据集标签已增加")}catch(s){r(s instanceof Error?s.message:"标签增加失败",!0)}});a("datasetFile").addEventListener("change",async e=>{const t=e.target,s=t.files?.[0];if(s){if(!p){r("请先增加并选择一个标签",!0),t.value="";return}try{const i=await s.text(),n=await l("/api/optimization-dataset/bind",{method:"POST",body:JSON.stringify({track:p,name:s.name,content:i})});te[p]=0,vt({...n,bound:!0}),r(`${mt()} 数据集已绑定`)}catch(i){r(i instanceof Error?i.message:"数据集绑定失败",!0)}finally{t.value=""}}});a("datasetPrev").addEventListener("click",()=>{D(Math.max(0,te[p]-1))});a("datasetNext").addEventListener("click",()=>{D(te[p]+1)});a("datasetIndex").addEventListener("change",e=>{D(Math.max(0,Number(e.target.value)-1))});a("openDatasetFolder").addEventListener("click",async()=>{if(!p){r("请先选择数据集标签",!0);return}try{await l("/api/optimization-dataset/open",{method:"POST",body:JSON.stringify({track:p})}),r("已打开本地数据文件夹")}catch(e){r(e instanceof Error?e.message:"本地数据不存在",!0)}});Wt();const L={data:[],documents:[],research:[]};let J=null;function _t(e){try{const t=new URL(e);return["http:","https:"].includes(t.protocol)?t.href:""}catch{return""}}function Le(){["data","documents","research"].forEach(e=>{const t=a(`${e}Cards`),s=L[e];t.innerHTML=s.length?s.map(i=>{const n=_t(i.url);return`<article class="accumulation-card"><div class="accumulation-card-tools"><button data-accumulation-edit="${e}" data-id="${i.id}" title="修改">✎</button><button data-accumulation-delete="${e}" data-id="${i.id}" title="删除">×</button></div><span>${d(i.name)}</span><div><strong>${d(i.value)}</strong><em>${d(i.unit)}</em></div>${n?`<a href="${d(n)}" target="_blank" rel="noopener noreferrer">访问文档 ↗</a>`:""}</article>`}).join(""):'<div class="accumulation-empty">尚无卡片，点击“新增卡片”开始记录</div>'})}async function ht(){try{const e=await l("/api/accumulation",{method:"POST",body:JSON.stringify({state:L})});return Object.assign(L,e.state),!0}catch(e){const t=e instanceof Error?e.message:"成果卡片保存失败";return r(t.includes("接口不存在")?"当前后端尚未更新，请重新启动 Demo 后端后再保存":t,!0),!1}}async function Yt(){try{const e=await l("/api/accumulation");Object.assign(L,e.state),Le()}catch(e){r(e instanceof Error?e.message:"成果卡片读取失败",!0)}}function bt(e,t){J={section:e,id:t?.id??null},a("accumulationDialogTitle").textContent=t?"修改卡片":"新增卡片",a("accumulationName").value=t?.name??"",a("accumulationValue").value=t?.value??"",a("accumulationUnit").value=t?.unit??"",a("accumulationUrl").value=t?.url??"",a("accumulationUrlField").classList.toggle("hidden",e!=="documents"),a("accumulationDialog").showModal()}document.querySelectorAll(".add-accumulation").forEach(e=>e.addEventListener("click",()=>bt(e.dataset.section)));a("accumulationWorkspace").addEventListener("click",async e=>{const t=e.target.closest("[data-accumulation-edit]");if(t){const n=t.dataset.accumulationEdit,o=L[n].find(c=>c.id===t.dataset.id);o&&bt(n,o);return}const s=e.target.closest("[data-accumulation-delete]");if(!s)return;const i=s.dataset.accumulationDelete;L[i]=L[i].filter(n=>n.id!==s.dataset.id),await ht(),Le()});a("saveAccumulation").addEventListener("click",async e=>{if(e.preventDefault(),!J)return;const t=a("accumulationName").value.trim(),s=a("accumulationValue").value.trim(),i=a("accumulationUnit").value.trim(),n=J.section==="documents"?a("accumulationUrl").value.trim():"";if(!t||!s){r("请填写卡片名和数据量",!0);return}const o=L[J.section],c=o.find(u=>u.id===J.id);c?Object.assign(c,{name:t,value:s,unit:i,url:n}):o.push({id:`${Date.now()}-${Math.random()}`,name:t,value:s,unit:i,url:n}),await ht()&&(Le(),a("accumulationDialog").close(),r("成果卡片已保存"))});Le();Yt();let f=[],T=[],he=null;function W(){he=null,T=[],a("annotationFormTitle").textContent="新增测评标注",a("annotationQuery").value="",a("annotationAnswer").value="",a("annotationCue").value="",a("annotationSaveStatus").textContent="",ae()}function ae(){a("annotationImagePaths").innerHTML=T.length?T.map((e,t)=>`<span title="${d(e)}">${d(e)}<button data-remove-annotation-image="${t}">×</button></span>`).join(""):"<em>未选择图片，本条数据将作为纯文本 Query</em>"}function se(){a("annotationCount").textContent=`共 ${f.length} 条`,a("annotationList").innerHTML=f.length?f.map((e,t)=>`<article class="annotation-item"><header><span>#${String(t+1).padStart(3,"0")}</span><div><button data-edit-annotation="${t}" title="修改">✎</button><button data-delete-annotation="${t}" title="删除">×</button></div></header><h4>${d(e.Query)}</h4><p>${d(e.Answer)}</p><footer><span>${e.Cue.length} 条 Cue</span><span>${e.Images.length} 张图片</span></footer></article>`).join(""):'<div class="annotation-empty">尚无标注数据，请从左侧创建第一条测评样本</div>'}async function ft(){try{return f=(await l("/api/annotations",{method:"POST",body:JSON.stringify({records:f})})).records,se(),!0}catch(e){const t=e instanceof Error?e.message:"标注保存失败";return r(t.includes("接口不存在")?"请重新启动 Demo 后端后再保存标注":t,!0),!1}}async function Xt(){try{const e=await l("/api/annotations");f=e.records,a("annotationDatasetPath").textContent=e.path,a("annotationDatasetPath").title=e.path,se()}catch(e){r(e instanceof Error?e.message:"标注数据读取失败",!0)}}a("resetAnnotation").addEventListener("click",W);a("selectAnnotationDataset").addEventListener("click",async()=>{try{const e=await l("/api/annotations/select",{method:"POST",body:"{}"});if(e.cancelled)return;f=e.records,a("annotationDatasetPath").textContent=e.path,a("annotationDatasetPath").title=e.path,W(),se(),r("已切换标注数据集")}catch(e){r(e instanceof Error?e.message:"数据集选择失败",!0)}});a("chooseAnnotationImages").addEventListener("click",async()=>{try{const e=await l("/api/dialog/images",{method:"POST",body:"{}"});T=Array.from(new Set([...T,...e.paths])),ae()}catch(e){r(e instanceof Error?e.message:"图片路径选择失败",!0)}});a("annotationImagePaths").addEventListener("click",e=>{const t=e.target.closest("[data-remove-annotation-image]");t&&(T.splice(Number(t.dataset.removeAnnotationImage),1),ae())});a("saveAnnotation").addEventListener("click",async()=>{const e=a("annotationQuery").value.trim(),t=a("annotationAnswer").value.trim(),s=a("annotationCue").value.split(/\r?\n/).map(n=>n.trim()).filter(Boolean);if(!e||!t){r("Query 和 Answer 不能为空",!0);return}const i={Query:e,Answer:t,Cue:s,Images:[...T]};if(he===null)try{const n=await l("/api/annotations/append",{method:"POST",body:JSON.stringify({record:i})});f=n.records,a("annotationDatasetPath").textContent=n.path,se(),a("annotationSaveStatus").textContent="✓ 已增量追加到 JSONL",r("测评标注已增量保存"),W()}catch(n){r(n instanceof Error?n.message:"增量保存失败",!0)}else f[he]=i,await ft()&&(a("annotationSaveStatus").textContent="✓ 修改已保存",r("测评标注已更新"),W())});a("annotationList").addEventListener("click",async e=>{const t=e.target.closest("[data-edit-annotation]");if(t){const i=Number(t.dataset.editAnnotation),n=f[i];he=i,T=[...n.Images],a("annotationFormTitle").textContent=`修改第 ${i+1} 条标注`,a("annotationQuery").value=n.Query,a("annotationAnswer").value=n.Answer,a("annotationCue").value=n.Cue.join(`
`),ae(),a("annotationWorkspace").scrollIntoView({behavior:"smooth"});return}const s=e.target.closest("[data-delete-annotation]");s&&(f.splice(Number(s.dataset.deleteAnnotation),1),await ft(),W())});ae();se();Xt();let w="clip";document.querySelectorAll(".optimization-tab").forEach(e=>{e.addEventListener("click",()=>{w=e.dataset.optimization??"clip",document.querySelectorAll(".optimization-tab").forEach(s=>{const i=s===e;s.classList.toggle("active",i),s.setAttribute("aria-selected",String(i))}),["architecture","direction","effect","summary"].forEach(s=>{ke(s),ne(s)})})});let x=[],I=null;function Zt(e){return`${e.key} ${e.value} ${e.alias} ${e.remark}`.toLocaleLowerCase()}function ea(e){return/(^|[._-])api[._-]?key($|[._-])/i.test(e)||/apikey/i.test(e)}function ta(e){const t=e.lastIndexOf(".");return t<0?{parent:e,leaf:e}:{parent:e.slice(0,t),leaf:e.slice(t+1)}}function P(){const e=a("configDetailsSearch").value.trim().toLocaleLowerCase();a("configDetailsList").innerHTML=x.length?x.map((t,s)=>{const i=t.params.map((o,c)=>({param:o,paramIndex:c})).filter(({param:o})=>!ea(o.key)&&(!e||Zt(o).includes(e))),n=i.length?i.map(({param:o,paramIndex:c})=>{const u=ta(o.key);return`<article class="config-param-card" data-config-file="${s}" data-config-param="${c}" tabindex="0"><div class="config-card-name"><small>${o.alias?d(o.alias):"CONFIG PARAMETER"}</small><h4>${d(u.parent)}</h4></div><div class="config-card-value" title="${d(o.key)}">${d(u.leaf)}</div><div class="config-card-copy">${o.remark?`<p>${d(o.remark)}</p>`:'<p class="empty">点击查看完整配置内容</p>'}</div><button class="config-card-edit" data-edit-config="true" title="编辑别名和备注">✎</button></article>`}).join(""):`<div class="config-detail-empty">${e?"当前配置文件中没有匹配项":t.error||"配置文件中没有可展示参数"}</div>`;return`<article class="config-file-row"><header><div><span>${String(s+1).padStart(2,"0")}</span><div><h3>${d(t.name)}</h3><p title="${d(t.path)}">${d(t.path)}</p></div></div><div class="config-file-actions"><button data-bind-config="${s}">绑定本地 YAML 文件</button><button data-open-config="${s}">打开本地配置</button></div></header><div class="config-carousel"><button data-slide-config="${s}" data-direction="-1" class="config-carousel-arrow left" aria-label="显示左侧卡片">←</button><div class="config-card-track" data-config-track="${s}">${n}</div><button data-slide-config="${s}" data-direction="1" class="config-carousel-arrow right" aria-label="显示右侧卡片">→</button></div></article>`}).join(""):'<div class="config-details-welcome"><b>◇</b><h3>还没有绑定配置文件</h3><p>点击“增加配置文件”，选择本地 YAML 后即可按行浏览全部配置项目。</p></div>'}async function aa(){try{x=(await l("/api/config-details")).files,P()}catch(e){r(e instanceof Error?e.message:"配置明细读取失败",!0)}}async function yt(e=""){try{const t=await l("/api/config-details/bind",{method:"POST",body:JSON.stringify({replacePath:e})});if(t.cancelled)return;x=t.files,P(),r("配置文件已绑定")}catch(t){r(t instanceof Error?t.message:"配置文件绑定失败",!0)}}a("addConfigFile").addEventListener("click",()=>{yt()});a("configDetailsSearchButton").addEventListener("click",P);a("configDetailsSearch").addEventListener("input",P);a("configDetailsList").addEventListener("click",async e=>{const t=e.target,s=t.closest("[data-bind-config]");if(s){const g=Number(s.dataset.bindConfig);yt(x[g]?.path??"");return}const i=t.closest("[data-open-config]");if(i){const g=x[Number(i.dataset.openConfig)];try{await l("/api/config-details/open",{method:"POST",body:JSON.stringify({path:g.path})})}catch(E){r(E instanceof Error?E.message:"无法打开配置",!0)}return}const n=t.closest("[data-slide-config]");if(n){document.querySelector(`[data-config-track="${n.dataset.slideConfig}"]`)?.scrollBy({left:Number(n.dataset.direction)*420,behavior:"smooth"});return}const o=t.closest("[data-config-file][data-config-param]");if(!o)return;I={fileIndex:Number(o.dataset.configFile),paramIndex:Number(o.dataset.configParam)};const c=x[I.fileIndex],u=c.params[I.paramIndex];if(t.closest("[data-edit-config]")){a("configMetadataKey").textContent=u.key,a("configMetadataAlias").value=u.alias,a("configMetadataRemark").value=u.remark,a("configMetadataDialog").showModal();return}a("configDetailTitle").textContent=u.alias||u.key,a("configDetailPath").textContent=c.path,a("configDetailKey").textContent=u.key,a("configDetailValue").textContent=u.value,a("configDetailAlias").textContent=u.alias||"未设置",a("configDetailRemark").textContent=u.remark||"暂无备注",a("configDetailDialog").showModal()});a("closeConfigDetail").addEventListener("click",()=>a("configDetailDialog").close());a("saveConfigMetadata").addEventListener("click",async e=>{if(e.preventDefault(),!I)return;const t=x[I.fileIndex],s=t.params[I.paramIndex];try{x=(await l("/api/config-details/metadata",{method:"POST",body:JSON.stringify({path:t.path,key:s.key,alias:a("configMetadataAlias").value,remark:a("configMetadataRemark").value})})).files,P(),a("configMetadataDialog").close(),r("配置卡片已保存")}catch(i){r(i instanceof Error?i.message:"配置卡片保存失败",!0)}});P();aa();const Xe="nmmkgOptimizationShowcaseV1",oe=()=>({architecture:[],direction:[],effect:[],summary:[]}),k={clip:oe(),entity:oe(),parse:oe(),reflect:oe()},ie={architecture:[],direction:[],effect:[],summary:[]};let N=null;const re=["layout-grid","layout-feature","layout-stack"];function Pe(e){["clip","entity","parse","reflect"].forEach(t=>{["architecture","direction","effect","summary"].forEach(s=>{k[t][s]=Array.isArray(e[t]?.[s])?e[t][s]:[]})})}async function Qe(){try{const e=await l("/api/optimization-showcase",{method:"POST",body:JSON.stringify({state:k})});return Pe(e.state),!0}catch(e){return r(e instanceof Error?e.message:"项目文件保存失败",!0),!1}}async function sa(){try{const e=await l("/api/optimization-showcase");if(Object.values(e.state).some(s=>Object.values(s).some(i=>i.length)))Pe(e.state);else{const s=localStorage.getItem(Xe);s&&(Pe(JSON.parse(s)),await Qe()&&localStorage.removeItem(Xe))}["architecture","direction","effect","summary"].forEach(ne)}catch(e){r(e instanceof Error?e.message:"无法读取本地展示数据",!0)}}function ke(e){N=null;const t=document.querySelector(`[data-showcase-text="${e}"]`),s=document.querySelector(`[data-showcase-file="${e}"]`),i=document.querySelector(`.add-showcase[data-block="${e}"]`);t&&(t.value=""),s&&(s.value=""),i&&(i.textContent="加入本块展示"),ie[e]=[],We(e)}function We(e){a(`${e}Pending`).innerHTML=ie[e].map(t=>`<figure><img src="${t.src}" alt="${d(t.name)}"><figcaption>${d(t.name)}</figcaption></figure>`).join("")}function ne(e){const t=a(`${e}Showcase`),s=k[w][e];t.innerHTML=s.map(i=>`<article class="showcase-item"><div class="showcase-item-tools"><button class="showcase-edit" data-block="${e}" data-id="${i.id}" title="修改文档块">✎</button><button class="showcase-remove" data-block="${e}" data-id="${i.id}" title="删除文档块">×</button></div>${i.images.length?`<div class="showcase-images">${i.images.map(n=>`<img src="${n.src}" alt="${d(n.name)}">`).join("")}</div>`:""}${i.text?`<div class="showcase-markdown">${Rt(i.text)}</div>`:""}</article>`).join(""),t.classList.toggle("has-content",s.length>0)}document.querySelectorAll(".edit-showcase").forEach(e=>e.addEventListener("click",()=>{const t=e.dataset.block,s=a(`${t}Editor`);s.classList.toggle("hidden"),a(`${t}Showcase`).classList.toggle("is-editing",!s.classList.contains("hidden")),e.textContent=s.classList.contains("hidden")?"✎ 编辑内容":"× 收起编辑",s.classList.contains("hidden")&&ke(t)}));document.querySelectorAll("[data-showcase-file]").forEach(e=>e.addEventListener("change",async()=>{const t=e.dataset.showcaseFile,s=Array.from(e.files??[]).filter(i=>i.type.startsWith("image/"));ie[t]=await Promise.all(s.map(i=>new Promise(n=>{const o=new FileReader;o.onload=()=>n({src:String(o.result),name:i.name}),o.readAsDataURL(i)}))),We(t)}));document.querySelectorAll(".add-showcase").forEach(e=>e.addEventListener("click",async()=>{const t=e.dataset.block,i=document.querySelector(`[data-showcase-text="${t}"]`).value.trim(),n=ie[t];if(!i&&n.length===0){r("请先输入文字或选择图片",!0);return}if(N?.track===w&&N.block===t){const c=k[w][t].find(u=>u.id===N.id);c&&(c.text=i,c.images=[...n])}else k[w][t].push({id:`${Date.now()}-${Math.random()}`,text:i,images:[...n]});const o=await Qe();ke(t),ne(t),o&&r("内容已保存到本地")}));document.querySelectorAll(".auto-layout").forEach(e=>e.addEventListener("click",()=>{const t=e.dataset.block,s=a(`${t}Showcase`),i=re.findIndex(o=>s.classList.contains(o));s.classList.remove(...re);const n=re[(i+1)%re.length];s.classList.add(n),r(`已自动切换为${n==="layout-grid"?"网格":n==="layout-feature"?"图文":"纵向"}排版`)}));a("optimizeWorkspace").addEventListener("click",async e=>{const t=e.target.closest(".showcase-edit");if(t){const n=t.dataset.block,o=k[w][n].find(u=>u.id===t.dataset.id);if(!o)return;N={track:w,block:n,id:o.id};const c=a(`${n}Editor`);c.classList.remove("hidden"),a(`${n}Showcase`).classList.add("is-editing"),document.querySelector(`.edit-showcase[data-block="${n}"]`).textContent="× 收起编辑",document.querySelector(`[data-showcase-text="${n}"]`).value=o.text,ie[n]=[...o.images],document.querySelector(`.add-showcase[data-block="${n}"]`).textContent="保存修改",We(n),c.scrollIntoView({behavior:"smooth",block:"nearest"});return}const s=e.target.closest(".showcase-remove");if(!s)return;const i=s.dataset.block;k[w][i]=k[w][i].filter(n=>n.id!==s.dataset.id),N?.id===s.dataset.id&&ke(i),await Qe(),ne(i)});["architecture","direction","effect","summary"].forEach(ne);sa();const wt="nmmkgProjectNodesV1",h=[{title:"项目愿景与核心命题",progress:100,x:45.1,y:21.3,manuscript:`明确 N-MMKG 的核心命题、测评目标与长期价值。

将多模态知识图谱构建过程沉淀为可复用的数据、指标和工程流程。`},{title:"测评范围与数据结构",progress:90,x:56.7,y:33.4,manuscript:"确定文本实体、ImageEntity、关系和证据来源等核心对象，并约束最小测评数据结构。"},{title:"文档解析链路",progress:75,x:36.2,y:48,manuscript:"统一文本、图片、表格和公式的资产标识，保留页码、坐标和原始文档溯源。"},{title:"实体消歧与图谱构建",progress:60,x:62.5,y:55.2,manuscript:"以硬约束过滤与语义评分结合，减少同名异物和关键属性冲突造成的错误合并。"},{title:"FG-CLIP2 图片检索",progress:42,x:28,y:68.8,manuscript:"图数据库保存 CLIP ID、路径与描述，向量留在独立索引，并通过 ImageEntity 回链。"},{title:"测评数据集与指标",progress:25,x:70.5,y:68.8,manuscript:"构建覆盖解析、消歧、检索和图谱问答的最小测评集，明确可复现的评价指标。"},{title:"Demo 联调与持续迭代",progress:10,x:49,y:79.4,manuscript:"完成前后端链路联调，以真实案例验证交互、稳定性与成果展示效果。"}];let _=null;function Ce(e){return e>=90?"green":e>=60?"blue":e>=30?"orange":"red"}function ia(){localStorage.setItem(wt,JSON.stringify(h))}function na(){const e=Math.round(h.reduce((s,i)=>s+i.progress,0)/h.length);a("projectOverallProgress").textContent=`${e}%`;const t=a("projectOverallProgressBar");t.className=Ce(e),t.style.width=`${e}%`}function Te(){a("projectNodes").innerHTML=h.map((e,t)=>`<button class="project-node ${Ce(e.progress)}${_===t?" active":""}" data-project-node="${t}" style="left:${e.x}%;top:${e.y}%" aria-label="${d(e.title)}，进度 ${e.progress}%"><span><strong>${d(e.title)}</strong><small>当前进度 ${e.progress}%</small></span></button>`).join(""),na()}function oa(e){_=e;const t=h[e];a("projectWorkspace").classList.add("has-selection"),a("projectDetailEmpty").classList.add("hidden"),a("projectDetailContent").classList.remove("hidden"),a("projectDetailIndex").textContent=`NODE ${String(e+1).padStart(2,"0")}`,a("projectDetailTitle").value=t.title,a("projectDetailProgress").value=String(t.progress),a("projectDetailManuscript").value=t.manuscript,a("projectDetailProgressBar").className=Ce(t.progress),a("projectDetailProgressBar").style.width=`${t.progress}%`,a("projectSaveStatus").textContent="",Te()}try{JSON.parse(localStorage.getItem(wt)??"[]").forEach((t,s)=>{h[s]&&(h[s]={...h[s],...t,x:h[s].x,y:h[s].y})})}catch{}Te();a("projectNodes").addEventListener("click",e=>{const t=e.target.closest("[data-project-node]");t&&oa(Number(t.dataset.projectNode))});a("projectDetailProgress").addEventListener("input",e=>{const t=Math.max(0,Math.min(100,Number(e.target.value)||0)),s=a("projectDetailProgressBar");s.className=Ce(t),s.style.width=`${t}%`});a("projectSaveButton").addEventListener("click",()=>{if(_===null)return;const e=h[_];e.title=a("projectDetailTitle").value.trim()||"未命名节点",e.progress=Math.max(0,Math.min(100,Math.round(Number(a("projectDetailProgress").value)||0))),e.manuscript=a("projectDetailManuscript").value.trim(),ia(),Te(),a("projectSaveStatus").textContent="✓ 已保存到浏览器",r("项目节点已保存")});a("projectDetailClose").addEventListener("click",()=>{_=null,a("projectWorkspace").classList.remove("has-selection"),a("projectDetailContent").classList.add("hidden"),a("projectDetailEmpty").classList.remove("hidden"),Te()});X();Z();ye();xe();we();Ee();Se();
