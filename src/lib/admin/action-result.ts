export type ActionResult = { ok: true } | { ok: false; error: string };

export function ok(): ActionResult {
  return { ok: true };
}

export function fail(error: string): ActionResult {
  return { ok: false, error };
}

export async function asActionResult(fn: () => Promise<void>): Promise<ActionResult> {
  try {
    await fn();
    return { ok: true };
  } catch (e) {
    const message =
      e instanceof Error && e.message.trim()
        ? e.message
        : "No se pudo completar. Intenta de nuevo.";
    return { ok: false, error: message };
  }
}
