import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // CREATE
  @Post('/')
  async createProduct(@Body() createProductDto: CreateProductDTO) {
    return this.productService.createProduct(createProductDto);
  }

  // READ
  @Get('/')
  async getProducts() {
    return await this.productService.getProducts();
  }

  // READ SPECIFIC
  @Get('/:productId')
  async getProduct(@Param('productId') productId) {
    return await this.productService.getProduct(productId);
  }

  // UPDATE
  @Put('/:productId')
  async updateProduct(
    @Body() createProductDto: CreateProductDTO,
    @Param('productId') productId,
  ) {
    return await this.productService.updateProduct(productId, createProductDto);
  }

  // DELETE
  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId) {
    return await this.productService.deleteProduct(productId);
  }
}
