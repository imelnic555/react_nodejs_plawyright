import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCors from '@fastify/cors';

async function bootstrap() {
    // Create the app with the Fastify adapter.
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    // Register the CORS plugin using the app instance.
    app.register(fastifyCors, { origin: 'http://localhost:5173' });

    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`🚀 Backend running on http://localhost:${port}`);
}

bootstrap();
