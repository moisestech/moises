/**
 * Teachable layer for each Moonlighter module.
 * Participant task cards, the room line, and facilitator cues all read from here.
 */

export type LessonStep = {
  title: string
  instruction: string
  doneWhen: string
}

export type LessonExample = {
  title: string
  shows: string
  contrast: string
}

export type LessonFix = {
  signal: string
  action: string
}

export type FacilitatorCue = {
  open: string
  demo: string[]
  watch: string[]
  close: string
  breakNote?: string
}

export type WorkedPrompt = {
  label: string
  text: string
}

export type ModuleLesson = {
  moduleId: number
  roomLine: string
  fileTarget: string
  example: LessonExample
  steps: LessonStep[]
  fixes: LessonFix[]
  cue: FacilitatorCue
  workedPrompts?: WorkedPrompt[]
}

export const moduleLessons: ModuleLesson[] = [
  {
    moduleId: 0,
    roomLine: 'Name the folder and choose a filament before any image tool opens.',
    fileTarget: 'Desktop/lastname_firstname_project/ with 00_project_record and 01_reference',
    example: {
      title: 'One ceramic bird, four stages',
      shows:
        'A single bird moves from reference photo, to generated concept, to gray mesh, to a small white PLA print.',
      contrast:
        'The class sees the whole path first, so each later module is a decision inside that path.',
    },
    steps: [
      {
        title: 'Join the session',
        instruction:
          'Enter the code on the board and the name that should appear on the handoff card.',
        doneWhen: 'The top bar shows the session code and Module 0.',
      },
      {
        title: 'Choose a pace',
        instruction:
          'Follow class stays with the room. My pace lets you move ahead while the presenter keeps the shared position.',
        doneWhen: 'The toggle matches how you intend to work.',
      },
      {
        title: 'Create the project folder',
        instruction:
          'On the desktop, make lastname_firstname_project. Inside it, add 00_project_record and 01_reference. Later folders appear when those files exist.',
        doneWhen: 'Both folders are visible and spelled correctly.',
      },
      {
        title: 'Choose filament',
        instruction:
          'Pick a first and second PLA color among black, white, and the Moonlighter accent. The second color is a fallback if a spool runs out.',
        doneWhen: 'Both choices are selected.',
      },
      {
        title: 'Read the two tiers',
        instruction:
          'Miniature, about 35–70 mm, is the in-class priority. Sculpture, about 80–120 mm, needs approval and usually waits for pickup. You can change tier after the mesh exists.',
        doneWhen: 'You can name the tier you are aiming for.',
      },
    ],
    fixes: [
      {
        signal: 'The session code fails',
        action: 'Ask the facilitator. Leave the extra login uncreated.',
      },
      {
        signal: 'The folder landed in Downloads',
        action: 'Move it to the desktop before the next module.',
      },
      {
        signal: 'The tier is unclear',
        action: 'Aim at Miniature for now. Sculpture stays available after you can see the mesh.',
      },
    ],
    cue: {
      open: 'By 4:00 each person leaves with a concept, a mesh, a sliced file, and one approved print attempt. Moonlighter runs the printers. The method is the class: reference, prompt, image, mesh, check, slice, approve.',
      demo: [
        'Play the pipeline film. Point at the bird as photo, concept, mesh, and print.',
        'Name the next three stages out loud: reference, prompt, image.',
        'Show the folder names once, then have the room build their own.',
      ],
      watch: [
        'Everyone is in the session, past the join page.',
        'Folders use lastname_firstname, with a real project name.',
        'A filament choice is recorded before ChatGPT or Firefly opens.',
      ],
      close: 'Pass when they can name the next three stages and point at the correct folder.',
    },
  },
  {
    moduleId: 1,
    roomLine: 'One subject, a full silhouette, and a simple background.',
    fileTarget: '01_reference/original_reference plus working_reference.png',
    example: {
      title: 'The same bird, photographed twice',
      shows:
        'A clean three-quarter view on a paper sweep: the whole bird in frame, soft light, empty background.',
      contrast:
        'The weak frame crops the beak, sets the bird on a cluttered shelf, and cuts a hard shadow across the body.',
    },
    steps: [
      {
        title: 'Pick an intake path',
        instruction:
          'Upload a file sent ahead, open a file you brought, or photograph an object in the room. All three save to the same reference slot.',
        doneWhen: 'One original file is in 01_reference.',
      },
      {
        title: 'Make the working copy',
        instruction:
          'Crop to one subject. Keep the full silhouette inside the frame. Save it as working_reference.png and leave the original untouched.',
        doneWhen: 'The working PNG shows one complete subject.',
      },
      {
        title: 'Run the quality meter',
        instruction:
          'Green: separate subject, complete outline, even light. Amber: a crop, a cleaner background, or a new angle would fix it. Coral: the form is hidden, crowded, or glaring.',
        doneWhen: 'The meter shows a color and you can say why.',
      },
      {
        title: 'Check rights and privacy',
        instruction:
          'Use an image you have permission to use. Leave out private faces, IDs, medical images, and anything you would not want in a shared archive.',
        doneWhen: 'You can explain why this image is safe to upload.',
      },
    ],
    fixes: [
      {
        signal: 'Glare or a hard shadow',
        action: 'Rotate the object or move the light. A later prompt will not remove a missing surface.',
      },
      {
        signal: 'A cropped limb or edge',
        action: 'Reshoot or recrop so the whole mass sits inside the frame.',
      },
      {
        signal: 'Two subjects in one photo',
        action: 'Choose one. A converter will invent a joint between them.',
      },
      {
        signal: 'Glass, chrome, or a clear object',
        action: 'Swap the subject. Transparent and mirror surfaces read as holes.',
      },
    ],
    cue: {
      open: 'The model needs a form it can separate from the room. Style comes after the silhouette.',
      demo: [
        'Show the two bird photos. Ask which one a converter can finish on the back.',
        'Set up the paper sweep, three-quarter angle, and full frame in under a minute.',
      ],
      watch: [
        'One subject per frame.',
        'No IDs or private images.',
        'Working PNG saved, original preserved.',
      ],
      close: 'Pass on green, or on amber after the fix is already done. Coral means a new photo before any prompt.',
    },
  },
  {
    moduleId: 2,
    roomLine: 'Write for a solid object with a base, then keep the printable option.',
    fileTarget: '02_prompts/prompt_log.txt, 03_generated_images/option_01.png onward, selected_image.png',
    example: {
      title: 'One whisk, two printable directions',
      shows:
        'A kitchen whisk becomes a small friendly character: thick rounded crest, solid body, flat base.',
      contrast:
        'The same whisk becomes a compact architectural tower: tapered vertical mass, thick crown, broad base.',
    },
    workedPrompts: [
      {
        label: 'Friendly miniature',
        text: 'Transform a kitchen whisk into a small friendly character. Preserve the looped head as a thick rounded crest and the handle as a solid body. Show one complete object in a centered three-quarter view with a clear silhouette, coherent solid volumes, thick printable details, no floating parts, and a simple neutral background. The object should stand on an integrated flat base. Single-object product study, soft even lighting, no text, no props, no cropped edges.',
      },
      {
        label: 'Architectural sculpture',
        text: 'Transform a kitchen whisk into a compact architectural tower. Preserve the tapered handle as the main vertical mass and the looped head as a thick crown. Show one complete object in a centered three-quarter view with a clear silhouette, coherent solid volumes, thick printable walls, no floating parts, and a simple neutral background. The object should stand on a broad stable base. Single-object product study, soft even lighting, no text, no props, no cropped edges.',
      },
    ],
    steps: [
      {
        title: 'Fill the prompt',
        instruction:
          'Set identity, transformation, shape language, view, base, background, and exclusions. Edit the sentence until it describes your object.',
        doneWhen: 'The prompt names one subject, one transformation, and a base.',
      },
      {
        title: 'Generate two to four options',
        instruction:
          'Stay in one tool for this round, ChatGPT Images or Firefly. Save each result as option_01.png and onward. Paste the prompt into prompt_log.txt with the tool name.',
        doneWhen: 'Two to four images and a prompt log are in the folder.',
      },
      {
        title: 'Select for print',
        instruction:
          'Keep the image with one object, a clear silhouette, solid volumes, a visible base, and a quiet background. A striking image loses if it is thin, floating, scenic, or cropped.',
        doneWhen: 'You can point to the base and the outer silhouette on the chosen image.',
      },
      {
        title: 'Save the selected image',
        instruction: 'Copy the winner to selected_image.png. That file is the only one that goes to conversion.',
        doneWhen: 'selected_image.png opens and matches the image you defended.',
      },
    ],
    fixes: [
      {
        signal: 'Several views in one frame',
        action: 'Regenerate with one object and one view.',
      },
      {
        signal: 'Thin wires or floating parts',
        action: 'Add thick printable details and no floating parts, then regenerate.',
      },
      {
        signal: 'A busy scene or props',
        action: 'Return the background to a simple neutral field.',
      },
      {
        signal: 'A free-tier limit',
        action: 'Stop and ask. Instructor credits are a reserve for a failed generation, not a second creative round.',
      },
    ],
    cue: {
      open: 'The prompt is a fabrication brief. The best-looking picture can still be a bad file to print.',
      demo: [
        'Show the whisk as a rounded character and as a tower. Same reference, two printable directions.',
        'Read one filled prompt aloud and point at identity, base, and exclusions.',
        'Hold the class to one tool path for this round.',
      ],
      watch: [
        'Prompts ask for one object, thick volumes, and a base.',
        'People are saving options, not only the favorite.',
        'Nobody spends backup credits without asking.',
      ],
      close: 'Pass when the selected image has one solid object, a readable silhouette, and a visible base.',
    },
  },
  {
    moduleId: 3,
    roomLine: 'Convert once, orbit every side, and save the original before you touch it.',
    fileTarget: '04_ai_3d_source/original_conversion.stl and .glb or .obj when the tool provides it',
    example: {
      title: 'A creature and a kettle',
      shows:
        'A frog photo becomes a rounded creature: soft masses, connected limbs, a belly that can sit on a plate.',
      contrast:
        'A kettle becomes a hard-surface object: planar walls that can collapse, a handle that can detach, a base that can open up.',
    },
    steps: [
      {
        title: 'Upload and generate',
        instruction:
          'Send selected_image.png to Meshy or Tripo. Use the free tier first. Write the tool name and generation ID in the mesh log.',
        doneWhen: 'A generation is running or finished, and the log names the tool.',
      },
      {
        title: 'Orbit before you trust it',
        instruction:
          'Ignore the texture. Look at the front, side, back, top, and underside. Ask whether the back is a real form or an invented smear.',
        doneWhen: 'You have looked at the underside and the back, not only the hero angle.',
      },
      {
        title: 'Save the unmodified original',
        instruction:
          'Export STL for print, plus GLB or OBJ when offered. Store them in 04_ai_3d_source before any repair.',
        doneWhen: 'The original export is on disk and has not been overwritten.',
      },
      {
        title: 'Spend a second generation only for structure',
        instruction:
          'Generate again only if the main mass is missing, the body is disconnected, or the back is unusable. Keep the first export either way.',
        doneWhen: 'You can say why the first result stands or why the second was required.',
      },
    ],
    fixes: [
      {
        signal: 'A beautiful texture and a broken underside',
        action: 'Treat it as a shape failure. Texture does not repair a hole.',
      },
      {
        signal: 'The site stalls or the network blocks it',
        action: 'Continue with the facilitator example pack. Keep your image for a later retry.',
      },
      {
        signal: 'The tool asks for paid credits',
        action: 'Ask before any paid generation.',
      },
    ],
    cue: {
      open: 'Conversion is a proposal. Orbit it before you trust the front view.',
      demo: [
        'Show the creature and the kettle as gray meshes. Separate shape quality from texture.',
        'Orbit one model to the back and the underside while the room watches.',
        'Save the original on screen before anyone opens a repair tool.',
      ],
      watch: [
        'Free tier first.',
        'Original exports saved before Blender or the slicer.',
        'Second generations are structural retries, with the first file kept.',
      ],
      close: 'Pass when the front is recognizable, the back is plausible, and the main mass is connected.',
    },
  },
  {
    moduleId: 4,
    roomLine: 'Name the failure, then choose slice, clinic, or regenerate.',
    fileTarget: 'A written triage on the mesh log: green, amber, or coral, plus one named reason',
    example: {
      title: 'A closed bust and an open underside',
      shows: 'One bust is watertight and readable from the back. It can go toward slicing.',
      contrast:
        'The other looks finished from the front and is open underneath, with a broken rim. That is a clinic or a regenerate, depending on how much form is missing.',
    },
    steps: [
      {
        title: 'Silhouette',
        instruction: 'Check whether the object still reads as the same subject from the front, side, and back.',
        doneWhen: 'You can describe the outline from two angles.',
      },
      {
        title: 'Continuity',
        instruction: 'Check whether the main masses are connected, or whether limbs and body are separate shells.',
        doneWhen: 'You know if the body is one piece.',
      },
      {
        title: 'Base',
        instruction: 'Find a surface that can meet the plate or a support. A single point is not a base.',
        doneWhen: 'You can point to the contact area.',
      },
      {
        title: 'Thickness',
        instruction:
          'Picture the narrowest detail at Miniature scale. Hairlines, wires, and tiny text will not survive.',
        doneWhen: 'You have named the thinnest feature.',
      },
      {
        title: 'Surface, then a color',
        instruction:
          'Note holes, spikes, loose fragments, and internal shells. Mark green to slice, amber for one or two repairs, or coral to regenerate. Say the reason in one sentence.',
        doneWhen: 'The gate shows a color and a plain-language reason.',
      },
    ],
    fixes: [
      {
        signal: 'One hole or a few loose fragments',
        action: 'Mark amber and open the clinic for that fix only.',
      },
      {
        signal: 'A missing half, a melted back, or a form you would have to sculpt',
        action: 'Mark coral and return to the image or a second conversion.',
      },
      {
        signal: 'The mesh is sound and you want it more polished',
        action: 'Stay green. The clinic is for obstacles.',
      },
    ],
    cue: {
      open: 'A mesh can look complete and still fail as an object. Inspection comes before repair.',
      demo: [
        'Orbit the closed bust, then the open underside.',
        'Run the five checks out loud and assign a color to each example.',
      ],
      watch: [
        'People name a failure instead of saying the model looks weird.',
        'Green files are not being opened in Blender out of curiosity.',
        'Coral files go back to image or conversion.',
      ],
      close: 'Pass when each person can name the failure and choose continue, repair, or regenerate.',
      breakNote:
        'Natural break window. People waiting on a generation can pause here. Resume when most meshes are on screen.',
    },
  },
  {
    moduleId: 5,
    roomLine: 'Fix the obstacle. If the repair becomes a new sculpture, go back.',
    fileTarget: '05_repair/repaired_v01.blend and repaired_v01.stl — only if the triage was amber',
    example: {
      title: 'One hole, then a closed copy',
      shows:
        'The broken mesh has flipped normals, a bounded hole in the base, and a loose internal fragment.',
      contrast:
        'The repaired copy is closed. The design is the same object, with a versioned filename.',
    },
    steps: [
      {
        title: 'Green path skips the clinic',
        instruction:
          'If your triage is green, import the original STL into Bambu Studio and stay for the gravity demo. The clinic runs in parallel for amber files.',
        doneWhen: 'Green participants are in the slicer with the original mesh.',
      },
      {
        title: 'Version the file first',
        instruction:
          'Open the original in Blender and save a copy as 05_repair/repaired_v01.blend. Leave the AI export untouched.',
        doneWhen: 'The blend file exists and the original STL still opens.',
      },
      {
        title: 'Run only the named fix',
        instruction:
          'Recalculate normals, delete loose geometry, fill a bounded hole, make manifold, apply scale, or join an obvious separated mass. Add or flatten a base only when the object cannot meet a plate.',
        doneWhen: 'The change matches the reason you wrote at inspection.',
      },
      {
        title: 'Export and stop',
        instruction:
          'Export repaired_v01.stl. If you are sculpting a missing half, rebuilding anatomy, or changing the idea, return to the image instead.',
        doneWhen: 'The STL slices, or you have left Blender for a new conversion.',
      },
    ],
    fixes: [
      {
        signal: 'Faces point inward',
        action: 'Recalculate normals. Remodeling will not fix the direction of the surface.',
      },
      {
        signal: 'The repair turns into sculpting',
        action: 'Stop. Return to the image or a second conversion.',
      },
      {
        signal: 'A green participant is wandering into Blender',
        action: 'Send them back to the original STL in Bambu Studio.',
      },
    ],
    cue: {
      open: 'Blender is a clinic for a named obstacle. It is optional, and it runs beside the main path.',
      demo: [
        'On the broken example: normals, one hole, loose interior fragment.',
        'Export a versioned STL. Show that the original file is still in 04_ai_3d_source.',
        'State the stop rule: a missing half goes back to the image.',
      ],
      watch: [
        'Amber files get one bounded fix.',
        'Originals are not overwritten.',
        'Green participants move toward scale and orientation.',
      ],
      close: 'Pass when the repair slices, keeps the concept, and adds no new fragile parts.',
    },
  },
  {
    moduleId: 6,
    roomLine: 'Set a real size, a stable orientation, and a support rating you can accept.',
    fileTarget: 'Mesh on the plate in Bambu Studio, with tier, dimensions, orientation, and support rating recorded',
    example: {
      title: 'A bust and a full figure',
      shows: 'A bust sits on its shoulders. Supports are few and short.',
      contrast:
        'A full-body figure needs scaffolding under the arms and coat. The face stays cleaner upright, and the print takes longer.',
    },
    steps: [
      {
        title: 'Load the machine profile that is on this computer',
        instruction:
          'Select the printer, plate, and nozzle profiles Moonlighter installed. Write down the names you see. Exact fleet defaults stay pending until the machines are tested.',
        doneWhen: 'Printer, plate, and nozzle names are written from the screen.',
      },
      {
        title: 'Import and confirm scale',
        instruction:
          'Import the green or repaired STL. Check units. A 55 mm object that arrives as 55 meters is a unit error, then a scale error.',
        doneWhen: 'The on-screen dimensions match the object you expect.',
      },
      {
        title: 'Choose the tier',
        instruction:
          'Miniature is about 35–70 mm and is prioritized for an in-class launch. Sculpture is about 80–120 mm, needs approval, and usually queues for pickup.',
        doneWhen: 'The longest dimension sits inside the tier you chose.',
      },
      {
        title: 'Orient, then support',
        instruction:
          'Place the object for a stable plate relationship and for the surface you want clean. Automatic supports come after that. Edit a support only where it scars a face you need, or where a part is clearly floating.',
        doneWhen: 'The object meets the plate or a support without balancing on a point.',
      },
      {
        title: 'Rate the supports',
        instruction:
          'Low: short contact, quick removal. Moderate: added time and some marking. High: fragile contact or a large time increase, which needs instructor review.',
        doneWhen: 'A rating is selected and you can say what removal will touch.',
      },
    ],
    fixes: [
      {
        signal: 'The model is huge or microscopic',
        action: 'Correct the units, then scale into the tier.',
      },
      {
        signal: 'High support on a sculpture',
        action: 'Expect the queue, or reorient and shrink before you ask for approval.',
      },
      {
        signal: 'The object balances on a toe or a point',
        action: 'Reorient, or add a small base in the clinic, before any launch.',
      },
    ],
    cue: {
      open: 'The object meets gravity before it meets the printer. Orientation trades support time against the surface you want to keep.',
      demo: [
        'Place the bust, then the figure. Name the support rating for each.',
        'Turn one model to save supports and show what that does to the visible face.',
        'Remind the room to copy profile names from this computer.',
      ],
      watch: [
        'Units are sane before anyone discusses aesthetics.',
        'Miniature is the default ambition for an in-class launch.',
        'High-support sculptures are flagged for review.',
      ],
      close: 'Pass when the plate relationship is stable, fine details are realistic at that size, and support removal looks acceptable.',
    },
  },
  {
    moduleId: 7,
    roomLine: 'Slice it, then read the layers. The estimate is the decision.',
    fileTarget: '06_bambu_project/project_v01.3mf, slice_estimate.png, slice_preview.png',
    example: {
      title: 'The same object at 55 mm and 110 mm',
      shows: 'At 55 mm the print often lands in Quick or Standard time.',
      contrast: 'At 110 mm the same mesh often becomes Extended. Volume does not grow in a straight line with height.',
    },
    steps: [
      {
        title: 'Slice the loaded profile',
        instruction:
          'Use the printer, nozzle, plate, and PLA profile already on this computer. Record each name. Write what the software is using.',
        doneWhen: 'The technical card lists printer, nozzle, plate, and PLA color from the screen.',
      },
      {
        title: 'Record the slicer numbers',
        instruction:
          'Copy layer height, infill, wall loops, support style, estimated time, and grams from the estimate. Leave remembered defaults off the card.',
        doneWhen: 'Time and grams are copied from this slice.',
      },
      {
        title: 'Classify the time',
        instruction:
          'Under 60 minutes is Quick. From 60 to 120 is Standard. Over 120 is Extended: resize, reorient, or queue.',
        doneWhen: 'The project has one time class.',
      },
      {
        title: 'Read the preview',
        instruction:
          'Check a continuous first layer, no unsupported islands, thin tips still attached, closed top layers, a seam that misses the face you care about, and a real final layer.',
        doneWhen: 'You have scrubbed past the estimate into the layers.',
      },
      {
        title: 'Save the proof',
        instruction:
          'Save project_v01.3mf, a screenshot of the estimate, and a screenshot of the preview into 06_bambu_project.',
        doneWhen: 'All three files open from that folder.',
      },
    ],
    fixes: [
      {
        signal: 'Empty layers or a floating island',
        action: 'Return to orientation or supports before you ask for approval.',
      },
      {
        signal: 'Extended time',
        action: 'Resize, reorient, or accept the queue. An in-class launch is for work the machine can start responsibly.',
      },
      {
        signal: 'The material color disagrees with your spool',
        action: 'Switch to the PLA profile you chose, then slice again.',
      },
    ],
    cue: {
      open: 'Slicing reveals what the object asks of the machine. The estimate is a production decision.',
      demo: [
        'Show the 55 mm slice beside the 110 mm slice of the same mesh.',
        'Scrub first layer, an island, a thin tip, and the last layer.',
        'Say that generic numbers are not Moonlighter settings until the fleet is tested.',
      ],
      watch: [
        'Cards are filled from the slicer, not from memory.',
        'Extended files are resized or marked for queue.',
        'Screenshots exist before anyone marks ready.',
      ],
      close: 'Pass when there are no empty layers, no unsupported islands, a plausible time, and the correct printer and material profile.',
    },
  },
  {
    moduleId: 8,
    roomLine: 'Approval is shared. Moonlighter starts the machine.',
    fileTarget: 'Handoff draft plus approval status: in-class printer or one-week queue',
    example: {
      title: 'A launch and a shelf',
      shows: 'A 55 mm miniature is assigned to a printer in the room and begins its first layers during class.',
      contrast:
        'A 110 mm sculpture is tagged for pickup. Same approval standard, different place in the queue.',
    },
    steps: [
      {
        title: 'Mark ready',
        instruction:
          'Request review only when the sliced project, screenshots, color, tier, dimensions, and support rating are filled in.',
        doneWhen: 'Your status reads Ready for review.',
      },
      {
        title: 'Acknowledge the recovery policy',
        instruction:
          'The workshop includes one approved print attempt. A qualifying production failure or a repairable mesh failure includes one automatic reprint. A redesign, a larger size, a new color, or an extra copy is a separate request.',
        doneWhen: 'The policy acknowledgment is stored.',
      },
      {
        title: 'Take the review',
        instruction:
          'Needs work arrives with one named fix. Approved / in-class assigns a printer and a launch order. Approved / queued sets a pickup path.',
        doneWhen: 'You can repeat your status and the next action.',
      },
      {
        title: 'Leave the start button to the room',
        instruction:
          'Moonlighter launches and monitors the fleet. Your job ends at an approved file and a clear handoff.',
        doneWhen: 'You know your printer number or your queue position, and you are clear of the machine controls.',
      },
    ],
    fixes: [
      {
        signal: 'Needs work',
        action: 'Do the one named fix, then mark ready again.',
      },
      {
        signal: 'You want a new size or color after approval',
        action: 'Treat it as a new request. It sits outside the included attempt.',
      },
      {
        signal: 'The in-class queue is full',
        action: 'The file can still be approved and queued. Launch order follows capacity.',
      },
    ],
    cue: {
      open: 'Ready is a shared decision. Approval connects the file to a machine someone else will run.',
      demo: [
        'Walk one miniature onto a printer and one sculpture onto the pickup example.',
        'Read the recovery sentence once: one attempt, one qualifying reprint.',
        'Show the launch order updating as files pass.',
      ],
      watch: [
        'Every Needs work note names one fix.',
        'Policy is acknowledged before launch.',
        'Participants stay off printer controls.',
      ],
      close: 'Pass when the production fields are complete and the participant can say how pickup and recovery work.',
    },
  },
  {
    moduleId: 9,
    roomLine: 'Leave a folder someone else could use to remake the object.',
    fileTarget: 'Complete project folder, with gaps marked “not produced,” plus the pickup record',
    example: {
      title: 'A labeled archive beside a loose download pile',
      shows:
        'Reference, prompt, selected image, original mesh, repair, slice screenshots, approved file, and handoff sit in numbered folders. The finished object is the center.',
      contrast:
        'The other pile is untitled downloads. A week later, nobody can tell which image was sliced.',
    },
    steps: [
      {
        title: 'Walk the checklist',
        instruction:
          'Open every file you actually made. Mark skipped files as not produced so the gap is explicit.',
        doneWhen: 'Each required slot is either openable or marked not produced.',
      },
      {
        title: 'Use the naming rule',
        instruction:
          'lastname_firstname_subject_stage_v01. The approved production file also carries _APPROVED. The filename is a label. Moonlighter still controls the printer.',
        doneWhen: 'The approved file is named and the handoff record matches it.',
      },
      {
        title: 'Confirm pickup',
        instruction:
          'Check where the print will be, how you will be told, and what a qualifying reprint changes. The one-week sentence appears after Moonlighter confirms it for this date.',
        doneWhen: 'You can say the pickup path or the pending sign-off.',
      },
      {
        title: 'Keep the method',
        instruction:
          'The set that lets you continue is the reference, the prompt, the original mesh, and the decision you sliced. Extra copies and redesigns book separately after class.',
        doneWhen: 'Those four pieces are in the folder and you know where a later print would start.',
      },
    ],
    fixes: [
      {
        signal: 'A file will not open',
        action: 'Re-export it from the tool before you leave the computer.',
      },
      {
        signal: 'The approved file is missing',
        action: 'Ask for the handoff record before you leave with only the image.',
      },
      {
        signal: 'You want another copy or a redesign',
        action: 'Use the post-class booking path. It is separate from today’s attempt.',
      },
    ],
    cue: {
      open: 'The archive should let you, or someone at Moonlighter, understand and remake the work later.',
      demo: [
        'Open the labeled folder and the untitled download pile side by side.',
        'Show _APPROVED on the production file and the matching handoff card.',
        'Point at pickup status and the separate path for extra prints.',
      ],
      watch: [
        'Names are consistent.',
        'Missing files are marked not produced.',
        'Everyone leaves with a pickup or queue status.',
      ],
      close: 'Pass when the required files exist, open, and use consistent names.',
    },
  },
]

/** Shared image-to-3D method. Meshy and Tripo are two interfaces for the same pass check. */
export const imageTo3dPaths = {
  passCheck: 'Recognizable front, plausible back, connected body, no missing main mass.',
  shared: [
    'Upload selected_image.png.',
    'Use the free tier first. Ask before any paid generation.',
    'Ignore the texture. Orbit the back and the underside.',
    'Export STL for print, plus GLB or OBJ when the tool offers it.',
    'Keep the first file. Generate again only for a missing mass, a disconnected body, or an unusable back.',
  ],
  meshy: {
    name: 'Meshy',
    steps: 'Choose a generation method, orbit the result, then export.',
    reference: 'Meshy generation-method guide and Meshy export formats.',
  },
  tripo: {
    name: 'Tripo',
    steps: 'Upload, generate, orbit, then export.',
    reference: 'Tripo official tutorial center.',
  },
  stillNote:
    'There is no Meshy or Tripo screenshot in this chapter. The gray mesh on the bench is the conversion result.',
} as const

export function getLesson(moduleId: number): ModuleLesson | undefined {
  return moduleLessons.find((lesson) => lesson.moduleId === moduleId)
}
