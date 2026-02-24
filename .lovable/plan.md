

## Set Up Resend Email Integration via Vercel API Route

### Overview
Wire up the contact form to send real emails using Resend, via a Vercel serverless API route. The API key stays secure on the server side (Vercel environment variable), never exposed in the browser.

### Architecture

```text
Browser (contact form)
   |
   POST /api/send-email  (JSON body)
   |
Vercel Serverless Function (api/send-email.ts)
   |
   Resend API  -->  Email to info@linexo.com.au
```

### Changes

**1. Create `api/send-email.ts`** (Vercel serverless function)
- Reads `RESEND_API_KEY` from environment variables
- Validates incoming form fields (name, email, message, optional company/phone/service)
- Calls Resend API to send a formatted email to `info@linexo.com.au`
- From address: `LinExo Website <noreply@linexo.com.au>` (uses your verified domain)
- Also sends the submitter's email as `reply-to` so you can reply directly
- Returns success/error JSON response

**2. Update `src/pages/Index.tsx`**
- Replace the fake `setTimeout` submission with a real `fetch('/api/send-email', ...)` call
- Collect all form field values (name, company, email, phone, service, message) using controlled state or FormData
- Show success/error toast based on the API response
- Add basic client-side validation with length limits

**3. Install `resend` package**
- Add `resend` as a dependency for use in the API route

### After Deployment (Manual Steps)
1. In your **Vercel project settings**, go to **Settings > Environment Variables**
2. Add `RESEND_API_KEY` with your Resend API key value (`re_xxxxxxxxx`)
3. Deploy — the contact form will then send real emails

### Technical Details

**API route (`api/send-email.ts`):**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Validate POST method and fields
  // Call resend.emails.send()
  // Return JSON response
}
```

**Email format:**
- From: `LinExo Website <noreply@linexo.com.au>`
- To: `info@linexo.com.au`
- Reply-To: submitter's email
- Subject: `New Enquiry from [Name] — [Service]`
- Body: HTML-formatted with all form fields

**Form update in Index.tsx:**
- Replace setTimeout mock with async fetch to `/api/send-email`
- Handle loading state and error/success feedback via existing toast system
