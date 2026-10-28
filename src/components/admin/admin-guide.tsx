"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type StepWhen = "always" | "quote" | "empty";

type Step = {
  id: string;
  area: string;
  title: string;
  body: string;
  points?: string[];
  /** "quote" opens the newest solicitud with ?tour=1 so it stays NEW. */
  path: string;
  target?: string;
  fallbackTarget?: string;
  when: StepWhen;
};

const STEPS: Step[] = [
  {
    id: "bienvenida",
    area: "Inicio",
    title: "Esto es el panel de trabajo",
    body: "Aquí entra el equipo de Incredible Pizza. Tu tarea principal es dar seguimiento a las cotizaciones: personas que pidieron una fiesta o un evento en el sitio y están esperando respuesta.",
    points: [
      "Revisa la bandeja cada vez que entres, no solo cuando alguien te avise.",
      "El seguimiento se hace por teléfono o por el correo del cliente. El panel no llama solo ni arma el precio.",
      "Promociones, correo y usuarios cambian el sitio público o los accesos. No los toques si no es tu tarea.",
    ],
    path: "/backend/admin",
    target: "admin-intro",
    when: "always",
  },
  {
    id: "menu",
    area: "Menú",
    title: "La barra de arriba",
    body: "Desde aquí te mueves. En computadora los accesos están en esta barra. En el celular, el botón de menú abre las mismas secciones.",
    points: [
      "Inicio: el resumen del día.",
      "Cotizaciones: la bandeja. Es lo que tienes que atender.",
      "Promociones: lo que ven los clientes en el sitio.",
      "Correo: a quién le llega el aviso cuando entra una solicitud.",
      "Usuarios: quién puede entrar a este panel.",
      "Hub: vuelve a la pantalla de “¿a dónde quieres ir?”.",
      "Salir: cierra tu sesión. Úsalo al terminar, sobre todo si la computadora la comparte el equipo.",
      "Guía: vuelve a abrir este recorrido cuando quieras.",
    ],
    path: "/backend/admin",
    target: "admin-header",
    when: "always",
  },
  {
    id: "sesion",
    area: "Sesión",
    title: "Confirma que la sesión es tuya",
    body: "La franja gris muestra el correo con el que entraste. Si no es el tuyo, pulsa Salir y entra con tu usuario. No pases tu contraseña.",
    points: [
      "Si otra persona trabaja con tu sesión, lo que ella abra se ve como ya revisado.",
      "El equipo puede creer que tú ya diste seguimiento, y la solicitud se queda sin llamada.",
    ],
    path: "/backend/admin",
    target: "admin-session",
    when: "always",
  },
  {
    id: "nuevas",
    area: "Inicio",
    title: "Empieza por las nuevas",
    body: "Esta tarjeta es tu pendiente. “Nuevas” son solicitudes que nadie ha abierto. “Total” incluye las que ya se abrieron. Aunque diga 0 nuevas, entra a Cotizaciones y confirma que la bandeja está vacía.",
    path: "/backend/admin",
    target: "card-cotizaciones",
    when: "always",
  },
  {
    id: "resto",
    area: "Inicio",
    title: "Las otras tarjetas, con cuidado",
    body: "El inicio solo resume. No atiendas eventos desde aquí: entra a la bandeja.",
    points: [
      "Promociones: cuántas están visibles en el sitio. Publicar o bajar una cambia la página pública.",
      "Correo: si el aviso automático está conectado. Si falta, las solicitudes se guardan igual en Cotizaciones.",
      "Usuarios: altas y bajas de acceso. Eso lo hace quien administra el panel.",
    ],
    path: "/backend/admin",
    target: "admin-cards",
    when: "always",
  },
  {
    id: "bandeja",
    area: "Cotizaciones",
    title: "La bandeja de solicitudes",
    body: "Cada fila es alguien que llenó el formulario de eventos. Están de la más reciente a la más antigua. Si la lista está vacía, no hay nada guardado: no lo busques solo en el correo, porque a veces el mail falla y la solicitud sí queda aquí.",
    points: [
      "Fecha: cuándo llegó. Lo de hoy no se deja para el siguiente turno.",
      "Nombre y teléfono: con eso contactas. El teléfono siempre viene.",
      "Tipo: cumpleaños, escuela, empresa u otro. Te dice qué preguntar.",
      "Mail “Enviado”: el aviso interno salió. “Pendiente/error” o “—”: el correo no confirma el envío, pero la solicitud está en esta lista. No la ignores.",
    ],
    path: "/backend/admin/cotizaciones",
    target: "quote-intro",
    when: "always",
  },
  {
    id: "leida",
    area: "Cotizaciones",
    title: "NEW no significa “ya llamé”",
    body: "NEW, en amarillo, quiere decir que nadie ha abierto esa solicitud. READ quiere decir que alguien ya la abrió. Abrirla no guarda si llamaste, si pasaste precio o si el cliente confirmó.",
    points: [
      "En cuanto entras con Ver a una NEW, pasa a READ para todo el equipo. Ábrela cuando vayas a atenderla.",
      "READ no es “cerrada” ni “ya se llamó”. El panel no anota quién la abrió.",
      "Si ya dice READ, pregunta al equipo antes de volver a marcar, para no duplicar la llamada.",
      "No se pueden borrar. Si es spam o ya se cerró, avisa a tu encargado.",
    ],
    path: "/backend/admin/cotizaciones",
    target: "quote-table",
    fallbackTarget: "quote-intro",
    when: "always",
  },
  {
    id: "detalle",
    area: "Cotizaciones",
    title: "Antes de marcar, lee esto",
    body: "Esta es una solicitud real. La guía la abrió sin pasarla a READ. Cuando tú entres con Ver, una NEW sí queda como READ.",
    points: [
      "Teléfono: es el dato del seguimiento. Llama o escribe por ahí.",
      "Correo: segundo intento si no contestan el teléfono.",
      "Tipo, fecha del evento y personas: con eso sabes si hay lugar y qué ofrecer.",
      "Comentarios: lo que pidieron. Contesta eso, no un mensaje genérico.",
      "Recibido: fecha y hora. Si lleva rato en espera, el seguimiento ya va tarde.",
      "Mail enviado: solo dice si salió el aviso automático. No es la cotización.",
    ],
    path: "quote",
    target: "quote-detail",
    when: "quote",
  },
  {
    id: "seguimiento",
    area: "Cotizaciones",
    title: "El seguimiento que sí te toca",
    body: "El sistema no marca “llamada hecha” y no tiene campo de notas. Si no dejas el acuerdo con tu encargado, el siguiente turno no sabe qué pasó.",
    points: [
      "Atiende las NEW el mismo día. No dejes el amarillo para mañana.",
      "Llama al teléfono. Si no contesta, usa el correo y avisa a quien coordina eventos.",
      "Confirma tipo de evento, fecha, número de personas y lo escrito en comentarios.",
      "Deja un siguiente paso concreto: disponibilidad, precio o qué falta para apartar.",
      "Anota con tu encargado qué quedaste. READ no sustituye esa nota.",
    ],
    path: "quote",
    target: "quote-detail",
    when: "quote",
  },
  {
    id: "vacio",
    area: "Cotizaciones",
    title: "Cuando llegue una solicitud",
    body: "Hoy la bandeja está vacía. Cuando entre una, ábrela con Ver y lee teléfono, correo, tipo, fecha, personas y comentarios antes de llamar.",
    points: [
      "Al abrir una NEW pasa a READ. Ábrela solo si vas a darle seguimiento.",
      "READ no significa que ya llamaste. Aquí no hay notas ni botón de “cerrada”.",
      "Llama el mismo día, confirma fecha y personas, y deja el acuerdo anotado con tu encargado.",
      "Si el mail dice error, la solicitud igual está en esta lista. No esperes el correo para atenderla.",
    ],
    path: "/backend/admin/cotizaciones",
    target: "quote-intro",
    when: "empty",
  },
  {
    id: "promos",
    area: "Promociones",
    title: "Esto sí lo ve el público",
    body: "Una promoción publicada sale en el sitio. Un borrador no se ve. Archivar la baja del sitio y la guarda en el historial. Eliminar solo aparece en las archivadas y la borra de verdad.",
    points: [
      "Subir una imagen no la publica hasta que alguien confirma.",
      "Publicar, bajar o eliminar cambia lo que ven los clientes.",
      "Si tu trabajo es dar seguimiento a eventos, no pulses esos botones.",
    ],
    path: "/backend/admin/promociones",
    target: "promo-upload",
    fallbackTarget: "promo-intro",
    when: "always",
  },
  {
    id: "promos-estado",
    area: "Promociones",
    title: "Publicadas, borradores e historial",
    body: "Revisa la sección Publicadas para saber qué promo está viva. Borradores están guardados y no salen en el sitio. Historial son las que ya se bajaron.",
    points: [
      "Si hay que cambiar la promo del momento, publica la nueva y archiva la anterior.",
      "No borres el historial: sirve para saber qué ya se anunció.",
    ],
    path: "/backend/admin/promociones",
    target: "promo-published",
    fallbackTarget: "promo-intro",
    when: "always",
  },
  {
    id: "correo",
    area: "Correo",
    title: "El correo avisa, no atiende",
    body: "Cuando entra una cotización, el sistema puede avisar a estos destinatarios y confirmarle al cliente que su solicitud llegó. Eso no arma la cotización ni sustituye tu llamada.",
    points: [
      "Si esta franja está en verde, el aviso puede salir.",
      "Si está en ámbar, o el envío está apagado, las solicitudes se guardan igual en Cotizaciones.",
      "Una fila con mail en error sigue siendo tu pendiente. Atiéndela desde la bandeja.",
    ],
    path: "/backend/admin/correo",
    target: "mail-status",
    when: "always",
  },
  {
    id: "correo-form",
    area: "Correo",
    title: "No cambies destinatarios",
    body: "Este formulario define el nombre del remitente, el correo desde el que sale el aviso y quién del equipo lo recibe. También prende o apaga el envío.",
    points: [
      "Si quitas un destinatario, esa persona deja de enterarse de solicitudes nuevas.",
      "Si apagas el envío, el cliente puede no recibir confirmación. La solicitud sí se guarda.",
      "Guarda cambios solo si te encargaron el correo.",
    ],
    path: "/backend/admin/correo",
    target: "mail-form",
    when: "always",
  },
  {
    id: "usuarios",
    area: "Usuarios",
    title: "Cada quien entra con su usuario",
    body: "La lista son las personas con acceso al panel. “Tú” es la sesión actual. Eliminar quita el acceso de esa persona: no lo hagas si no administras las cuentas.",
    path: "/backend/admin/usuarios",
    target: "user-list",
    when: "always",
  },
  {
    id: "usuarios-alta",
    area: "Usuarios",
    title: "Altas solo las da un administrador",
    body: "Crear usuario le da a alguien correo y contraseña para ver cotizaciones, promociones y el resto del panel. No abras cuentas “prestadas” ni uses la de un compañero.",
    points: [
      "Si un compañero nuevo va a dar seguimiento, pide que le creen su usuario.",
      "La contraseña mínima es de 8 caracteres. No la anotes en un papel pegado al monitor.",
    ],
    path: "/backend/admin/usuarios",
    target: "user-create",
    when: "always",
  },
  {
    id: "rutina",
    area: "Tu turno",
    title: "Qué hacer cada vez que entres",
    body: "Puedes volver a abrir esta guía con el botón Guía de la barra.",
    points: [
      "Mira en Inicio cuántas cotizaciones nuevas hay.",
      "Abre Cotizaciones y atiende las NEW: lee, llama y confirma fecha, personas y comentarios.",
      "Deja anotado con tu encargado qué quedaste. El panel no guarda esa nota.",
      "No cambies promociones, correo ni usuarios si no es tu tarea.",
      "Pulsa Salir al terminar el turno, sobre todo en una computadora compartida.",
    ],
    path: "/backend/admin",
    target: "card-cotizaciones",
    when: "always",
  },
];

const GuideContext = createContext<{ start: () => void } | null>(null);

export function useAdminGuide() {
  const ctx = useContext(GuideContext);
  if (!ctx) {
    throw new Error("useAdminGuide debe usarse dentro de AdminGuide");
  }
  return ctx;
}

function stepsFor(mode: "unknown" | "quote" | "empty") {
  return STEPS.filter((step) => {
    if (step.when === "always") return true;
    return step.when === mode;
  });
}

function findQuotePath() {
  const href = document
    .querySelector<HTMLAnchorElement>("a[data-tour-quote]")
    ?.getAttribute("href");
  if (!href) return null;
  const path = href.split("?")[0];
  if (!/^\/backend\/admin\/cotizaciones\/[^/]+$/.test(path)) return null;
  return `${path}?tour=1`;
}

export function AdminGuide({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [stepId, setStepId] = useState(STEPS[0].id);
  const [mode, setMode] = useState<"unknown" | "quote" | "empty">("unknown");

  const start = useCallback(() => {
    setMode("unknown");
    setStepId(STEPS[0].id);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById("admin-guide-trigger")?.focus();
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("guia") !== "1") return;
    start();
    params.delete("guia");
    const next = params.toString();
    const path = `${window.location.pathname}${next ? `?${next}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", path);
  }, [start]);

  const list = stepsFor(mode);
  const index = Math.max(0, list.findIndex((step) => step.id === stepId));
  const step = list[index] ?? list[0];

  function move(dir: 1 | -1) {
    const nextMode =
      dir === 1 && step.id === "leida"
        ? findQuotePath()
          ? "quote"
          : "empty"
        : mode;
    if (nextMode !== mode) setMode(nextMode);
    const visible = stepsFor(nextMode);
    const current = visible.findIndex((item) => item.id === step.id);
    const target = visible[current + dir];
    if (!target) {
      if (dir === 1) close();
      return;
    }
    setStepId(target.id);
  }

  return (
    <GuideContext.Provider value={{ start }}>
      {children}
      {open && step ? (
        <GuideDialog
          step={step}
          index={index}
          total={list.length}
          onBack={index > 0 ? () => move(-1) : null}
          onNext={() => move(1)}
          onClose={close}
        />
      ) : null}
    </GuideContext.Provider>
  );
}

function findTarget(step: Step) {
  const pick = (name?: string) => {
    if (!name) return null;
    const el = document.querySelector<HTMLElement>(`[data-tour="${name}"]`);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    if (rect.width < 8 || rect.height < 8) return null;
    return el;
  };
  return pick(step.target) ?? pick(step.fallbackTarget);
}

function placePopup(
  anchor: { top: number; height: number; left: number; width: number } | null,
  popupHeight: number,
) {
  const margin = 12;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const width = Math.min(440, vw - 32);
  let left = anchor ? anchor.left + anchor.width / 2 - width / 2 : (vw - width) / 2;
  left = Math.max(16, Math.min(left, vw - width - 16));

  let top = anchor ? anchor.top + anchor.height + margin : Math.max(16, (vh - popupHeight) / 2);
  if (top + popupHeight > vh - 16) {
    const above = anchor ? anchor.top - margin - popupHeight : 16;
    top = above >= 16 ? above : Math.max(16, vh - popupHeight - 16);
  }
  return {
    top: Math.round(top),
    left: Math.round(left),
    width: Math.round(width),
  };
}

function GuideDialog({
  step,
  index,
  total,
  onBack,
  onNext,
  onClose,
}: {
  step: Step;
  index: number;
  total: number;
  onBack: (() => void) | null;
  onNext: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const titleId = useId();
  const bodyId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrolledFor = useRef<string | null>(null);
  const [box, setBox] = useState<{ top: number; left: number; width: number; height: number } | null>(
    null,
  );
  const [pos, setPos] = useState({ top: 24, left: 16, width: 400 });
  const lastStep = index === total - 1;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const root = dialogRef.current;
    if (!root) return;
    if (!root.contains(document.activeElement)) root.focus();
  }, [step.id]);

  useEffect(() => {
    if (step.path === "quote") {
      const onDetail = /^\/backend\/admin\/cotizaciones\/[^/]+$/.test(pathname);
      if (onDetail) return;
      const dest = findQuotePath();
      if (dest) {
        const pathOnly = dest.split("?")[0];
        if (pathname !== pathOnly) router.push(dest);
        return;
      }
      if (pathname !== "/backend/admin/cotizaciones") {
        router.push("/backend/admin/cotizaciones");
      }
      return;
    }
    if (pathname !== step.path) router.push(step.path);
  }, [pathname, router, step.path]);

  useEffect(() => {
    scrolledFor.current = null;
  }, [step.id, pathname]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stopped = false;

    const measure = () => {
      if (stopped) return;
      const el = findTarget(step);
      if (el) {
        const rect = el.getBoundingClientRect();
        const pad = 8;
        const maxH = Math.min(rect.height, window.innerHeight * 0.46);
        const nextBox = {
          top: Math.round(Math.max(8, rect.top - pad)),
          left: Math.round(Math.max(8, rect.left - pad)),
          width: Math.round(Math.min(rect.width + pad * 2, window.innerWidth - 16)),
          height: Math.round(maxH + pad),
        };
        setBox((prev) =>
          prev &&
          prev.top === nextBox.top &&
          prev.left === nextBox.left &&
          prev.width === nextBox.width &&
          prev.height === nextBox.height
            ? prev
            : nextBox,
        );
        const key = `${step.id}:${pathname}`;
        const offscreen = rect.top < 64 || rect.bottom > window.innerHeight - 120;
        if (offscreen && scrolledFor.current !== key) {
          scrolledFor.current = key;
          el.scrollIntoView({ block: "center", behavior: reduced ? "auto" : "smooth" });
        }
      } else {
        setBox(null);
      }

      const height = dialogRef.current?.offsetHeight ?? 320;
      const anchor = el
        ? (() => {
            const rect = el.getBoundingClientRect();
            const pad = 8;
            const maxH = Math.min(rect.height, window.innerHeight * 0.46);
            return {
              top: rect.top - pad,
              left: rect.left - pad,
              width: rect.width + pad * 2,
              height: maxH + pad,
            };
          })()
        : null;
      const nextPos = placePopup(anchor, height);
      setPos((prev) =>
        prev.top === nextPos.top && prev.left === nextPos.left && prev.width === nextPos.width
          ? prev
          : nextPos,
      );
    };

    measure();
    const timer = window.setInterval(measure, 250);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      stopped = true;
      window.clearInterval(timer);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [pathname, step]);

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const root = dialogRef.current;
    if (!root) return;
    const items = [
      ...root.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])"),
    ].filter((el) => !el.hasAttribute("disabled"));
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-[80]" />
      {box ? (
        <div
          aria-hidden
          className="pointer-events-none fixed z-[81] rounded-2xl"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
            boxShadow: "0 0 0 9999px rgba(26, 43, 76, 0.72)",
            outline: "3px solid #ffc20e",
          }}
        />
      ) : (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-[81] bg-[#1a2b4c]/72" />
      )}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="fixed z-[82] flex max-h-[min(34rem,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-[1.6rem] border-2 border-black bg-white text-brand-ink shadow-[5px_5px_0_#231f20] outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
        style={{ top: pos.top, left: pos.left, width: pos.width }}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 bg-brand-yellow px-4 py-2 text-brand-ink">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em]">
            Turno {index + 1} de {total}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center rounded-full px-3 text-xs font-extrabold uppercase tracking-wide hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Cerrar
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          Turno {index + 1} de {total}. {step.title}
        </p>
        <div className="overflow-y-auto overscroll-contain px-4 py-4 sm:px-5">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-brand-red">
            {step.area}
          </p>
          <h2 id={titleId} className="mt-1 font-display text-2xl font-black leading-tight text-brand-blue">
            {step.title}
          </h2>
          <p id={bodyId} className="mt-3 text-sm leading-relaxed text-brand-ink">
            {step.body}
          </p>
          {step.points ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-brand-ink/85">
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-2 border-t border-black/10 px-4 py-3 sm:px-5">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-black/20 px-4 text-xs font-extrabold uppercase tracking-wide hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Atrás
            </button>
          ) : null}
          <button
            type="button"
            onClick={onNext}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border-2 border-black bg-brand-yellow px-4 text-xs font-extrabold uppercase tracking-wide text-brand-ink hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-reduce:transform-none"
          >
            {lastStep ? "Listo" : "Siguiente"}
          </button>
        </div>
      </div>
    </>
  );
}
