import { DynamicModule, Module, Type } from '@nestjs/common';
import { AlarmController } from './presenters/http/alarm.controller';
import { AlarmService } from './application/alarm.service';
import { AlarmFactory } from './domain/factories/alarm.factory';
import { CreateAlarmCommandHandler } from './application/commands/create-alarm-command-handler';
import { GetAlarmsQueryHandler } from './application/queries/get-alarms.query-handler';

@Module({
  controllers: [AlarmController],
  providers: [
    AlarmService,
    AlarmFactory,
    CreateAlarmCommandHandler,
    GetAlarmsQueryHandler,
  ],
})
export class AlarmModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmModule,
      imports: [infrastructureModule], // Modules composition pattern
    };
  }
}
