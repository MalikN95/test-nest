import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './entities/products.entity';

@Controller('products')
export class ProductsController {

    constructor (private readonly productService: ProductsService) {

    }

    @Get()
    getAll() {
        return this.productService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: number): Promise<Product>  {
        return this.productService.getById(id)
    }

    @Post()
    create(@Body() createProduct: CreateProductDto) {
        return this.productService.create(createProduct)
        
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.productService.remove(id)
    }

    @Put(':id')
    update(@Body() createProduct: CreateProductDto, @Param('id') id: string) {
        return this.productService.update(id, createProduct)
    }
}
