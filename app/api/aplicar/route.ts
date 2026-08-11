import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      website,
      role,
      years,
      reason,
      manager,
      revenue,
      objective,
      obstacles,
      areas,
      investment,
      commitment,
    } = data;

    if (!name || !email || !website) {
      return Response.json(
        {
          error: "Faltan datos obligatorios.",
        },
        {
          status: 400,
        }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h1 style="margin-bottom: 24px;">
          Nueva solicitud — SCALATE
        </h1>

        <h2>Datos personales</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No indicado"}</p>
        <p><strong>Web:</strong> ${website}</p>
        <p><strong>Cargo:</strong> ${role || "No indicado"}</p>

        <h2>Marca</h2>

        <p><strong>Años en el mercado:</strong> ${years || "No indicado"}</p>
        <p><strong>Gestión del ecosistema E-commerce:</strong> ${manager || "No indicado"}</p>
        <p><strong>Facturación media mensual:</strong> ${revenue || "No indicado"}</p>

        <p>
          <strong>Objetivo a 6-12 meses:</strong><br />
          ${objective || "No indicado"}
        </p>

        <p>
          <strong>Obstáculos:</strong><br />
          ${obstacles || "No indicado"}
        </p>

        <p>
          <strong>Motivo para trabajar con SCALATE:</strong><br />
          ${reason || "No indicado"}
        </p>

        <p>
          <strong>Áreas a mejorar:</strong><br />
          ${areas || "No indicado"}
        </p>

        <p>
          <strong>Inversión:</strong><br />
          ${investment || "No indicado"}
        </p>

        <h2>Compromiso</h2>

        <p>
          <strong>Respuesta:</strong><br />
          ${commitment || "No indicado"}
        </p>

        <hr style="margin: 32px 0; border: 0; border-top: 1px solid #ddd;" />

        <p style="color: #777; font-size: 13px;">
          Solicitud enviada desde scalatelab.com
        </p>
      </div>
    `;

    const { data: emailData, error } =
      await resend.emails.send({
        from: "SCALATE <formularios@scalatelab.com>",
        to: ["maikel@scalatelab.com"],
        replyTo: email,
        subject: `Nueva solicitud de ${name}`,
        html,
      });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "No se ha podido enviar la solicitud.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      id: emailData?.id,
    });
  } catch (error) {
    console.error("API error:", error);

    return Response.json(
      {
        error: "Error interno al procesar la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}