import { PrismaClient } from "@prisma/client";

export async function GET(_request: Request) {
  const prisma = new PrismaClient();

  try {
    const detailedInfo = await prisma.$queryRaw`
      SELECT
        COLUMN_NAME,
        COLUMN_TYPE,
        COLUMN_COMMENT
      FROM
        information_schema.COLUMNS
      WHERE
        table_name = 'composition';
    `;

    await prisma.$disconnect();

    return new Response(JSON.stringify(detailedInfo), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    await prisma.$disconnect();
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
