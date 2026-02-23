export const HTTP_METHODS: Record<string, 'get' | 'post' | 'patch' | 'put' | 'delete'> = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
} as const;

export const ACCESS_TOKEN = 'admin-access-token' as const;
