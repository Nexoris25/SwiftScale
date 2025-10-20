import React from "react";

type JsonLdProps = {
    id?: string;
    data: unknown | unknown[];
};

/**
 * Renders a JSON-LD <script> tag. Pass either a single object or an array.
 * If an array is provided, it will be wrapped in an @graph for convenience.
 */
export default function JsonLd({ id, data }: JsonLdProps) {
    const content = Array.isArray(data)
        ? { "@context": "https://schema.org", "@graph": data }
        : data as object;

    return (
        <script
            id={id}
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
        />
    );
}
