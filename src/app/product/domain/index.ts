import {Product} from "../../shared/domain";
import {ImageSlider} from "../../shared/components";

export interface ProductVariant {
  id: number;
  product: Product;
  name: string;
  price: number;
  listPrice: number;
  productVariantImages: ImageSlider;
}
