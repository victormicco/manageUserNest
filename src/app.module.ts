import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { UserService } from "./user.service.js";
import { PostService } from "./post.service.js";
import { PrismaService } from "./prisma.service.js";

@Module({
  imports: [], //módulos que o módulo principal vai utilizar
  controllers: [AppController], //arquvios que vão lidar com as requisições
  providers: [AppService, UserService, PostService, PrismaService], //arquivos que vão lidar com a regra de negócio
})
export class AppModule {}
