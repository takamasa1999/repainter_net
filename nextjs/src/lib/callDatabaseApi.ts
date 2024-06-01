// lib/api.ts
export async function callDatabaseApi(
  table: string,
  action: 'findMany' | 'findUnique' | 'create' | 'update' | 'delete',
  data: any = {}
): Promise<any> {
  const response = await fetch(`/api/db/curd?table=${table}&action=${action}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  return response.json();
}
