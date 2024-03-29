;[
  {
    _id: '5e28393890dd7201a06d4e44',
    name: 'Lukas Rudrof – Funktionales Webdesign, Webflow & SEO',
    imgUrl: '@/assets/img/ominfood.png',
    createdBy: {
      _id: '5e26e0b718a0891d4c995527',
      fullname: 'Lukas Rudrof',
      imgUrl: 'img.jpg',
    },
    usersData: {
      contacts: [
        {
          email: 'user@user.com',
          msg: 'Please send me stuff',
          at: 123,
        },
      ],
      signups: [
        {
          email: 'user@user.com',
          at: 123,
        },
      ],
    },
    theme: 'vivid',
    cmps: [
      {
        id: 'wc02',
        type: 'wap-header',
        classes: [
          'omnifood-header',
          'flex',
          'justify-between',
          'full',
          'main-layout',
        ],
        info: {
          logo: {
            img: 'https://i.ibb.co/sg23sYt/omnifood-logo.png',
            title: '',
            style: {},
          },
          nav: {
            _id: 'wc05',
            type: 'wap-nav',
            classes: ['omnifood-nav'],
            info: {
              links: [
                {
                  title: 'How it works',
                  href: '#how',
                },
                {
                  title: 'Meals',
                  href: '#meals',
                },
                {
                  title: 'Reviews',
                  href: '#reviews',
                },
                {
                  title: 'Pricing',
                  href: '#pricing',
                },
                {
                  title: 'Try for free',
                  href: '#cta',
                },
              ],
            },
            style: {},
          },
        },
        style: {},
      },
      {
        id: 'wc01',
        type: 'wap-hero',
        classes: ['omnifood-hero', 'full', 'main-layout'],
        info: {
          heading: {
            title: 'A healthy meal delivered to your door, every single day',
            style: {},
          },
          subHeading: {
            title:
              'The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.',
            style: {},
          },
          btns: [
            {
              label: 'Start Eating Well!',
              link: '#wc03',
            },
            {
              label: 'Learn more',
              link: '#wc03',
            },
          ],
          imgUrl: 'https://i.ibb.co/fdHvDFX/hero.webp',
        },
        style: {},
      },
      {
        id: 'wc04',
        classes: ['omnifood-brand'],
        type: 'wap-gallery',
        info: {
          title: 'as featured in',
          imgs: [
            'https://i.ibb.co/CWHwXJw/business-insider.png',
            'https://i.ibb.co/KW9hbd7/forbes.png',
            'https://i.ibb.co/wCR7WHY/techcrunch.png',
            'https://i.ibb.co/23ChyNd/the-new-york-times.png',
            'https://i.ibb.co/fQqGqKv/usa-today.png',
          ],
        },
        style: {},
      },
      {
        id: 'wc03',
        type: 'wap-container',
        classes: ['omnifood-meals'],
        info: {
          cmps: [
            {
              id: 'wc04',
              classes: ['omnifood-meal'],
              type: 'wap-card',
              info: {
                num: '',
                imgUrl: 'https://i.ibb.co/MC2ps95/meal-1.jpg',
                heading: 'Japanese Gyozas',
                subHeading: '',
                list: [
                  {
                    icon: '',
                    txt: '650 calories',
                  },
                  {
                    icon: '',
                    txt: 'NutriScore ® 74',
                  },
                  {
                    icon: '',
                    txt: '4.9 rating (537)',
                  },
                ],
              },
              style: {},
            },
            {
              id: 'wc04',
              classes: ['omnifood-meal'],
              type: 'wap-card',
              info: {
                num: '',
                imgUrl: 'https://i.ibb.co/DC457TG/meal-2.jpg',
                heading: 'Avocado Salad',
                subHeading: '',
                list: [
                  {
                    icon: '',
                    txt: '400 calories',
                  },
                  {
                    icon: '',
                    txt: 'NutriScore ® 92',
                  },
                  {
                    icon: '',
                    txt: '4.9 rating (441)',
                  },
                ],
              },
            },
            {
              id: 'wc04',
              classes: ['omnifood-meal-list'],
              type: 'wap-list',
              info: {
                heading: 'Works with any diet',
                listIcon: '',
                list: [
                  'Vegeterian',
                  'Vegan',
                  'Pescatarian',
                  'Gluten-free',
                  'Lactose-free',
                  'Keto',
                  'Paleo',
                  'Low FODMAP',
                  'Kid-friendly',
                ],
                link: '',
              },
              style: {},
            },
          ],
        },
      },
      {
        id: 'wc05',
        classes: ['omnifood-txt'],
        type: 'wap-text',
        info: {
          heading: "Once you try it, you can't go back",
          subHeading: 'TESTIMONIALS',
        },
      },
      {
        id: 'wc06',
        classes: ['omnifood-reviews'],
        type: 'wap-container',
        info: {
          cmps: [
            {
              id: 'wc08',
              classes: ['omnifood-review'],
              type: 'wap-review',
              info: {
                imgUrl: 'https://i.ibb.co/LZKrsN9/steve.jpg',
                text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
                author: '— Dave Bryson',
              },
            },
            {
              id: 'wc015',
              classes: ['omnifood-review'],
              type: 'wap-review',
              info: {
                imgUrl: 'https://i.ibb.co/YtHtPDY/ben.jpg',
                text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
                author: '— Ben Hadley',
              },
            },
            {
              id: 'wc017',
              classes: ['omnifood-review'],
              type: 'wap-review',
              info: {
                imgUrl: 'https://i.ibb.co/jyR6djG/dave.jpg',
                text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
                author: '— Steve Miller',
              },
            },
            {
              id: 'wc018',
              classes: ['omnifood-review'],
              type: 'wap-review',
              info: {
                imgUrl: 'https://i.ibb.co/FBVNq7c/hannah.jpg',
                text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
                author: '— Hannah Smith',
              },
            },
          ],
        },
        style: {
          backgroundColor: '#fdf2e9',
        },
      },
      {
        id: 'wc07845',
        classes: ['omnifood-gallery'],
        type: 'wap-gallery',
        info: {
          title: '',
          imgs: [
            'https://i.ibb.co/k5FgxFB/gallery-1.jpg',
            'https://i.ibb.co/gjkYPbW/gallery-2.jpg',
            'https://i.ibb.co/3ybXV5f/gallery-3.jpg',
            'https://i.ibb.co/YQ36XsS/gallery-4.jpg',
            'https://i.ibb.co/3r8ZjX1/gallery-5.jpg',
            'https://i.ibb.co/WVjvs5f/gallery-6.jpg',
            'https://i.ibb.co/9rbqDdp/gallery-7.jpg',
            'https://i.ibb.co/DR2n2fF/gallery-8.jpg',
            'https://i.ibb.co/M8sF393/gallery-9.jpg',
            'https://i.ibb.co/SvF3V2g/gallery-10.jpg',
            'https://i.ibb.co/gDFgz4V/gallery-11.jpg',
            'https://i.ibb.co/JcqB8xv/gallery-12.jpg',
          ],
        },
        style: {},
      },
      {
        id: 'wc05',
        classes: ['omnifood-txt'],
        type: 'wap-text',
        info: {
          heading: 'pricing',
          subHeading: 'Eating well without breaking the bank',
        },
      },
      {
        id: 'wc0789',
        type: 'wap-container',
        classes: ['omnifood-pricing'],
        info: {
          cmps: [
            {
              id: 'wc695',
              classes: ['omnifood-pricing-starter'],
              type: 'wap-card',
              info: {
                heading: 'starter',
                subHeading: "per month. That's just 13$ per meal!",
                price: 399,
                list: [
                  {
                    icon: '',
                    txt: '1 meal per day',
                  },
                  {
                    icon: '',
                    txt: 'Order from 11am to 9pm',
                  },
                  {
                    icon: '',
                    txt: 'Delivery is free',
                  },
                ],
                btn: {
                  label: 'Start Eating Well!',
                  link: '#wc03',
                },
              },
            },
            {
              id: 'wc6956',
              classes: ['omnifood-pricing-complete'],
              type: 'wap-card',
              info: {
                heading: 'complete',
                subHeading: "per month. That's just 11$ per meal!",
                price: 649,
                list: [
                  {
                    icon: '',
                    txt: '2 meals per day',
                  },
                  {
                    icon: '',
                    txt: 'Order 24/7',
                  },
                  {
                    icon: '',
                    txt: 'Delivery is free',
                  },
                  {
                    icon: '',
                    txt: 'Get access to latest recipes',
                  },
                ],
                btn: {
                  label: 'Start Eating Well!',
                  link: '#wc03',
                },
              },
            },
          ],
        },
        style: {},
      },
      {
        id: 'sc5878',
        classes: [],
        type: 'wap-conatiner',
        info: {
          cmps: [
            {
              id: 'wc019',
              classes: [],
              type: 'wap-imgs',
              imgs: ['woman.jpg'],
            },
            {
              id: 'wc6258',
              classes: [],
              type: 'wap-form',
              info: {
                heading: 'Get your first meal for free!',
                subHeading:
                  'Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!',
              },
            },
          ],
        },
      },
      {
        id: 'sc5999',
        classes: ['omnifood-footer'],
        type: 'wap-footer',
        info: {
          logo: {
            img: 'https://i.ibb.co/sg23sYt/omnifood-logo.png',
            title: '',
            style: {},
          },
          row1: {
            title: 'Contact us',
            texts: [
              '623 Harrison St., 2nd Floor, San Francisco, CA 94107',
              'info@mysite.com Tel: 123-456-7890info@mysite.com Tel: 123-456-7890',
            ],
          },
          row2: {
            title: 'Account',
            texts: ['Create account', 'Sign in', 'iOS app', 'Android app'],
          },
          copyright: 'copyright © 2022 by Omnifood, Inc. All rights reserved.',
        },
      },
    ],
    isPublic: true,
  },
]
