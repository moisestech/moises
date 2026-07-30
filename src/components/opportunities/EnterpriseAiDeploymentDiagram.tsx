import { cn } from '@/lib/utils';

type EnterpriseAiDeploymentDiagramProps = {
  className?: string;
  title?: string;
};

/**
 * Lightweight SVG for enterprise AI deployment context: agents, MCP/tool access,
 * policy gateway, cluster runtime, observability, and field feedback into product.
 * Decorative — substantive claims live in page copy, not in this figure.
 */
export function EnterpriseAiDeploymentDiagram({
  className,
  title = 'Enterprise AI deployment pathway — conceptual',
}: EnterpriseAiDeploymentDiagramProps) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-xl border border-stone-200 bg-[linear-gradient(165deg,#f4f6f8_0%,#e8eef3_48%,#dde6ee_100%)] dark:border-stone-700 dark:bg-[linear-gradient(165deg,#0c1220_0%,#151b28_55%,#1a2230_100%)]',
        className,
      )}
    >
      <svg
        viewBox="0 0 720 300"
        role="img"
        aria-label={title}
        className="h-auto w-full"
      >
        <title>{title}</title>

        {/* Enterprise boundary */}
        <rect
          x="20"
          y="18"
          width="680"
          height="264"
          rx="10"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="5 4"
          className="dark:stroke-stone-500"
        />
        <text x="34" y="38" fontSize="10" fontFamily="ui-monospace, monospace" fill="#64748b">
          enterprise environment
        </text>

        {/* Field / customer */}
        <rect x="40" y="56" width="130" height="88" rx="6" fill="#fff" stroke="#64748b" strokeWidth="1.25" className="dark:fill-stone-900" />
        <text x="52" y="78" fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fill="#0f172a" className="dark:fill-stone-100">
          Field engagement
        </text>
        <text x="52" y="96" fontSize="9" fontFamily="ui-monospace, monospace" fill="#475569">
          discovery
        </text>
        <text x="52" y="110" fontSize="9" fontFamily="ui-monospace, monospace" fill="#475569">
          constraints
        </text>
        <text x="52" y="124" fontSize="9" fontFamily="ui-monospace, monospace" fill="#475569">
          security needs
        </text>

        {/* Agent + tools */}
        <rect x="200" y="56" width="150" height="88" rx="6" fill="#fff" stroke="#0e7490" strokeWidth="1.25" className="dark:fill-stone-900" />
        <text x="212" y="78" fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fill="#0f172a" className="dark:fill-stone-100">
          AI agents
        </text>
        <text x="212" y="96" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0e7490">
          tool calls
        </text>
        <text x="212" y="110" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0e7490">
          MCP servers
        </text>
        <text x="212" y="124" fontSize="9" fontFamily="ui-monospace, monospace" fill="#0e7490">
          structured outputs
        </text>

        {/* Policy / gateway */}
        <rect x="380" y="56" width="150" height="88" rx="6" fill="#fff" stroke="#b45309" strokeWidth="1.25" className="dark:fill-stone-900" />
        <text x="392" y="78" fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fill="#0f172a" className="dark:fill-stone-100">
          Policy gateway
        </text>
        <text x="392" y="96" fontSize="9" fontFamily="ui-monospace, monospace" fill="#b45309">
          auth / RBAC
        </text>
        <text x="392" y="110" fontSize="9" fontFamily="ui-monospace, monospace" fill="#b45309">
          governance
        </text>
        <text x="392" y="124" fontSize="9" fontFamily="ui-monospace, monospace" fill="#b45309">
          audit trail
        </text>

        {/* Cluster */}
        <rect x="560" y="56" width="120" height="88" rx="6" fill="#fff" stroke="#334155" strokeWidth="1.25" className="dark:fill-stone-900" />
        <text x="572" y="78" fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fill="#0f172a" className="dark:fill-stone-100">
          Runtime
        </text>
        <text x="572" y="96" fontSize="9" fontFamily="ui-monospace, monospace" fill="#334155" className="dark:fill-stone-300">
          containers
        </text>
        <text x="572" y="110" fontSize="9" fontFamily="ui-monospace, monospace" fill="#334155" className="dark:fill-stone-300">
          cluster path
        </text>
        <text x="572" y="124" fontSize="9" fontFamily="ui-monospace, monospace" fill="#334155" className="dark:fill-stone-300">
          deploy
        </text>

        {/* Flow arrows — CSS-free; respect reduced motion by avoiding SMIL where possible */}
        <path
          d="M170 100 H200"
          fill="none"
          stroke="#64748b"
          strokeWidth="1.5"
          markerEnd="url(#stacklok-arrow)"
        />
        <path
          d="M350 100 H380"
          fill="none"
          stroke="#64748b"
          strokeWidth="1.5"
          markerEnd="url(#stacklok-arrow)"
        />
        <path
          d="M530 100 H560"
          fill="none"
          stroke="#64748b"
          strokeWidth="1.5"
          markerEnd="url(#stacklok-arrow)"
        />

        {/* Observability + feedback */}
        <rect x="200" y="176" width="330" height="78" rx="6" fill="#fff" stroke="#475569" strokeWidth="1.25" className="dark:fill-stone-900" />
        <text x="214" y="198" fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="600" fill="#0f172a" className="dark:fill-stone-100">
          Observability &amp; field feedback
        </text>
        <text x="214" y="216" fontSize="9" fontFamily="ui-monospace, monospace" fill="#475569">
          logs · traces · failure modes · runbooks
        </text>
        <text x="214" y="232" fontSize="9" fontFamily="ui-monospace, monospace" fill="#475569">
          reusable patterns → product &amp; platform roadmap
        </text>

        <path
          d="M370 144 V176"
          fill="none"
          stroke="#64748b"
          strokeWidth="1.5"
          markerEnd="url(#stacklok-arrow)"
        />
        <path
          d="M200 215 H100 V144"
          fill="none"
          stroke="#0e7490"
          strokeWidth="1.25"
          strokeDasharray="4 3"
          markerEnd="url(#stacklok-arrow-teal)"
        />
        <text x="108" y="168" fontSize="8" fontFamily="ui-monospace, monospace" fill="#0e7490">
          insights back
        </text>

        <defs>
          <marker id="stacklok-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
          </marker>
          <marker id="stacklok-arrow-teal" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#0e7490" />
          </marker>
        </defs>
      </svg>
      <figcaption className="border-t border-stone-200/80 px-4 py-2 text-xs text-stone-600 dark:border-stone-700 dark:text-stone-400">
        Conceptual deployment pathway — not a claim of Stacklok product architecture or production Kubernetes operator ownership.
      </figcaption>
    </figure>
  );
}
