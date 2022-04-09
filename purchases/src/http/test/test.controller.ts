import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('ok')
  hello() {
    return 'Ok';
  }
}
