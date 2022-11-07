export type Image = {
  id: number
  src: string
  name: string
  href: string
}

export const imagesArray: Image[] = [
  {
    id: 1,
    src: '/images/image1.jpg',
    name: 'Tagaytay Midlands',
    href: '/tagaytay-midlands',
  },
  {
    id: 2,
    src: '/images/image2.jpg',
    name: 'The Bellagio',
    href: '/the-bellagio',
  },
  {
    id: 3,
    src: '/images/image3.jpg',
    name: 'RCS Office',
    href: '/rcs-office',
  },
  {
    id: 4,
    src: '/images/image4.jpg',
    name: 'Industrial Penthouse',
    href: '/industrial-penthouse',
  },
]
