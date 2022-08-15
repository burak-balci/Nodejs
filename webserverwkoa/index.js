const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ.</h1>";
});

router.get("/hakkimda", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ.</h1>";
});

router.get("/iletisim", (ctx) => {
  ctx.status = 200;
  ctx.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ.</h1>";
});

const port = 3000;

app.use(router.routes());

app.listen(port, () => {
  console.log(`Sunucu ${port}'da çalışmaya başladı.`);
});
