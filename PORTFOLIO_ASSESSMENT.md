# Portfolio Case Study Assessment

## Executive Summary

Your **Ocean Records** case study is genuinely strong and demonstrates real product thinking. However, it's carrying the entire portfolio—the other 9 projects range from moderate to minimal documentation, which creates an unbalanced impression. A hiring manager scanning your portfolio would see one excellent case study and a collection of thin project descriptions.

---

## Ocean Records: Detailed Analysis

### Strengths (What You're Doing Right)

**1. Clear Problem Framing**
You open with a specific design question: *"How can we convey the acoustic conflict between human activity and marine life in Monterey Bay?"* The problem is grounded in real-world stakes (whale deaths, unreported ship strikes, frequency overlap). This is exactly what the framework asks for.

**2. Evidence of Iteration & Failed Ideas**
- You show early concepts that look "quite different from our final solution"
- Hand sketches → Python prototypes → web prototypes → 4 rounds of Figma iteration
- This is the "evolution from bad idea to good idea" hiring managers want to see

**3. Technical Constraints & Product Thinking**
- Google DeepMind Perch model limitations requiring "agile modeling workflow"
- NOAA dataset constraints (4 years, 3 sensors)
- Processed "over 10 days worth of recordings" (honest about scope)
- Multi-temporal visualization challenge (year → month → day)

**4. Real Shipped Product with Credible Collaborators**
- Live site: ocean-records.vercel.app
- Harvard MDE program
- Google DeepMind researchers consultation
- NOAA officials involvement
- This is verifiable, legitimate work

**5. Attention to Detail**
- Frequency overlap visualization (lines drawn between overlapping human/animal sounds)
- Hover interactions play actual recorded sounds
- Custom Mapbox style designed from scratch
- Seasonal migration vs. year-round shipping insight

### Weaknesses (What's Missing)

**1. No Measurable Outcomes**
You mention presenting to NOAA and Google, but there's no answer to "did this work?" Questions to address:
- Did anyone actually use the visualization?
- What did NOAA/Google feedback reveal?
- Did it change any decisions or understanding?
- Any user testing results?

**2. "Why Not" Decisions Are Absent**
You show what you built, but not why you rejected alternatives:
- Why stacked circles instead of other visualization forms?
- Why three temporal scales instead of two or four?
- What concepts did you kill and why?

**3. Edge Cases Not Documented**
- What happens when there's no data for a time period?
- How do you handle conflicting classifications from Perch?
- What if a user's browser doesn't support audio?
- Loading states for 4 years of data?

**4. Partner Attribution Unclear**
You mention "worked with a partner" but never clarify who did what. Hiring managers want to know what *you* specifically owned.

---

## Portfolio-Wide Assessment

### Critical Issue: Uneven Depth

| Project | Detail Level | Problem Statement | Outcomes | Shipped? |
|---------|--------------|-------------------|----------|----------|
| Ocean Records | Excellent | Yes | Partial | Yes |
| Measuring Main Streets | Moderate | No | No | Yes |
| Chemical Valley | Moderate | Partial | No | Yes |
| Under Gardiner | Moderate | No | No | Yes |
| Adaptive Artifacts | Minimal | No | No | Yes |
| Memory Mend | Stub | No | No | Unknown |
| Opinion Generator | Minimal | No | No | Yes |
| Drake Time | Minimal | No | No | Yes |
| Zine Zone | Minimal | No | No | Yes |
| Pigeons & Planes | Minimal | N/A | No | Yes |

### Range Assessment
**Verdict: WEAK**

Almost everything is a data visualization or map. You're demonstrating one solution type repeatedly:
- Ocean Records: data viz + map
- Measuring Main Streets: data viz + map
- Chemical Valley: data viz + map
- Under Gardiner: archival map
- Adaptive Artifacts: data dashboard

Where are:
- Mobile experiences?
- E-commerce or transactional flows?
- Form-heavy interfaces?
- Enterprise/B2B tools?
- Consumer apps with onboarding?

### Real Products Assessment
**Verdict: STRONG**

Nearly everything shipped to real users. This is genuinely rare and valuable. Even the "minimal" projects have live URLs.

---

## Specific Recommendations

### Immediate Fixes for Ocean Records

1. **Add an Outcomes section** between Solution and Process:
   ```
   ## Impact
   - Presented to X researchers at Google DeepMind
   - [Any quotes or feedback]
   - [Usage numbers if available]
   - [What the visualization revealed that wasn't known before]
   ```

2. **Clarify your role explicitly:**
   ```
   "My partner [name] focused on [X]. I owned [Y], specifically:
   - Designed the custom Mapbox style
   - Built the animation system using GSAP
   - Developed the audio hover interaction
   - Led the visual identity"
   ```

3. **Add one "Why not" callout:**
   ```
   "We initially explored [radial timelines / spectrogram-based visualizations],
   but abandoned this approach because [specific reason].
   The stacked circle approach better served our goal of [X]."
   ```

4. **Document one edge case:**
   Show what happens during loading, when audio fails, or for empty data months.

### Portfolio-Wide Improvements

**Priority 1: Elevate 2-3 More Case Studies**

Choose your strongest shipped products and apply Ocean Records-level documentation:

- **Measuring Main Streets** (21-month project!) should be flagship-quality:
  - What was the hardest technical decision?
  - What did you learn from user feedback?
  - Show your architecture decisions
  - Include actual usage metrics

- **Chemical Valley** has social impact potential:
  - What did the Aamjiwnaang community say?
  - Did it influence policy or awareness?
  - Show the research-to-design connection

**Priority 2: Add Non-Map Work**

If you have any work that isn't geo/data-viz focused, add it. If not, consider:
- Redesigning an existing tool (even conceptually, labeled as such)
- A quick side project showing different design muscles

**Priority 3: Archive or Remove Stubs**

Memory Mend with one sentence hurts more than helps. Either:
- Complete it properly
- Remove it until it's ready

**Priority 4: Personal Projects Need Context**

Drake Time and Opinion Generator are fine as "creative experiments" but label them clearly:
```
"Personal Project: A weekend creative coding experiment exploring [X]"
```
Don't position them as case studies.

---

## Summary: What Hiring Managers Will Think

**If they only see Ocean Records:** "This person can think. They show their work, understand constraints, and shipped something real. I want to interview them."

**If they scan the whole portfolio:** "One great case study, a lot of thin project descriptions. Are the other projects less impressive, or did they just not document them? Unclear if this person has range beyond data visualization."

**The fix:** You don't need 10 case studies. You need 3-4 excellent ones showing different types of problems solved.
