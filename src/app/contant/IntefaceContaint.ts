export interface HeadCell<T> {
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric: boolean;
}

export interface UserAdminInteface {
  id: any;
  email: string;
  phone: string;
  position: string;
  first_name: string;
  last_name: string;
  active: number;
}

export interface UserAdmin {
  fullName: string;
  priority: number;
  id: number;
  status: number;
  email: string;
  username: string;
  password: string;
  role: number;
  phoneNumber: string;
}

export interface DataState<T> {
  data: T;
  isLoading?: boolean;
  isError?: boolean;
  count?: number;
}

export interface CategoryAdmin {
  id: number;
  categoryName: string;
  createDate: string;
  status: number;
  url: string;
  categoryParentId: number;
  categoryChildren: CategoryAdmin[];
}

export interface VoucherAdmin {
  id: number;
  description: string;
  createDate: string
  endTime: string
  eventName: string
  image: string
  status: number
  startTime: string
  type: boolean
  salePrice: number
}

export interface AddressOrderInterface {
  ward: {
    id: any;
    name: string;
  };
  province: {
    id: any;
    name: string;
  };
  district: {
    id: any;
    name: string;
  };
  detail: string;
}

export interface Material {
  id: any;
  materialName: string;
  status: number;
}
export interface Tag {
  id: any;
  tagName: string;
  status: number;
}
export interface Branch {
  id: any;
  branch_name: string;
  status: number;
}

export interface OptionColor {
  id: any;
  colorName: string;
  status: number;
}
export interface OptionSize {
  id: any;
  sizeName: string;
  status: number;
}

export interface DataStateOption {
  colors: OptionColor[];
  sizes: OptionSize[];
}

export interface Option extends DataStateOption {
  id: any;
  option_name: string;
  status: number;
  data?: OptionColor[] | OptionSize[];
}

export interface ProductAdmin {
  productName: string;
  createDate: string;
  description: string;
  image: string;
  category_id: any;
  id: any;
  status: number;
  tag_id: any;
  voteAverage: number;
  category: CategoryAdmin;
  productImage: any;
  minPrice: number;
  maxPrice: number;
}

export interface DetailProductAdmin {
  id: any;
  quantity: number;
  priceExport: number;
  priceImport: number;
  status: number;
  productImage: any;
  product: ProductAdmin;
  color: OptionColor;
  size: OptionSize;
  createDate: string;
  productName?: string;
}

export interface DetailOrderAdmin {
  id: number;
  quantity: number;
  price: number;
  status: number;
  order_id: number;
  detail_product_id: number;
}

export interface HistoryOrder {
  id: number;
  update_time: string;
  description: string;
  status: number;
  order_id: number;
}

export interface ResultApi<T> {
  data: T;
  message: string;
  status: number;
}
