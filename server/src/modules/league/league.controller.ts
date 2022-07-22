import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('league')
@ApiTags('League')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leagueService.create(createLeagueDto);
  }

  @UsePipes(ValidationPipe)
  @Get()
  findAll() {
    return this.leagueService.findAll();
  }

  @UsePipes(ValidationPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leagueService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leagueService.update(id, updateLeagueDto);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leagueService.remove(id);
  }
}
