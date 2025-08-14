const data = [
  {
    brand: "Hino",
    model: "500",
    variant: "FC9J",
    codes: [
      {
        code: "P0301",
        description: "การจุดระเบิดล้มเหลวที่สูบ 1",
        possible_causes: ["หัวเทียนเสีย","คอยล์จุดระเบิดเสีย","หัวฉีดอุดตัน"],
        diagnosis_steps: ["ตรวจหัวเทียน","ตรวจคอยล์","ตรวจหัวฉีด"],
        repair_steps: ["เปลี่ยนหัวเทียน","เปลี่ยนคอยล์","ล้างหัวฉีด"],
        reference: "คู่มือซ่อม Hino 500 FC9J",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Car_engine.jpg"
      }
    ]
  },
  {
    brand: "Toyota",
    model: "Hilux",
    variant: "Revo 2.4",
    codes: [
      {
        code: "P0420",
        description: "ระบบตัวกรองไอเสียไม่ทำงาน",
        possible_causes: ["Catalytic converter เสีย","O2 sensor ชำรุด"],
        diagnosis_steps: ["ตรวจ O2 sensor","ตรวจ Catalytic converter"],
        repair_steps: ["เปลี่ยน O2 sensor","เปลี่ยน Catalytic converter"],
        reference: "คู่มือซ่อม Toyota Hilux 2018",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Catalytic_converter.jpg"
      }
    ]
  }
];