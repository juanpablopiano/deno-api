import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getBands, addBand } from './controller/bands.ts';

const app = new Application();
const PORT = 4000;
const router = new Router();

router.get('/bands', getBands).post('/bands', addBand);

app.use(router.routes());

console.log(`Server running on PORT: ${PORT}`);
await app.listen({ port: PORT });
