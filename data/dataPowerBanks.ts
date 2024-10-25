// import { Product } from '../types/product';

// export const powerBanks: Product[] = [
//     {
//         id: 1,
//         name: 'Baseus Power Bank 100W 20000mAh',
//         image: "https://www.baseus.com/cdn/shop/products/Baseus_Blade_Laptop_Power_Bank_100W_20000mAh_1_front_side_1000x.jpg?v=1699274864",
//         price: 99.99,
//         url: "https://www.baseus.com/products/blade-laptop-power-bank-100w-20000mah",
//         category: 'powerbanks',
//         description: 'O Baseus Power Bank 100W de 20000mAh é ideal para carregar dispositivos de alta potência, incluindo laptops. Com sua enorme capacidade e design fino, oferece carregamento rápido para manter seus dispositivos ligados por mais tempo.'
//     },
//     {
//         id: 2,
//         name: 'Baseus Power Bank 100W 20000mAh',
//         image: "https://www.baseus.com/cdn/shop/files/PPBL000301_Baseus_Blade_HD_Laptop_Power_Bank_100W_20000mAh_1_1000x.jpg?v=1686825853",
//         price: 99.99,
//         url: "https://www.baseus.com/products/blade-hd-laptop-power-bank-100w-20000mah",
//         category: 'powerbanks',
//         description: 'Com o Baseus Power Bank 100W 20000mAh, você terá energia de sobra para carregar vários dispositivos ao mesmo tempo. Seu design sofisticado e tela HD tornam o uso prático e funcional.'
//     },
//     {
//         id: 3,
//         name: 'Baseus Blade 2Power Bank 65W 12000mAh',
//         image: "https://www.baseus.com/cdn/shop/files/Baseus_Blade2_Smart_Power_Bank_65W_12000mAh_Blue_1_1000x.jpg?v=1721977688",
//         price: 79.99,
//         url: "https://www.baseus.com/products/blade2-smart-power-bank-65w-12000mah",
//         category: 'powerbanks',
//         description: 'Compacto, mas poderoso, o Baseus Blade 2 Power Bank 65W de 12000mAh oferece carregamento rápido e eficiente, ideal para manter seus dispositivos ligados durante viagens ou longos dias de trabalho.'
//     },
//     {
//         id: 4,
//         name: 'Baseus Adaman Power Bank 65W 20000mAh',
//         image: "https://www.baseus.com/cdn/shop/products/Baseus_Adaman_Power_Bank_65W_20000mAh_Blue_1_front_side_1000x.jpg?v=1668673099",
//         price: 59.99,
//         url: "https://www.baseus.com/products/adaman-power-bank-65w-20000mah",
//         category: 'powerbanks',
//         description: 'O Baseus Adaman Power Bank de 65W e 20000mAh oferece um excelente equilíbrio entre capacidade e portabilidade, permitindo carregamento rápido para smartphones e tablets com design elegante e resistente.'
//     },
//     {
//         id: 5,
//         name: 'Baseus Magnetic Power Bank 20W 10000mAh',
//         image: "https://www.baseus.com/cdn/shop/products/Baseus_Magnetic_Foldable_Power_Bank_20W_10000mAh_1_magnetic_1000x.jpg?v=1699610639",
//         price: 49.99,
//         url: "https://www.baseus.com/products/magnetic-foldable-power-bank-20w-10000mah",
//         category: 'powerbanks',
//         description: 'O Baseus Magnetic Power Bank de 20W e 10000mAh oferece praticidade com seu design dobrável e sistema magnético, perfeito para carregar seu celular sem necessidade de cabos extras.'
//     },
//     {
//         id: 6,
//         name: 'Baseus Magnetic Power Bank 30W 10000mAh',
//         image: "https://www.baseus.com/cdn/shop/files/Baseus_Magnetic_Power_Bank_30W_10000mAh_With_Built-in_USB-C_Cable_White_1_1000x.jpg?v=1694425792",
//         price: 45.99,
//         url: "https://www.baseus.com/products/magnetic-power-bank-10000mah-30w-with-built-in-usb-c-cable",
//         category: 'powerbanks',
//         description: 'Equipado com cabo USB-C embutido, o Baseus Magnetic Power Bank 30W 10000mAh oferece carregamento rápido e seguro, mantendo a organização e eficiência durante o uso.'
//     },
//     {
//         id: 7,
//         name: 'Baseus Magnetic Mini Power Bank 20000mAh 20W',
//         image: "https://www.baseus.com/cdn/shop/files/Baseus_Magnetic_Mini_Power_Bank_20000mAh_20W_Black_1_1000x.jpg?v=1685516847",
//         price: 68.99,
//         url: "https://www.baseus.com/products/magnetic-mini-power-bank-20000mah-20w",
//         category: 'powerbanks',
//         description: 'Com seu design compacto e grande capacidade, o Baseus Magnetic Mini Power Bank 20W 20000mAh é perfeito para usuários que precisam de carga adicional sem comprometer a portabilidade.'
//     },
//     {
//         id: 8,
//         name: 'Baseus Adaman Power Bank 140W 24000mAh',
//         image: "https://www.baseus.com/cdn/shop/files/Baseus_Adaman_Power_Bank_140W_24000mAh_1_1000x.jpg?v=1700722311",
//         price: 79.99,
//         url: "https://www.baseus.com/products/adaman-laptop-power-bank-140w-24000mah",
//         category: 'powerbanks',
//         description: 'Com uma incrível potência de 140W e 24000mAh, o Baseus Adaman Power Bank é a escolha ideal para usuários que precisam de energia para laptops e outros dispositivos de alta demanda.'
//     },
//     {
//         id: 9,
//         name: 'Baseus Elf Power Bank 65W 20000mAh',
//         image: "https://www.baseus.com/cdn/shop/products/Baseus_Elf_Power_Bank_65W_20000mAh_1_front_side_1000x.jpg?v=1667903937",
//         price: 79.99,
//         url: "https://www.baseus.com/products/elf-power-bank-65w-20000mah",
//         category: 'powerbanks',
//         description: 'O Baseus Elf Power Bank de 65W e 20000mAh oferece uma solução de carregamento rápida e eficiente, ideal para usuários que necessitam manter seus dispositivos carregados durante viagens ou no dia a dia.'
//     },
//     {
//         id: 10,
//         name: 'Baseus Magnetic Power Bank 20W 5000mAh',
//         image: "https://www.baseus.com/cdn/shop/files/Baseus_MagPro_Magnetic_Power_Bank_20W_5000mAh_Black_01_1000x.jpg?v=1708409179",
//         price: 39.99,
//         url: "https://www.baseus.com/products/magpro-magnetic-power-bank-20w-5000mah",
//         category: 'powerbanks',
//         description: 'Compacto e fácil de usar, o Baseus Magnetic Power Bank 20W 5000mAh é ideal para carregar seu dispositivo em qualquer lugar, com conexão magnética para uso rápido e prático.'
//     }
    




    
// ];






