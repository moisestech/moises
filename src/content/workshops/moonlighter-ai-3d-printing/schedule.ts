export type ScheduleRow = {
  time: string
  moduleId: number
  module: string
  demoMin: number
  guidedMin: number
  output: string
}

export const sixHourRunOfShow: ScheduleRow[] = [
  {
    time: '10:00–10:20',
    moduleId: 0,
    module: '0. Enter the Lab',
    demoMin: 10,
    guidedMin: 10,
    output: 'Session access, file folder, three-color selection, workflow overview',
  },
  {
    time: '10:20–10:50',
    moduleId: 1,
    module: '1. Choose the Signal',
    demoMin: 10,
    guidedMin: 20,
    output: 'Reference selected or photographed; rights/privacy check',
  },
  {
    time: '10:50–11:35',
    moduleId: 2,
    module: '2. Direct the Image',
    demoMin: 12,
    guidedMin: 33,
    output: 'Transformation prompt and 2–4 generated options',
  },
  {
    time: '11:35–12:20',
    moduleId: 3,
    module: '3. Build the First Volume',
    demoMin: 12,
    guidedMin: 33,
    output: 'Meshy/Tripo conversion and first orbit inspection',
  },
  {
    time: '12:20–12:45',
    moduleId: 4,
    module: '4. Read the Mesh',
    demoMin: 10,
    guidedMin: 15,
    output: 'Green/yellow/red mesh triage; natural break window',
  },
  {
    time: '12:45–1:25',
    moduleId: 5,
    module: '5. Repair Only What Matters',
    demoMin: 8,
    guidedMin: 32,
    output: 'Main path continues; targeted participants use Blender clinic',
  },
  {
    time: '1:25–2:15',
    moduleId: 6,
    module: '6. Place It in Gravity',
    demoMin: 12,
    guidedMin: 38,
    output: 'Tier, scale, base, orientation, support rating',
  },
  {
    time: '2:15–3:00',
    moduleId: 7,
    module: '7. Slice the Decision',
    demoMin: 12,
    guidedMin: 33,
    output: 'Bambu Studio project, print estimate, color, preview',
  },
  {
    time: '3:00–3:35',
    moduleId: 8,
    module: '8. Pass the Gate',
    demoMin: 8,
    guidedMin: 27,
    output: 'Instructor approval, printer/queue assignment, first launches',
  },
  {
    time: '3:35–4:00',
    moduleId: 9,
    module: '9. Archive and Continue',
    demoMin: 8,
    guidedMin: 17,
    output: 'Complete project archive, handoff card, pickup/reprint policy',
  },
]

export const workflowStages = [
  { id: 0, label: 'Enter', icon: 'lab' },
  { id: 1, label: 'Reference', icon: 'image' },
  { id: 2, label: 'Prompt', icon: 'sparkles' },
  { id: 3, label: 'Convert', icon: 'box' },
  { id: 4, label: 'Inspect', icon: 'scan' },
  { id: 5, label: 'Repair', icon: 'wrench' },
  { id: 6, label: 'Orient', icon: 'ruler' },
  { id: 7, label: 'Slice', icon: 'layers' },
  { id: 8, label: 'Approve', icon: 'shield' },
  { id: 9, label: 'Archive', icon: 'archive' },
] as const
