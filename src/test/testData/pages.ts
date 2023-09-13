import { mediaObject } from './medias';
import { mediaTypes, sourceTypes } from '../../modules/media/dto';

const imageObject = (link: string, sourceId: string, format: string) => ({
  order: 0,
  media: {
    ...mediaObject,
    sourceOrigin: link,
    source: link,
    sourceId: sourceId,
    format: format,
  },
});
const videoObject = (link: string, sourceId: string, format: string, thumbnail: string) => ({
  order: 0,
  media: {
    ...mediaObject,
    type: mediaTypes.video,
    sourceType: sourceTypes.youtube,
    sourceOrigin: link,
    source: link,
    sourceId: sourceId,
    thumbnail: thumbnail,
    format: format,
  },
});

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

const featureItems = [
  {
    title: 'Updated Security',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'lock', // https://feathericons.com/
    order: 0,
  },
  {
    title: 'Magnetic Turning',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'wind',
    order: 1,
  },
  {
    title: 'Secured & up-to-date',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'shield',
    order: 2,
  },
  {
    title: 'Instant Link Sharing',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'link',
    order: 3,
  },
  {
    title: 'Updated Security',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'lock',
    order: 4,
  },
  {
    title: 'Magnetic Turning',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque enim id diam ornare volutpat in sagitis, aliquet. Arcu cursus',
    template: 'FeatureItem',
    icon: 'wind',
    order: 5,
  },
];

const specialityItems = [
  {
    title: 'You Will Not Miss Your All Misunderstandings',
    subtitle: 'PRIMARY SPECIALITY',
    content:
      'Protect your design vision and leave nothing up to interpretation with interaction recipes. Quickly share and access all your team members interactions by using libraries, ensuring consistency throughout the.',
    template: 'SpecialityItem',
    order: 0,
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/features-01.png',
        'multi-page-site/features-01.png',
        'ímage/png',
      ),
    },
  },
  {
    title: 'Say Hello To No-Code The Advance Creation',
    subtitle: 'SECONDARY SPECIALITY',
    content:
      'From the simplest of interactions to those that use Excel-gradeing formulas, ProtoPie can handle them all. Make mind-blowing of New interactions everyday without ever having to write any new code.',
    template: 'SpecialityItem',
    order: 1,
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/features-02.png',
        'multi-page-site/features-02.png',
        'ímage/png',
      ),
    },
  },
];

const testimonialItems = [
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/01.jpg',
        'multi-page-site/user-img/01.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/02.jpg',
        'multi-page-site/user-img/02.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/03.jpg',
        'multi-page-site/user-img/03.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/04.jpg',
        'multi-page-site/user-img/04.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/05.jpg',
        'multi-page-site/user-img/05.jpg',
        'ímage/jpg',
      ),
    },
  },
  {
    title: 'David Cameron',
    subtitle: 'CEO, Nexuspay',
    content:
      'Lorem ipsum dolor amet, conseetur adipiscing elit. Ornare quam porta arcu congue felis volutpat. Vitae lectudbfs pellentesque vitae dolor',
    template: 'TestimonialItem',
    media: {
      ...imageObject(
        'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/user-img/06.jpg',
        'multi-page-site/user-img/06.jpg',
        'ímage/jpg',
      ),
    },
  },
];

const HomePage = {
  uri: '/',
  title: 'Sensei Project is the best website Solution For You',
  seo: {
    title: 'Sensei Project is the best website Solution For You',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas',
  },
  itemCollection: [
    {
      key: 'banner',
      title: 'Sensei Project is the best website<br/>Solution For You',
      order: 0,
      template: 'Banner',
      link: {
        label: 'Get Premium Version',
        href: '#',
      },
      media: {
        ...imageObject(
          'https://github-assets-site.s3.eu-central-1.amazonaws.com/multi-page-site/banner-app.png',
          'multi-page-site/banner-app.png',
          'image/png',
        ),
      },
    },
    {
      key: 'brands',
      title: 'Brands',
      order: 1,
      template: 'Brands',
      items: dummyBrands.map((brand, index) => ({
        order: index,
        media: { ...imageObject(brand.link, brand.sourceId, brand.format) },
      })),
    },
    {
      key: 'features',
      title: 'Elements To <br/> Get You Started',
      subtitle: 'SPECIAL FEATURES',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas <br/> Werat viverra id et aliquet. vulputate egestas sollicitudin.',
      order: 2,
      template: 'Features',
      items: featureItems.map((feature) => ({ ...feature })),
    },
    {
      key: 'intro',
      title: 'Built Exclusively For You',
      subtitle: 'SHORT INTRO VIDEO',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas <br/> Werat viverra id et aliquet. vulputate egestas sollicitudin.',
      order: 3,
      template: 'Intro',
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
      key: 'speciality',
      title: 'our speciality',
      order: 4,
      template: 'Speciality',
      items: specialityItems.map((speciality) => ({ ...speciality })),
    },
    {
      key: 'testimonial',
      title: 'OUR TESTIMONIALS',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas <br/> Werat viverra id et aliquet. vulputate egestas sollicitudin.',
      order: 5,
      template: 'Testimonial',
      items: testimonialItems.map((testimonial, index) => ({ ...testimonial, order: index })),
    },
  ],
  isDraft: false,
};

export default HomePage;
