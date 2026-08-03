/**
 * Modular construction diagram for The Weight of the Cloud.
 * Inline SVG so it stays sharp and can adapt to light/dark surfaces.
 */
export default function WeightOfTheCloudDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      role="img"
      aria-labelledby="wotc-diagram-title wotc-diagram-desc"
      className="w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-[#f7f7f5] dark:bg-neutral-900"
    >
      <title id="wotc-diagram-title">The Weight of the Cloud — modular construction diagram</title>
      <desc id="wotc-diagram-desc">
        Exploded diagram showing a four-foot structural cube, six removable e-waste panels, a central
        illuminated void, and a concealed power and access zone.
      </desc>
      <defs>
        <marker
          id="wotc-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-600 dark:fill-blue-400" />
        </marker>
        <pattern id="wotc-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <path
            d="M18 0H0V18"
            fill="none"
            className="stroke-gray-300 dark:stroke-neutral-600"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="1600" height="900" className="fill-[#f7f7f5] dark:fill-neutral-900" />

      <g className="fill-gray-900 dark:fill-gray-100" fontFamily="ui-sans-serif, system-ui, sans-serif">
        <text x="90" y="80" fontSize="42" fontWeight="700">
          THE WEIGHT OF THE CLOUD
        </text>
        <text x="92" y="120" fontSize="22" className="fill-gray-500 dark:fill-gray-400">
          Exploded modular build · proposed 48 × 48 × 48 in
        </text>
      </g>

      {/* Central frame */}
      <g transform="translate(635 255)">
        <polygon
          points="0,120 210,0 420,120 210,240"
          fill="url(#wotc-grid)"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />
        <polygon
          points="0,120 210,240 210,520 0,400"
          fill="none"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />
        <polygon
          points="210,240 420,120 420,400 210,520"
          fill="none"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />
        <line
          x1="0"
          y1="120"
          x2="0"
          y2="400"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />
        <line
          x1="420"
          y1="120"
          x2="420"
          y2="400"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />
        <line
          x1="210"
          y1="240"
          x2="210"
          y2="520"
          className="stroke-gray-900 dark:stroke-gray-100"
          strokeWidth="5"
        />

        {/* Light core */}
        <polygon
          points="170,170 210,147 250,170 210,193"
          className="fill-blue-200 dark:fill-blue-900/60 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="3"
        />
        <polygon
          points="170,170 210,193 210,440 170,417"
          className="fill-blue-100 dark:fill-blue-800/50 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="3"
        />
        <polygon
          points="210,193 250,170 250,417 210,440"
          className="fill-blue-300 dark:fill-blue-700/60 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="3"
        />
        <line
          x1="210"
          y1="155"
          x2="210"
          y2="450"
          className="stroke-blue-400 dark:stroke-blue-300"
          strokeWidth="12"
          opacity="0.5"
        />
      </g>

      {/* Left panel */}
      <g transform="translate(250 340)">
        <polygon
          points="0,80 190,0 190,300 0,380"
          className="fill-emerald-100 dark:fill-emerald-950/50 stroke-emerald-800 dark:stroke-emerald-400"
          strokeWidth="4"
        />
        <g className="stroke-emerald-700 dark:stroke-emerald-500" strokeWidth="3" opacity="0.85" fill="none">
          <path d="M25 100h70v60H25zM105 65h60v105h-60zM20 190h145v50H20zM35 265h55v70H35zM105 250h55v55h-55z" />
          <circle cx="62" cy="130" r="18" />
          <circle cx="132" cy="118" r="22" />
        </g>
        <text
          x="25"
          y="420"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="22"
          fontWeight="700"
          className="fill-emerald-800 dark:fill-emerald-400"
        >
          REMOVABLE E-WASTE PANEL
        </text>
      </g>
      <line
        x1="460"
        y1="500"
        x2="625"
        y2="500"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="4"
        markerEnd="url(#wotc-arrow)"
      />

      {/* Right panel */}
      <g transform="translate(1160 340)">
        <polygon
          points="0,0 190,80 190,380 0,300"
          className="fill-emerald-100 dark:fill-emerald-950/50 stroke-emerald-800 dark:stroke-emerald-400"
          strokeWidth="4"
        />
        <g className="stroke-emerald-700 dark:stroke-emerald-500" strokeWidth="3" opacity="0.85" fill="none">
          <path d="M25 65h65v95H25zM105 100h60v60h-60zM20 190h145v50H20zM35 260h55v55H35zM105 250h55v85h-55z" />
          <circle cx="57" cy="115" r="20" />
          <circle cx="135" cy="130" r="17" />
        </g>
        <text
          x="0"
          y="420"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="22"
          fontWeight="700"
          className="fill-emerald-800 dark:fill-emerald-400"
        >
          REMOVABLE E-WASTE PANEL
        </text>
      </g>
      <line
        x1="1140"
        y1="500"
        x2="1070"
        y2="500"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="4"
        markerEnd="url(#wotc-arrow)"
      />

      {/* Top panel */}
      <g transform="translate(650 120)">
        <polygon
          points="0,80 200,0 400,80 200,165"
          className="fill-emerald-100 dark:fill-emerald-950/50 stroke-emerald-800 dark:stroke-emerald-400"
          strokeWidth="4"
        />
        <path
          d="M60 80l140-55 140 55-140 58z"
          fill="none"
          className="stroke-emerald-700 dark:stroke-emerald-500"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="80"
          r="34"
          fill="none"
          className="stroke-emerald-700 dark:stroke-emerald-500"
          strokeWidth="3"
        />
        <text
          x="70"
          y="200"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="22"
          fontWeight="700"
          className="fill-emerald-800 dark:fill-emerald-400"
        >
          TOP SERVICE PANEL
        </text>
      </g>
      <line
        x1="850"
        y1="300"
        x2="850"
        y2="350"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="4"
        markerEnd="url(#wotc-arrow)"
      />

      {/* Labels */}
      <g fontFamily="ui-sans-serif, system-ui, sans-serif">
        <g transform="translate(80 190)">
          <circle cx="24" cy="24" r="22" className="fill-gray-900 dark:fill-gray-100" />
          <text x="17" y="32" fontSize="24" className="fill-white dark:fill-gray-900" fontWeight="700">
            1
          </text>
          <text x="62" y="20" fontSize="24" fontWeight="700" className="fill-gray-900 dark:fill-gray-100">
            STRUCTURAL FRAME
          </text>
          <text x="62" y="52" fontSize="19" className="fill-gray-500 dark:fill-gray-400">
            Welded steel or 80/20 aluminum extrusion.
          </text>
        </g>
        <g transform="translate(80 690)">
          <circle cx="24" cy="24" r="22" className="fill-gray-900 dark:fill-gray-100" />
          <text x="17" y="32" fontSize="24" className="fill-white dark:fill-gray-900" fontWeight="700">
            2
          </text>
          <text x="62" y="20" fontSize="24" fontWeight="700" className="fill-gray-900 dark:fill-gray-100">
            SIX MODULAR FACES
          </text>
          <text x="62" y="52" fontSize="19" className="fill-gray-500 dark:fill-gray-400">
            Mesh-backed panels carry sorted, mechanically fastened e-waste.
          </text>
        </g>
        <g transform="translate(1080 175)">
          <circle cx="24" cy="24" r="22" className="fill-blue-600 dark:fill-blue-500" />
          <text x="17" y="32" fontSize="24" fill="white" fontWeight="700">
            3
          </text>
          <text x="62" y="20" fontSize="24" fontWeight="700" className="fill-gray-900 dark:fill-gray-100">
            ILLUMINATED VOID
          </text>
          <text x="62" y="52" fontSize="19" className="fill-gray-500 dark:fill-gray-400">
            Diffused 24V light core creates the cloud signal.
          </text>
        </g>
        <g transform="translate(1080 690)">
          <circle cx="24" cy="24" r="22" className="fill-gray-900 dark:fill-gray-100" />
          <text x="17" y="32" fontSize="24" className="fill-white dark:fill-gray-900" fontWeight="700">
            4
          </text>
          <text x="62" y="20" fontSize="24" fontWeight="700" className="fill-gray-900 dark:fill-gray-100">
            ACCESS + POWER
          </text>
          <text x="62" y="52" fontSize="19" className="fill-gray-500 dark:fill-gray-400">
            One face remains removable for wiring, inspection, and transport.
          </text>
        </g>
      </g>

      <line
        x1="1040"
        y1="260"
        x2="920"
        y2="415"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="3"
        markerEnd="url(#wotc-arrow)"
      />
      <line
        x1="1040"
        y1="720"
        x2="990"
        y2="650"
        className="stroke-blue-600 dark:stroke-blue-400"
        strokeWidth="3"
        markerEnd="url(#wotc-arrow)"
      />
    </svg>
  );
}
