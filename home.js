const drawerBg = document.getElementById('drawer-bg');
const drawer = document.getElementById('drawer');
const drawerBtn = document.getElementById('drawer-btn');
const closeIcon = document.getElementById('close');
drawerBtn.addEventListener('click', () => {
  drawerBg.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
  }, 10);
});
drawerBg.addEventListener('click', (e) => {
  if (e.target === drawerBg) {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => {
      drawerBg.classList.add('hidden');
    }, 300);
  }
});
closeIcon.addEventListener('click', (e) => {
  if (e.target === closeIcon) {
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => {
      drawerBg.classList.add('hidden');
    }, 300);
  }
});

const cart1 = document.getElementById('shopCart');
const cart2 = document.getElementById('shopCart2');
const closeCart1 = document.getElementById('closeShopCart');
const closeCart2 = document.getElementById('closeShopCart2');

closeCart1.addEventListener('click', () => {
  cart1.style.display = 'none';
});
closeCart2.addEventListener('click', () => {
  cart2.style.display = 'none';
});

const modalBtn = document.getElementById('openModal');
const modalBox = document.getElementById('modalBg');
const closeBtn = document.getElementById('closeModal');
const closeBtn2 = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const subcribe = document.getElementById('subcribe');
modalBtn.addEventListener('click', () => {
  modalBox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    modal.classList.remove('translate-y-full');
    modal.classList.add('translate-y-0');
  }, 10);
});
closeBtn.addEventListener('click', () => {
  modalBox.style.display = 'none';
  document.body.style.overflow = '';
});
modalBox.addEventListener('click', (e) => {
  if (e.target === modalBox) {
    modalBox.style.display = 'none';
    document.body.style.overflow = '';
  }
});
closeBtn2.addEventListener('click', () => {
  modalBox.style.display = 'none';
  document.body.style.overflow = '';
});
subcribe.addEventListener('click', () => {
  modalBox.style.display = 'none';
  document.body.style.overflow = '';
});
