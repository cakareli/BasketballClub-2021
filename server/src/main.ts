import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Basketaball Clubs')
  .setDescription('Basketaball Clubs API description')
  .setVersion('1.0')
  .addTag('User')
  .addTag('Club')
  .addTag('Coach')
  .addTag('Equipment')
  .addTag('League')
  .addTag('Physiotherapist')
  .addTag('Player')
  .addTag('Staff')
  .addTag('Team')
  .addTag('Therapy')
  .addTag('Training')
  .addTag('WorkTime')
  .build();

  const cors = require('cors')
  app.use(cors({
    origin: "http://localhost:3000",
  }))

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3030);
}
bootstrap();
