import { Expose, Transform, Type } from 'class-transformer';
import { UserDto } from 'src/users/dtos/user.dto';
import { User } from 'src/users/user.entity';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  mileage: number;
  @Expose()
  approved:boolean   
  @Expose()
  @Transform(({obj})=> obj.user.id)
  userId: number;
}
