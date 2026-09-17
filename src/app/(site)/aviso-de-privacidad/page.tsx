import type { Metadata } from "next";
import { PageSection } from "@/components/layout/page-section";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de Privacidad de Incredible Pizza: tratamiento de datos personales conforme a la LFPDPPP.",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: false, follow: true },
};

export default function AvisoPrivacidadPage() {
  return (
    <PageSection
      clearHeader
      reveal={false}
      className="bg-brand-cream pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pt-52"
    >
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
          Legal
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] text-brand-ink">
          Aviso de privacidad
        </h1>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-ink/80">
          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            1. Identidad y Domicilio del Responsable
          </h2>
          <p>
            Operadora IPC de México, S.A. de C.V., RFC OIM060801GH5 (en adelante “Incredible
            Pizza”), con domicilio en Av. Lázaro Cárdenas No. 999, Col. Las Brisas, C.P. 64780,
            Monterrey, Nuevo León, México, es el responsable del tratamiento de sus datos personales
            conforme al presente Aviso de Privacidad, elaborado en cumplimiento de la Ley Federal de
            Protección de Datos Personales en Posesión de los Particulares vigente (la “Ley”) y demás
            normatividad aplicable.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            2. Datos Personales que Recabamos
          </h2>
          <p>
            Podemos recabar las siguientes categorías de datos personales, directamente de usted (en
            sucursal, por teléfono, en nuestro sitio web o redes sociales) o a través de nuestros
            sistemas:
          </p>
          <p>
            Datos de identificación y contacto: nombre, teléfono, correo electrónico y, en su caso,
            fecha de nacimiento.
          </p>
          <p>
            Datos de compra y facturación: productos adquiridos, número de compra, datos fiscales
            para facturación (RFC, razón social, domicilio fiscal, uso de CFDI).
          </p>
          <p>
            Datos de pago: las transacciones en línea son procesadas por el proveedor de pagos
            GetNet; Incredible Pizza no almacena los datos completos de su tarjeta bancaria.
          </p>
          <p>
            Identificación oficial: para el canje de compras en línea y ciertos beneficios se
            solicita exhibir identificación oficial vigente; no conservamos copia salvo que sea
            necesario para la operación específica y así se le informe.
          </p>
          <p>
            Datos de promociones: credencial de estudiante (para promociones aplicables a
            estudiantes de preparatoria y universidad), fecha de cumpleaños (promoción de
            cumpleaños) y datos de la tarjeta de juego (saldos, abonos y redenciones de
            promociones).
          </p>
          <p>
            Datos de menores de edad: para la contratación de fiestas, paquetes o promociones que
            involucren a menores, los datos son proporcionados por el padre, madre o tutor, quien
            otorga su consentimiento para el tratamiento descrito en este Aviso.
          </p>
          <p>
            Imagen: videograbaciones captadas por los sistemas de videovigilancia en nuestras
            instalaciones (con fines de seguridad) y, en su caso, fotografías o videos en eventos,
            previa autorización cuando resulte aplicable.
          </p>
          <p>
            Datos de navegación: cookies y tecnologías similares en nuestro sitio web (ver sección
            8).
          </p>
          <p>
            No recabamos datos personales sensibles. Le pedimos no proporcionarnos datos de esa
            naturaleza.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            3. Finalidades Primarias
          </h2>
          <p>
            Sus datos personales serán utilizados para las siguientes finalidades necesarias para la
            relación jurídica con usted:
          </p>
          <p>
            Procesar sus compras en línea y en sucursal, canjes de boletos, certificados y paquetes.
          </p>
          <p>
            Operar sus tarjetas de juego, saldos, recargas, bonos y promociones, así como aplicar
            sus restricciones (por ejemplo, un beneficio por persona por día).
          </p>
          <p>
            Cotizar, reservar y operar fiestas, eventos, grupos escolares y servicios empresariales.
          </p>
          <p>Emitir comprobantes fiscales y atender aclaraciones, quejas y solicitudes.</p>
          <p>
            Garantizar la seguridad de visitantes, personal e instalaciones (incluida la
            videovigilancia).
          </p>
          <p>Cumplir obligaciones legales y requerimientos de autoridades competentes.</p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            4. Finalidades Secundarias
          </h2>
          <p>
            De manera adicional, y solo si usted no manifiesta su negativa, utilizaremos sus datos
            para: envío de promociones, publicidad e información de nuestros productos y servicios;
            invitaciones a eventos; encuestas de calidad y satisfacción; y elaboración de análisis y
            estadísticas con fines de mercadotecnia.
          </p>
          <p>
            Usted puede negarse al tratamiento de sus datos para estas finalidades secundarias,
            desde este momento o en cualquier tiempo posterior, enviando su solicitud al correo{" "}
            <a
              href="mailto:contacto@incrediblepizza.mx"
              className="font-semibold text-brand-blue underline-offset-2 hover:underline"
            >
              contacto@incrediblepizza.mx
            </a>
            . La negativa a estas finalidades no será motivo para negarle nuestros productos o
            servicios.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            5. Transferencias y Remisiones de Datos
          </h2>
          <p>
            Incredible Pizza no vende ni renta sus datos personales. Sus datos podrán ser
            compartidos únicamente en los siguientes supuestos:
          </p>
          <p>
            Con proveedores que nos prestan servicios y tratan datos por cuenta de Incredible Pizza
            (procesador de pagos, sistemas de punto de venta y tarjetas de juego, agencia de
            marketing digital y servicios de tecnología), bajo obligaciones de confidencialidad y de
            conformidad con este Aviso.
          </p>
          <p>
            Con sociedades del mismo grupo y con el licenciante de la marca, para fines
            administrativos y de operación de la franquicia, bajo las mismas finalidades de este
            Aviso.
          </p>
          <p>
            Con autoridades competentes, cuando exista requerimiento fundado y motivado o así lo
            exija la legislación aplicable.
          </p>
          <p>
            Fuera de los casos anteriores, cualquier transferencia que requiera su consentimiento le
            será informada y solicitada previamente.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            6. Derechos ARCO y Revocación del Consentimiento
          </h2>
          <p>
            Usted tiene derecho a Acceder a sus datos personales, Rectificarlos cuando sean
            inexactos o incompletos, Cancelarlos y Oponerse a su tratamiento (derechos “ARCO”), así
            como a revocar el consentimiento que nos haya otorgado y a limitar el uso o divulgación
            de sus datos.
          </p>
          <p>
            Para ejercer estos derechos, envíe su solicitud al correo{" "}
            <a
              href="mailto:contacto@incrediblepizza.mx"
              className="font-semibold text-brand-blue underline-offset-2 hover:underline"
            >
              contacto@incrediblepizza.mx
            </a>
            , indicando: (i) nombre completo y medio para comunicarle la respuesta; (ii) copia de
            identificación oficial del titular o, en su caso, del representante legal con el
            documento que acredite la representación; (iii) descripción clara y precisa de los datos
            respecto de los que busca ejercer el derecho; y (iv) cualquier elemento que facilite la
            localización de los datos.
          </p>
          <p>
            Le responderemos en los plazos previstos por la Ley. La revocación del consentimiento o
            el ejercicio de derechos podrá tener como consecuencia que no podamos seguir
            prestándole algunos servicios que requieren el tratamiento de sus datos.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            7. Medidas de Seguridad
          </h2>
          <p>
            Incredible Pizza ha implementado medidas de seguridad administrativas, técnicas y
            físicas razonables para proteger sus datos personales contra daño, pérdida, alteración,
            destrucción o uso, acceso o tratamiento no autorizado.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            8. Cookies y Tecnologías Similares
          </h2>
          <p>
            Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su
            experiencia de navegación, recordar sus preferencias y generar estadísticas de uso.
            Usted puede deshabilitar las cookies desde la configuración de su navegador; hacerlo
            podría afectar algunas funcionalidades del Sitio.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            9. Menores de Edad
          </h2>
          <p>
            Nuestro sitio web es de audiencia general y no está diseñado para recabar información de
            menores de edad. Los datos de menores que resulten necesarios para la prestación de
            nuestros servicios (fiestas, paquetes, promociones) deberán ser proporcionados por el
            padre, madre o tutor, quien manifiesta su consentimiento al proporcionarlos. Pedimos a
            los padres supervisar a sus hijos cuando naveguen en línea.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            10. Autoridad Competente
          </h2>
          <p>
            Si usted considera que su derecho a la protección de datos personales ha sido vulnerado,
            puede acudir ante la autoridad competente en materia de protección de datos personales
            en posesión de los particulares, en términos de la Ley y demás normatividad aplicable.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            11. Cambios al Aviso de Privacidad
          </h2>
          <p>
            El presente Aviso de Privacidad puede ser modificado en cualquier momento para atender
            novedades legislativas o políticas internas. Cualquier modificación será publicada en
            incrediblepizza.mx, indicando la fecha de su última actualización. El uso continuado de
            nuestros servicios después de la publicación implica el conocimiento del aviso vigente.
          </p>
        </div>
      </article>
    </PageSection>
  );
}
