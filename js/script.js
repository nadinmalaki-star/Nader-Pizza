// ==== إعدادات المطعم ====
const RESTAURANT_WHATSAPP = "970599377881";
const CURRENCY = "₪";

// ==== بيانات المنيو (حسب منيو المطعم الفعلي) ====
const MENU = {
  pizza: [
    { id: "p1", name: "بيتزا الجبنة", desc: "عجينة طازجة يوميًا مع جبنة موزاريلا", img: "images/pizza-cheese-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 35 }, { k: "M", label: "وسط", price: 45 }, { k: "L", label: "كبيرة", price: 55 }] },
    { id: "p2", name: "بيتزا ستيك بالجبنة", desc: "شرائح لحم، بصل، فلفل أخضر، فطر، موزاريلا", img: "images/pizza-steak-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 40 }, { k: "M", label: "وسط", price: 50 }, { k: "L", label: "كبيرة", price: 60 }] },
    { id: "p3", name: "بيتزا كل شي", desc: "لحم مفروم، فطر، فلفل أحمر وأخضر، بصل، زيتون، موزاريلا", img: "images/pizza-works-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 40 }, { k: "M", label: "وسط", price: 50 }, { k: "L", label: "كبيرة", price: 60 }] },
    { id: "p4", name: "بيتزا اللحوم الفاخرة", desc: "لحم مفروم، سلامي، بيبروني، شرائح لحم، موزاريلا", img: "images/pizza-meat-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 50 }, { k: "M", label: "وسط", price: 60 }, { k: "L", label: "كبيرة", price: 70 }] },
    { id: "p5", name: "بيتزا محبي الخضار", desc: "فطر، بصل، طماطم، فلفل أحمر وأخضر، زيتون أسود وأخضر، ثوم، موزاريلا", img: "images/pizza-veggie-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 40 }, { k: "M", label: "وسط", price: 50 }, { k: "L", label: "كبيرة", price: 60 }] },
    { id: "p6", name: "بيتزا دجاج بالباربكيو", desc: "صدر دجاج مع صوص الباربكيو وموزاريلا", img: "images/pizza-bbq-real.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 40 }, { k: "M", label: "وسط", price: 50 }, { k: "L", label: "كبيرة", price: 60 }] },
    { id: "p7", name: "بيتزا إيطاليانو", desc: "بيبروني، طماطم، ريحان، أوريغانو، موزاريلا", img: "images/pizza-italiano.jpg",
      sizes: [{ k: "S", label: "صغيرة", price: 40 }, { k: "M", label: "وسط", price: 50 }, { k: "L", label: "كبيرة", price: 60 }] }
  ],
  extras: [
    { id: "ex1", name: "أطراف محشوة جبنة", price: 20, img: "images/pizza-cheese-real.jpg" },
    { id: "ex2", name: "إضافة لحوم", price: 10, img: "images/pizza-meat-real.jpg" },
    { id: "ex3", name: "إضافة دجاج", price: 10, img: "images/pizza-bbq-real.jpg" }
  ],
  sandwiches: [
    { id: "sw1", name: "ساندويش دجاج مشوي (خبز الحبة الكاملة)", desc: "صدر دجاج مشوي على خبز القمح بالشوفان", price: 20, img: "images/sandwich-healthy-chicken.webp" },
    { id: "sw2", name: "ساندويش دجاج مشوي", desc: "صدر دجاج مشوي طازج", price: 15, img: "images/sandwich-grilled-chicken.webp" },
    { id: "sw3", name: "همبرغر", desc: "برغر لحم بقري كلاسيكي", price: 16, img: "images/burger-beef.jpg" },
    { id: "sw4", name: "برغر بالجبنة", desc: "برغر لحم مع طبقة جبنة", price: 17, img: "images/burger-beef.jpg" },
    { id: "sw5", name: "دجاج مسحب", desc: "دجاج مسحّب طازج", price: 12, img: "images/sandwich-shredded-chicken.jpg" },
    { id: "sw6", name: "روست بيف بالجبنة", desc: "شرائح روست بيف مع الجبنة", price: 10, img: "images/sandwich-roastbeef.jpg" },
    { id: "sw7", name: "ساندويتش البيتزا", desc: "خبز باجيت بصوص وجبنة البيتزا", price: 10, img: "images/sandwich-pizzamelt.jpg" },
    { id: "sw8", name: "حبش بالجبنة", desc: "شرائح ديك رومي مع الجبنة", price: 9, img: "images/sandwich-turkey.jpg" },
    { id: "sw9", name: "جبنة صفراء", desc: "جبنة صفراء على خبز باجيت", price: 6, img: "images/sandwich-cheese.jpg" }
  ],
  sides: [
    { id: "s1", name: "بطاطس مقلية", desc: "بطاطس مقرمشة تُقدَّم ساخنة", img: "images/fries-real.jpg",
      sizes: [{ k: "S", label: "صغير", price: 5 }, { k: "M", label: "وسط", price: 8 }, { k: "L", label: "كبير", price: 12 }] },
    { id: "s2", name: "بطاطس بالجبنة", desc: "بطاطس مقرمشة مغطاة بالجبنة", price: 14, img: "images/cheese-fries.jpg" },
    { id: "s3", name: "10 أجنحة دجاج", desc: "أجنحة دجاج حارة بالباربكيو", price: 20, img: "images/chicken-wings.jpg" },
    { id: "s4", name: "20 أجنحة دجاج", desc: "أجنحة دجاج حارة بالباربكيو", price: 38, img: "images/chicken-wings.jpg" },
    { id: "s5", name: "خبز بالثوم", desc: "خبز طازج بالثوم والأعشاب", price: 8, img: "images/garlic-bread.jpg" },
    { id: "s6", name: "خبز بالثوم بالجبنة", desc: "خبز طازج بالثوم مغطى بالجبنة", price: 14, img: "images/garlic-bread-cheese.jpg" }
  ],
  salads: [
    { id: "sl1", name: "سلطة الدجاج المشوي", desc: "خضار طازجة مع قطع دجاج مشوي", price: 20, img: "images/salad-chicken-real.jpg" },
    { id: "sl2", name: "سلطة خضار", desc: "خس، طماطم، خيار طازجة", price: 15, img: "images/salad-garden.jpg" }
  ],
  drinks: [
    { id: "d1", name: "مياه صغير", desc: "زجاجة مياه صغيرة", price: 2, img: "images/water.jpg" },
    { id: "d2", name: "مياه كبير", desc: "زجاجة مياه كبيرة", price: 3, img: "images/water.jpg" },
    { id: "d3", name: "كولا لتر", desc: "زجاجة كولا كبيرة", price: 5, img: "images/cola.jpg" },
    { id: "d4", name: "كولا صغير", desc: "علبة كولا صغيرة", price: 3, img: "images/cola.jpg" },
    { id: "d5", name: "عصير صغير", desc: "كوب عصير صغير", price: 3, img: "images/orange-juice.jpg" },
    { id: "d6", name: "عصير كبير", desc: "كوب عصير كبير", price: 6, img: "images/orange-juice.jpg" }
  ]
};

const CATEGORY_LABELS = {
  pizza: "بيتزا", sandwiches: "ساندويتشات", sides: "مقبلات", salads: "سلطات", drinks: "مشروبات"
};

// ==== صور من مطبخنا (فيسبوك) ====
const GALLERY = [
  "images/gallery/fb-6.jpg",
  "images/gallery/fb-7.jpg",
  "images/gallery/fb-5.jpg",
  "images/gallery/fb-8.jpg",
  "images/gallery/fb-3.jpg",
  "images/gallery/fb-1.jpg"
];

// ==== حالة السلة ====
let cart = JSON.parse(localStorage.getItem("naderPizzaCart") || "[]");

// ==== عناصر DOM ====
const menuGrid = document.getElementById("menuGrid");
const menuTabs = document.getElementById("menuTabs");
const galleryGrid = document.getElementById("galleryGrid");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const emptyCartMsg = document.getElementById("emptyCartMsg");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutOverlay = document.getElementById("checkoutOverlay");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutForm = document.getElementById("checkoutForm");
const modalSummary = document.getElementById("modalSummary");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const TRASH_ICON = `<svg viewBox="0 0 24 24"><path d="M6 7h12M9 7V4h6v3m-8 0 1 13h8l1-13"/></svg>`;

// ==== عرض المنيو ====
function priceBlock(item) {
  if (item.sizes) {
    return `<div class="size-options">${item.sizes.map(s => `
      <button class="size-btn" data-id="${item.id}" data-size="${s.k}">
        <span>${s.label}</span><strong>${s.price} ${CURRENCY}</strong>
      </button>`).join("")}</div>`;
  }
  return `
    <div class="menu-item-footer">
      <span class="price">${item.price} ${CURRENCY}</span>
      <button class="add-btn" data-id="${item.id}">أضف للسلة</button>
    </div>`;
}

function renderMenu(category) {
  menuGrid.innerHTML = "";
  menuGrid.dataset.cat = category;

  MENU[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item";
    card.innerHTML = `
      <div class="menu-item-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="menu-item-body">
        <h4>${item.name}</h4>
        ${item.desc ? `<p class="desc">${item.desc}</p>` : ""}
        ${priceBlock(item)}
      </div>
    `;
    menuGrid.appendChild(card);
  });

  if (category === "pizza") {
    const extrasBox = document.createElement("div");
    extrasBox.className = "extras-box";
    extrasBox.innerHTML = `
      <h4 class="extras-title">إضافات على البيتزا</h4>
      <div class="extras-list">
        ${MENU.extras.map(ex => `
          <button class="extra-chip" data-id="${ex.id}">
            <span>${ex.name}</span><strong>+${ex.price} ${CURRENCY}</strong>
          </button>`).join("")}
      </div>`;
    menuGrid.after(extrasBox);
  } else {
    const existing = menuGrid.nextElementSibling;
    if (existing && existing.classList.contains("extras-box")) existing.remove();
  }
}

renderMenu("pizza");

menuTabs.addEventListener("click", e => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(btn.dataset.cat);
});

function findItem(id) {
  const cat = menuGrid.dataset.cat;
  return MENU[cat].find(i => i.id === id);
}

menuGrid.addEventListener("click", e => {
  const addBtn = e.target.closest(".add-btn");
  const sizeBtn = e.target.closest(".size-btn");

  if (addBtn) {
    const item = findItem(addBtn.dataset.id);
    addToCart({ id: item.id, name: item.name, price: item.price, img: item.img });
  }

  if (sizeBtn) {
    const item = findItem(sizeBtn.dataset.id);
    const size = item.sizes.find(s => s.k === sizeBtn.dataset.size);
    addToCart({ id: `${item.id}-${size.k}`, name: `${item.name} (${size.label})`, price: size.price, img: item.img });
  }
});

document.addEventListener("click", e => {
  const chip = e.target.closest(".extra-chip");
  if (!chip) return;
  const ex = MENU.extras.find(x => x.id === chip.dataset.id);
  addToCart(ex);
});

// ==== معرض الصور ====
function renderGallery() {
  galleryGrid.innerHTML = "";
  GALLERY.forEach(src => {
    const a = document.createElement("a");
    a.href = "https://www.facebook.com/Nader.pizza/photos";
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "gallery-item";
    a.innerHTML = `<img src="${src}" alt="Nader Pizza" loading="lazy">`;
    galleryGrid.appendChild(a);
  });
}
renderGallery();

// ==== منطق السلة ====
function saveCart() {
  localStorage.setItem("naderPizzaCart", JSON.stringify(cart));
}

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`تمت إضافة "${item.name}" للسلة`);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalQty;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "";
    cartItemsEl.appendChild(emptyCartMsg);
    cartTotalEl.textContent = `0 ${CURRENCY}`;
    return;
  }

  cartItemsEl.innerHTML = "";
  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <span>${item.price} ${CURRENCY}</span>
      </div>
      <div class="qty-controls">
        <button class="dec" data-id="${item.id}">-</button>
        <span>${item.qty}</span>
        <button class="inc" data-id="${item.id}">+</button>
      </div>
      <span class="remove-item" data-id="${item.id}">${TRASH_ICON}</span>
    `;
    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = `${cartTotal()} ${CURRENCY}`;
}

cartItemsEl.addEventListener("click", e => {
  const target = e.target.closest("[data-id]");
  if (!target) return;
  const id = target.dataset.id;
  if (target.classList.contains("inc")) changeQty(id, 1);
  if (target.classList.contains("dec")) changeQty(id, -1);
  if (target.classList.contains("remove-item")) removeItem(id);
});

// ==== فتح / غلق السلة ====
function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("active");
}
function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("active");
}
cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

// ==== قائمة الموبايل ====
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));

// ==== نافذة إتمام الطلب ====
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("السلة فاضية، أضف أصناف الأول");
    return;
  }
  renderModalSummary();
  checkoutOverlay.classList.add("active");
  closeCartDrawer();
});

closeCheckout.addEventListener("click", () => checkoutOverlay.classList.remove("active"));
checkoutOverlay.addEventListener("click", e => {
  if (e.target === checkoutOverlay) checkoutOverlay.classList.remove("active");
});

function renderModalSummary() {
  const lines = cart.map(i => `${i.name} × ${i.qty} = ${i.price * i.qty} ${CURRENCY}`);
  modalSummary.innerHTML = lines.join("<br>") +
    `<div class="summary-total">الإجمالي: ${cartTotal()} ${CURRENCY}</div>`;
}

// ==== إرسال الطلب عبر واتساب ====
checkoutForm.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(checkoutForm);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const address = formData.get("address").trim();
  const notes = formData.get("notes").trim();
  const payment = formData.get("payment");

  let message = `طلب جديد من Nader Pizza\n\n`;
  message += `الاسم: ${name}\n`;
  message += `التليفون: ${phone}\n`;
  message += `العنوان: ${address}\n`;
  if (notes) message += `ملاحظات: ${notes}\n`;
  message += `طريقة الدفع: ${payment}\n\n`;
  message += `تفاصيل الطلب:\n`;
  cart.forEach(item => {
    message += `- ${item.name} × ${item.qty} = ${item.price * item.qty} ${CURRENCY}\n`;
  });
  message += `\nالإجمالي: ${cartTotal()} ${CURRENCY}`;

  const waUrl = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");

  cart = [];
  saveCart();
  renderCart();
  checkoutOverlay.classList.remove("active");
  checkoutForm.reset();
  showToast("تم تجهيز طلبك، أكمل الإرسال عبر واتساب");
});

// ==== نموذج التواصل ====
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  showToast("تم استلام رسالتك، هنتواصل معاك قريبًا");
  contactForm.reset();
});

// ==== Toast ====
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ==== تهيئة أولية ====
renderCart();
