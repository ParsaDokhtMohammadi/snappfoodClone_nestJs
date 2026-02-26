import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigInit } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfigInit(app)
  const PORT = process.env.PORT ?? 3000
  await app.listen(PORT,()=>{
    console.log(`server running http://localhost:${PORT}`);
    console.log(`swagger running http://localhost:${PORT}/swagger`);
    
  });
}
bootstrap();
