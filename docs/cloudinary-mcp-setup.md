# Cloudinary MCP Setup Instructions

This document explains how to add the Cloudinary Asset Management MCP server to Cursor so you can scan, organize, and optimize media assets directly from the AI assistant.

## Quick Setup (Recommended: OAuth)

1. Open **Cursor Settings** (Cmd/Ctrl + ,)
2. Go to **Tools and Integrations > MCP Tools**
3. Click **New MCP Server**
4. Add this configuration:

```json
{
  "cloudinary-asset-mgmt": {
    "url": "https://asset-management.mcp.cloudinary.com/sse"
  }
}
```

5. Click **Connect** and complete OAuth to link your Cloudinary account (cloud: `dck5rzi4h`)
6. Restart Cursor for changes to take effect

## Alternative: API Key Authentication

If OAuth is not suitable, use API keys from [Cloudinary Console > API Keys](https://console.cloudinary.com/app/settings/api-keys):

```json
{
  "cloudinary-asset-mgmt": {
    "url": "https://asset-management.mcp.cloudinary.com/sse",
    "headers": {
      "cloudinary-url": "cloudinary://API_KEY:API_SECRET@dck5rzi4h"
    }
  }
}
```

**Never commit credentials.** Use environment variables or Cursor's secure storage.

## Your Cloudinary Configuration

- **Cloud name:** `dck5rzi4h`
- **Base path:** `art/moisestech-website/`
- **Asset locations:** `artworks/`, `exhibitions/`, `events/`, `own-your-digital-presence/`, `tech-nonprofit/`

## What You Can Do With the MCP

Once connected, you can ask Cursor to:

- List and search assets in your Cloudinary folder
- Compare Cloudinary assets to URLs in `src/constants/*.ts`
- Tag, rename, or move assets
- Generate optimized transformation URLs (resize, crop, format)
- Find orphaned or missing assets

See [docs/cursor-prompts.md](cursor-prompts.md) for ready-to-use media prompts.
