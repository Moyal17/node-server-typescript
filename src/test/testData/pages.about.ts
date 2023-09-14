import { imageObject, videoObject } from './shared.objects';

const dummyBrands = [
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/01-colored.png',
    sourceId: 'multi-page-site/brands/01-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/02-colored.png',
    sourceId: 'multi-page-site/brands/02-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/03-colored.png',
    sourceId: 'multi-page-site/brands/03-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/04-colored.png',
    sourceId: 'multi-page-site/brands/04-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/05-colored.png',
    sourceId: 'multi-page-site/brands/05-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/06-colored.png',
    sourceId: 'multi-page-site/brands/06-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/04-colored.png',
    sourceId: 'multi-page-site/brands/04-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/05-colored.png',
    sourceId: 'multi-page-site/brands/05-colored.png',
    format: 'image/png',
  },
  {
    link: 'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/brands/06-colored.png',
    sourceId: 'multi-page-site/brands/06-colored.png',
    format: 'image/png',
  },
];

const ourWorkItems = [
  {
    title: 'Building A New Class',
    content:
      'Decade of engineering under his belt, Jeremie is responsible for technical infrastructure and feature development. In Flow, wherever things just work is understanding developing complex systems',
  },
  {
    title: 'Design For Anyone',
    content:
      'Decade of engineering under his belt, Jeremie is responsible for technical infrastructure and feature development. In Flow, wherever things just work is understanding developing complex systems',
  },
  {
    title: 'Creative Flair Design',
    content:
      'Decade of engineering under his belt, Jeremie is responsible for technical infrastructure and feature development. In Flow, wherever things just work is understanding developing complex systems',
  },
  {
    title: 'Building Products',
    content:
      'Decade of engineering under his belt, Jeremie is responsible for technical infrastructure and feature development. In Flow, wherever things just work is understanding developing complex systems',
  },
];

const ourOfficeItems = [
  {
    title: 'NewYork, USA',
    subtitle: '219 Bald Hill Drive Oakland Gardens, NY 11364',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/flags/us.png',
        'multi-page-site/about/flags/us.png',
        'ímage/png',
      ),
    },
  },
  {
    title: 'Australia, Perth',
    subtitle: 'Flat 23 80 Anthony Circlet Port Guiseppe, TAS 2691',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/flags/au.png',
        'multi-page-site/about/flags/au.png',
        'ímage/png',
      ),
    },
  },
  {
    title: 'Berlin, Germany',
    subtitle: 'Jl Raya Dewi Sartika Ged Harapan Masa, Br Germeny',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/flags/germany.png',
        'multi-page-site/about/flags/germany.png',
        'ímage/png',
      ),
    },
  },
  {
    title: 'China, Wohan',
    subtitle: '1hao Wen Ti Huo Dong Zhong Xin 1ceng Jian Xing',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/flags/china.png',
        'multi-page-site/about/flags/china.png',
        'ímage/png',
      ),
    },
  },
];

const ourMembersItems = [
  {
    title: 'Valentin Staykov',
    subtitle: 'Operations',
    template: 'MembersItems',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/team/01.jpg',
        'multi-page-site/about/team/01.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'Bukiakta Bansalo',
    subtitle: 'Product',
    template: 'MembersItems',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/team/02.jpg',
        'multi-page-site/about/team/02.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'Ortrin Okaster',
    subtitle: 'Engineering',
    template: 'MembersItems',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/team/03.jpg',
        'multi-page-site/about/team/03.jpg',
        'ímage/jpg',
      ),
    },
  },
];

const aboutPage = {
  uri: 'about_us',
  title: 'Sensei Project is the best website Solution For You',
  seo: {
    title: 'Sensei Project is the best website Solution For You',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas',
  },
  itemCollection: [
    {
      key: 'about_us',
      title: 'Hello, We’re Sensei Project Here For Your Help',
      subtitle: 'WHO WE ARE',
      content:
        'Your online Health & Fitness companion that offers free assistance on its Facebook Group and provides quality paid guided personal training packages by and through website. We are the first ever, online manifesto in Bangladesh to make place you will select when you think of getting fit',
      order: 0,
      template: 'Banner',
      media: {
        ...imageObject(
          'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/01.jpg',
          'multi-page-site/about/01.jpg',
          'image/jpg',
        ),
      },
    },
    {
      key: 'works',
      title: 'What We Do',
      subtitle: 'OUR WORKS',
      order: 1,
      template: 'Works',
      items: ourWorkItems.map((work, index) => ({
        order: index,
        ...work,
      })),
    },
    {
      key: 'mission',
      title: 'Main Vision And Mission Of Our Company',
      subtitle: 'OUR MISSION',
      content:
        'We were freelance designers and developers, constantly finding ourselve deep vague feedback. leaving a notes from the sticky note piece.',
      order: 2,
      template: 'Mission',
      media: {
        ...imageObject(
          'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/about/02.jpg',
          'multi-page-site/about/02.jpg',
          'image/jpg',
        ),
      },
    },
    {
      key: 'video',
      title: 'You Take Care Of The Payments, We Take Care Of The Rest.',
      subtitle: 'A SHORT VIDEO',
      content:
        'Protect your design vision and leave nothing up to interpretation with interaction recipes. Quickly share and access all your team members interactions by using libraries, ensuring consistcy throughout the.',
      order: 3,
      template: 'Video',
      media: {
        ...videoObject(
          'dyZcRRWiuuw',
          'dyZcRRWiuuw',
          'video/mp4',
          'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/video-popup.jpg',
        ),
      },
    },
    {
      key: 'clients',
      title: 'Trusted By Thousands Companies',
      subtitle: 'OUR CLIENTS',
      order: 1,
      template: 'Brands',
      items: dummyBrands.map((brand, index) => ({
        order: index,
        media: { ...imageObject(brand.link, brand.sourceId, brand.format) },
      })),
    },
    {
      key: 'speciality',
      title: 'our speciality',
      order: 4,
      template: 'Speciality',
      items: ourMembersItems.map((member, index) => ({ ...member, order: index })),
    },
    {
      key: 'ourOffice',
      title: 'Made With Love Of Around The </br> World With Many Offices',
      subtitle: 'OUR OFFICES',
      content:
        'We were freelance designers and developers, constantly finding </br> ourselves deep in vague feedback. This made every client and team',
      order: 5,
      template: 'OurOffice',
      items: ourOfficeItems.map((ourOffice, index) => ({ ...ourOffice, order: index })),
    },
  ],
  isDraft: false,
};

export default aboutPage;
