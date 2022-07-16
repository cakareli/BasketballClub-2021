import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { WorktimeService } from './worktime.service';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('worktime')
@ApiTags('WorkTime')
export class WorktimeController {
  constructor(private readonly worktimeService: WorktimeService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createWorktimeDto: CreateWorktimeDto) {
    return this.worktimeService.create(createWorktimeDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.worktimeService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worktimeService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorktimeDto: UpdateWorktimeDto) {
    return this.worktimeService.update(id, updateWorktimeDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worktimeService.remove(id);
  }
}
