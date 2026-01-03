# CenturySync Landing Page - Project Context

## Project Overview

**CenturySync** is a Florida COA (Condominium/Community Owners Association) management platform built specifically for Century Village, West Palm Beach.

- **Target Market**: The 309 associations, 355 buildings, and 7,854 units of Century Village WPB
- **Primary Audience**: Board members (presidents, treasurers, secretaries) of CV associations
- **Demographics**: Primarily seniors (55+ community)
- **Primary Action**: Demo request form submission

## Tech Stack

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS v3 with custom design system
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Static hosting
- **Key Files**:
  - `src/pages/index.astro` - Main homepage
  - `src/layouts/BaseLayout.astro` - Global layout with meta, scripts
  - `src/styles/global.css` - Custom CSS, design tokens
  - `src/components/Header.astro` - Navigation
  - `src/components/Footer.astro` - Footer
  - `src/components/ContactForm.astro` - Demo request form
  - `tailwind.config.cjs` - Tailwind configuration

## Verified Product Features

These features have been confirmed as **actually existing** in the product:

### Document Management
- Unlimited document storage
- Documents classified by year
- AI-powered summaries of documents
- Full-text search across all documents
- Screenshot previews of documents
- Upload via email to dedicated address
- 2,000 paper document scans included in setup

### Communication
- Email notifications to all unit owners
- SMS notifications
- Full audit trail (timestamped delivery records)
- News section for announcements

### Tenant/Owner Management
- Tenant tracking with lease automation
- Owner accounts with emergency contacts
- Calendar with community events

### Collaboration
- Cross-building board forum (unique feature - boards can discuss with other CV boards)
- Comment system on documents/items
- Meeting minutes storage

### Public-Facing
- Public websites for each association (useful for realtors)
- CV directory with rules and community map

### Mobile
- Native iOS app
- Native Android app
- Push notifications

## Key Differentiators (USE THESE IN COPY)

1. **Founder Story**: Founder is a Century Village board member AND multi-unit owner - built it for his own needs first
2. **Local Presence**: Office hours every Wednesday, 2-5 PM at 100-110 Century Blvd, Suite 202
3. **Florida Compliance Focus**: Built specifically for Florida COA regulations
4. **Senior-Friendly Design**: Designed for the 55+ demographic
5. **AI Technology**: Cutting-edge AI features (document summaries, search)
6. **Breakeven Philosophy**: Not VC-backed, focused on sustainability over aggressive growth
7. **Cross-Building Forum**: Unique feature - boards can collaborate across all 309 associations

## Legal & Copy Constraints

### Must Avoid
- **"HB 1021 & HB 913 Ready"** - Too specific, implies legal compliance guarantee. Use softer language like "helps you stay organized for Florida's changing condo laws"
- **"99% Satisfaction"** - Unverifiable, remove or replace with real metric
- **Fictional testimonials without disclosure** - Current testimonials (Carlos R., James O., Susan M.) are fictional. Must either:
  - Add "Example testimonials" disclosure
  - Replace with real testimonials
  - Reframe as "What board members tell us" with paraphrased feedback
- **"Special Offer"** - Potentially deceptive if this is standard pricing

### Safe to Use
- Numbers about Century Village itself (309 associations, 355 buildings, 7,854 units)
- "Thousands of documents managed" (verified)
- "Hundreds of notifications sent monthly" (verified)
- All verified features listed above

---

# COPY AUDIT FINDINGS

## Current State: 6.5/10

Good structure and visual design, but generic SaaS language, missed differentiators, and legal risks.

## Section-by-Section Analysis

### 1. HERO SECTION
**Location**: Lines 7-175 of index.astro

**Current Copy Issues**:
- Badge "Your neighbors on Haverhill Road are already using it" - good social proof concept
- "Built for Century Village" - weak, passive headline
- Stats (309/355/7,854) describe Century Village, NOT CenturySync achievements - confusing placement
- "Finally, software that understands your community" - generic tagline

**Recommendations**:
- Lead with founder story or unique value prop
- Clarify stats are about CV, or replace with CenturySync metrics
- Stronger headline with specific benefit
- Add urgency or specific pain point

### 2. PAIN POINTS SECTION
**Location**: Lines 177-227

**Current Copy Issues**:
- Good structure (3 pain points)
- "Communication Overload" - solid, relatable
- "Compliance Complexity" - good but vague
- "Legacy Infrastructure" - weakest, less emotionally resonant

**Recommendations**:
- Make pain points more visceral with specific scenarios
- Add Florida-specific compliance pain (specific law references)
- Consider replacing "Legacy Infrastructure" with more urgent pain

### 3. COMPLIANCE SECTION
**Location**: Lines 229-277

**Current Copy Issues**:
- **LEGAL RISK**: "HB 1021 & HB 913 Ready" implies legal compliance guarantee
- "Built-in tools ensure your building meets Florida's latest condo law requirements" - too strong
- Good structure with checklist items

**Recommendations**:
- Soften to "helps you stay organized" language
- Remove specific bill numbers from claims
- Focus on document organization, not legal compliance

### 4. FEATURES SECTION
**Location**: Lines 279-376

**Current Copy Issues**:
- Shows 6 features, misses best differentiators
- Missing: AI summaries, full-text search, tenant automation, public websites, board forum
- Generic descriptions that could apply to any COA software
- "Unlimited Document Storage" undersells the AI/search capabilities

**Recommendations**:
- Add AI features prominently (major differentiator)
- Highlight cross-building forum (unique)
- Add public website feature (valuable for realtors)
- Make descriptions more specific to CV context

### 5. TESTIMONIALS SECTION
**Location**: Lines 378-461

**Current Copy Issues**:
- **LEGAL RISK**: Fictional testimonials with real-sounding names
- "15K+ Documents", "5K+ Notifications", "99% Satisfaction" - mixed real/unverifiable stats
- Good quote content, but can't use without disclosure

**Recommendations**:
- Label as "Example testimonials" or replace with real ones
- Remove "99% Satisfaction" (unverifiable)
- Consider "What board members tell us" framing

### 6. HOW IT WORKS SECTION
**Location**: Lines 463-507

**Current Copy Issues**:
- Solid 3-step structure
- "Free of charge" for document migration - good differentiator
- "Live in days, not months" - good but unverifiable

**Recommendations**:
- Minor polish only
- Could add more specificity to local/in-person aspect

### 7. PRICING SECTION
**Location**: Lines 509-558

**Current Copy Issues**:
- **POTENTIAL ISSUE**: "Special Offer for Century Village" - is this actually special or standard?
- Clear pricing structure ($79/mo + $1.50/unit)
- Good inclusion of Wednesday office hours

**Recommendations**:
- Remove "Special Offer" if standard pricing
- Could add comparison to competitor pricing
- Emphasize value of included features

### 8. DEMO FORM SECTION
**Location**: Lines 560-569

**Current Copy Issues**:
- Very brief, functional
- "Ready to Get Started?" - generic CTA

**Recommendations**:
- Could add urgency or specific benefit
- Consider adding trust signals near form

---

# PRIORITY REWRITE ORDER

1. **Hero Section** - First impression, sets tone
2. **Features Section** - Missing best differentiators (AI, forum, public sites)
3. **Compliance Section** - Legal risk with specific law claims
4. **Testimonials Section** - Legal risk with fictional testimonials
5. **Pain Points Section** - Opportunity for more emotional resonance
6. **Pricing Section** - Remove potentially deceptive "Special Offer"
7. **How It Works** - Minor polish
8. **Demo Form** - Minor polish

---

# COPYWRITING METHODOLOGY

## Team Perspectives

When rewriting copy, consider these four perspectives and iterate until compromise:

1. **Direct Response Strategist**
   - Focus: Conversion, urgency, benefits over features
   - Questions: Does this drive action? Is the CTA clear? Is there urgency?

2. **Legal/Compliance Reviewer**
   - Focus: Verifiable claims, FTC compliance, liability
   - Questions: Can we prove this? Could this mislead? Are testimonials disclosed?

3. **Voice of Customer (VoC) Analyst**
   - Focus: Authentic language, emotional resonance, pain points
   - Questions: Would a CV board member say this? Does it address real frustrations?

4. **Editor/Clarity Specialist**
   - Focus: Concision, readability, senior-friendly language
   - Questions: Is this too long? Too jargon-y? Would a 70-year-old understand immediately?

## Style Guidelines

- **Tone**: Warm, professional, local (not corporate SaaS)
- **Reading Level**: 8th grade or lower
- **Sentence Length**: Short. Punchy. Easy to scan.
- **Avoid**: Jargon, buzzwords, claims we can't verify
- **Use**: Specific numbers, CV-specific references, founder story

---

# PENDING TASKS

## Immediate Next Steps (Copy Rewrite)

1. [ ] Rewrite Hero section with team perspective iteration
2. [ ] Rewrite Features section to include AI, forum, public sites
3. [ ] Fix Compliance section legal language
4. [ ] Fix Testimonials section (disclosure or replacement)
5. [ ] Polish remaining sections
6. [ ] Implement all approved changes

## UI/UX Plan (Separate Task)

A UI/UX overhaul plan exists at `~/.claude/plans/bright-jumping-origami.md` covering:
- Typography refinements
- Micro-interactions
- Mobile optimizations
- Accessibility improvements

---

# COMMANDS

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build
```

---

# NOTES

- Testimonials are currently fictional placeholders - need real testimonials or disclosure
- The "99% Satisfaction" stat is unverifiable and should be removed
- Hero stats (309/355/7,854) are about Century Village, not CenturySync metrics
- Founder story (CV board member + multi-unit owner) is underutilized
- AI features are a major differentiator but barely mentioned
- Cross-building board forum is unique but not highlighted
