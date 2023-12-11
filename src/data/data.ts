export interface Product {
  id: string;
  Categories: string;
  image: string;
  name: string;
  item_no: string;
  price: string;
  rating: number;
  reviews: number;
}
export const Products: Product[] = [
  {
    id:"1",
    Categories:"Ear Tags",
    image :"/1.png",
    name: "Pre-Numbered Calf Tags 1 to 50",
    item_no: "226-250 / yellow",
    price: "$29.25",
    rating:5,
    reviews:3
  },
  {
    id:"2",
    Categories:"Air Buds",
    image:"/2.png",
    name: "Air buds/Bluetooth Wireless",
    item_no: "286-290 / white",
    price: "$15.35",
    rating:4,
    reviews:10
  },
  {
    id:"3",
    Categories:"Air Buds",
    image:"/2.png",
    name: "Air buds/Bluetooth Wireless",
    item_no: "286-290 / white",
    price: "$15.35",
    rating:4,
    reviews:10
  },
  {
    id:"4",
    Categories:"Bull Nose Ring",
    image:"/3.png",
    name: "Bull Nose Ring Cow Cattle Stainless Steel",
    item_no: "295-305 / silver",
    price: "$9.15",
    rating: 4,
    reviews:7
  },
  {
    id:"5",
    Categories:"Desi Ghee",
    image:"/4.png",
    name: "100% Pure Desi Ghee (Asli Ghee) - 280 grams",
    item_no: "315-325 / organic",
    price: "$40.35",
    rating: 3,
    reviews:9
  },
  {
    id:"6",
    Categories:"Digital Clock + Thermometer",
    image:"/5.png",
    name: "HTC-1 Electronic Temperature Humidity Meter, For Medical Indoor Room LCD Digital Thermometer Hygrometer Weather Station Alarm Clock",
    item_no: "345-350 / white",
    price: "$95.00",
    rating: 5,
    reviews:15
  },    
];
