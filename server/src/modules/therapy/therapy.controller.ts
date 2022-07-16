import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { TherapyService } from './therapy.service';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { UpdateTherapyDto } from './dto/update-therapy.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('therapy')
@ApiTags('Therapy')
export class TherapyController {
  constructor(private readonly therapyService: TherapyService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createTherapyDto: CreateTherapyDto) {
    return this.therapyService.create(createTherapyDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.therapyService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.therapyService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTherapyDto: UpdateTherapyDto) {
    return this.therapyService.update(id, updateTherapyDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.therapyService.remove(id);
  }
}
