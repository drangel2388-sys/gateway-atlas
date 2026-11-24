/* Gateway Atlas — original study companion content. No licensed Monroe audio is distributed. */
window.GATEWAY_DATA = (() => {
  const L = (id, title, subtitle, goal, practice, notice, reflect, lens, reality, tag='PRACTICE') => ({id,title,subtitle,goal,practice,notice,reflect,lens,reality,tag});
  const waves = [
    {
      id:'discovery', number:'01', mark:'◌', eyebrow:'WAVE I · DISCOVERY', name:'The Threshold', label:'Prepare / Focus 10', element:'EARTH', mood:'earth', focus:'FOCUS 3 → 10',
      headline:'Learn to become still without losing awareness.',
      description:'The entry point: mental preparation, resonant tuning, the Focus 10 state, and the ability to return to ordinary alertness.',
      objective:'Build a repeatable preparation ritual and a comfortable mind-awake/body-relaxed practice.',
      cue:'A familiar sequence. Less effort. More observation.',
      source:'Monroe Institute · Wave I: Discovery',
      lessons:[
        L('orientation','Orientation','The first contact','Learn the core setup: room, headphones, Energy Conversion Box, resonant tuning and the Gateway affirmation.',[
          'Settle in a quiet, comfortable place with stereo headphones and a low, clear volume.',
          'In this practice, begin by the Energy Conversion Box: imagine setting aside immediate concerns.',
          'Use gentle natural breathing and humming when prompted; do not force or hold your breath.',
          'Follow the Focus 3 introduction and return-to-waking instructions, then briefly write down what happened.'
        ],'You may notice ordinary calm, a reduction in mental chatter, or nothing dramatic at all.','What distracted me most, and how did I respond?','Which expectation did I bring into my first session?','Focus 3 is the system’s introductory label, not a clinically verified brain state.'),
        L('intro-focus-10','Introduction to Focus 10','Mind awake / body asleep','Follow the introduction to Focus 10 and notice whether mental attention can coexist with substantial physical relaxation.',[
          'Repeat the preparatory sequence from Orientation.',
          'Allow each part of the body to soften using a gentle, unhurried body scan.',
          'Notice the difference between sleeping, thinking, and quietly witnessing sensations.',
          'Return slowly and orient yourself: eyes open, feet on the floor, awareness of the room.'
        ],'Heaviness, warmth, reduced limb awareness, or brief drifting thoughts are possible.','When did I feel most physically relaxed while remaining alert?','Did I confuse an expected sensation with an observed one?','The phrase “body asleep” is a metaphor for deep relaxation; it is not a requirement to enter sleep paralysis.'),
        L('advanced-focus-10','Advanced Focus 10','Stabilize the state','Revisit Focus 10 and practice the added visualization called the Resonant Energy Balloon (REBAL).',[
          'Use the familiar entry sequence without rushing.',
          'Imagine an envelope of light or energy around your body as an attention exercise.',
          'Treat the imagery as an attention tool: attend to it, then return when attention wanders.',
          'Exit carefully and compare your experience with Intro Focus 10.'
        ],'The imagery may feel vivid, faint, or purely conceptual.','Which image helped attention stay steady?','Did I interpret a visualization as a physical measurement?','No external energy field is established by imagining REBAL.'),
        L('release-recharge','Release and Recharge','Notice and loosen patterns','Use gentle imagery to explore distracting fears and emotions without trying to force a breakthrough.',[
          'Begin with your familiar Focus 10 relaxation routine.',
          'Let one manageable worry or feeling come to mind rather than selecting something overwhelming.',
          'Follow the guided process of noticing, imagining release, and returning attention to the present.',
          'Write down an ordinary, concrete action that might help address the issue afterward.'
        ],'You might experience relief, boredom, resistance, or renewed awareness of a worry.','What emotion did I identify, and what can I do in everyday life?','Was this insight supported by evidence or only by how strongly it felt?','This is not trauma treatment or a substitute for mental-health care.'),
        L('exploration-sleep','Exploration, Sleep','Let the mind drift','Observe the boundary between waking imagery and sleep without forcing unusual sensations.',[
          'Only begin when you can rest safely and do not have urgent obligations.',
          'Settle comfortably and follow each step of the session.',
          'Allow dreamlike images, sensations, or sleep to occur naturally without chasing them.',
          'After waking, record any remembered impressions before interpreting them.'
        ],'Hypnagogic imagery, drifting, or simply falling asleep are ordinary possibilities.','What was the last sensation I clearly remember?','Did the experience occur while I was falling asleep?','Dreamlike scenes are not proof of perception outside the body.'),
        L('free-flow-10','Free Flow 10','Practice with less guidance','Use the familiar setup to explore Focus 10 more independently.',[
          'Choose one simple intention: calm, sustained attention, or observation.',
          'Enter using the familiar preparation sequence.',
          'Let attention settle; when distracted, return without frustration.',
          'End by noticing your surroundings and writing a short factual account.'
        ],'Independent practice can feel quieter than guided lessons and may differ session to session.','Can I describe the session without adding a story about what it means?','What mental habit keeps appearing?','Consistency is useful; unusual sensations are optional.')
      ]
    },
    {
      id:'threshold',number:'02',mark:'⌁',eyebrow:'WAVE II · THRESHOLD',name:'The Open Sea',label:'Focus 12 / Mental tools',element:'OCEAN',mood:'ocean',focus:'FOCUS 12',
      headline:'Give attention more room to move.',
      description:'Explore the system’s “expanded awareness” label and five imagination-based tools for reflection, planning and body awareness.',
      objective:'Follow the Focus 12 exercises without mistaking mental imagery for verified external effects.',cue:'Let the field widen. Return to what can be checked.',source:'Monroe Institute · Wave II: Threshold',lessons:[
        L('intro-focus-12','Introduction to Focus 12','Widen awareness','Transition from familiar Focus 10 relaxation into the guided Focus 12 attention exercise.',[
          'Use your familiar Focus 10 relaxation sequence.',
          'Follow the guided transition toward Focus 12 without trying to manufacture a special sensation.',
          'Notice whether attention feels broad, narrow, vivid, or ordinary.',
          'Return gradually to ordinary alertness and record observations.'
        ],'Some people report spaciousness or altered body boundaries; others report ordinary relaxation.','What actually changed, if anything, between Focus 10 and 12?','What would an outside observer have been able to verify?','Focus 12 is a named training condition, not proof of nonlocal perception.'),
        L('problem-solving','Problem Solving','Ask one useful question','Explore open-ended ideation during a relaxed state and verify any ideas afterward.',[
          'Write down one realistic question before starting.',
          'Use your Focus 12 relaxation practice and hold the question briefly in mind.',
          'Release effort and let ideas appear without chasing answers.',
          'Afterward, list candidate answers and identify an ordinary way to test them.'
        ],'Novel connections or familiar thoughts may emerge.','Which idea is actionable, and how can I check it?','Does a useful idea become more valid because it appeared during meditation?','Insight generation is not the same as prediction accuracy.'),
        L('one-month-patterning','One Month Patterning','Rehearse a future habit','Use structured visualization for a desired change over the coming month.',[
          'Choose a specific, controllable behavior rather than a demand about the outside world.',
          'Use the session cues and visualize yourself doing that behavior consistently.',
          'Notice obstacles without treating them as failures.',
          'Convert the image into one measurable action on your calendar.'
        ],'Motivation, emotion, or clearer priorities may arise.','What behavior will I perform next, and how will I know I did it?','What parts of this goal depend on chance or other people?','Visualization alone does not guarantee outcomes.'),
        L('color-breathing','Color Breathing','Visualize a change of state','Pair natural breathing with simple color imagery to direct attention toward relaxation.',[
          'Settle into a comfortable breathing rhythm—no strain or breath holding.',
          'Follow the exercise as it introduces color imagery.',
          'Notice how imagined color alters your subjective mood or body awareness.',
          'Finish by comparing before and after without claiming a medical effect.'
        ],'Emotional shifts, images, or no noticeable change are all possible.','What mood did I report before versus after?','Did I expect one color to have a particular effect?','This is not treatment for pain, disease or injury.'),
        L('energy-bar-tool','Energy Bar Tool','Make imagery tangible','Experiment with an imagined bar of light as a focus object.',[
          'Begin with your familiar Focus 12 relaxation routine.',
          'Imagine a small bar of light or luminous shape, adjusting its size and brightness.',
          'Practice returning attention to the same mental object after distraction.',
          'Record whether the visualization was stable, fragmented, or difficult.'
        ],'A vivid imagined object, body sensations, or no distinct imagery.','What helped me hold a single image in mind?','Was the image in my mind, or did I assume it existed physically?','The exercise is treated here as visualization, not physical energy manipulation.'),
        L('living-body-map','Living Body Map','Map internal sensations','Use attention and body imagery to become more aware of ordinary physical sensations.',[
          'Begin with comfortable, natural breathing.',
          'Use the session cues through an imagined map of your body.',
          'Notice neutral sensations without diagnosing their meaning.',
          'End with a calm return and note any practical self-care needs.'
        ],'Changes in perceived warmth, muscle tension, or other sensations may be noticed.','Which sensations were clearly present, and which were imagined?','Am I assigning a medical meaning to a normal sensation?','Do not use this exercise to diagnose or treat medical problems.')
      ]
    },
    {
      id:'freedom',number:'03',mark:'≈',eyebrow:'WAVE III · FREEDOM',name:'The Far Shore',label:'Imagery / Distance',element:'HORIZON',mood:'coast',focus:'FOCUS 10 + 12',
      headline:'Explore movement without assuming travel.',description:'The original series introduces floating sensations, imagined distance, introspective questions and early separation exercises.',objective:'Explore imagery and perception claims carefully, recording observations before interpreting them.',cue:'See clearly what is imagined—and what is known.',source:'Monroe Institute · Wave III: Freedom',lessons:[
        L('lift-off','Lift Off','Feeling of ascent','Follow a guided exercise associated with floating or rising sensations.',[
          'Enter through the familiar Focus 10/12 routine.',
          'Follow the recorded imagery of lightness, elevation or movement.',
          'Remain physically comfortable and allow the sensation to vary.',
          'Record sensations as sensations, not as proof of travel.'
        ],'Some people feel floating, swaying or nothing unusual.','Did I feel a motion or visualize a motion?','Could ordinary vestibular or sleep-onset effects explain this?','A floating sensation does not establish an out-of-body event.'),
        L('remote-viewing','Remote Viewing','A claim worth testing','Explore the recording’s distant-perception theme and prepare to check accuracy objectively.',[
          'Before practicing, arrange a hidden target with another person if possible.',
          'Try the exploratory exercise, recording impressions before seeing the target.',
          'Write literal shapes, colors and textures rather than only broad interpretations.',
          'Reveal the target later and record both matches and misses.'
        ],'Images or guesses may feel convincing even when they are inaccurate.','What exactly did I record before the target was shown?','Did I count failures and ordinary coincidences?','Reliable remote viewing has not been established.'),
        L('vectors','Vectors','Navigate mental reference points','Experiment with imagining movement relative to simple internal reference points.',[
          'Return to a relaxed Focus 12 practice.',
          'Use the session cues’s spatial direction and point-of-reference imagery.',
          'Notice whether the imagined environment remains coherent or shifts.',
          'Write down the sequence without adding geographic claims.'
        ],'Spatial imagery can feel immersive or abstract.','How did the imagined location change?','Am I treating a mental map as if it were a real external map?','Immersive imagery is not evidence of physical relocation.'),
        L('five-questions','Five Questions','Structured self-inquiry','Ask broad questions about values, habits and priorities while relaxed.',[
          'Prepare up to five open-ended personal questions.',
          'Use the session cues and allow spontaneous impressions to arise.',
          'Write down responses without deciding they came from an outside intelligence.',
          'Evaluate practical claims after the session.'
        ],'Questions may lead to useful reflections or ordinary memories.','Which answer helps me understand a behavior?','Could this be my own association or memory?','A felt “answer” is not independently verified communication.'),
        L('energy-food','Energy Food','Imagery of renewal','Use the program’s energy-themed exercise as a way to notice mood and relaxation.',[
          'Use the session cues through its imagined restorative sequence.',
          'Notice what sensations arise while attending to the visualization.',
          'Avoid changing sleep, nutrition or medical care based on the imagery.',
          'Record mood and alertness before and after.'
        ],'You may feel more rested, unchanged, or sleepy.','Did any change last beyond the session?','Could resting quietly account for the change?','Imagined energy is not a substitute for actual food, sleep, or treatment.'),
        L('first-stage-separation','First Stage Separation','Observe the separation imagery','Explore the exercises associated with out-of-body sensations without trying to force sleep paralysis.',[
          'Only practice when comfortable and well rested.',
          'Use the session cues’s imagery of changing your point of view.',
          'If discomfort or disorientation occurs, open your eyes and orient to the room.',
          'Journal the subjective experience separately from any claim about the outside world.'
        ],'Rolling, floating or perspective changes may occur as mental experiences.','What precisely changed in my viewpoint?','Was any new external information independently confirmed?','There is no reliable evidence that consciousness physically separates from the body.')
      ]
    },
    {
      id:'adventure',number:'04',mark:'✧',eyebrow:'WAVE IV · ADVENTURE',name:'The Inner Current',label:'Intuition / Communication',element:'CURRENT',mood:'deep',focus:'FOCUS 12',
      headline:'Make space for a more independent practice.',description:'Advance from structured guidance to self-directed imagery, symbolic impressions and nonverbal communication exercises.',objective:'Recognize patterns in your thought process while maintaining a clear boundary between impressions and verified facts.',cue:'Observe the symbol. Question the interpretation.',source:'Monroe Institute · Wave IV: Adventure',lessons:[
        L('one-year-patterning','One Year Patterning','A longer horizon','Visualize a year of realistic personal change and connect it to concrete actions.',[
          'Choose one measurable area of life to work on.',
          'Follow the guided patterning exercise for the imagined future.',
          'Notice the habits and choices that would make that picture more realistic.',
          'Write a first action and an independent check-in date.'
        ],'Your imagined future may reveal both motivation and concerns.','Which actions are within my control today?','Did I confuse imagining an outcome with causing it?','Patterning is not evidence that thought alone changes external reality.'),
        L('five-messages','Five Messages','Listen for inner themes','Explore the recording’s message-themed exercise as a structured prompt for introspection.',[
          'Approach the session without expecting an external voice or authority.',
          'Follow the prompts and notice ideas, emotions or symbolic images.',
          'Record all messages as subjective impressions.',
          'Assess their usefulness in a grounded, ordinary context.'
        ],'You may get clear phrases, vague feelings or nothing.','What themes recur in my self-reflection?','Can I trace the content to my own memories and expectations?','Do not treat messages as instructions from verified nonphysical beings.'),
        L('free-flow-12','Free Flow 12','Explore without a script','Take an open-ended session while keeping a simple intention and clear stopping point.',[
          'Set one intention before starting, such as observing attention.',
          'Enter using familiar Focus 10 and 12 techniques.',
          'Allow imagery and thoughts to arise without forcing a narrative.',
          'Exit calmly and write a neutral summary.'
        ],'Sessions may vary greatly with mood, fatigue and expectations.','What happened without my trying to direct it?','Which parts of the story did I add afterward?','An open-ended experience is not a factual test by itself.'),
        L('nvc-one','NVC I','Beyond words','Explore internal sensations and images as alternatives to verbal thought.',[
          'Enter Focus 12 as directed.',
          'Follow the prompts for attending to nonverbal imagery or felt meanings.',
          'Describe what appeared before translating it into language.',
          'Compare literal observation with later interpretation.'
        ],'Shapes, feelings, impressions, or ordinary thoughts may appear.','How did I translate a sensation into words?','Did that interpretation have several possible meanings?','Nonverbal impressions are not verified telepathy.'),
        L('nvc-two','NVC II','Refine interpretation','Practice noticing symbolism without concluding it must originate outside the mind.',[
          'Repeat the NVC preparation sequence.',
          'Follow the suggested imagery and observe image-to-meaning changes.',
          'Record the original symbol first, then your interpretation separately.',
          'Ask how many alternative meanings would fit.'
        ],'You may notice more vivid associations than in NVC I.','Did the same symbol mean different things on different days?','What evidence would distinguish an insight from a guess?','The experience’s vividness does not establish external communication.'),
        L('compoint-12','Compoint 12','A stable internal reference','Practice returning to a chosen mental reference point during Focus 12.',[
          'Begin with your familiar preparation and Focus 12 awareness.',
          'Notice how the sequence establishes a repeatable point of attention.',
          'Practice returning to it after interruptions or thoughts.',
          'Record how easily you could find and hold that reference.'
        ],'Some participants find repeated imagery more stable over time.','What cue helped me reestablish attention?','Was this a subjective skill or an externally measurable phenomenon?','A mental reference point need not imply access to a separate realm.')
      ]
    },
    {
      id:'exploring',number:'05',mark:'◔',eyebrow:'WAVE V · EXPLORING',name:'The Timeless Sky',label:'Intuition / Focus 15',element:'ATMOSPHERE',mood:'sky',focus:'FOCUS 12 → 15',
      headline:'Notice how experience of time changes.',description:'Strengthen Focus 12 and progress into Focus 15, called the “no time” state in the Monroe system.',objective:'Observe time perception, memory and intuition without assuming access to literal past or future events.',cue:'Time may feel different. The clock still matters.',source:'Monroe Institute · Wave V: Exploring',lessons:[
        L('advanced-focus-12','Advanced Focus 12','Return with ease','Revisit Focus 12 with less active effort and more continuous attention.',[
          'Review your existing entry sequence.',
          'Follow Advanced Focus 12 without forcing intensity.',
          'Notice what supports stable attention when the guide becomes sparse.',
          'Complete a neutral, time-stamped reflection afterward.'
        ],'Deeper or more ordinary relaxation are both possible.','What helped me sustain the session?','Am I judging success only by unusual sensations?','No independent test confirms a named Focus level was reached.'),
        L('discovering-intuition','Discovering Intuition','Find candidate insights','Use the official prompts to notice spontaneous connections and ideas.',[
          'Choose one topic that matters to you but is not an emergency.',
          'Use the session cues and allow thoughts to emerge.',
          'Afterward, list each idea separately from evidence that might support it.',
          'Select an idea you can check through ordinary observation.'
        ],'You may notice associations you had not consciously articulated.','Which ideas remain useful after verification?','Could expectation or selective memory explain the feeling of knowing?','Intuition can be useful without being supernatural.'),
        L('exploring-intuition','Exploring Intuition','Test your assumptions','Continue working with imagery and intuition while keeping a record of predictions and outcomes.',[
          'Before the session, note any question with a checkable answer.',
          'Follow the described mental sequence.',
          'Record impressions immediately and avoid editing earlier notes.',
          'Return later to compare the record with what actually happened.'
        ],'Confidence and accuracy may vary independently.','Which impressions were specific enough to test?','Am I remembering hits more strongly than misses?','The ability to forecast hidden facts has not been established.'),
        L('intro-focus-15','Introduction to Focus 15','The no-time state','Follow the exercise from familiar Focus 12 toward the Focus 15 exercise.',[
          'Keep an ordinary clock outside the session.',
          'Use guided imagery to loosen your ordinary sense of clock time.',
          'Observe your subjective sense of duration without trying to escape time.',
          'Compare estimated session length with actual elapsed time.'
        ],'Minutes may feel shorter, longer, or unchanged.','How different was my estimated duration from the clock?','Does a feeling of timelessness imply travel through time?','Focus 15 is a training label for subjective experience, not demonstrated time travel.'),
        L('mission-15','Mission 15: Creation & Manifestation','Intentions, not guarantees','Use the program’s planning-oriented recording to imagine behaviors aligned with a future goal.',[
          'Choose an attainable goal and define a next step.',
          'Use your familiar Focus 15 time-perception practice.',
          'Visualize the daily actions that support the goal.',
          'Write down what you will actually do afterward.'
        ],'The session may clarify priorities or motivation.','Which real action turns the imagery into a plan?','What factors are not under my control?','There is no established evidence that thought alone manifests events.'),
        L('exploring-focus-15','Exploring Focus 15','Open-ended time perception','Practice a less scripted exploration of Focus 15 while maintaining an accurate record.',[
          'Begin rested and grounded.',
          'Enter using the progression taught in Wave V.',
          'Allow sensations and imagery without assigning them to past or future events.',
          'Record observations and compare your time estimate to a clock.'
        ],'Altered duration perception and vivid imagery are possible.','How did I interpret the feeling of no time?','What explanation requires the fewest unsupported assumptions?','A vivid apparent memory is not independent historical evidence.')
      ]
    },
    {
      id:'odyssey',number:'06',mark:'◎',eyebrow:'WAVE VI · ODYSSEY',name:'Beyond the Horizon',label:'Focus 21 / The Bridge',element:'SPACE',mood:'space',focus:'FOCUS 21',
      headline:'Reach the report’s most advanced proposed state.',description:'Explore the Monroe system’s “bridge” language through guided changes of perspective, immersive imagery and Focus 21.',objective:'Complete the classic six-wave pathway while distinguishing experience from the report’s unverified dimension claims.',cue:'Stay curious. Keep both feet on the ground.',source:'Monroe Institute · Wave VI: Odyssey',lessons:[
        L('sensing','Sensing Locale 1','Observe an imagined environment','Begin Odyssey with the first guided Locale 1 awareness exercise.',[
          'Use the session cues through the learned preparation sequence.',
          'Attend to any imagined environment or scene that emerges.',
          'Notice sensory detail without trying to prove it exists externally.',
          'End with a simple sketch or written description.'
        ],'A clear scene, abstract shapes, or no scenery at all may emerge.','What details did I actually perceive in imagination?','Am I labeling this imagery as a discovered place?','“Locale” is Monroe terminology, not an independently mapped location.'),
        L('expansion','Expansion in Locale 1','Expand the scene','Observe how attention and imagery change when a guide invites them to expand.',[
          'Enter the familiar guided state.',
          'Follow the prompts to broaden the imagined environment.',
          'Notice shifts in scale, perspective and sense of self.',
          'Return and record what occurred without embellishment.'
        ],'The internal scene may grow, shift or dissolve.','What changed when I broadened attention?','What could be explained by ordinary imagery?','The perceived size of an imagined world is not evidence of an external dimension.'),
        L('point-of-departure','Point of Departure','Change the point of view','Explore the recording’s guided departure imagery without seeking loss of bodily control.',[
          'Practice only when comfortable and well rested.',
          'Imagine moving into a changed imagined perspective.',
          'If uneasy, return to breathing and the physical room immediately.',
          'Write down the precise sequence afterward.'
        ],'A strong immersion or ordinary visualization are both possible.','How did the mental viewpoint shift?','Did I experience an imagined scene or obtain verifiable information?','Do not force sleep paralysis or disorientation.'),
        L('nonphysical-friends','Nonphysical Friends','Encounter imagery safely','Explore the program’s imagined-encounter theme as a subjective mental event.',[
          'Approach the recording with curiosity, not an expectation of a real entity.',
          'Follow the guided imagery and notice any figures, characters or symbols.',
          'Do not treat perceived messages as external instructions.',
          'Return fully alert and identify plausible psychological interpretations.'
        ],'Dreamlike characters, emotions or no encounters may arise.','Could this image represent a concern or memory?','What independently verifies any apparent entity?','The existence of nonphysical beings is not established by such experiences.'),
        L('intro-focus-21','Movement to Locale 2 / Intro to Focus 21','The bridge','Follow the official introduction to Focus 21 and observe its proposed boundary imagery.',[
          'Ensure you feel grounded and comfortable before beginning.',
          'Use the session cues’s gradual transition toward Focus 21.',
          'Observe changes in perspective or sense of location without forcing them.',
          'Return using the guide and note how ordinary awareness reestablished.'
        ],'Some report unusual spatial imagery or a feeling of transition.','What did the word “bridge” mean to me during the session?','What observations would be necessary to substantiate another dimension?','Focus 21 has not been shown to give access to other dimensions.'),
        L('free-flow-21','Free Flow Journey in Focus 21','Independent exploration','Complete the most advanced Focus level discussed in the 1983 report.',[
          'Set a simple exploratory intention before beginning.',
          'Follow the official Free Flow recording and allow the experience to unfold.',
          'Return slowly, ensuring full awareness of your surroundings.',
          'Review your notes against earlier sessions, noting both patterns and differences.'
        ],'You might encounter vivid imagery or a familiar meditation state.','What did I learn about my attention, regardless of extraordinary claims?','Which claims remain untested by subjective experience alone?','Completing this curriculum is not proof of transcending space-time.')
      ]
    },
    {
      id:'page-25',number:'07',mark:'⌬',eyebrow:'THE RECOVERED PAGE · 25',name:'Know Thyself',label:'Belief / Self-knowledge',element:'FOREST',mood:'forest',focus:'REPORT §§34–37',
      headline:'Turn the exploration back toward the observer.',description:'The reportedly recovered page 25 is philosophical, not a hidden Focus exercise. Explore its themes with grounded self-inquiry.',objective:'Use the page’s “know thyself” idea to question assumptions, detect bias and place experience in context.',cue:'The observer is part of the observation.',source:'1983 report · recovered page 25, §§34–36',lessons:[
        L('belief-systems','Belief Systems','Map prior assumptions','Notice how expectations shape interpretation of unusual experiences.',[
          'Before meditating, list three beliefs you hold about consciousness.',
          'Label each belief as evidence-based, uncertain or personally meaningful.',
          'After your session, record anything that appeared to support or challenge a belief.',
          'Ask what alternative explanations could account for the same observation.'
        ],'You may find you anticipated a sensation before experiencing it.','Which belief did I bring into the experience?','Would I accept the same evidence for a claim I disliked?','This is a modern critical-reflection practice inspired by §34, not a Monroe audio track.','REFLECTION'),
        L('the-absolute','The Absolute','Philosophy versus physics','Study the report’s proposed unifying consciousness model as an idea rather than a proven fact.',[
          'Read the report’s discussion of the Absolute and the “universal hologram.”',
          'Write a plain-language description of what the author claims.',
          'Separate metaphors and philosophical assertions from experimentally demonstrated findings.',
          'Consider whether the idea is personally meaningful without treating that as proof.'
        ],'You may find the model intriguing, implausible, or both.','Which statements were metaphorical, and which would need evidence?','Does resemblance to a physics term constitute scientific confirmation?','The report’s holographic-universe account is speculative.','REFLECTION'),
        L('left-brain-limitations','Left Brain Limitations','Intuition meets verification','Use §35 to explore the difference between sudden impressions and deliberate analysis.',[
          'Choose one recent intuitive thought from your journal.',
          'Describe the feeling and the exact content of the thought.',
          'Identify a prediction or observable consequence it would imply.',
          'Look for disconfirming evidence as carefully as confirming evidence.'
        ],'Strong intuitions can coexist with ordinary cognitive bias.','Did the evidence agree with the feeling?','Am I overstating a simple “left versus right brain” narrative?','The report’s brain-hemisphere framing is oversimplified by modern neuroscience.','REFLECTION'),
        L('self-knowledge','Know Thyself','Integrate the inner record','Apply §36 by studying recurring patterns in your own observations.',[
          'Read your journal entries from the previous phases.',
          'Look for repeating fears, expectations, imagery and attention habits.',
          'Write a one-page profile of your responses without labeling them supernatural.',
          'Choose one practical way this awareness might improve your everyday decisions.'
        ],'Patterns may reveal mood, fatigue, assumptions or strengths.','What have I learned about the way I interpret experience?','Which stories can I keep meaningful without presenting them as facts?','Self-knowledge is a practical aim; the report’s metaphysical model is not established.','REFLECTION')
      ]
    },
    {
      id:'field-lab',number:'08',mark:'✳',eyebrow:'THE REPORT · SECTION 38',name:'The Field Lab',label:'Record / Verify',element:'OBSERVATORY',mood:'lab',focus:'TESTING CLAIMS',
      headline:'A feeling becomes a question. A question becomes a test.',description:'Finish where the Army report ends: with proposed research. This safe, independent lab focuses on careful observation and blinded verification.',objective:'Design a simple test, gather complete results, and evaluate both apparent hits and misses.',cue:'Document first. Interpret later.',source:'1983 report · Section 38, conclusion',lessons:[
        L('read-conclusion','Read the Conclusion','Understand the proposals','Examine what McDonnell recommended and identify which ideas remain unproven.',[
          'Read §38 of the 1983 report, not merely summaries online.',
          'List proposed methods such as audio training, hypnotic suggestion, and out-of-body experiments.',
          'Separate the author’s recommendations from demonstrated experimental outcomes.',
          'Avoid attempting sleep deprivation, forced REM induction, or unsupervised hypnosis protocols.'
        ],'A government assessment may contain plausible-sounding but unverified hypotheses.','Which proposals are safe to examine with a simple test?','Does official authorship prove the proposed theory?','The report proposes experiments; it does not validate paranormal abilities.','RESEARCH'),
        L('design-blind-test','Design a Blind Test','Remove obvious cues','Create a simple concealed-target task to test purported remote perception.',[
          'Have a partner independently select one picture from a set using a random method.',
          'Ensure you cannot see the selection, the partner’s cues or the answer beforehand.',
          'Before opening the target, record specific shapes, colors and objects with a timestamp.',
          'Define in advance how a match will be scored and what counts as a miss.'
        ],'Ambiguous impressions can appear to fit many possible pictures.','Could an ordinary cue or flexible scoring explain a match?','Did I define success before looking at the answer?','A blinded test helps reduce bias but does not by itself establish any mechanism.','RESEARCH'),
        L('record-trials','Run and Record Trials','Include the misses','Repeat the task using the same procedure and keep an unedited record.',[
          'Use a new randomly selected concealed picture for each trial.',
          'Write impressions before revealing the picture, and do not revise them.',
          'Score all trials using the criteria already defined.',
          'Keep unsuccessful and inconclusive attempts in the record.'
        ],'Some apparent matches are expected by chance.','How many complete trials did I actually record?','Did I count the ambiguous and incorrect attempts?','A few striking examples cannot establish accuracy above chance.','RESEARCH'),
        L('final-debrief','Final Debrief','The end of the report','Summarize what you experienced, what you tested, and what remains uncertain.',[
          'Review your complete journal and scores.',
          'Separate subjective benefits from objectively tested claims.',
          'Write the strongest alternative explanations for apparent hits.',
          'Decide which practices are personally useful without claiming unproven effects.'
        ],'You may value the relaxation and reflection regardless of experimental results.','Which findings hold up when I include every session?','Can I remain curious without overstating the evidence?','The goal is a rigorous personal record, not a predetermined conclusion.','RESEARCH')
      ]
    }
  ];
  const all = waves.flatMap((wave, wi) => wave.lessons.map((lesson, li) => ({...lesson, phase:wave.id, wave:wave, order:li+1, globalIndex:waves.slice(0,wi).reduce((n,w)=>n+w.lessons.length,0)+li})));
  const references = [
    {label:'Original 1983 Army assessment',note:'Official U.S. Government Publishing Office archive; published scan has a page-25 gap.',url:'https://www.govinfo.gov/app/details/GOVPUB-D101-PURL-gpo152943'},
    {label:'Reconstructed report (including page 25)',note:'Wikimedia Commons copy includes a page supplied separately; its provenance differs from the official scan.',url:'https://commons.wikimedia.org/wiki/File:Analysis_and_Assessment_of_Gateway_Process.pdf'},
    {label:'Monroe Institute — Gateway Experience',note:'Official overview of the original training series and guidance manuals.',url:'https://www.monroeinstituteuk.org/gateway-experience/'},
    {label:'Monroe Institute — Wave III Freedom',note:'Official descriptions of six original exercises.',url:'https://www.monroeinstituteuk.org/store/gateway-experience-wave-iii-freedom/'},
    {label:'Monroe Institute — Wave IV Adventure',note:'Official descriptions of six original exercises.',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-iv-adventure'},
    {label:'Monroe Institute — Waves V & VI',note:'Official overview of Focus 15 and Focus 21.',url:'https://www.monroeinstituteonline.org/'},
  ];
  const audioCatalogue = {
    discovery: {wave:'I',album:'Discovery',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-i-discovery',tracks:['Orientation','Intro Focus 10','Advanced Focus 10','Release and Recharge','Exploration, Sleep','Focus 10 Free Flow']},
    threshold: {wave:'II',album:'Threshold',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-ii-threshold',tracks:['Intro Focus 12','Problem Solving','One Month Patterning','Color Breathing','Energy Bar Tool','Living Body Map']},
    freedom: {wave:'III',album:'Freedom',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-iii-freedom',tracks:['Lift Off','Remote Viewing','Vectors','Five Questions','Energy Food','First Stage Separation']},
    adventure: {wave:'IV',album:'Adventure',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-iv-adventure',tracks:['One Year Patterning','Five Messages','Free Flow 12','NVC I','NVC II','Compoint 12']},
    exploring: {wave:'V',album:'Exploring',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-v-exploring',tracks:['Advanced Focus 12','Discovering Intuition','Exploring Intuition','Intro to Focus 15','Mission 15 Creation and Manifestation','Exploring Focus 15']},
    odyssey: {wave:'VI',album:'Odyssey',url:'https://www.monroeinstitute.org/products/gateway-experience-wave-vi-odyssey',tracks:['Sensing','Expansion','Point of Departure','Nonphysical Friends','Intro to Focus 21','Free Flow Journey in Focus 21']}
  };
  const audioFor = (lesson) => { const a=audioCatalogue[lesson.phase]; return a ? {...a,trackNumber:lesson.order,track:a.tracks[lesson.order-1]} : null; };
  return {waves,all,references,audioCatalogue,audioFor};
})();
