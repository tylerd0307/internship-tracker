# CS 406 Internship Tracker — Weekly Progress
**Tyler Nguyen | Spring Term | CS 406**

## Overview
- **Total requirement**: 30 hours minimum
- **Hours logged**: 9 hrs (week 4 in progress)
- **Hours remaining**: ~21 hrs across weeks 5–11
- **Pace needed**: ~3 hrs/week

## Hours Log
| Week | Target | Actual | Cumulative | Notes |
|------|--------|--------|------------|-------|
| 1 | — | 2.0 | 2.0 | Problem discovery, user interviews |
| 2 | — | 3.75 | 5.75 | MVP scope, data model, wireframe |
| 3 | — | 1.0 | 6.75 | HTML/CSS/JS structure, table rendering, follow-up logic |
| 4 | — | 2.25+ | 9.0+ | Add form with real input + Notion write-up (in progress) |
| 5 | 12.0 | | | |
| 6 | 15.0 | | | |
| 7 | 18.0 | | | |
| 8 | 21.0 | | | |
| 9 | 24.0 | | | |
| 10 | 27.0 | | | |
| 11 | 30.0 | | | |

---

## Weekly Goals

### Week 4 ✅
**Theme**: Real user input (~1.25 hrs)
- [x] Replace placeholder add button with a proper form
- [x] Fields: company, role, status dropdown, last contact date
- [x] Show/hide form on button click; cancel resets it

---

### Week 5
**Theme**: Delete (~3.5 hrs)
- [ ] Add a delete button per row
- [ ] Remove entry from array and re-render table (~1 hr)
- [ ] Replace "Yes/No" follow-up text with ⚠️ icon to match wireframe (~0.25 hr)
- [ ] **Write Week 5 Notion write-up**: what was built, decisions made, next steps (~1 hr)
- [ ] Update hours log in TRACKER.md (~0.25 hr)
- [ ] Review: does the app match the Week 2 wireframe? Note gaps (~1 hr)

### Week 6
**Theme**: Edit (~3.5 hrs)
- [ ] Add an edit button per row (~0.5 hr)
- [ ] Pre-fill form with existing row data
- [ ] Submitting updates the entry in the array (~1.5 hrs)
- [ ] Manual test: add → edit → delete a full cycle
- [ ] **Write Week 6 Notion write-up**: mid-project reflection, what changed from original plan (~1 hr)
- [ ] Update hours log in TRACKER.md

### Week 7
**Theme**: Persistence + optional fields (~3.5 hrs)
- [ ] Save array to localStorage on every change (~0.5 hr)
- [ ] Load from localStorage on page load, fall back to sample data (~0.5 hr)
- [ ] Decide: add `applicationDate` and `notes` fields (defined in Week 2 data model but not yet built) (~0.5 hr)
- [ ] Code cleanup: remove placeholder comments (~0.5 hr)
- [ ] **Write Week 7 Notion write-up**: localStorage decision rationale, data model revisit (~1 hr)
- [ ] Update hours log in TRACKER.md

### Week 8
**Theme**: Usability testing (~3.5 hrs)
- [ ] Recruit 2–3 classmates or friends to try the app
- [ ] Observe without guiding — just watch (~1.5 hrs)
- [ ] Document: what confused them, what they tried to do that didn't work
- [ ] Synthesize top 3 issues; decide what to fix vs. leave out of scope (~0.5 hr)
- [ ] **Write Week 8 Notion write-up**: testing findings, synthesis, prioritization decisions (~1 hr)
- [ ] Update hours log in TRACKER.md

### Week 9
**Theme**: Refinements (~3.5 hrs)
- [ ] Fix top 2–3 issues from usability testing
- [ ] Visual polish: status column styling, spacing, form layout (~1.5 hrs)
- [ ] Quick re-test with 1 person to verify fixes (~0.5 hr)
- [ ] **Write Week 9 Notion write-up**: what changed, why, what you'd do differently (~1 hr)
- [ ] Update hours log in TRACKER.md

### Week 10
**Theme**: Polish + report (~3.5 hrs)
- [ ] Fix any remaining edge cases or bugs
- [ ] Final code review: readable? consistent? (~1 hr)
- [ ] Draft course writeup/report: problem, decisions, tradeoffs (~1.5 hrs)
- [ ] Confirm all MVP features work end-to-end
- [ ] **Write Week 10 Notion write-up** (~0.5 hr)
- [ ] Update hours log in TRACKER.md

### Week 11
**Theme**: Demo + submission (~3.25 hrs)
- [ ] Prepare and practice demo walkthrough (~1 hr)
- [ ] Final review of writeup/report
- [ ] Submit all course deliverables (~1 hr)
- [ ] Retrospective: what would you do differently? (~0.75 hr)
- [ ] **Write Week 11 Notion write-up**: final reflection
- [ ] Confirm final hours total ≥ 30 hrs

---

## MVP Feature Checklist
- [x] Render applications in a table
- [x] Highlight rows needing follow-up (>10 days)
- [x] Add application via form with real input
- [ ] Delete application
- [ ] Edit application
- [ ] Persist data across sessions (localStorage)

## Known Gaps vs. Week 2 Spec
- `applicationDate` field — defined in data model, not yet in the form or table
- `notes` field (optional) — defined in data model, not yet implemented
- Follow-up indicator shows "Yes/No" text — wireframe specifies ⚠️ icon

## Out of Scope — Do Not Add
- User authentication or accounts
- Backend or database
- AI features or automation
- Complex analytics
- Filter / sort (shown in wireframe but not committed to MVP)
