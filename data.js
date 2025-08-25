const data = [
  {
    "brand": "HINO",
    "model": "300-INNOVATOR",
    "variant": "XZU(N04C)",
    "codes": [
      {
        "code": "B2799",
        "description": "Immobilizer system: ระบบ Imobilizer \nการสื่อสารของ ECU ที่แยกจากระบบ Immobilizer ผิดปกติ",
        "possible_causes": [
          "ตรวจพบความผิดปกติในการสื่อสารหรือสายสื่อสารระหว่าง ECU ของเครื่องยนต์และ ECU ของระบบ immobilizer",
          "หรือตรวจพบรหัสการสื่อสารที่ไม่ถูกต้อง",
          "เครื่องยนต์ไม่สามารถสตาร์ทได้"
        ],
        "diagnosis_steps": [
          "1.ยังไม่ได้ลงทะเบียนรหัส ID สำหรับกุญแจสตาร์ท (การลงทะเบียนไม่เสร็จสมบูรณ์)",
          "2.คอนเนคเตอร์เชื่อมต่อเกิดการหลุดหลวม",
          "3.สายไฟขาดหรือลัดวงจร",
          "4.Immobilizer ECU ทำงานบกพร่อง",
          "5.Engine ECU ทำงานบกพร่อง"
        ],
        "repair_steps": [
          "1.ลงทะเบียนรหัส ID ให้เสร็จสมบูรณ์",
          "2.แก้ไขขั้วต่อต่างๆ อย่างถูกต้อง",
          "3.ซ่อมแก้ไขหรือเปลี่ยนสายไฟหากพบเจอความเสียหาย",
          "4.เปลี่ยน Engine ECU หรือ Immobilizer ECU หากตรวจสอบแล้วว่าทำงานบกพร่อง"
        ],
        "reference": "Manual: S7-LXZE05I 1/4 [Page 2-24 to 2-30]",
        "images": [
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_11.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_12.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_13.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_14.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_15.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_16.jpg",
          "https://hmstelibrary-dot.github.io/Photo/XZU(N04C)-B2799-S7-LXZE05I_17.jpg"
        ]
      }
    ]
  }
];