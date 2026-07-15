import { NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactFormPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface SuccessResponse {
  ok: true;
  emailId: string;
}

interface ErrorResponse {
  ok: false;
  error: string;
  fields?: Record<string, string>;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TO_ADDRESS = "aryankulshreshtha9@gmail.com";

// The `from` address must use a domain you have verified in Resend.
// While testing you can use "onboarding@resend.dev" (sends to your own
// verified email only). Once you add a domain, change this to something like:
// "Portfolio Contact <noreply@yourdomain.com>"
const FROM_ADDRESS = "Portfolio Contact Form <onboarding@resend.dev>";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Validation ───────────────────────────────────────────────────────────────

function validatePayload(body: unknown): {
  data: ContactFormPayload | null;
  fields: Record<string, string>;
} {
  const fields: Record<string, string> = {};

  if (typeof body !== "object" || body === null) {
    return { data: null, fields: { _root: "Invalid request body." } };
  }

  const b = body as Record<string, unknown>;

  const name = (typeof b.name === "string" ? b.name : "").trim();
  const email = (typeof b.email === "string" ? b.email : "").trim();
  const subject = (typeof b.subject === "string" ? b.subject : "").trim();
  const message = (typeof b.message === "string" ? b.message : "").trim();

  if (!name) fields.name = "Name is required.";
  else if (name.length > 100) fields.name = "Name must be under 100 characters.";

  if (!email) fields.email = "Email is required.";
  else if (!EMAIL_REGEX.test(email)) fields.email = "Enter a valid email address.";
  else if (email.length > 254) fields.email = "Email address is too long.";

  if (subject.length > 200) fields.subject = "Subject must be under 200 characters.";

  if (!message) fields.message = "Message is required.";
  else if (message.length > 5000) fields.message = "Message must be under 5000 characters.";

  if (Object.keys(fields).length > 0) return { data: null, fields };

  return { data: { name, email, subject, message }, fields: {} };
}

// ─── Email HTML builder ───────────────────────────────────────────────────────

function buildEmailHtml(payload: ContactFormPayload, timestamp: string): string {
  const { name, email, subject, message } = payload;

  // Sanitize for HTML output
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  // Preserve newlines in message
  const formattedMessage = esc(message).replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">

          <!-- Header -->
          <tr>
            <td style="background:#0C0C0F;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;background:#1A1207;border:1px solid #7A5010;border-radius:6px;font-weight:800;font-size:13px;color:#F5A623;line-height:36px;text-align:center;">AK</div>
                  </td>
                  <td style="padding-left:12px;vertical-align:middle;">
                    <span style="font-size:15px;font-weight:600;color:#EDEDED;letter-spacing:-0.01em;">New message from portfolio</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px;">

              <!-- Sender info row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9fa;border:1px solid #e4e4e7;border-radius:8px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e4e4e7;">
                    <span style="display:block;font-size:11px;font-weight:500;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">From</span>
                    <span style="font-size:15px;font-weight:600;color:#09090b;">${esc(name)}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e4e4e7;">
                    <span style="display:block;font-size:11px;font-weight:500;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Reply-to</span>
                    <a href="mailto:${esc(email)}" style="font-size:15px;color:#2563eb;text-decoration:none;font-weight:500;">${esc(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px;">
                    <span style="display:block;font-size:11px;font-weight:500;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">Subject</span>
                    <span style="font-size:15px;color:#09090b;">${subject ? esc(subject) : '<span style="color:#a1a1aa;font-style:italic;">No subject provided</span>'}</span>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <div style="margin-bottom:8px;">
                <span style="display:block;font-size:11px;font-weight:500;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:12px;">Message</span>
                <div style="background:#ffffff;border:1px solid #e4e4e7;border-radius:8px;padding:20px 24px;font-size:15px;color:#09090b;line-height:1.7;">
                  ${formattedMessage}
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px 28px;border-top:1px solid #f4f4f5;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
                Received via <strong style="color:#71717a;">aryankulshreshtha.com</strong> · ${timestamp}
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:#a1a1aa;">
                Reply directly to this email to respond to ${esc(name)}.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildEmailText(payload: ContactFormPayload, timestamp: string): string {
  const { name, email, subject, message } = payload;
  return [
    "New message from your portfolio",
    "=".repeat(40),
    "",
    `From:    ${name}`,
    `Email:   ${email}`,
    `Subject: ${subject || "(none)"}`,
    "",
    "Message:",
    "-".repeat(40),
    message,
    "-".repeat(40),
    "",
    `Received: ${timestamp}`,
    `Via: aryankulshreshtha.com`,
  ].join("\n");
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(
  request: Request
): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  // ── 1. Parse body ──────────────────────────────────────────────────────────
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  // ── 2. Validate ────────────────────────────────────────────────────────────
  const { data, fields } = validatePayload(rawBody);

  if (!data) {
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Validation failed.", fields },
      { status: 422 }
    );
  }

  // ── 3. Check API key ───────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY environment variable is not set.");
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Email service is not configured. Please contact me directly." },
      { status: 503 }
    );
  }

  // ── 4. Build email ─────────────────────────────────────────────────────────
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  const emailSubject = data.subject
    ? `[Portfolio] ${data.subject} — from ${data.name}`
    : `[Portfolio] New message from ${data.name}`;

  // ── 5. Send via Resend ─────────────────────────────────────────────────────
  const resend = new Resend(apiKey);

  const { data: sent, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    replyTo: `${data.name} <${data.email}>`,
    subject: emailSubject,
    html: buildEmailHtml(data, timestamp),
    text: buildEmailText(data, timestamp),
    tags: [
      { name: "source", value: "portfolio_contact_form" },
    ],
  });

  // ── 6. Handle Resend errors ────────────────────────────────────────────────
  if (error || !sent) {
    console.error("[contact] Resend error:", error);

    // Surface the Resend error name for easier debugging, but keep the
    // user-facing message generic so we do not leak internal details.
    const resendMessage =
      error && typeof error === "object" && "message" in error
        ? String(error.message)
        : "Unknown Resend error";

    console.error("[contact] Resend message:", resendMessage);

    return NextResponse.json<ErrorResponse>(
      {
        ok: false,
        error:
          "We could not send your message right now. Please try again or email me directly at aryankulshreshtha9@gmail.com.",
      },
      { status: 502 }
    );
  }

  // ── 7. Success ─────────────────────────────────────────────────────────────
  console.info("[contact] Email sent successfully. Resend ID:", sent.id);

  return NextResponse.json<SuccessResponse>(
    { ok: true, emailId: sent.id },
    { status: 200 }
  );
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
