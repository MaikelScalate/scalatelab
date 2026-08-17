import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    const correctPassword = process.env.ONBOARDING_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "Error de configuración.",
        },
        { status: 500 }
      );
    }

    if (password !== correctPassword) {
      return NextResponse.json(
        {
          success: false,
          error: "La contraseña no es correcta. Inténtalo de nuevo.",
        },
        { status: 401 }
      );
    }

    // =====================================================
    // CONTRASEÑA CORRECTA
    // Creamos la cookie que permitirá acceder al onboarding
    // =====================================================

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("onboarding_access", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Solicitud no válida.",
      },
      { status: 400 }
    );
  }
}