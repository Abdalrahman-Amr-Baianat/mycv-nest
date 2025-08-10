import { IsString, Min, Max, IsLongitude, IsLatitude, IsNumber } from 'class-validator';
export class CreateReportDto {
  @IsString()
  make: string;
  @IsString()
  model: string;
  @IsNumber()
  @Max(2050)
  @Min(1930)
  year: number;
  @IsNumber()
  @Min(0)
  @Max(1 * 10 ** 6)
  mileage: number;
  @IsLongitude()
  lng: number;
  @IsLatitude()
  lat: number;
  @IsNumber()
  @Min(1)
  price: number;
}
