# Gateway Atlas

A static, GitHub Pages–ready interactive companion for learning about the 1983 Army **Analysis and Assessment of Gateway Process** and the classic six-wave Monroe Gateway Experience.

## Inside

- **Landing directory:** eight visually themed learning legs.
- **Phase directories:** original Gateway Waves I–VI, a separate recovered-page-25 reflection leg, and a final evidence lab.
- **44 individual lesson pages:** objective, practical steps, what to notice, reality check, Page 25 reflection and personal journal.
- **44 interactive Practice Rooms with FREE original spoken cues and optional synthesized stereo tones:** one per lesson, with a preparation checklist, immersive quiet-session screen, elapsed timer, post-session journal, and finish/next navigation.
- **Recording guide:** all 36 Monroe lessons identify their exact Wave, track number, and recording title, with official Wave source links. Eight additional report/reflection lessons explicitly say they require no Monroe recording.
- **Built-in free audio:** 44 original Atlas practice guides use device voice synthesis (speechSynthesis) to read lesson-specific instructions, automatically spaced across a roughly 16-minute practice and accompanied by optional 180/184 Hz stereo tones. These are NOT Monroe recordings or exact Hemi-Sync substitutes. Keep the browser active for reliable voice playback, especially on iOS.
- **Optional local audio playback:** select a legally obtained audio track from your own device. Files stay local (in memory only); the site never uploads or distributes audio.
- **Private progress tracking:** checklists, manual lesson completion, session counter, optional elapsed timer, browser-local notes.
- **Backup/restore:** export and import JSON to move notes between devices. No accounts or backend required.
- **Responsive:** phone, tablet and desktop layouts; reduced-motion-friendly.

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub, e.g. `gateway-atlas`.
2. Upload all files and the `assets/` folder **to the repository root**. (If you download the ZIP, extract its contents before uploading.)
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**. Save.
5. Your website will be at `https://YOUR-USERNAME.github.io/gateway-atlas/` after GitHub publishes it.

Or use the GitHub CLI:

```bash
git init
git add .
git commit -m "Launch Gateway Atlas"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gateway-atlas.git
git push -u origin main
```

Then enable Pages as above.

## Preview locally

Opening `index.html` directly may work, but a local server is more reliable:

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Editing

- Lesson contents and phase metadata: `assets/curriculum.js`
- Website templates / behavior: `assets/app.js`
- Styling and colors: `assets/styles.css`
- Pages: `index.html`, `phase.html`, `lesson.html`, `practice.html`, `sources.html`
- Immersive Practice Mode code and styling: `assets/practice.js`, `assets/practice.css`

All links are relative, so project-site URLs under `/repository-name/` work without changing a base path. No build step, framework, API keys or database are needed. Google Fonts are optional; system fonts are the fallback.

## Audio and intellectual property

This study companion **does not contain Monroe Institute recordings, scripts, or paid course materials**. It links to official resources. Content is independently written; exercise titles and overall sequences reflect the source curriculum. Purchase or access official audio legally if you want to practice along with the original recordings.

**Which recording do I use?** Each lesson in original Waves I–VI matches a different recording. The site shows its exact Wave and track number in the lesson page and Practice Mode. The first six are Wave I · Discovery: 01 Orientation, 02 Intro Focus 10, 03 Advanced Focus 10, 04 Release and Recharge, 05 Exploration Sleep, 06 Focus 10 Free Flow. Then Wave II begins with 01 Intro Focus 12. Repeat a recording if needed; move ahead when comfortable.

**Official free track:** Hemi-Sync offers [a free Wave I introductory track](https://hemi-sync.com/gateway-experience-intro/) which presents Orientation and Focus 3 practices. This is a starting point, not a substitute for every subsequent track.

**Optional player:** During Practice Mode you can select an MP3/M4A/WAV/FLAC/OGG/AAC you own using **Select Audio File**. The selected file stays in the browser tab on that device (via a temporary object URL) and isn't uploaded or included with the site. Loading another page or reloading requires selecting it again. Browser and device support for formats varies. Some people prefer to play their purchased recordings in a separate audio app while keeping Atlas open for notes.

**Practice Mode flow:** Open a lesson, tap **Open Practice Mode**, check the four preparation items, enter the session, follow the original recording (or written steps for Atlas-created lessons), end the session, write observations and save. Session count and notes are preserved using the same browser localStorage data as the original Atlas.

## Important distinctions

- The 1983 report is a historical assessment **by an Army officer**, preserved in government archives. It is not proof of the report's extraordinary claims.
- The separately recovered page 25 has different provenance from the official 29-page scan and is labeled as such.
- Focus levels are training concepts, not independently verified portals to other dimensions or time periods.
- Meditation and imagery should not substitute for medical care. Avoid forced breathing, sleep deprivation, and unsupervised REM/hypnosis experimentation.
- Local storage can be cleared by the browser. Export your journal for a backup.

## Sources

See the site's **Sources & Safety** page. Key references: [GovInfo archive](https://www.govinfo.gov/app/details/GOVPUB-D101-PURL-gpo152943), [Monroe Institute Gateway overview](https://www.monroeinstituteuk.org/gateway-experience/), [reconstructed scan](https://commons.wikimedia.org/wiki/File:Analysis_and_Assessment_of_Gateway_Process.pdf).

This is an independent educational project, not affiliated with the CIA, U.S. Army, or Monroe Institute.
