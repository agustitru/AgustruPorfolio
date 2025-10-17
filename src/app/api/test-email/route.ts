import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'atrullen1998@gmail.com',
      subject: '✅ Test - Portfolio de Agustí Trullén',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 10px;
                padding: 30px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              h1 {
                color: #667eea;
                text-align: center;
              }
              .success {
                background: #d4edda;
                border: 1px solid #c3e6cb;
                padding: 15px;
                border-radius: 5px;
                margin: 20px 0;
                text-align: center;
                color: #155724;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🎉 ¡Email de Prueba!</h1>
              <div class="success">
                <strong>✅ ¡El sistema de correos funciona correctamente!</strong>
              </div>
              <p>Este es un email de prueba desde tu portfolio web.</p>
              <p><strong>Configuración:</strong></p>
              <ul>
                <li>📧 Destino: atrullen1998@gmail.com</li>
                <li>🔐 API: Resend</li>
                <li>✨ Estado: Activo</li>
              </ul>
              <p style="color: #666; font-size: 14px; text-align: center; margin-top: 30px;">
                Enviado desde: <strong>Portfolio de Agustí Trullén</strong>
              </p>
            </div>
          </body>
        </html>
      `
    });

    return NextResponse.json(
      { 
        success: true,
        message: '✅ Email de prueba enviado correctamente!',
        data 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el email de prueba:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al enviar el email de prueba',
        details: error 
      },
      { status: 500 }
    );
  }
}
