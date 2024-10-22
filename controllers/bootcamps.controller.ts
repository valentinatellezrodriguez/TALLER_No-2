import { Controller, Get, Param } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
  @Get()
  getAllBootcamps(): string {
    return "aquí va mostrar todos los bootcamps";
  }

  @Get(":id")
  getBootcampById(@Param("id") id: number): string {
    return `aquí va mostrar todos los bootcamp: ${id}`;
  }
}
