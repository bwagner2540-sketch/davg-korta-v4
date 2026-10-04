import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    slug: z.string(), name: z.string(),
    seo: z.object({ title: z.string(), description: z.string(), canonicalPath: z.string() }),
    hero: z.object({ heading: z.string(), deck: z.string(), ctaLabel: z.string(), ctaHref: z.string() }),
    study: z.string(),
    openingQA: z.object({ question: z.string(), answer: z.array(z.string()) }),
    navigation: z.array(z.object({ label: z.string(), href: z.string() })),
    groups: z.array(z.object({ id: z.enum(['overview','design','systems','installation','investment']), label: z.string(), chapterIds: z.array(z.string()) })),
    signatureStudy: z.object({ group: z.literal('design'), heading: z.string(), description: z.string(), status: z.enum(['artwork-needed','approved']), src: z.string().nullable(), alt: z.string().nullable(), spatialWord: z.string().nullable() }),
    layoutContract: z.object({ opening: z.literal('full-width'), splitStart: z.literal('overview'), splitEnd: z.literal('investment'), desktopColumns: z.array(z.number()), closing: z.literal('full-width'), scrollOwner: z.literal('document') }),
    spatialWords: z.object({ opening: z.string().nullable(), study: z.string().nullable(), note: z.string() }),
    chapters: z.array(z.object({
      id: z.string(), title: z.string(),
      layout: z.enum(['scene-study','system-diagram','product-gallery','comparison','detail-study','process-strip','layer-study','window-study','material-study','construction-detail','zone-map','sound-map','room-cutaway','sightline-study','property-map','data-path','entry-sequence','permission-matrix','test-sequence','coverage-study','rack-study','exposure-study']),
      paragraphs: z.array(z.string()), visual: z.string(), sources: z.array(z.string()),
      table: z.object({ headers: z.array(z.string()), rows: z.array(z.array(z.string())) }).nullable(),
      detail: z.string().nullable(),
    })),
    projectPaths: z.array(z.object({ type: z.enum(['retrofit','remodel','custom-build']), title: z.string(), body: z.string() })),
    scopeOptions: z.array(z.object({ label: z.string(), scope: z.string(), dependencies: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    media: z.array(z.object({ id: z.string(), subject: z.string(), view: z.string(), status: z.enum(['needed','approved']), src: z.string().nullable(), alt: z.string().nullable(), sourceKey: z.string().nullable(), rightsStatus: z.enum(['unconfirmed','approved']) })),
    sources: z.array(z.string()),
    inquiry: z.object({ heading: z.string(), body: z.string(), fields: z.array(z.string()), endpointStatus: z.string() }),
  }),
});
export const collections = { services };
