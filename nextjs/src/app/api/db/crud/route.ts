// pages/api/database.ts
import { PrismaClient } from '@prisma/client';
import qs from "qs";
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

type Action = 'findMany' | 'findUnique' | 'create' | 'update' | 'delete';

interface RequestData {
  id?: number;
  [key: string]: any;
}

export async function POST(
  request: NextRequest
  // Response: NextResponse
) {
  const queries_str = request.nextUrl.searchParams.toString();
  const queries = qs.parse(queries_str);
  const { table, action } = queries as { table?: string; action?: Action };
  const data: RequestData = await request.json();

  if (!table || !action) {
    return new Response(JSON.stringify({ error: 'Table and action are required' }), {
      status: 400,
    });
  }

  try {
    const result = await handleRequest(table, action, data);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

async function handleRequest(
  table: string,
  action: Action,
  data: RequestData
): Promise<any> {
  const model = prisma[table as keyof PrismaClient];

  if (!model) {
    throw new Error(`Invalid table: ${table}`);
  }

  switch (action) {
    case 'findMany':
      return await (model as any).findMany(data);
    case 'findUnique':
      return await (model as any).findUnique({ where: data });
    case 'create':
      return await (model as any).create({ data });
    case 'update':
      return await (model as any).update({ where: { id: data.id }, data });
    case 'delete':
      return await (model as any).delete({ where: { id: data.id } });
    default:
      throw new Error(`Invalid action: ${action}`);
  }
}
