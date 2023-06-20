import * as jwt from 'jsonwebtoken';
import * as Koa from 'koa';
import * as Router from 'koa-router';

const SECRET_KEY = 'some-secret-key'; // No usar una clave secreta fija en un entorno de producción.

const app = new Koa();
const router = new Router();

router.post('/login', async ctx => {
  const { username, password } = ctx.request.body;

  if (username === 'user' && password === 'password') {
    // Este es un ejemplo. No se debe usar autenticación estática en un entorno de producción.
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    ctx.body = { token };
  } else {
    ctx.status = 401;
    ctx.body = { error: 'Invalid username or password' };
  }
});

router.get('/protected', async ctx => {
  const authHeader = ctx.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    try {
      jwt.verify(token, SECRET_KEY);
      ctx.body = { data: 'Protected data' };
    } catch (err) {
      ctx.status = 403;
      ctx.body = { error: 'Invalid token' };
    }
  } else {
    ctx.status = 401;
    ctx.body = { error: 'No token provided' };
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080, () => console.log('Server running on http://localhost:8080'));
