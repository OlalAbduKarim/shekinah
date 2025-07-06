import { useEffect } from 'react';

const setMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const setPropertyMetaTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

const setCanonicalLink = (href: string) => {
    let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}


export const useSeo = ({ title, description, imageUrl, path }: { title: string, description: string, imageUrl?: string, path: string }) => {
    useEffect(() => {
        const fullTitle = `${title} | Shekinah Glory Worship Center`;
        const siteName = 'Shekinah Glory Worship Center';
        const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
        const canonicalUrl = `${baseUrl}#${path}`; // Using hash router path

        document.title = fullTitle;
        setMetaTag('description', description);
        setCanonicalLink(canonicalUrl);

        // Open Graph
        setPropertyMetaTag('og:title', fullTitle);
        setPropertyMetaTag('og:description', description);
        setPropertyMetaTag('og:type', 'website');
        setPropertyMetaTag('og:url', canonicalUrl);
        setPropertyMetaTag('og:site_name', siteName);
        if (imageUrl) {
            setPropertyMetaTag('og:image', imageUrl);
        }

        // Twitter Card
        setMetaTag('twitter:card', imageUrl ? 'summary_large_image' : 'summary');
        setMetaTag('twitter:title', fullTitle);
        setMetaTag('twitter:description', description);
        if (imageUrl) {
            setMetaTag('twitter:image', imageUrl);
        }

    }, [title, description, imageUrl, path]);
};
