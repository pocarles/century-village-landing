# CenturySync Marketing Content

This folder contains all marketing materials for CenturySync — emails, social posts, and templates.

## Structure

```
marketing/
├── templates/           # Reusable templates
│   ├── email-feature-announcement.md
│   ├── social-post-template.md
│   └── brand-guidelines.md
├── emails/              # Email campaigns
│   └── YYYY-MM-feature-name.md
└── social/              # Social media content
    └── YYYY-MM-feature-name.md
```

## Workflow

1. **Oslo drafts** content using Pierre-Olivier's voice (pierre-olivier-writer skill)
2. **Pierre-Olivier approves** via Telegram
3. **Oslo publishes:**
   - Social → n8n "CenturySync Scheduler Softr" workflow
   - Email → Postmark via Softr

## Voice & Tone

All content written in Pierre-Olivier's voice:
- Direct and confident
- First principles thinking
- No fluff or corporate speak
- Slightly casual, approachable
- French founder energy — sophisticated but practical

## Murray the Mascot

Generate Murray illustrations using the `murray-centurysync` skill.
Reference images: `/root/clawd/skills/murray-centurysync/references/`

## Distribution Channels

- **Social:** Threads, Facebook, LinkedIn, Instagram (via n8n)
- **Email:** Postmark (via Softr)
- **Website:** Changelog at centurysync.com/changelog
