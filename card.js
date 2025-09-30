const parent = document.getElementById('prodact-home');

const cards = [
  {
    id: 1,
    img: './assets/img/apple-1.svg',
    name: 'Green Apple',
    price: '$14.99',
    oldPrice: '$20.99',
  },
  {
    id: 2,
    img: './assets/img/apple-1.svg',
    name: 'Red Apple',
    price: '$12.50',
    oldPrice: '$18.50',
  },
  {
    id: 3,
    img: './assets/img/apple-1.svg',
    name: 'Yellow Apple',
    price: '$10.00',
    oldPrice: '$15.00',
  },
  {
    id: 4,
    img: './assets/img/apple-1.svg',
    name: 'Sweet Apple',
    price: '$16.20',
    oldPrice: '$21.00',
  },
  {
    id: 5,
    img: './assets/img/apple-1.svg',
    name: 'Fresh Apple',
    price: '$13.40',
    oldPrice: '$19.00',
  },
  {
    id: 6,
    img: './assets/img/apple-1.svg',
    name: 'Green Apple',
    price: '$14.99',
    oldPrice: '$20.99',
  },
  {
    id: 7,
    img: './assets/img/apple-1.svg',
    name: 'Red Apple',
    price: '$12.50',
    oldPrice: '$18.50',
  },
  {
    id: 8,
    img: './assets/img/apple-1.svg',
    name: 'Yellow Apple',
    price: '$10.00',
    oldPrice: '$15.00',
  },
  {
    id: 9,
    img: './assets/img/apple-1.svg',
    name: 'Sweet Apple',
    price: '$16.20',
    oldPrice: '$21.00',
  },
  {
    id: 10,
    img: './assets/img/apple-1.svg',
    name: 'Fresh Apple',
    price: '$13.40',
    oldPrice: '$19.00',
  },
];
cards.map((prod) => {
  const card = document.createElement('div');
  card.className =
    'w-[264px] h-[327px] border border-white group hover:border hover:border-green-600 duration-300 transition-colors ease-in-out';
  const imgWrap = document.createElement('div');
  imgWrap.className = 'w-[264px] h-[240px] relative';
  imgWrap.style.backgroundImage = `url(${prod.img})`;
  const sale = document.createElement('div');
  sale.className =
    'w-[80px] h-[27px] bg-red-500 rounded-[4px] absolute top-[16px] left-[16px] flex items-center justify-center';
  sale.innerHTML = `<p class="text-white text-[14px] font-[500]">Sale 50%</p>`;
  const heart = document.createElement('div');
  heart.className =
    'w-[40px] h-[40px] items-center justify-center absolute top-[16px] left-[208px] bg-white rounded-[50%] hidden group-hover:flex transition-all duration-300';
  heart.innerHTML = `<img class="w-[20px]" src="./assets/icon/Heart.svg" alt=""/>`;
  const eye = document.createElement('div');
  eye.className =
    'w-[40px] h-[40px] justify-center items-center absolute top-[62px] left-[208px] bg-white rounded-[50%] hidden group-hover:flex transition-all duration-300';
  eye.innerHTML = `<img class="w-[20px]" src="./assets/icon/Eye 1.svg" alt=""/>`;
  imgWrap.append(sale, heart, eye);
  const info = document.createElement('div');
  info.className =
    'w-[264px] h-[87px] group flex items-center justify-center gap-[90px]';
  const textBox = document.createElement('div');
  textBox.innerHTML = `
        <p class="text-[14px] font-[400] text-[rgba(77,77,77,1)]">${prod.name}</p>
        <h3 class="text-[16px] font-[500] text-[rgba(26,26,26,1)]">
          ${prod.price}
          <span class="text-[16px] font-normal text-[rgba(153,153,153,1)] line-through">${prod.oldPrice}</span>
        </h3>
        <img class="mt-[3px]" src="./assets/icon/Rating.svg" alt=""/>
      `;
  const bagBtn = document.createElement('div');
  bagBtn.className =
    'w-[40px] h-[40px] rounded-[50%] flex justify-center items-center group-hover:bg-green-500 duration-300 transition-colors ease-in-out';
  bagBtn.innerHTML = `<img src="./assets/icon/Bag.svg" alt=""/>`;

  info.append(textBox, bagBtn);

  card.append(imgWrap, info);
  parent.append(card);
});
