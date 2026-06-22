import { expect, test } from '@playwright/test';

test ('Ping request', async ({ request }) => {

    const responseData = request.get ('/ping');
    expect ((await responseData).status()).toBe (201);
});