# Inquiry Worker — implemented, not connected or deployed

The site opens an email draft to the existing info@davg.ai contact until both PUBLIC_INQUIRY_ENDPOINT and PUBLIC_TURNSTILE_SITE_KEY are configured. No success message claims an email was sent.

This separate Worker accepts JSON POST at /api/inquiry. It enforces a configured origin, field/length validation, an 8 KiB streaming body limit, a honeypot, Cloudflare rate limiting and server-side Turnstile validation (success, action and hostname). It forwards only configured contact fields to the confirmed HubSpot form. Success is returned only after HubSpot accepts the submission. No submitted brief, secret or token is logged.

Required configuration: ALLOWED_ORIGINS; TURNSTILE_SECRET_KEY set as a Worker secret; HUBSPOT_PORTAL_ID; HUBSPOT_FORM_GUID; RATE_LIMITER binding; HUBSPOT_FIELD_MAP mapping site fields to actual HubSpot properties. Configure the form's actual required fields and legal/consent requirements before connection. Do not infer a property name from the test fixtures. Worker variables are intentionally blank where no destination is confirmed. Rate-limit namespace 1001 is a proposed dedicated namespace; verify that it is unused in the account before deployment.

Use a Turnstile widget allowing the production hostname with action inquiry. Do not place its secret in PUBLIC_ variables. No endpoint is deployed by this change. No real lead was submitted during tests. Complete a test inquiry through the deployed endpoint and confirm the resulting HubSpot contact before enabling the site's send button.

Automated tests use simulated verification and delivery responses and cover rejection, missing config, limits, failed delivery and accepted delivery. They do not prove live account configuration.
