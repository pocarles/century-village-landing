# DNS Setup for centurysync.com

This guide will help you configure DNS to point centurysync.com to your GitHub Pages site.

## Current Status

- **GitHub Pages URL**: https://pocarles.github.io/century-village-landing/
- **Target Domain**: centurysync.com
- **CNAME File**: Already configured in `public/CNAME`

## Step 1: Configure GitHub Repository

The repository is already configured for GitHub Pages with a custom domain. You can verify this at:
https://github.com/pocarles/century-village-landing/settings/pages

## Step 2: Configure DNS Records

Log into your domain registrar or DNS provider and add the following records:

### Option A: Apex Domain (centurysync.com) - Recommended

Add these **A records** pointing to GitHub Pages' IP addresses:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Then add a **CNAME record** for www:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | pocarles.github.io |

### Option B: Using www Subdomain

If you prefer www.centurysync.com as the primary:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | pocarles.github.io |

Then set up a redirect from centurysync.com to www.centurysync.com (depends on registrar).

## Step 3: Add Custom Domain in GitHub

1. Go to https://github.com/pocarles/century-village-landing/settings/pages
2. Under "Custom domain", enter: `centurysync.com`
3. Click "Save"
4. Wait for DNS check (may take a few minutes)
5. Enable "Enforce HTTPS" once DNS propagates

You can also do this via CLI:
```bash
gh api repos/pocarles/century-village-landing/pages -X PUT -f cname=centurysync.com
```

## Step 4: Verify DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally.

### Check DNS records:
```bash
# Check A records
dig centurysync.com A +short

# Check CNAME for www
dig www.centurysync.com CNAME +short
```

### Expected output:
```
# A records
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# CNAME
pocarles.github.io.
```

### Online tools:
- https://dnschecker.org/ - Check DNS propagation worldwide
- https://www.whatsmydns.net/ - Another propagation checker

## Step 5: Enable HTTPS

Once DNS is configured:

1. Go to https://github.com/pocarles/century-village-landing/settings/pages
2. Wait for the "Enforce HTTPS" checkbox to become available
3. Check "Enforce HTTPS"

GitHub automatically provisions a free SSL certificate via Let's Encrypt.

## Troubleshooting

### "Domain not verified" error
- Wait 15-30 minutes for DNS to propagate
- Verify DNS records are correct using `dig` or online tools
- Make sure CNAME file in repository contains exactly `centurysync.com`

### HTTPS not available
- DNS must be fully propagated first
- GitHub needs time to provision the SSL certificate (up to 24 hours)
- Verify no conflicting CAA records in DNS

### 404 errors
- Ensure the build workflow completed successfully
- Check GitHub Actions tab for any build errors
- Verify CNAME file exists in the `public/` directory

## Quick Commands Reference

```bash
# Check GitHub Pages status
gh api repos/pocarles/century-village-landing/pages

# Set custom domain
gh api repos/pocarles/century-village-landing/pages -X PUT -f cname=centurysync.com

# Check recent workflow runs
gh run list --repo pocarles/century-village-landing --limit 5

# Trigger a new deployment
git commit --allow-empty -m "Trigger deployment" && git push
```

## Common Registrars

Here are quick links to DNS management for popular registrars:

- **GoDaddy**: https://dcc.godaddy.com/manage/dns
- **Namecheap**: https://ap.www.namecheap.com/Domains/DomainControlPanel/
- **Cloudflare**: https://dash.cloudflare.com/
- **Google Domains**: https://domains.google.com/registrar/
- **Route 53 (AWS)**: https://console.aws.amazon.com/route53/

## Support

If you encounter issues:
1. Check GitHub's status page: https://www.githubstatus.com/
2. Review GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Open an issue in the repository
