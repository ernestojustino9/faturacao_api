import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { ArmagenmModule } from './armagenm/armagenm.module';
import { ArtigoModule } from './artigo/artigo.module';
import { ArmegemartigoModule } from './armegemartigo/armegemartigo.module';

@Module({
  imports: [CategoriaModule, ProdutoModule, ArmagenmModule, ArtigoModule, ArmegemartigoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
