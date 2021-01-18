export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly price: number;
  readonly createdAt: Date;
}
