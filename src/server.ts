import { App } from '@/app';
import { HomeRoute } from '@/routes/home.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new HomeRoute()]);

app.listen();
