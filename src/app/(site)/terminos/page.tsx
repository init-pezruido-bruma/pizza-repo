import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y Condiciones de Incredible Pizza: uso del sitio, compras en línea, sucursal, promociones de octubre 2026 e instalaciones.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

const privacyLinkClass =
  "font-semibold text-brand-blue underline-offset-2 hover:underline";

export default function TerminosPage() {
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
          Términos y condiciones
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-ink/70 sm:text-base">
          Uso del sitio web, ventas en línea y en sucursal, y uso de las instalaciones ·
          incrediblepizza.mx · Incredible Pizza / Incredible Food and Fun · Monterrey, Nuevo León
        </p>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-ink/80">
          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            1. Aceptación de los Términos
          </h2>
          <p>
            El sitio de Internet localizado en incrediblepizza.mx (el “Sitio”) es operado por
            Operadora IPC de México, S.A. de C.V., RFC OIM060801GH5, con domicilio en Av. Lázaro
            Cárdenas No. 999, Col. Las Brisas, C.P. 64780, Monterrey, Nuevo León, México
            (“Incredible Pizza”), bajo licencia de America’s Incredible Pizza Company (“AIPC”).
            Incredible Pizza opera un restaurante de buffet y una zona de entretenimiento familiar
            con videojuegos y atracciones (el “Establecimiento”). Los presentes Términos y
            Condiciones rigen el uso del Sitio, las compras en línea, las compras en sucursal y el
            uso de las instalaciones del Establecimiento. Al acceder o utilizar el Sitio, realizar
            una compra o ingresar al Establecimiento, usted acepta los presentes Términos y
            Condiciones. Si no está de acuerdo con ellos, absténgase de utilizarlos.
          </p>
          <p>
            Este es un sitio de audiencia general. La navegación es libre; sin embargo, la
            contratación y compra de productos o servicios a través del Sitio está reservada a
            personas mayores de 18 años con capacidad legal para contratar. Los menores de edad
            deberán navegar y proporcionar información únicamente bajo la supervisión de su padre,
            madre o tutor.
          </p>
          <p>
            Los términos y condiciones particulares de cada promoción, paquete o servicio publicados
            en el Sitio —incluidos los Términos y Condiciones de Fiestas y Eventos— forman parte
            integrante de los presentes Términos y Condiciones y se tienen por incorporados por su
            sola referencia.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            2. Información del Sitio
          </h2>
          <p>
            Incredible Pizza realiza esfuerzos razonables para mantener actualizada la información
            publicada en el Sitio; no obstante, el usuario no debe asumir que la información está
            siempre actualizada o que el Sitio contiene toda la información relevante disponible. Los
            precios, horarios, paquetes, promociones y políticas están sujetos a cambios sin previo
            aviso; la versión publicada en el Sitio al momento de la compra será la aplicable.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            3. Venta de Productos en Línea
          </h2>
          <p>
            Todas las transacciones realizadas a través de nuestro sitio web serán procesadas por
            GetNet. Recomendamos guardar su número de compra para cualquier duda o aclaración.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            3.1 Requisitos para canjear su compra
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Presentar su código QR.</li>
            <li>
              Presentar una identificación oficial vigente del comprador (Credencial de Elector,
              Cédula Profesional o Pasaporte).
            </li>
          </ul>
          <p>
            El canje se realiza en una sola exhibición y las entradas adquiridas en línea deberán
            utilizarse en una sola transacción. Una vez aceptada la compra, no habrá cambios,
            cancelaciones ni devoluciones de ningún tipo. No se harán devoluciones en efectivo,
            cupones u otras formas de reembolso. Asegúrese de revisar su compra antes de realizar el
            pago. La compra de boletos en el sitio web puede realizarse hasta una hora antes del
            horario de cierre.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">3.2 Boletos en línea</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>El boleto es personal e intransferible y podrá usarse una sola vez.</li>
            <li>
              No aplican cancelaciones, reembolsos ni intercambios; no será reemplazado en caso de
              pérdida, robo, vencimiento, maltrato o falta de uso.
            </li>
            <li>
              El boleto no deberá ser duplicado ni revendido. En caso de duplicación, será cancelado
              sin reembolso y no tendrá validez.
            </li>
            <li>
              La compra anticipada no implica acceso preferencial a las instalaciones, aunque
              agiliza el proceso de ingreso.
            </li>
            <li>
              No es válido para eventos privados y no puede combinarse con otras promociones o
              descuentos.
            </li>
          </ul>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            4. Ventas en Sucursal (Taquilla) y Política de No Devoluciones
          </h2>
          <p>
            Las compras realizadas en taquilla y demás puntos de venta dentro del Establecimiento se
            rigen por los presentes Términos y Condiciones y por los precios, promociones y
            condiciones publicados en sucursal al momento de la compra. Todos los precios incluyen
            IVA. Verifique su compra (productos, paquetes, horas Platino videojuegos y créditos)
            antes de pagar; el ticket de compra es el comprobante de los servicios contratados.
          </p>
          <p>
            <strong className="font-extrabold text-brand-ink">POLÍTICA DE NO DEVOLUCIONES:</strong>{" "}
            una vez realizado el pago e ingresado al inmueble, o iniciado el consumo o uso de
            cualquier servicio (buffet, alimentos, tarjetas de juego, créditos, tiempo Platino
            videojuegos, atracciones o paquetes),{" "}
            <strong className="font-extrabold text-brand-ink">
              NO se realizan cambios, cancelaciones, devoluciones ni reembolsos
            </strong>
            , en efectivo ni en cualquier otra forma, salvo en los casos en que la legislación
            aplicable disponga expresamente lo contrario.
          </p>
          <p>
            Cualquier inconformidad con la calidad de los alimentos o servicios deberá reportarse en
            el momento al gerente en turno, quien la atenderá mediante la reposición del alimento o
            servicio de que se trate; la atención de inconformidades no genera reembolsos en
            efectivo. Los saldos, créditos y tiempos de juego no son transferibles ni canjeables por
            dinero en efectivo y se rigen por las vigencias señaladas en la sección 5.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            5. Tarjetas de Juego y Recargas
          </h2>
          <p>
            Existen dos tipos de tarjeta de juego: la Tarjeta de Créditos (saldo en créditos con
            acceso a videojuegos, máquinas de premios y atracciones; hay juegos desde 25 y hasta 100
            créditos) y la Tarjeta Platino (tiempo Platino videojuegos por horas, conforme a la
            sección 6). La tarjeta física tiene un costo de $30.00 M.N., pagadero en taquillas, y no
            está incluido en los paquetes ni en las compras en línea, salvo que se indique
            expresamente lo contrario.
          </p>
          <p>
            Programa “Trae tu Tarjeta”: el cliente que se presente con su tarjeta Incredible Pizza de
            una visita anterior no pagará el costo de tarjeta nueva y recibirá un abono de cortesía
            de 50 créditos, limitado a un abono por tarjeta por día. Este beneficio puede modificarse
            o cancelarse sin previo aviso.
          </p>
          <p>
            En todo momento podrá abonar créditos a su tarjeta en los centros de recarga. Los bonos y
            créditos no son transferibles ni canjeables por dinero en efectivo. El saldo abonado a la
            tarjeta es válido hasta el 31 de diciembre de 2026.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            6. Paquetes Rusty’s y Acceso Individual
          </h2>
          <p>
            Válido en Incredible Food and Fun (Monterrey, Nuevo León). Los beneficios de cada paquete
            son válidos exclusivamente el día de su compra y activación. Al adquirir cualquier
            paquete, el cliente acepta los términos aquí descritos.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Rusty’s Essential ($599.00): un (1) acceso al bufet con bebida ilimitada, una (1) hora
              Platino videojuegos, tres (3) entradas a atracciones y 400 créditos.
            </li>
            <li>
              Rusty’s Plus ($799.00): un (1) acceso al bufet con bebida ilimitada, dos (2) horas
              Platino videojuegos, cuatro (4) entradas a atracciones y 600 créditos.
            </li>
            <li>
              Rusty’s All Access Pass ($1,100.00): acceso al bufet con bebida ilimitada durante toda
              la estancia, tiempo Platino videojuegos ilimitado, acceso ilimitado a atracciones y 800
              créditos.
            </li>
          </ul>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.1 Reglas del tiempo Platino videojuegos (1 hora / 2 horas / ilimitado)
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Inclusiones: el tiempo Platino videojuegos aplica únicamente para el uso de
              videojuegos, máquinas de tickets y el acceso al área de resbaladeros.
            </li>
            <li>
              Exclusiones: el tiempo Platino videojuegos NO permite el acceso a las atracciones
              principales (sección 6.2) ni a máquinas de la línea Marvel, máquinas de garra o de
              premio directo.
            </li>
            <li>
              Activación: el conteo inicia automáticamente con la primera lectura (“swipe”) de la
              tarjeta en cualquier máquina válida; corre de manera consecutiva y no puede pausarse.
            </li>
          </ul>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.2 Atracciones y créditos
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Atracciones: Laser Tag, Go Karts, Tagada, Lost in Space, Bumper Cars y Golfito.</li>
            <li>
              En los paquetes Essential y Plus, agotadas las entradas incluidas, el cliente podrá
              usar sus créditos para acceder nuevamente o realizar una recarga independiente.
            </li>
            <li>
              Los créditos del paquete son la única moneda válida (dentro del paquete) para operar
              máquinas de premios, garras, peluches y la zona Marvel, y también pueden utilizarse
              para pagar entradas adicionales a atracciones.
            </li>
          </ul>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.3 Bufet y tarifas individuales
          </h3>
          <p>
            El acceso al bufet otorga el consumo ilimitado de barras de pizza, pastas, ensaladas,
            postres y estaciones de bebidas. Todos los alimentos y bebidas deben consumirse dentro de
            las áreas designadas; no se permite la salida de alimentos del establecimiento.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Adulto: $449.00 · Niño (de 0.95 m a 1.50 m): $339.00 · Adulto Mayor (con
              identificación): $339.00.
            </li>
            <li>
              Niñas y niños menores de 0.95 m: entrada sin costo (no incluye tarjeta de juegos ni
              acceso a atracciones).
            </li>
          </ul>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.4 Restricciones generales y seguridad
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              La tarjeta de juego y los beneficios de cada paquete son personales e intransferibles;
              queda prohibido el uso compartido de una sola tarjeta para tiempos de juego o entradas
              a atracciones.
            </li>
            <li>
              El acceso a las atracciones (especialmente Go Karts y Bumper Cars) está sujeto al
              cumplimiento de las normas de seguridad, incluyendo estaturas mínimas y reglamentos de
              conducta.
            </li>
            <li>
              El ingreso a juegos y atracciones está sujeto a disponibilidad, condiciones climáticas,
              mantenimiento y restricciones de seguridad.
            </li>
          </ul>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            7. Acceso y Uso de las Instalaciones (Reglamento Interno)
          </h2>
          <p>
            El acceso al restaurante está reservado a los clientes que adquieran el bufet o alguno de
            los paquetes ofrecidos; no se permite la entrada para consumo de alimentos o bebidas sin
            dicha compra. Nuestros horarios están sujetos a cambios sin previo aviso; consulte
            horarios en el Sitio o en redes sociales antes de su visita.
          </p>
          <p>Al ingresar al inmueble, usted y sus acompañantes aceptan el siguiente reglamento:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Los menores de edad deberán permanecer acompañados y bajo la supervisión de un adulto
              responsable en todo momento; los padres o tutores son responsables de la conducta y
              seguridad de los menores a su cargo dentro del inmueble.
            </li>
            <li>
              No se permite el ingreso de alimentos ni bebidas del exterior, con excepción del pastel
              de cumpleaños en fiestas contratadas, alimentos para bebés o por prescripción médica.
            </li>
            <li>
              Queda prohibido fumar o vapear dentro del inmueble, así como ingresar en estado de
              ebriedad o bajo el influjo de sustancias. No se permite el acceso con mascotas, con
              excepción de animales de asistencia.
            </li>
            <li>
              El uso de videojuegos, juegos y atracciones se realiza cumpliendo el reglamento y las
              restricciones de estatura, edad y condición física publicadas en cada juego, así como
              las instrucciones del personal. El incumplimiento de estas reglas es responsabilidad
              exclusiva del usuario.
            </li>
            <li>
              Las atracciones pueden suspenderse temporalmente por mantenimiento, seguridad o
              condiciones climáticas, sin que ello genere reembolso alguno; en su caso, el personal
              ofrecerá alternativas para el uso del tiempo Platino videojuegos o de los créditos.
            </li>
            <li>
              Los daños ocasionados a las instalaciones, mobiliario, juegos o equipo por mal uso
              serán cubiertos por quien los ocasione o por el adulto responsable a cargo.
            </li>
            <li>
              Incredible Pizza no se hace responsable por la pérdida, robo o extravío de objetos
              personales dentro del inmueble ni en el estacionamiento.
            </li>
            <li>
              Las instalaciones cuentan con sistemas de videovigilancia para la seguridad de los
              visitantes (consulte nuestro{" "}
              <Link href="/aviso-de-privacidad" className={privacyLinkClass}>
                Aviso de Privacidad
              </Link>
              ).
            </li>
          </ul>
          <p>
            Derecho de admisión: Incredible Pizza se reserva el derecho de negar el acceso o retirar
            de sus instalaciones a cualquier persona que ponga en riesgo la integridad de los
            visitantes, del personal o de las instalaciones, o que infrinja las normas de seguridad o
            el presente reglamento o se niegue a acatarlos, sin que proceda reembolso alguno.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            8. Promociones Vigentes (octubre 2026)
          </h2>
          <p>
            Salvo indicación expresa en contrario: las promociones no son acumulables entre sí ni con
            cupones o descuentos; son válidas únicamente al momento de ingresar; no son canjeables
            por dinero en efectivo; no incluyen el costo de la tarjeta física; los precios están
            sujetos a cambios sin previo aviso; y son exclusivas de Incredible Food and Fun,
            Monterrey, Nuevo León.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.1 A Comer y Jugar</h3>
          <p>
            Válida de lunes a jueves, del 1 de octubre al 2 de noviembre de 2026 (incluidos los días
            lunes a jueves del Festival del Terror). Incluye Bufet con Bebida + 1 hora Platino
            videojuegos: niño (de 0.95 m a 1.50 m) $399.00 y adulto $499.00. Un combo por persona por
            día. No aplica de viernes a domingo.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.2 Paquete Familiar</h3>
          <p>
            Válido de lunes a jueves. Incluye para 2 adultos y 2 niños (menores de 1.50 m) el Bufet
            con Bebida y 2 horas Platino videojuegos por persona, por $1,999.00. Opciones: 3 horas
            por persona $2,299.00 y 4 horas por persona $2,499.00. Niño de más de 1.50 m: $100.00 de
            excedente.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.3 Segunda Hora Platino Videojuegos
          </h3>
          <p>
            En la compra de cualquier paquete o combo que incluya 1 hora Platino videojuegos, la
            segunda hora tiene un costo de $100.00. Es ÚNICA por persona y válida únicamente en el
            primer acceso del día al Establecimiento. Las horas posteriores se adquieren a precio
            regular o al precio de Horas Felices, cuando estén activas.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.4 Horas Felices</h3>
          <p>
            En los horarios anunciados por voceo dentro del Establecimiento (de 3:00 a 4:00 pm y de
            6:00 a 7:00 pm), la recarga de 1 hora Platino videojuegos tiene un costo de $200.00.
            Válida únicamente durante dichas ventanas de tiempo y en centros de recarga o taquilla;
            fuera de ellas aplica el precio regular.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.5 Cumple de Rusty (17 y 18 de octubre)
          </h3>
          <p>
            Los días 17 y 18 de octubre de 2026, celebrando el cumpleaños de Rusty: presentando un
            juguete en donación en buen estado y habiendo adquirido un consumo de acceso, se abona 1
            hora Platino videojuegos gratis a la tarjeta del cliente. Un canje por persona por día.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.6 Festival del Terror (26 de octubre al 2 de noviembre)
          </h3>
          <p>
            Del 26 de octubre al 2 de noviembre de 2026: presentándose con disfraz y adquiriendo un
            bufet, paquete o consumo de acceso, se abona 1 hora Platino videojuegos gratis a la
            tarjeta del cliente. Un canje por persona por día. Durante el festival, el bufet incluye
            barra temática de Halloween de 2:00 a 6:00 pm. Concurso de disfraces el sábado 31 de
            octubre; consulte las bases en sucursal.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.7 ¿Hoy es tu cumpleaños?
          </h3>
          <p>
            Válida en la semana del cumpleaños: en la compra de 2 paquetes Rusty’s a precio regular
            al momento de ingresar, el festejado recibe gratis Bufet con bebida + 1 hora Platino
            videojuegos, 3 atracciones y 400 créditos. Se requiere identificación o acta que acredite
            la fecha. El tiempo Platino videojuegos no incluye Cranes, Tokens ni Golden Games.
            Vigencia: 31 de diciembre de 2026.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.8 Planes de tienda en línea
          </h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Plan Pareja ($1,400.00): Bufet y bebida ilimitada para 2 personas, 2 horas Platino
              videojuegos y 4 atracciones por persona + 200 créditos cada uno.
            </li>
            <li>
              Plan Familiar ($2,499.00): Bufet y bebida ilimitada para 4 personas (2 niños y 2
              adultos), 2 horas Platino videojuegos y 4 atracciones por niño + 200 créditos cada uno.
            </li>
            <li>
              Plan para 6 ($4,310.00): Bufet y bebida ilimitada para 6 personas, 2 horas Platino
              videojuegos y 4 atracciones por persona + 200 créditos cada uno.
            </li>
          </ul>
          <p>
            Los planes de tienda en línea no incluyen el costo del plástico, no son válidos con otras
            promociones y son exclusivos de la sucursal Monterrey, Nuevo León.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.9 Fiestas y Eventos
          </h3>
          <p>
            Los paquetes de fiesta (Riley, Rosie, Tiger y Fiesta Express), la Fiesta Halloween Riley,
            la promoción de 20% de descuento en invitados infantiles y los paquetes de eventos se
            rigen por los Términos y Condiciones de Fiestas y Eventos publicados en este Sitio, que
            forman parte integrante de los presentes Términos y Condiciones. En caso de discrepancia
            respecto de fiestas y eventos, prevalecerá lo señalado en dicho documento.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            9. Certificados Empresariales
          </h2>
          <p>
            Vigencia marcada en cada certificado, sujeto a disponibilidad de horario y fechas; favor
            de confirmar disponibilidad por cualquiera de nuestros canales de comunicación. No se
            reservan lugares; quedan sujetos a disponibilidad en comedores. No se aceptan cambios ni
            devoluciones. El canje del certificado aplica para consumo el mismo día en que se
            presenta en caja. No aplica con otras promociones, cupones o descuentos; no canjeable por
            efectivo; PROHIBIDA SU VENTA. No aplica en fiestas, mini fiestas ni eventos. No aplica
            para Cranes, Tokens ni Golden Games.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            10. Grupos Escolares
          </h2>
          <p>
            Visitas en horario matutino (9:00 am) y vespertino (a partir de las 12:00 pm): mínimo 100
            alumnos lunes y martes; de miércoles a viernes mínimo 35 alumnos. Paquetes disponibles
            hasta alumnos de nivel secundaria. Los paquetes mostrados incluyen platillo; el cambio a
            bufet tiene un costo extra de $60.00 por persona y debe aplicarse a la totalidad de los
            asistentes (disponible solo de miércoles a viernes).
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            11. Propiedad Industrial y Uso del Contenido
          </h2>
          <p>
            Salvo indicación en contrario, todo el material incluido en el Sitio se encuentra
            protegido por derechos de propiedad industrial e intelectual propiedad de AIPC, sus
            subsidiarias, afiliadas o terceros licenciantes. Usted no podrá reproducir, distribuir,
            modificar, copiar, crear obras derivadas ni explotar los contenidos del Sitio en forma
            alguna sin consentimiento previo y por escrito. El uso de los materiales del Sitio es
            personal, con propósitos informativos y de compra. Usted acepta indemnizar y sacar en paz
            y a salvo a Incredible Pizza y a AIPC de cualquier uso no autorizado que realice de los
            materiales del Sitio. Todos los derechos no expresamente otorgados se encuentran
            reservados.
          </p>
          <p>
            Usted es responsable del contenido de cualquier envío que realice a través del Sitio y se
            obliga a no enviar materiales ilegales, difamatorios, abusivos u obscenos, ni violatorios
            de derechos de terceros.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            12. Enlaces a Terceros
          </h2>
          <p>
            Algunos enlaces del Sitio conducen a sitios que no están bajo nuestro control y se
            proporcionan solo por conveniencia. Su aparición no implica aprobación ni responsabilidad
            de Incredible Pizza o AIPC sobre su contenido; usted accede a ellos bajo su propio
            riesgo.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">13. Privacidad</h2>
          <p>
            El tratamiento de sus datos personales se rige por nuestro{" "}
            <Link href="/aviso-de-privacidad" className={privacyLinkClass}>
              Aviso de Privacidad
            </Link>
            , disponible en este mismo Sitio, elaborado conforme a la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares. Le recomendamos leerlo antes de
            proporcionar cualquier dato personal.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            14. Exclusión de Garantías y Responsabilidad
          </h2>
          <p>
            Salvo lo expresamente señalado respecto de nuestros productos, los contenidos del Sitio se
            ofrecen “tal cual”, sin garantía expresa o implícita. Incredible Pizza no garantiza que
            las funciones del Sitio operarán de forma ininterrumpida o libre de errores, ni que el
            Sitio o el servidor estén libres de virus u otros componentes dañinos.
          </p>
          <p>
            Responsabilidad de atracciones: Incredible Pizza no será responsable de la disponibilidad
            de las atracciones. El ingreso a las atracciones es responsabilidad del usuario, quien
            deberá obedecer en todo momento las instrucciones del personal para su funcionamiento y
            seguridad.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">15. Jurisdicción</h2>
          <p>
            Cualquier disputa que surja de estos Términos y Condiciones será resuelta exclusivamente
            ante los tribunales competentes de Monterrey, Nuevo León, México, conforme a la
            legislación mexicana aplicable, renunciando las partes a cualquier otro fuero que pudiera
            corresponderles.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            16. Modificaciones
          </h2>
          <p>
            Incredible Pizza se reserva el derecho de cambiar, modificar o remover total o
            parcialmente los presentes Términos y Condiciones en cualquier momento y sin previo
            aviso, bastando su sustitución o actualización en las plataformas de Incredible Pizza
            para que surtan efectos. Es responsabilidad del usuario consultarlos periódicamente; los
            Términos y Condiciones publicados en las plataformas de Incredible Pizza serán los que
            subsistan.
          </p>
        </div>
      </article>
    </PageSection>
  );
}
