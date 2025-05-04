export interface MenuItem {
  name: string;
  price: string;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    name: 'California Roll',
    price: '$12.99',
    image: '/images/california-roll.jpg',
    description: 'Cangrejo, aguacate y pepino'
  },
  {
    name: 'Salmon Nigiri',
    price: '$8.99',
    image: '/images/salmon-nigiri.jpg',
    description: 'Salmón fresco sobre arroz'
  },
  {
    name: 'Combo Especial',
    price: '$24.99',
    image: '/images/combo-especial.jpg',
    description: '6 piezas de nigiri y 8 piezas de roll'
  }
]; 