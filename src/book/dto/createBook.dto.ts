import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import {Category} from '../schemas/book.schema';

export class createBookDto{

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    readonly title: string;

   @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }) => value.trim())
    readonly author: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    @IsNotEmpty()
    @IsEnum(Category)
    readonly category: Category;
}