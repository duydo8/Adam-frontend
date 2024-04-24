import {
  Branch,
  CategoryAdmin,
  DataStateOption,
  DetailProductAdmin,
  HeadCell,
  Material,
  Option,
  OptionColor,
  OptionSize,
  ProductAdmin,
  Tag,
  UserAdmin,
  UserAdminInteface,
  VoucherAdmin,
} from "./IntefaceContaint";
import R from "../assets/R";
import { OrderDto } from "../screen/order/slice/OrderSlice";
export const rows_example_user: UserAdminInteface[] = [
  {
    id: 1,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "Van Cu",
    active: 1,
  },
  {
    id: 2,
    email: "Levancu562@gmail.com",
    phone: "097940215",
    position: "User",
    first_name: "Le",
    last_name: "Van Cu",
    active: 1,
  },
  {
    id: 3,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "Van Tam",
    active: 1,
  },
  {
    id: 4,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "K kkk",
    active: 0,
  },
  {
    id: 5,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "Van Cu",
    active: 1,
  },
  {
    id: 6,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "Van Cu",
    active: 1,
  },
  {
    id: 7,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "K cu",
    active: 0,
  },
  {
    id: 8,
    email: "Levancu562@gmail.com",
    phone: "0965259441",
    position: "Admin",
    first_name: "Pham",
    last_name: "Van Cu",
    active: 1,
  },
];

export const headCells: HeadCell<UserAdmin>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "Số điện thoại",
  },
  { id: "role", numeric: true, disablePadding: false, label: "Vai trò" },
  {
    id: "fullName",
    numeric: true,
    disablePadding: false,
    label: "Tên đầy đủ",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const headCellsCategory: HeadCell<CategoryAdmin>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "categoryName",
    numeric: true,
    disablePadding: false,
    label: "Tên danh mục",
  },

  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];



export const headCellsVoucher: HeadCell<VoucherAdmin>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  { id: "eventName", numeric: true, disablePadding: false, label: "Tiêu đề" },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Mô tả",
  },
  {
    id: "startTime",
    numeric: true,
    disablePadding: false,
    label: "Thời gian bắt đầu",
  },
  {
    id: "endTime",
    numeric: true,
    disablePadding: false,
    label: "Thời gian kết thúc",
  },
  {
    id: "createDate",
    numeric: true,
    disablePadding: false,
    label: "Thời gian tạo",
  },
  {
    id: "salePrice",
    numeric: true,
    disablePadding: false,
    label: "Giảm (% hoặc VND)",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const LIST_VOUCHER: VoucherAdmin[] = [
];

export const headCellsMaterial: HeadCell<Material>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "materialName",
    numeric: true,
    disablePadding: false,
    label: "Tên chất liệu",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const LIST_MATERIAL: Material[] = [];

export const LIST_BRANCH: Branch[] = [
  {
    id: 1,
    status: 1,
    branch_name: "Gucci",
  },
  {
    id: 2,
    status: 1,
    branch_name: "Owen",
  },
  {
    id: 3,
    status: 1,
    branch_name: "MieMode",
  },
];

export const headCellsBranch: HeadCell<Branch>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "branch_name",
    numeric: true,
    disablePadding: false,
    label: "Branch name",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const headCellsOrderAdmin: HeadCell<OrderDto>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "fullName",
    numeric: true,
    disablePadding: false,
    label: "Tên người nhận",
  },
  {
    id: "phoneNumber",
    numeric: true,
    disablePadding: false,
    label: "Số điện thoại",
  },
  {
    id: "totalPrice",
    numeric: true,
    disablePadding: false,
    label: "Tổng tiền hàng",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const LIST_TAG: Tag[] = [
  // {
  //   id: 1,
  //   isDelete: false,
  //   tagName: "Tag 1",
  // },
  // {
  //   id: 2,
  //   isDelete: false,
  //   tagName: "Tag 2",
  // },
];

export const headCellsTag: HeadCell<Tag>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "tagName",
    numeric: true,
    disablePadding: false,
    label: "Tên thẻ",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const OPTIONS_DATA: DataStateOption = {
  colors: [
    { id: 1, colorName: "Xanh", status: 1 },
    { id: 2, colorName: "Đỏ", status: 1 },
    { id: 3, colorName: "Vàng", status: 1 },
  ],
  sizes: [
    { id: false, sizeName: "S", status: 1 },
    { id: 2, sizeName: "M", status: 1 },
    { id: 3, sizeName: "L", status: 1 },
    { id: 4, sizeName: "XL", status: 1 },
    { id: 5, sizeName: "XXL", status: 1},
  ],
};

export const headCellsOption: HeadCell<Option>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "option_name",
    numeric: true,
    disablePadding: false,
    label: "Option name",
  },
];

export const headCellsOptionColor: HeadCell<OptionColor>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "colorName",
    numeric: true,
    disablePadding: false,
    label: "Tên màu",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];

export const headCellsOptionSize: HeadCell<OptionSize>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "sizeName",
    numeric: true,
    disablePadding: false,
    label: "Tên kích thước",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
];
// Product
export const headCellsProduct: HeadCell<ProductAdmin>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
  {
    id: "productName",
    numeric: true,
    disablePadding: false,
    label: "Tên sản phẩm",
  },
  {
    id: "createDate",
    numeric: true,
    disablePadding: false,
    label: "Ngày tạo",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Trạng thái" },
]
export const LIST_PRODUCT_DETAIL: DetailProductAdmin[] = [];

export const headCellsProductDetail: HeadCell<DetailProductAdmin>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "STT",
  },
];

export const LIST_OPTION = [
  { id: 1, name: "Color" },
  { id: 2, name: "Size" },
];
