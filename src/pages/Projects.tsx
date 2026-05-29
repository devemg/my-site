import { useState } from 'react';

const ProjectsPage = () => {
  const [hoveredGauge, setHoveredGauge] = useState<string | null>(null);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string>('Bolt');
  const [showArchModel, setShowArchModel] = useState(false);

  const stats = [
    { label: 'Perf', value: 99, color: '#4cd7f6', desc: 'Performance Score' },
    { label: 'Acc', value: 100, color: '#d0bcff', desc: 'Accessibility Index' },
    { label: 'Best', value: 100, color: '#ffafd3', desc: 'Best Practices' },
    { label: 'SEO', value: 100, color: '#4cd7f6', desc: 'Search Optimization' }
  ];

  const results = [
    { value: '+32%', label: 'Conversion Rate', colorText: 'text-[#4cd7f6]', desc: 'Direct correlation between sub-second TTI and checkout.' },
    { value: '-1.4s', label: 'Load Time', colorText: 'text-[#d0bcff]', desc: 'LCP reduction across global regions through Edge compute.' },
    { value: '0ms', label: 'Stale Inventory', colorText: 'text-[#4cd7f6]', desc: 'Real-time reconciliation achieved with Event Mesh.' }
  ];

  return (
    <section className="space-y-16">
      {/* Case Study Header / Hero */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8 space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#dae2fd]">
              Ecom App
            </h1>
            <p className="font-sans text-[#cbc3d7] text-base md:text-lg max-w-2xl leading-relaxed">
              A high-performance headless commerce engine built for a luxury fashion house, prioritizing sub-second interaction times and zero-latency filtering.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            <span className="px-4 py-1.5 glass-card rounded-full font-mono text-xs text-[#4cd7f6] uppercase border-[#4cd7f6]/30">
              Next.js 14
            </span>
            <span className="px-4 py-1.5 glass-card rounded-full font-mono text-xs text-[#4cd7f6] uppercase border-[#4cd7f6]/30">
              Rust Core
            </span>
          </div>
        </div>
      </div>

      {/* Bento Grid: Metrics & Project Context */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        {/* Metric Lighthouse gauge card */}
        <div className="md:col-span-2 glass-card rounded-xl p-6 md:p-8 bento-inner-glow relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <span className="material-symbols-outlined text-[#4cd7f6] text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
              speed
            </span>
          </div>
          <span className="font-mono text-xs text-[#d0bcff] mb-8 block uppercase tracking-wider">
            Performance Metrics
          </span>

          <div className="grid grid-cols-4 gap-2 py-4">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center cursor-help"
                onMouseEnter={() => setHoveredGauge(stat.label)}
                onMouseLeave={() => setHoveredGauge(null)}
              >
                {/* SVG Round Gauge */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300">
                  <svg className="absolute w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke="rgba(208, 188, 255, 0.1)"
                      strokeWidth="3.5"
                      fill="transparent"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="26"
                      stroke={stat.color}
                      strokeWidth="3.5"
                      fill="transparent"
                      strokeDasharray="163"
                      strokeDashoffset={163 - (163 * stat.value) / 100}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="font-mono text-xs font-bold text-[#4cd7f6] relative z-10 select-none">
                    {stat.value}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#cbc3d7]/60 mt-3 font-semibold uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Dynamic feedback on hover */}
          <div className="mt-6 pt-5 border-t border-[#494454]/30">
            {hoveredGauge ? (
              <p className="font-sans text-xs text-[#4cd7f6] transition-all">
                &gt; {stats.find(s => s.label === hoveredGauge)?.desc}: <strong className="text-white">Optimal score achieved</strong> through aggressive pre-compilation parameters.
              </p>
            ) : (
              <p className="font-mono text-xs text-[#cbc3d7] italic leading-relaxed">
                "Surpassed industry standards by 40% in Time to First Byte."
              </p>
            )}
          </div>
        </div>

        {/* Dynamic Image Cover block */}
        <div className="md:col-span-2 glass-card rounded-xl overflow-hidden relative min-h-[300px] border-[#d0bcff]/20 flex flex-col justify-end group">
          <img
            alt="Ecom App Preview"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-105 group-hover:scale-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTZ7icJ7KG5dosx-HF33FAKJn4V61Eb1dpP5zTVAnBpu2zJGYGRqFhSnL6p8j0giZiPbHxbYr2dx-MjHU8YuFtZD2TYgyRtzrXuUazZf8NEROIRRM-WJ1NSzHyDiDEia976n9sqHd8HzhtNQET-eV9dsYfSLJ2saZgsvF1hhISL3cj7gfLzKX3hFy3KinOuPe-Dfw1ldE9O7lM4MDcWvOzw-PR9g2dj8vKthYP0lAtnLjShpCVHvpEceMT71n57PL7wwPSyrhu6aKg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-[#0b1326]/40 to-transparent pointer-events-none" />
          
          <div className="relative p-6 space-y-1 z-10">
            <h4 className="font-sans text-xl font-bold text-[#dae2fd]">
              Dynamic Product View
            </h4>
            <p className="font-sans text-xs text-[#cbc3d7]">
              Seamless transition between category and detailed item cards.
            </p>
          </div>
        </div>

        {/* Technical stack lists */}
        <div className="md:col-span-2 glass-card rounded-xl p-6 flex flex-col justify-between bento-inner-glow border-[#4cd7f6]/20">
          <div>
            <h3 className="font-mono text-xs text-[#d0bcff] mb-6 uppercase tracking-wider">
              Architectural Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'TypeScript',
                'React Server Components',
                'GraphQL',
                'Edge Runtime',
                'TurboRepo',
                'PostgreSQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#171f33] px-3 py-1 rounded-lg text-xs font-mono text-[#4cd7f6] border border-[#4cd7f6]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-[#494454]/25 pt-4">
            <span className="material-symbols-outlined text-[#4cd7f6]">hub</span>
            <span className="font-mono text-xs font-semibold text-[#cbc3d7]">
              Distributed Micro-services matrix
            </span>
          </div>
        </div>

        {/* Small Highlight callout */}
        <div className="md:col-span-2 glass-card rounded-xl p-6 bento-inner-glow border-[#ffafd3]/20 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#ffafd3] uppercase block tracking-wider">
              EDGE COMPUTE OVERHEAD
            </span>
            <p className="font-sans text-xs text-[#cbc3d7] leading-relaxed">
              Global routing networks reduce round-trip database queries, keeping edge cache hit rates at an exceptionally high <strong>94.8%</strong>.
            </p>
          </div>
          <p className="font-mono text-[9px] text-[#4cd7f6] tracking-widest font-extrabold block uppercase mt-4">
            SECURE // LOCALIZED // GLOBAL
          </p>
        </div>
      </div>

      {/* The Challenge & Solution Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Left: The Challenge */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-[2px] bg-[#d0bcff]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#d0bcff]">
              01. The Challenge
            </span>
          </div>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#dae2fd] leading-tight">
            Solving the "Flash of Unstyled Content" in dynamic inventories.
          </h2>
          <p className="font-sans text-sm md:text-base text-[#cbc3d7] leading-relaxed">
            The client faced massive bounce rates due to inventory synchronization delays. With over 50,000 SKUs updated every minute, the platform struggled to maintain consistency.
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-start bg-[#ffb4ab]/5 p-3 rounded-lg border border-[#ffb4ab]/10">
              <span className="material-symbols-outlined text-[#ffb4ab] mt-0.5">
                warning
              </span>
              <div>
                <strong className="text-white block text-sm">Latency overhead</strong>
                <p className="font-sans text-xs text-[#cbc3d7]/80">Initial TTI (Time to Interactive) exceeded 4.2s on mobile connections.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start bg-[#ffb4ab]/5 p-3 rounded-lg border border-[#ffb4ab]/10">
              <span className="material-symbols-outlined text-[#ffb4ab] mt-0.5">
                sync_problem
              </span>
              <div>
                <strong className="text-white block text-sm">Stale cache anomalies</strong>
                <p className="font-sans text-xs text-[#cbc3d7]/80">Customers encountered frequent "out of stock" warnings during active checkouts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: The Solution with Interactive Pipeline */}
        <div className="lg:col-span-7 bg-[#222a3d]/40 border border-[#494454]/40 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#d0bcff]/15 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2">
              <div className="w-10 h-[2px] bg-[#4cd7f6]" />
              <span className="font-mono text-xs uppercase text-[#4cd7f6]">
                02. The Solution
              </span>
            </div>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#dae2fd] leading-tight">
              Implementation of an Event-Driven Mesh.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 bg-[#0b1326]/45 border border-[#494454]/30 rounded-xl space-y-1">
                <h4 className="font-mono text-xs text-[#d0bcff] uppercase font-bold">
                  Streaming SSR
                </h4>
                <p className="font-sans text-xs text-[#cbc3d7]">
                  Utilized Next.js 14 streaming for instant delivery while hydrating facets in the background.
                </p>
              </div>
              <div className="p-4 bg-[#0b1326]/45 border border-[#494454]/30 rounded-xl space-y-1">
                <h4 className="font-mono text-xs text-[#d0bcff] uppercase font-bold">
                  Rust-based Cache
                </h4>
                <p className="font-sans text-xs text-[#cbc3d7]">
                  Custom caching layer in Rust invalidates globally in &lt;100ms via distributed Redis nodes.
                </p>
              </div>
            </div>

            {/* High availability technical architecture pipeline widget */}
            <div className="p-5 glass-card rounded-xl border-dashed border-2 border-[#d0bcff]/20 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-[#cbc3d7]">
                <span>DIAGRAM: PIPELINE WORKFLOW</span>
                <span className="text-[#4cd7f6]">Status: AUTHORITATIVE</span>
              </div>
              
              <div className="flex gap-4 items-center justify-center py-2">
                {/* Node Cloud */}
                <button
                  type="button" 
                  onClick={() => setActiveDiagramNode('Cloud')}
                  className={`w-12 h-12 rounded-lg bg-[#0b1326] flex items-center justify-center border transition-all duration-300 ${
                    activeDiagramNode === 'Cloud' 
                    ? 'border-[#4cd7f6] scale-110 shadow-[0_0_15px_rgba(76,215,246,0.3)]' 
                    : 'border-[#494454]/50'
                  }`}
                  title="Click to inspect Cloud CDN ingress metrics"
                >
                  <span className={`material-symbols-outlined ${activeDiagramNode === 'Cloud' ? 'text-[#4cd7f6]' : 'text-[#cbc3d7]'}`}>
                    cloud
                  </span>
                </button>

                <div className="w-10 h-[2px] bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] animate-pulse" />

                {/* Node Bolt */}
                <button 
                  type="button"
                  onClick={() => setActiveDiagramNode('Bolt')}
                  className={`w-12 h-12 rounded-lg bg-[#0b1326] flex items-center justify-center border transition-all duration-300 ${
                    activeDiagramNode === 'Bolt' 
                    ? 'border-[#d0bcff] scale-110 shadow-[0_0_15px_rgba(208,188,255,0.3)]' 
                    : 'border-[#494454]/50'
                  }`}
                  title="Click to inspect active event-resolver processor runtime"
                >
                  <span className={`material-symbols-outlined ${activeDiagramNode === 'Bolt' ? 'text-[#d0bcff]' : 'text-[#cbc3d7]'}`}>
                    bolt
                  </span>
                </button>

                <div className="w-10 h-[2px] bg-gradient-to-r from-[#d0bcff] to-[#4cd7f6] animate-pulse" />

                {/* Node Database */}
                <button 
                  type="button"
                  onClick={() => setActiveDiagramNode('Database')}
                  className={`w-12 h-12 rounded-lg bg-[#0b1326] flex items-center justify-center border transition-all duration-300 ${
                    activeDiagramNode === 'Database' 
                    ? 'border-[#4cd7f6] scale-110 shadow-[0_0_15px_rgba(76,215,246,0.3)]' 
                    : 'border-[#494454]/50'
                  }`}
                  title="Click to inspect real-time database synchronizer storage replication"
                >
                  <span className={`material-symbols-outlined ${activeDiagramNode === 'Database' ? 'text-[#4cd7f6]' : 'text-[#cbc3d7]'}`}>
                    database
                  </span>
                </button>
              </div>

              {/* Status explanation */}
              <div className="p-2.5 bg-[#0b1326]/60 rounded border border-[#494454]/20 font-mono text-[10px] text-[#cbc3d7] text-center min-h-[44px] flex items-center justify-center">
                {activeDiagramNode === 'Cloud' && 'CLOUD NODE (Inbound requests): Geo-routing balances incoming active commerce load into edge nodes in realtime.'}
                {activeDiagramNode === 'Bolt' && 'MUTATION RESOLVER: Executes stream compilation blocks immediately to protect layout structures.'}
                {activeDiagramNode === 'Database' && 'STORAGE LOGIC: Automatic Redis synchronization ensures stock parameters are mirrored in <15ms.'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantifiable Impact Results Section */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-[0.3em]">
            03. Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#dae2fd]">
            Quantifiable Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((r, idx) => (
            <div 
              key={idx} 
              className="glass-card p-8 rounded-xl text-center group hover:border-[#4cd7f6] transition-all duration-300 transform hover:scale-[1.01]"
            >
              <span className={`font-display text-4xl md:text-5xl font-black ${r.colorText} mb-2 block group-hover:scale-110 transition-transform duration-300`}>
                {r.value}
              </span>
              <span className="font-mono text-xs text-[#d0bcff] uppercase tracking-wider font-bold">
                {r.label}
              </span>
              <p className="mt-4 font-sans text-xs text-[#cbc3d7]/80 leading-relaxed max-w-xs mx-auto">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Action / CTA Intro */}
      <div className="py-12 border-t border-[#494454]/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[#171f33]/30 p-8 rounded-2xl border border-[#494454]/20">
          <div>
            <h3 className="font-sans text-lg md:text-xl font-bold text-[#dae2fd]">
              Want to see the source?
            </h3>
            <p className="font-sans text-sm text-[#cbc3d7]">
              Technical documentation and blueprints are available for review.
            </p>
          </div>
          <button 
            type="button"
            onClick={() => setShowArchModel(true)}
            className="bg-[#d0bcff] text-[#3c0091] px-8 py-4 rounded-xl font-mono text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(208,188,255,0.4)] cursor-pointer"
          >
            VIEW ARCHITECTURE
          </button>
        </div>
      </div>

      {/* Interactive Topology Simulator Modal */}
      {showArchModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060e20]/80 backdrop-blur-md animate-fade-in">
          <div className="glass-card w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-[#d0bcff]/40 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 bg-[#171f33] border-b border-[#494454]/40 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4cd7f6] animate-pulse">schema</span>
                <span className="font-mono text-xs text-[#dae2fd] font-bold">EVENT_MESH_TOPOLOGY v1.2</span>
              </div>
              <button 
                type="button" 
                onClick={() => setShowArchModel(false)}
                className="text-[#cbc3d7] hover:text-[#ffafd3] font-bold material-symbols-outlined cursor-pointer"
              >
                close
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto font-mono text-xs text-[#cbc3d7]">
              <div className="space-y-2 p-3 bg-[#060e20] rounded border border-[#494454]/40 text-[#4cd7f6]">
                <div>&gt; CONNECTING DISPATCH SYSTEM... [OK]</div>
                <div>&gt; GEO_ROUTER LATENCY: 1.15ms. EDGE_SERVERS: ONLINE</div>
                <div>&gt; ACTIVE RECONCILIATION CHANNELS: 14/14</div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-[#dae2fd] uppercase font-sans">1. Client Request Ingress</h4>
                <p className="font-sans leading-relaxed text-xs">
                  A high-speed Geo DNS router detects physical client coordinates, routing the request to the nearest Edge Node hosted in London, Amsterdam, or Tokyo. This eliminates standard latency bottlenecks.
                </p>

                <h4 className="font-bold text-[#dae2fd] uppercase font-sans">2. Facet Cache Hydration</h4>
                <p className="font-sans leading-relaxed text-xs">
                  While static assets are streamlined to the user instantly, specialized facets (clothing sizes, prices) are dynamically streamed in blocks utilizing standard streaming SSR rules, preventing any visual flickering during active navigation.
                </p>

                <h4 className="font-bold text-[#dae2fd] uppercase font-sans">3. Real-Time Stocks Synchronizer</h4>
                <p className="font-sans leading-relaxed text-xs">
                  Whenever an items purchase triggers, an asynchronous daemon writes directly into the local state and dispatches mutations. Redis nodes automatically lock cache variables, reflecting changes globally in &lt;100ms.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-[#171f33] border-t border-[#494454]/30 flex justify-end gap-3">
              <button 
                type="button" 
                onClick={() => setShowArchModel(false)}
                className="px-6 py-2.5 bg-[#4cd7f6] text-[#003640] rounded font-mono text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                CLOSE_DOCUMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsPage;