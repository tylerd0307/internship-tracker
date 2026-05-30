# CS 406 Internship Tracker — Weekly Progress
**Tyler Nguyen | Spring Term | CS 406**

## Overview
- **Total requirement**: 30 hours minimum
- **Hours logged**: 26.5 hrs through week 9
- **Hours remaining**: ~3.5 hrs across weeks 10–11
- **Pace needed**: ~3 hrs/week

## Hours Log
| Week | Target | Actual | Cumulative | Notes |
|------|--------|--------|------------|-------|
| 1 | — | 2.0 | 2.0 | Problem discovery, user interviews |
| 2 | — | 3.75 | 5.75 | MVP scope, data model, wireframe |
| 3 | — | 1.0 | 6.75 | HTML/CSS/JS structure, table rendering, follow-up logic |
| 4 | — | 2.25 | 9.0 | Add form with real input + Notion write-up |
| 5 | 12.0 | 3.25 | 12.25 | Delete functionality, ⚠️ icon, confirmation dialog, charset fix, status color coding |
| 6 | 15.0 | 3.0 | 15.25 | Edit functionality, mid-project reflection |
| 7 | 18.0 | 4.25 | 19.5 | localStorage, notes field, filter bar, GitHub Pages deployment |
| 8 | 21.0 | 4.5 | 24.0 | Usability testing, follow-up legend, filter bar styling, location field |
| 9 | 24.0 | 2.5 | 26.5 | Visual polish — headers, buttons, form, empty state, page layout |
| 10 | 27.0 | | | |
| 11 | 30.0 | | | |

---

## Weekly Goals

### Week 4 ✅
**Theme**: Real user input
- [x] Replace placeholder add button with a proper form
- [x] Fields: company, role, status dropdown, last contact date
- [x] Show/hide form on button click; cancel resets it

---

### Week 5 ✅
**Theme**: Delete + visual polish
- [x] Add a delete button per row
- [x] Remove entry from array and re-render table
- [x] Confirmation dialog before delete
- [x] Replace "Yes/No" follow-up text with ⚠️ icon
- [x] Status color coding (grey, blue, green, red)
- [x] Fix charset encoding bug
- [x] Write Week 5 Notion write-up
- [x] Update hours log in TRACKER.md

---

### Week 6
**Theme**: Edit (~3.5 hrs)
- [x] Add an edit button per row
- [x] Pre-fill form with existing row data
- [x] Submitting updates the entry in the array
- [x] resetForm() shared cleanup for add, edit, and cancel
- [x] Manual test: add → edit → delete a full cycle
- [ ] **Write Week 6 Notion write-up**: mid-project reflection, what changed from original plan
- [ ] Update hours log in TRACKER.md

### Week 7 ✅
**Theme**: Persistence + optional fields
- [x] Save array to localStorage on every change
- [x] Load from localStorage on page load, fall back to sample data
- [x] Added notes field (optional) from Week 2 data model
- [x] Decided against applicationDate — no product logic depends on it yet
- [x] Filter bar: All / Needs Follow-Up toggle
- [x] Code cleanup: removed placeholder comments
- [x] Deploy to GitHub Pages
- [x] Write Week 7 Notion write-up
- [x] Update hours log in TRACKER.md

### Week 8 ✅
**Theme**: Usability testing
- [x] Usability testing with Cohen, Josh, Jacob (original Week 1 interviewees)
- [x] Documented 3 issues: follow-up legend, filter bar clarity, location field
- [x] Fixed all 3 issues
- [x] Noted CSV import as out-of-scope future consideration
- [x] Write Week 8 Notion write-up
- [x] Update hours log in TRACKER.md

### Week 9 ✅
**Theme**: Visual polish
- [x] Table header dark background + white text
- [x] Notes column max-width with ellipsis overflow
- [x] Form inputs consistent width, textarea styled and resizable
- [x] Action buttons styled — edit (grey), delete (red-tinted)
- [x] Empty state for filter when no follow-ups needed
- [x] Add button styled — blue, rounded, hover state
- [x] Page title styled — bold, underline, better hierarchy
- [x] Page max-width + centered layout
- [x] Write Week 9 Notion write-up
- [x] Update hours log in TRACKER.md

### Week 10
**Theme**: Polish + report (~3.5 hrs)
- [ ] Fix any remaining edge cases or bugs
- [ ] Final code review: readable? consistent?
- [ ] Draft course writeup/report: problem, decisions, tradeoffs
- [ ] Confirm all MVP features work end-to-end
- [ ] **Write Week 10 Notion write-up**
- [ ] Update hours log in TRACKER.md

### Week 11
**Theme**: Demo + submission (~3.25 hrs)
- [ ] Prepare and practice demo walkthrough
- [ ] Final review of writeup/report
- [ ] Submit all course deliverables
- [ ] Retrospective: what would you do differently?
- [ ] **Write Week 11 Notion write-up**: final reflection
- [ ] Confirm final hours total ≥ 30 hrs

---

## MVP Feature Checklist
- [x] Render applications in a table
- [x] Highlight rows needing follow-up (>10 days)
- [x] Add application via form with real input
- [x] Delete application (with confirmation)
- [x] Edit application (pre-fills existing form)
- [ ] Persist data across sessions (localStorage)

## Known Gaps vs. Week 2 Spec
- `applicationDate` field — intentionally excluded; no product logic depends on it within MVP scope

## Out of Scope — Do Not Add
- User authentication or accounts
- Backend or database
- AI features or automation
- Complex analytics
- Filter / sort (shown in wireframe but not committed to MVP)
