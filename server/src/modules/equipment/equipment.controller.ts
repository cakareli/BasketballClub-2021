import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('equipment')
@ApiTags('Equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(id);
  }
}
