import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'fresh-cow-milk',
    name: 'Fresh Cow Milk',
    description: 'Pure, fresh cow milk from our healthy, grass-fed cows. Rich in nutrients and completely natural.',
    price: 100,
    image:[
                "/cow4.jpg",
                "/ghee3.webp",
                "/ghee1.jpg",
                "/different.jpg"
            ],

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
    slug: 'a2-cow-ghee-bilona',
    name: ' A2 Cow Ghee Bilona',
    description: ' Hand-churned using wooden bilona for authentic taste.',
    price: 2149,
    image: [
                "/cow2.jpg",
                "/ghee3.webp",
                "/ghee1.jpg",
                "/different.jpg"
            ],
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
  slug: 'organic-red-chilli-powder',
  name: 'Organic Red Chilli Powder',
  description: 'Sun-dried and stone-ground red chillies for a rich, authentic flavor. 100% pure, organic, and chemical-free.',
  price: 349,
  image:  [
                "/chilli2.webp",
                "/chilli.jfif",
                "/chilli3.webp",
                "/chilli1.webp"],
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
  slug: 'organic-turmeric-powder',
  name: 'Organic Turmeric Powder',
  description: 'Sourced from naturally grown turmeric roots and slow-ground to preserve curcumin. Bright color and high potency.',
  price: 299,
  image:  [
                "/Turmeric.jpg",
                "/tu1.webp",
                "/t3.webp",
                "/t2.jpg"
            ],
  category: 'spices',
  benefits: [
    'High in curcumin with anti-inflammatory properties',
    'Boosts immunity and detoxifies the body',
    'Supports joint and skin health',
    'Natural antiseptic and antioxidant',
    'No added colors or chemicals'
  ]
},
  {
    id: '5',
    slug: 'organic-khatar',
    name: 'Organic Khatar',
    description: 'Premium organic khatar made from natural cow dung. Perfect for organic farming and gardening.',
    price: 25,
    image: [
                "/k2.webp",
                "/k3.webp",
                "/k4.webp",
                "/k1.jfif",
            ],
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