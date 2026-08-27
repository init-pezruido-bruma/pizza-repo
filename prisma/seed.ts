import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEFAULT_RECIPIENTS = [
  "f.castillo@hungrypartners.com",
  "natalia@hungrypartners.com",
  "myafdelaf@incrediblepizza.mx",
];

async function main() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME?.trim() || "Admin";

  if (!email || !password) {
    console.log(
      "Skipping seed: set ADMIN_EMAIL and ADMIN_PASSWORD (Vercel → Environment Variables) to create the admin.",
    );
    return;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: { passwordHash, name, role: "ADMIN" },
    create: { email, passwordHash, name, role: "ADMIN" },
  });

  await prisma.mailSettings.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      fromEmail: process.env.MAIL_FROM?.trim() || "noreply@incrediblepizza.mx",
      fromName: "Incredible Pizza",
      recipients: JSON.stringify(DEFAULT_RECIPIENTS),
      enabled: true,
    },
  });

  console.log(`Seeded admin ${email} and default mail settings`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
