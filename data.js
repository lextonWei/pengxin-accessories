// Company & product data — edit here, no database needed.

const COMPANY = {
  nameEn: "Pengxin Precision Plastics Co., Ltd.",
  nameZh: "深圳市鹏芯精密塑胶有限公司",
  nameTh: "บริษัท เผิงซิน พรีซิชั่น พลาสติกส์ จำกัด",
  founded: 2014,
  staff: 110,
  factoryArea: "3,200 m²",
  address: {
    en: "3F, Building B, Huafeng Technology Park, No. 3 Baotian 1st Road, Tiegang Community, Xixiang Street, Bao'an District, Shenzhen, China",
    zh: "深圳市宝安区西乡街道铁岗社区宝田一路3号华丰科技园B栋3楼",
    th: "ชั้น 3 อาคาร B สวนเทคโนโลยี Huafeng เลขที่ 3 ถนน Baotian 1 ตำบล Tiegang ถนน Xixiang เขต Bao'an เมืองเซินเจิ้น ประเทศจีน",
  },
  contact: {
    person: "Ms. Chen",
    whatsappDisplay: "+86 755 2300 0000",
    email: "sales@pengxin-mould.example",
    line: "pengxin_sales",
  },
};

const STATS = [
  { value: "2014", labelEn: "Established", labelZh: "成立年份", labelTh: "ก่อตั้ง" },
  { value: "110+", labelEn: "Staff", labelZh: "员工人数", labelTh: "พนักงาน" },
  { value: "18", labelEn: "Injection Machines", labelZh: "注塑机台数", labelTh: "เครื่องฉีดพลาสติก" },
  { value: "3,200 m²", labelEn: "Factory Area", labelZh: "厂房面积", labelTh: "พื้นที่โรงงาน" },
];

const PRODUCTS = [
  { sku: "PX-01", nameEn: "Clear TPU Airbag Case", nameZh: "透明气囊TPU壳", nameTh: "เคส TPU ใส", material: "TPU", spec: "Popular models", moq: "100 pcs", fob: "USD 0.35–0.85 /pc", thb: "฿25–45 /pc", image: "images/PX-01.jpg" },
  { sku: "PX-02", nameEn: "Liquid Silicone Case", nameZh: "液态硅胶壳", nameTh: "เคสซิลิโคน", material: "Liquid Silicone", spec: "Multi-color, popular models", moq: "100 pcs", fob: "USD 0.70–1.40 /pc", thb: "฿35–60 /pc", image: "images/PX-02.jpg" },
  { sku: "PX-03", nameEn: "Card-Slot Case", nameZh: "插卡保护壳", nameTh: "เคสช่องบัตร", material: "PU + PC", spec: "Navy, popular models", moq: "100 pcs", fob: "USD 0.90–1.60 /pc", thb: "฿40–70 /pc", image: "images/PX-03.jpg" },
  { sku: "PX-04", nameEn: "Folding Desk Stand", nameZh: "折叠桌面支架", nameTh: "แท่นวางพับได้", material: "Aluminum + Silicone", spec: "Universal", moq: "50 pcs", fob: "USD 1.10–2.20 /pc", thb: "฿45–80 /pc", image: "images/PX-04.jpg" },
  { sku: "PX-05", nameEn: "2.5D Clear Tempered Glass", nameZh: "2.5D高清钢化膜", nameTh: "ฟิล์มกระจกใส", material: "9H Glass", spec: "Popular models", moq: "200 pcs", fob: "USD 0.18–0.45 /pc", thb: "฿15–30 /pc", image: "images/PX-05.jpg" },
  { sku: "PX-06", nameEn: "Privacy Tempered Glass", nameZh: "防窥钢化膜", nameTh: "ฟิล์มกันสายตา", material: "Glass", spec: "Popular models", moq: "200 pcs", fob: "USD 0.28–0.65 /pc", thb: "฿22–40 /pc", image: "images/PX-06.jpg" },
  { sku: "PX-07", nameEn: "Camera Lens Glass Set", nameZh: "镜头膜套装", nameTh: "ฟิล์มเลนส์", material: "Glass + Aluminum ring", spec: "Universal set", moq: "300 pcs", fob: "USD 0.12–0.30 /pc", thb: "฿8–18 /pc", image: "images/PX-07.jpg" },
  { sku: "PX-08", nameEn: "Wrist Strap", nameZh: "短款腕带", nameTh: "สายคล้องข้อมือ", material: "Nylon", spec: "Black / Beige", moq: "200 pcs", fob: "USD 0.25–0.55 /pc", thb: "฿12–25 /pc", image: "images/PX-08.jpg" },
  { sku: "PX-09", nameEn: "Vent Car Mount", nameZh: "出风口车载支架", nameTh: "ที่ยึดมือถือในรถ", material: "ABS", spec: "Non-wireless", moq: "100 pcs", fob: "USD 0.80–1.50 /pc", thb: "฿35–65 /pc", image: "images/PX-09.jpg" },
  { sku: "PX-10", nameEn: "Tempered Glass 10-Pack", nameZh: "钢化膜十片装", nameTh: "ชุดฟิล์ม 10 ชิ้น", material: "Glass", spec: "Bulk pack", moq: "200 pcs", fob: "USD 0.18–0.45 /pc", thb: "฿15–30 /pc", image: "images/PX-10.jpg" },
  { sku: "PX-11", nameEn: "Shockproof Clear Case", nameZh: "加厚防摔壳", nameTh: "เคสกันกระแทก", material: "TPU", spec: "Reinforced corners", moq: "100 pcs", fob: "USD 0.45–0.95 /pc", thb: "฿28–50 /pc", image: "images/PX-11.jpg" },
  { sku: "PX-12", nameEn: "Flower Ring Holder", nameZh: "指环扣", nameTh: "แหวนมือถือ", material: "Zinc Alloy", spec: "Multi-color", moq: "300 pcs", fob: "USD 0.15–0.35 /pc", thb: "฿8–16 /pc", image: "images/PX-12.jpg" },
];
