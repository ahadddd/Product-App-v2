import {Category} from '../Models/category'
import { Vendor } from './vendor';

export interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;
    vendor: Vendor
}