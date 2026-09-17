import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "@/components/layout/page-section";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y Condiciones de Incredible Pizza: uso del sitio, compras en línea, sucursal e instalaciones.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

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
            en el Sitio forman parte integrante de los presentes Términos y Condiciones y se tienen
            por incorporados por su sola referencia.
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
          <p>Presentar su código QR.</p>
          <p>
            Presentar una identificación oficial vigente del comprador (Credencial de Elector, Cédula
            Profesional o Pasaporte).
          </p>
          <p>
            El canje se realiza en una sola exhibición y las entradas adquiridas en línea deberán
            utilizarse en una sola transacción. Una vez aceptada la compra, no habrá cambios,
            cancelaciones ni devoluciones de ningún tipo. No se harán devoluciones en efectivo,
            cupones u otras formas de reembolso. Asegúrese de revisar su compra antes de realizar el
            pago. La compra de boletos en el sitio web puede realizarse hasta una hora antes del
            horario de cierre.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">3.2 Boletos en línea</h3>
          <p>El boleto es personal e intransferible y podrá usarse una sola vez.</p>
          <p>
            No aplican cancelaciones, reembolsos ni intercambios; no será reemplazado en caso de
            pérdida, robo, vencimiento, maltrato o falta de uso.
          </p>
          <p>
            El boleto no deberá ser duplicado ni revendido. En caso de duplicación, será cancelado
            sin reembolso y no tendrá validez.
          </p>
          <p>
            La compra anticipada no implica acceso preferencial a las instalaciones, aunque agiliza
            el proceso de ingreso.
          </p>
          <p>
            No es válido para eventos privados y no puede combinarse con otras promociones o
            descuentos.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            4. Ventas en Sucursal (Taquilla) y Política de No Devoluciones
          </h2>
          <p>
            Las compras realizadas en taquilla y demás puntos de venta dentro del Establecimiento se
            rigen por los presentes Términos y Condiciones y por los precios, promociones y
            condiciones publicados en sucursal al momento de la compra. Todos los precios incluyen
            IVA. Verifique su compra (productos, paquetes, horas de juego y créditos) antes de pagar;
            el ticket de compra es el comprobante de los servicios contratados.
          </p>
          <p>
            <strong className="font-extrabold text-brand-ink">POLÍTICA DE NO DEVOLUCIONES:</strong>{" "}
            una vez realizado el pago e ingresado al inmueble, o iniciado el consumo o uso de
            cualquier servicio (buffet, alimentos, tarjetas de juego, créditos, tiempo Platino,
            atracciones o paquetes), NO se realizan cambios, cancelaciones, devoluciones ni
            reembolsos, en efectivo ni en cualquier otra forma, salvo en los casos en que la
            legislación aplicable disponga expresamente lo contrario.
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
            créditos) y la Tarjeta Platino (tiempo de juego por horas, conforme a la sección 6). La
            tarjeta física tiene un costo de $30.00 M.N., pagadero en taquillas, y no está incluido
            en los paquetes ni en las compras en línea, salvo que se indique expresamente lo
            contrario.
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
          <p>
            Rusty’s Essential ($599.00): un (1) acceso al bufet con bebida ilimitada, una (1) hora de
            tiempo de juego, tres (3) entradas a atracciones y 400 créditos.
          </p>
          <p>
            Rusty’s Plus ($799.00): un (1) acceso al bufet con bebida ilimitada, dos (2) horas de
            tiempo de juego, cuatro (4) entradas a atracciones y 600 créditos.
          </p>
          <p>
            Rusty’s All Access Pass ($1,100.00): acceso al bufet con bebida ilimitada durante toda la
            estancia, tiempo de juego ilimitado, acceso ilimitado a atracciones y 800 créditos.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.1 Reglas del tiempo de juego (1 hora / 2 horas / ilimitado)
          </h3>
          <p>
            Inclusiones: el tiempo aplica únicamente para el uso de videojuegos, máquinas de tickets
            y el acceso al área de resbaladeros.
          </p>
          <p>
            Exclusiones: el tiempo de juego NO permite el acceso a las atracciones principales
            (sección 6.2) ni a máquinas de la línea Marvel, máquinas de garra o de premio directo.
          </p>
          <p>
            Activación: el conteo inicia automáticamente con la primera lectura (“swipe”) de la
            tarjeta en cualquier máquina válida; corre de manera consecutiva y no puede pausarse.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.2 Atracciones y créditos
          </h3>
          <p>Atracciones: Laser Tag, Go Karts, Tagada, Lost in Space, Bumper Cars y Golfito.</p>
          <p>
            En los paquetes Essential y Plus, agotadas las entradas incluidas, el cliente podrá usar
            sus créditos para acceder nuevamente o realizar una recarga independiente.
          </p>
          <p>
            Los créditos del paquete son la única moneda válida (dentro del paquete) para operar
            máquinas de premios, garras, peluches y la zona Marvel, y también pueden utilizarse para
            pagar entradas adicionales a atracciones.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.3 Bufet y tarifas individuales
          </h3>
          <p>
            El acceso al bufet otorga el consumo ilimitado de barras de pizza, pastas, ensaladas,
            postres y estaciones de bebidas. Todos los alimentos y bebidas deben consumirse dentro de
            las áreas designadas; no se permite la salida de alimentos del establecimiento.
          </p>
          <p>
            Adulto: $449.00 · Niño (de 0.95 m a 1.50 m): $339.00 · Adulto Mayor (con identificación):
            $339.00.
          </p>
          <p>
            Niñas y niños menores de 0.95 m: entrada sin costo (no incluye tarjeta de juegos ni acceso
            a atracciones).
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            6.4 Restricciones generales y seguridad
          </h3>
          <p>
            La tarjeta de juego y los beneficios de cada paquete son personales e intransferibles;
            queda prohibido el uso compartido de una sola tarjeta para tiempos de juego o entradas a
            atracciones.
          </p>
          <p>
            El acceso a las atracciones (especialmente Go Karts y Bumper Cars) está sujeto al
            cumplimiento de las normas de seguridad, incluyendo estaturas mínimas y reglamentos de
            conducta.
          </p>
          <p>
            El ingreso a juegos y atracciones está sujeto a disponibilidad, condiciones climáticas,
            mantenimiento y restricciones de seguridad.
          </p>

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
          <p>
            Los menores de edad deberán permanecer acompañados y bajo la supervisión de un adulto
            responsable en todo momento; los padres o tutores son responsables de la conducta y
            seguridad de los menores a su cargo dentro del inmueble.
          </p>
          <p>
            No se permite el ingreso de alimentos ni bebidas del exterior, con excepción del pastel
            de cumpleaños en fiestas contratadas, alimentos para bebés o por prescripción médica.
          </p>
          <p>
            Queda prohibido fumar o vapear dentro del inmueble, así como ingresar en estado de
            ebriedad o bajo el influjo de sustancias. No se permite el acceso con mascotas, con
            excepción de animales de asistencia.
          </p>
          <p>
            El uso de videojuegos, juegos y atracciones se realiza cumpliendo el reglamento y las
            restricciones de estatura, edad y condición física publicadas en cada juego, así como las
            instrucciones del personal. El incumplimiento de estas reglas es responsabilidad
            exclusiva del usuario.
          </p>
          <p>
            Las atracciones pueden suspenderse temporalmente por mantenimiento, seguridad o
            condiciones climáticas, sin que ello genere reembolso alguno; en su caso, el personal
            ofrecerá alternativas para el uso del tiempo de juego o de los créditos.
          </p>
          <p>
            Los daños ocasionados a las instalaciones, mobiliario, juegos o equipo por mal uso serán
            cubiertos por quien los ocasione o por el adulto responsable a cargo.
          </p>
          <p>
            Incredible Pizza no se hace responsable por la pérdida, robo o extravío de objetos
            personales dentro del inmueble ni en el estacionamiento.
          </p>
          <p>
            Las instalaciones cuentan con sistemas de videovigilancia para la seguridad de los
            visitantes (consulte nuestro{" "}
            <Link
              href="/aviso-de-privacidad"
              className="font-semibold text-brand-blue underline-offset-2 hover:underline"
            >
              Aviso de Privacidad
            </Link>
            ).
          </p>
          <p>
            Derecho de admisión: Incredible Pizza se reserva el derecho de negar el acceso o retirar
            de sus instalaciones a cualquier persona que ponga en riesgo la integridad de los
            visitantes, del personal o de las instalaciones, o que infrinja las normas de seguridad o
            el presente reglamento o se niegue a acatarlos, sin que proceda reembolso alguno.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">
            8. Promociones Vigentes (septiembre 2026)
          </h2>
          <p>
            Salvo indicación expresa en contrario: las promociones no son acumulables entre sí ni con
            cupones o descuentos; son válidas únicamente al momento de ingresar; no son canjeables
            por dinero en efectivo; no incluyen el costo de la tarjeta física; los precios están
            sujetos a cambios sin previo aviso; y son exclusivas de Incredible Food and Fun,
            Monterrey, Nuevo León.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.1 ¡Regreso a Clases!
          </h3>
          <p>
            Válida de lunes a jueves del mes de septiembre de 2026, excepto los días 14 al 17 de
            septiembre. Bufet con bebida + 750 créditos por $399.00. Un combo por persona por día.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.2 Bonus de Estudiante
          </h3>
          <p>
            Válida de lunes a jueves del mes de septiembre de 2026, excepto los días 14 al 17.
            Exclusiva para estudiantes de preparatoria y universidad: presentando credencial de
            estudiante vigente (ciclo 2026-2027) en la compra de la promoción “Regreso a Clases”, se
            obtienen 200 créditos adicionales de regalo. Un bonus por credencial por día. No aplica a
            estudiantes de otros niveles educativos.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.3 Semana Mexicana</h3>
          <p>
            Válida del lunes 14 al domingo 20 de septiembre de 2026. En la compra de un Bufet con
            Bebida a precio regular, el segundo Bufet con Bebida es gratis. Antojitos mexicanos en la
            barra del bufet todos los días de 2:00 a 5:00 pm. Durante estas fechas no aplica la
            promoción “Regreso a Clases”.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.4 Promo Jersey</h3>
          <p>
            Del viernes 11 al domingo 13 de septiembre de 2026 (jersey de Tigres o Rayados) y del
            lunes 14 al domingo 20 de septiembre de 2026 (jersey de la Selección Mexicana):
            presentándose con el jersey puesto y realizando la compra de un bufet, paquete o consumo
            de acceso, se abonarán 100 créditos por persona a su tarjeta de juego. Un abono por
            persona por día; los créditos se abonan a la tarjeta y no son canjeables por efectivo.
            Requiere haber adquirido un consumo de acceso al establecimiento.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">8.5 Recarga y Gana</h3>
          <p>
            Válida todos los días en centros de recarga: al recargar $100 se abonan 50 créditos
            adicionales; $200 abona 100; $300 abona 200; $500 abona 350. Bonos no canjeables por
            efectivo ni transferibles.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.6 ¿Hoy es tu cumpleaños?
          </h3>
          <p>
            Válida en la semana del cumpleaños: en la compra de 2 paquetes Rusty’s a precio regular
            al momento de ingresar, el festejado recibe gratis Bufet con bebida + 1 hora de juego
            platino, 3 atracciones y 400 créditos. Se requiere identificación o acta que acredite la
            fecha. Tiempo platino no incluye Cranes, Tokens ni Golden Games. Vigencia: 31 de
            diciembre de 2026.
          </p>
          <h3 className="font-sans text-base font-extrabold text-brand-ink">
            8.7 Planes de tienda en línea
          </h3>
          <p>
            Plan Pareja ($1,400.00): Bufet y bebida ilimitada para 2 personas, 2 horas de juego
            regular y 4 atracciones por persona + 200 créditos cada uno.
          </p>
          <p>
            Plan Familiar ($2,499.00): Bufet y bebida ilimitada para 4 personas (2 niños y 2
            adultos), 2 horas de juego regular y 4 atracciones por niño + 200 créditos cada uno.
          </p>
          <p>
            Plan para 6 ($4,310.00): Bufet y bebida ilimitada para 6 personas, 2 horas de juego
            regular y 4 atracciones por persona + 200 créditos cada uno.
          </p>
          <p>
            Los planes de tienda en línea no incluyen el costo del plástico, no son válidos con otras
            promociones y son exclusivos de la sucursal Monterrey, Nuevo León.
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
            <Link
              href="/aviso-de-privacidad"
              className="font-semibold text-brand-blue underline-offset-2 hover:underline"
            >
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
            Salvo lo expresamente señalado respecto de nuestros productos, los contenidos del Sitio
            se ofrecen “tal cual”, sin garantía expresa o implícita. Incredible Pizza no garantiza
            que las funciones del Sitio operarán de forma ininterrumpida o libre de errores, ni que
            el Sitio o el servidor estén libres de virus u otros componentes dañinos.
          </p>
          <p>
            Responsabilidad de atracciones: Incredible Pizza no será responsable de la
            disponibilidad de las atracciones. El ingreso a las atracciones es responsabilidad del
            usuario, quien deberá obedecer en todo momento las instrucciones del personal para su
            funcionamiento y seguridad.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">15. Jurisdicción</h2>
          <p>
            Cualquier disputa que surja de estos Términos y Condiciones será resuelta exclusivamente
            ante los tribunales competentes de Monterrey, Nuevo León, México, conforme a la
            legislación mexicana aplicable, renunciando las partes a cualquier otro fuero que pudiera
            corresponderles.
          </p>

          <h2 className="pt-4 font-sans text-lg font-extrabold text-brand-ink">16. Modificaciones</h2>
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
