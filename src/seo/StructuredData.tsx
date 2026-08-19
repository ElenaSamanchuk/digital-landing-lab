import { organizationJsonLd, websiteJsonLd } from "./siteMeta";

function structuredDataScript(): string {
  return JSON.stringify([organizationJsonLd, websiteJsonLd]);
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredDataScript() }}
    />
  );
}
