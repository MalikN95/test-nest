import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/products.entity';


@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async getAll() : Promise<Product[]> {
        return await this.productRepository.find()
    }

    async getById(id: number): Promise<Product> {
        return await this.productRepository.findOneBy({id});
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        return await this.productRepository.save(productDto)
    }

    async remove(id: number) {
        return await this.productRepository.delete(id)
    }

    async update(id: string, createProduct: CreateProductDto){
        return this.productRepository.update(id, createProduct)
    }

}
