# P. M. F. Afzal — Portfolio

Personal portfolio for P. M. F. Afzal, Senior IT Project Manager with 25+ years in technology delivery across India, APAC, MEA, the UK and the US.

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Pages

| Route | Content |
| --- | --- |
| `/` | Introduction, headline figures, career at a glance, client list |
| `/about` | Background, education, certifications |
| `/career` | Role-by-role history since 1998 |
| `/work` | Interactive index of 13 client engagements |
| `/work/[slug]` | Brief for each engagement: context, role, key facts, technology |
| `/expertise` | Interactive capability explorer |
| `/leadership` | Leadership principles |
| `/contact` | Contact details and message form |

## Run locally

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

In development mode each page compiles the first time it is opened, so the first visit to a page can take a few seconds. To see real speed, use a production build:

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project**, select this repository, and deploy. The default Next.js settings work as they are.
3. Add the environment variables below under **Settings → Environment Variables**, then redeploy.

Every push to `main` deploys automatically.

## Environment variables

Copy `.env.example` to `.env.local` for local use. Never commit `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Live site URL, e.g. `https://afzal-portfolio.vercel.app`. Used for the sitemap and link previews. |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) for sending contact-form messages. |
| `CONTACT_EMAIL` | Inbox that receives contact-form messages. |
| `CONTACT_FROM` | Sender address. Use `Portfolio <onboarding@resend.dev>` until a custom domain is verified in Resend. |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional. Adds a LinkedIn link to the contact page. |

### Contact form

- **With the three Resend variables set**, messages are delivered straight to `CONTACT_EMAIL`, with the visitor's address as reply-to.
- **Without them**, pressing Send opens the visitor's own email app with the message pre-filled and addressed to the public email in `lib/content.ts`.

Without a verified domain, Resend only delivers to the email address the Resend account was created with. Create the account with the same address used for `CONTACT_EMAIL`.

## Editing content

| What | Where |
| --- | --- |
| Public email and phone, roles, expertise, clients, certifications | `lib/content.ts` |
| Engagement briefs, including the key facts shown on each page | `lib/engagements.ts` |
| Page copy | The matching file under `app/` |
| Downloadable resume | Replace `public/documents/afzal-resume.pdf` |
| Photos | `public/images/` |

Only add contact details Afzal has approved for public display. Do not add a corporate email address.

Education is stated precisely: the B.Sc. is completed; the MCA is marked as studies not completed.

## Checks

```bash
npm run typecheck
npm run build
```
