import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { PhysiotherapistService } from './physiotherapist.service';
import { CreatePhysiotherapistDto } from './dto/create-physiotherapist.dto';
import { UpdatePhysiotherapistDto } from './dto/update-physiotherapist.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('physiotherapist')
@ApiTags('Physiotherapist')
export class PhysiotherapistController {
  constructor(private readonly physiotherapistService: PhysiotherapistService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createPhysiotherapistDto: CreatePhysiotherapistDto) {
    return this.physiotherapistService.create(createPhysiotherapistDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.physiotherapistService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physiotherapistService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysiotherapistDto: UpdatePhysiotherapistDto) {
    return this.physiotherapistService.update(id, updatePhysiotherapistDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physiotherapistService.remove(id);
  }
}
