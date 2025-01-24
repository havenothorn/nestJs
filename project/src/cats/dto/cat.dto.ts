import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '60a5b4f3c1e7c1f1f4f5f5f5',
    description: 'id',
  })
  id: string;
}
