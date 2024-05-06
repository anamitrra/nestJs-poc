import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import {Book} from './schemas/book.schema';
import { createBookDto } from './dto/createBook.dto';
import { updateBookDto } from './dto/updateBook.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    async getBooks(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Post()
    async createBook(@Body() book: createBookDto): Promise<Book> {
        return await this.bookService.create(book);
    }

    @Get('/:id')
    async getBookById(@Param('id') id:string): Promise<Book> {
        return await this.bookService.getBookById(id);
    }

    @Put('/:id')
    async updateBook(@Param('id') id:string, @Body() book: updateBookDto): Promise<Book> {
        return await this.bookService.updateBookById(id, book);
    }

    @Delete('/:id')
    async deleteBookById(@Param('id') id:string): Promise<Book> {
        return await this.bookService.deleteBook(id);
    }
}
