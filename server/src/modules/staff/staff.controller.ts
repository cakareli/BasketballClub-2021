import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('staff')
@ApiTags('Staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
