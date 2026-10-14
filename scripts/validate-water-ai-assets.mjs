#!/usr/bin/env node
/**
 * Validate the local Cloudinary upload-receipt manifest before builds and publishing.
 *
 * Normal run permits pending study images while their originals are selected.
 * Run with --require-ready to gate publication on all three approved images.
 */
import { readFileSync } from 'node:fs';

const data = JSON.parse(
  readFileSync(new URL('../src/content/research/water-and-ai-media.json', import.meta.url), 'utf8'),
);
const requireReady = process.argv.includes('--require-ready');
const errors = [];
const expected = ['human-coolant', 'still-processing', 'paper-waterfall'];
const expectedPrefix = 'art/moisestech-website/research/ai-water-material-internet/';
const cloud = 'dck5rzi4h';

if (data.schemaVersion !== 1) errors.push('Unrecognized media manifest schemaVersion');
if (data.cloudinaryCloud !== cloud) errors.push('Incorrect Cloudinary cloud');
if (data.cloudinaryFolder !== expectedPrefix.slice(0, -1)) errors.push('Incorrect destination folder');

for (const id of expected) {
  const asset = data.studies?.[id];
  if (!asset) { errors.push(`Missing ${id}`); continue; }
  const prefix = `[${id}]`;
  if (!['pending', 'ready'].includes(asset.status)) errors.push(`${prefix} Invalid status`);
  if (asset.publicId !== `${expectedPrefix}${id}-01`) errors.push(`${prefix} Unexpected public ID`);
  if (!asset.alt?.trim() || !asset.caption?.trim()) errors.push(`${prefix} Missing alt text/caption`);
  if (requireReady && asset.status !== 'ready') errors.push(`${prefix} Approved image still pending`);
  if (asset.status === 'pending') {
    if (asset.secureUrl !== null || asset.version !== null || asset.verifiedAt !== null)
      errors.push(`${prefix} Pending asset must not masquerade as uploaded`);
    continue;
  }
  const url = asset.secureUrl;
  if (typeof url !== 'string' || !url.startsWith(`https://res.cloudinary.com/${cloud}/image/upload/`))
    errors.push(`${prefix} Missing Cloudinary HTTPS URL`);
  if (!['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(asset.format))
    errors.push(`${prefix} Unsupported image format`);
  if (!Number.isInteger(asset.version) || asset.version <= 0)
    errors.push(`${prefix} Missing upload version`);
  if (!Number.isInteger(asset.width) || asset.width <= 0 ||
      !Number.isInteger(asset.height) || asset.height <= 0)
    errors.push(`${prefix} Missing image dimensions`);
  if (!asset.sourceFile?.trim() || !asset.verifiedAt?.trim())
    errors.push(`${prefix} Missing selection/provenance or verification time`);
  if (typeof url === 'string' && !url.endsWith(`/${asset.publicId}.${asset.format}`))
    errors.push(`${prefix} URL does not match the approved public ID and format`);
}

const unknown = Object.keys(data.studies ?? {}).filter((key) => !expected.includes(key));
if (unknown.length) errors.push(`Unknown media keys: ${unknown.join(', ')}`);
if (errors.length) {
  console.error('Water/AI media validation failed:\n' + errors.map((error) => ' - ' + error).join('\n'));
  process.exit(1);
}
const ready = expected.filter((id) => data.studies[id].status === 'ready').length;
console.log(`Water/AI media manifest valid: ${ready}/${expected.length} artist-approved images ready`);
