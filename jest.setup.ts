import { server } from './src/mocks/server';
require('@shopify/flash-list/jestSetup');

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
