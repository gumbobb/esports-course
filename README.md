# Introduction to Esports Management (course site)

A 15-week online high school course built as static HTML for GitHub Pages.

## Publish on GitHub Pages (about 10 minutes)

1. Sign in to github.com and click **New repository**. Name it `esports-course`. Public. Do not add a README (this folder has one). Create.
2. On the empty repo page click **uploading an existing file**. Drag in everything inside this folder: `index.html`, `syllabus.html`, `orientation.html`, `capstone.html`, `resources.html`, `README.md`, and the `assets` and `modules` folders. Commit.
3. Go to **Settings > Pages**. Under "Build and deployment," set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**. Save.
4. Wait one to two minutes, refresh. The site is live at `https://YOURUSERNAME.github.io/esports-course/`.
5. Click through every top-menu link once to confirm.

To change anything later: edit the file on GitHub (pencil icon), commit, and the site updates in about a minute.

## Four things to replace before recording

Search the files for these and swap in your real links:

| Placeholder | Where | Replace with |
|---|---|---|
| `VIDEO_ID_WELCOME` | index.html, orientation.html | YouTube ID of your 2 to 3 minute welcome video (unlisted is fine) |
| `VIDEO_ID_TOUR` | orientation.html | YouTube ID of a 2 minute site tour (can be the first part of your Part 3 video) |
| `GOOGLE_FORM_SYLLABUS_URL` | orientation.html | A Google Form with 10 syllabus questions (first field: student name) |
| `PADLET_QUESTIONS_URL`, `PADLET_INTRO_URL` | orientation.html | Two Padlets: Questions board and Introductions |

Optional but good for the video: make one real Google Form for the Week 1 check (the five questions are listed on the page) and one Padlet for the Week 1 discussion, then paste the links into `modules/01.html` in place of `#check` and `#discuss`. Every other week can stay as-is; the page describes the quiz and prompt in full.

Also fill in the school help desk and counseling placeholders on `resources.html`.

## Structure

- `index.html` welcome, outcomes, weekly rhythm, module grid
- `syllabus.html` description, outcomes, grading, communication and feedback timelines, late work, AI policy, accessibility, schedule
- `orientation.html` Module 0: the Level 2 orientation (who I am, communication, content, navigation, tool guides, how to succeed, discussion rubric, late and AI rules, community, Module 0 tasks, transcript)
- `modules/01.html` to `15.html` identical template: objectives, Learn (reading, sources, video), Check, Do, Discuss, Assess with rubric, checklist, AI note
- `capstone.html` two tracks, checkpoints, final rubric
- `resources.html` troubleshooting table, tool guides link, organizations, design notes
- `assets/style.css` one stylesheet

## Accessibility notes

Semantic headings, skip link, keyboard-visible focus, 4.5:1 contrast, all iframes titled, responsive layout, no color-only meaning. Add captions to your own videos on YouTube before linking them.
