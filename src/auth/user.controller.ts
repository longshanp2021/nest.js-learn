import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('user')
export class UserController {

    @Get()
    getHello(): string {
      // return this.appService.getHello();
      return '你好啊1';
    }

}
