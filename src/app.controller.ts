import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('公共')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  getList(): string {
    return 'list';
  }

  @Get('user_*')
  getUser(): string {
    return 'user1';
  }

  @Get('user/:id')
  getUserId(id: string): string {
    return id;
  }
}
