import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/seo/constants';

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonicalLink(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

export function Seo({ title, description, path, image = DEFAULT_OG_IMAGE, noIndex = false }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    setCanonicalLink(canonicalUrl);

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'pt_BR');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);
  }, [title, description, path, image, noIndex]);

  return null;
}
