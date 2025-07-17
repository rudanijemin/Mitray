import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Cow Milk',
    description: 'Pure, fresh cow milk from our healthy, grass-fed cows. Rich in nutrients and completely natural.',
    price: 100,
    image: '/cow4.jpg',
    category: 'milk',
    benefits: [
      'Rich in calcium and protein',
      'No artificial additives',
      'From grass-fed cows',
      'Daily fresh supply',
      'Natural and pure'
    ]
  },
  {
    id: '2',
    name: ' A2 Cow Ghee Bilona',
    description: ' Hand-churned using wooden bilona for authentic taste.',
    price: 2149,
    image: '/cow2.jpg',
    category: 'ghee',
    benefits: [
      'Made using traditional Bilona method',
      'Rich in vitamins A, D, E, K',
      'Improves digestion',
      'Boosts immunity',
      'Hand-churned in wooden bilona'
    ]
  },
  {
  id: '3',
  name: 'Organic Red Chilli Powder',
  description: 'Sun-dried and stone-ground red chillies for a rich, authentic flavor. 100% pure, organic, and chemical-free.',
  price: 349,
  image: '/chilli.jfif',
  category: 'spices',
  benefits: [
    'Enhances flavor with natural spice',
    'Rich in antioxidants like capsaicin',
    'Aids metabolism and fat loss',
    'Improves digestion',
    'Free from synthetic color and preservatives'
  ]
},
{
  id: '4',
  name: 'Organic Turmeric Powder',
  description: 'Sourced from naturally grown turmeric roots and slow-ground to preserve curcumin. Bright color and high potency.',
  price: 299,
  image: '/Turmeric.jpg',
  category: 'spices',
  benefits: [
    'High in curcumin with anti-inflammatory properties',
    'Boosts immunity and detoxifies the body',
    'Supports joint and skin health',
    'Natural antiseptic and antioxidant',
    'No added colors or chemicals'
  ]
},
  // {
  //   id: '3',
  //   name: 'Cow A2 Ghee',
  //   description: 'Pure A2 cow ghee made from indigenous desi cows. Rich in nutrients and easier to digest than regular ghee.',
  //   price: 1500,
  //   image: '/cow4.jpg',
  //   category: 'ghee',
  //   benefits: [
  //     'Made from A2 milk only',
  //     'From indigenous desi cows',
  //     'Easier to digest',
  //     'Rich in beta-carotene',
  //     'Traditional preparation method'
  //   ]
  // },
  // {
  //   id: '4',
  //   name: 'Premium Bilona Ghee',
  //   description: 'Our finest quality Bilona ghee made from the milk of grass-fed cows. Slow-cooked to perfection for rich aroma and taste.',
  //   price: 1800,
  //   image: '/cow4.jpg',
  //   category: 'ghee',
  //   benefits: [
  //     'Premium quality Bilona method',
  //     'From grass-fed cows only',
  //     'Slow-cooked for rich aroma',
  //     'Golden yellow color',
  //     'Traditional wooden churning'
  //   ]
  // },
  {
    id: '5',
    name: 'Organic Khatar',
    description: 'Premium organic khatar made from natural cow dung. Perfect for organic farming and gardening.',
    price: 25,
    image: '/k1.jfif',
    category: 'fertilizer',
    benefits: [
      '100% organic and natural',
      'Rich in nutrients for plants',
      'Improves soil health',
      'Environmentally friendly',
      'Chemical-free'
    ]
  }
];