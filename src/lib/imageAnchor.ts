/**
 * Where a cropped frame keeps the picture.
 * Named edges, or any CSS object-position (`center 26%`). Unset means center.
 */
export type ImageAnchor = 'top' | 'center' | 'bottom' | (string & {});

export function objectCoverProps(anchor?: ImageAnchor): {
  className: string;
  style?: { objectPosition: string };
} {
  if (anchor === 'top') return { className: 'object-cover object-top' };
  if (anchor === 'bottom') return { className: 'object-cover object-bottom' };
  if (!anchor || anchor === 'center') return { className: 'object-cover object-center' };
  return { className: 'object-cover', style: { objectPosition: anchor } };
}
