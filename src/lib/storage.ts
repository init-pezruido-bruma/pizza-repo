import { randomUUID } from "crypto";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { del, put } from "@vercel/blob";

function blobEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export async function savePromoImage(file: File, ext: string): Promise<string> {
  const filename = `${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;

  if (blobEnabled()) {
    const blob = await put(`promos/${filename}`, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type || undefined,
    });
    return blob.url;
  }

  const dir = path.join(process.cwd(), "public", "uploads", "promos");
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), buffer);
  return `/uploads/promos/${filename}`;
}

export async function deletePromoImage(imageUrl: string) {
  if (imageUrl.startsWith("http")) {
    if (!blobEnabled()) return;
    try {
      await del(imageUrl);
    } catch {
      // Missing blob or token without delete permission — ignore.
    }
    return;
  }

  if (!imageUrl.startsWith("/uploads/promos/")) return;

  const filename = path.basename(imageUrl);
  const filePath = path.join(process.cwd(), "public", "uploads", "promos", filename);
  try {
    await unlink(filePath);
  } catch {
    // File already gone.
  }
}
