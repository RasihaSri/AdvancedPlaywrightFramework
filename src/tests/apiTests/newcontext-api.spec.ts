import { expect, test, request } from '@playwright/test';

test ('newContext for isolated headers', async () => {
    const ctx = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: { 'X-Trace-Id': 'demo-123' },
        timeout: 15_000,
    });

    const ping = await ctx.get('/ping');
    expect (ping.status()).toBe(201);
    await ctx.dispose();
});