import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PopulateService } from "./services/populate.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const populateService = app.get(PopulateService);

  await populateService.populate();
  await app.close();

  console.log("Seed complete.");
}

bootstrap();