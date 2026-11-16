
import { Resend } from "resend";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderValue(value: unknown): string {
  if (value === null || value === undefined || value === "") {
    return '<span style="color:#999">Sin datos</span>';
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return '<span style="color:#999">Sin datos</span>';

    return `
      <ul style="padding-left:20px;margin:8px 0">
        ${value.map((item) => `<li style="margin:6px 0">${renderValue(item)}</li>`).join("")}
      </ul>
    `;
  }

  if (typeof value === "object") {
    return `
      <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        ${Object.entries(value as Record<string, unknown>)
          .map(([key, item]) => `
            <tr>
              <td style="border-bottom:1px solid #eee;color:#555;width:42%;vertical-align:top">
                ${escapeHtml(key)}
              </td>
              <td style="border-bottom:1px solid #eee;vertical-align:top">
                ${renderValue(item)}
              </td>
            </tr>
          `)
          .join("")}
      </table>
    `;
  }

  return escapeHtml(value);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Falta RESEND_API_KEY.");
      return Response.json(
        { error: "No está configurado el servicio de correo." },
        { status: 500 }
      );
    }

    const data = await request.json();

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return Response.json(
        { error: "Los datos recibidos no son válidos." },
        { status: 400 }
      );
    }

    if (!data.brandName || typeof data.brandName !== "string" || !data.brandName.trim()) {
      return Response.json(
        { error: "Falta el nombre de la marca." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const date = new Date().toLocaleString("es-ES", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "Europe/Madrid",
    });

    const html = `
      <div style="font-family:Arial,sans-serif;color:#222;max-width:800px;margin:0 auto">
        <div style="background:#08090f;padding:28px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:24px">SCALATE · EEM</h1>
          <p style="color:#c4a5fd;margin:8px 0 0">Nuevo análisis económico recibido</p>
        </div>

        <div style="padding:28px;border:1px solid #eee;border-top:0">
          <h2 style="margin-top:0"> ${escapeHtml(data.brandName)} </h2>
          <p style="color:#777;font-size:13px">Recibido el ${escapeHtml(date)}</p>

          <hr style="border:0;border-top:1px solid #eee;margin:24px 0" />

          <h3>Información completa del cuestionario</h3>
          ${renderValue(data)}

          <hr style="border:0;border-top:1px solid #eee;margin:24px 0" />

          <p style="font-size:12px;color:#999">
            Este correo ha sido generado automáticamente desde el cuestionario EEM de SCALATE.
          </p>
        </div>
      </div>
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: "SCALATE <formularios@scalatelab.com>",
      to: ["scalatelab@gmail.com"],
      subject: `Nuevo análisis EEM — ${data.brandName.trim()}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "No se ha podido enviar el análisis por correo." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      id: emailData?.id,
    });
  } catch (error) {
    console.error("EEM API error:", error);
    return Response.json(
      { error: "Error interno al procesar el análisis." },
      { status: 500 }
    );
  }
}
