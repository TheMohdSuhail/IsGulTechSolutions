import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
    title,
    description,
    keywords,
    author,
    robots = "index, follow",
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType = "website",
    ogLocale = "en_US",
    twitterCard = "summary_large_image",
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
}) => {
    return (
        <Helmet>
            {/* Basic SEO Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content={robots} />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph Tags (Social Media) */}
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:locale" content={ogLocale} />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={twitterTitle || title} />
            <meta name="twitter:description" content={twitterDescription || description} />
            <meta name="twitter:image" content={twitterImage || ogImage} />

            {/* Additional Meta Tags */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    );
};

export default SEO;
