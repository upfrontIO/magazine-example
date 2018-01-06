const contentExtractor = require('./content_extractor')

module.exports = {
  'embed-teaser': {
    layouts: {
      'author-embed': {
        template: 'embed-teaser-author-template',
        contentSpec: {
          link: contentExtractor.link,
          link2: contentExtractor.link,
          text: contentExtractor.description,
          image: contentExtractor.image({crop: '16:9'})
        }
      },
      'sidebar-embed': {
        template: 'embed-teaser-sidebar-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          flag: contentExtractor.flag,
          author: contentExtractor.author,
          date: contentExtractor.publishDate
        }
      },
      hero: {
        template: 'teaser-hero-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          flag: contentExtractor.flag,
          text: contentExtractor.description,
          author: contentExtractor.author,
          date: contentExtractor.publishDate,
          image: contentExtractor.image({crop: '16:9'})
        }
      },
      card: {
        template: 'teaser-card-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          link2: contentExtractor.link,
          flag: contentExtractor.flag,
          text: contentExtractor.description,
          author: contentExtractor.author,
          date: contentExtractor.publishDate,
          image: contentExtractor.image({crop: '16:9'})
        }
      },
      'card-no-image': {
        template: 'teaser-card-no-image-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          flag: contentExtractor.flag,
          text: contentExtractor.description,
          author: contentExtractor.author,
          date: contentExtractor.publishDate
        }
      },
      numbered: {
        template: 'teaser-card-numbered-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          flag: contentExtractor.flag,
          author: contentExtractor.author,
          date: contentExtractor.publishDate
        }
      },
      'card-author': {
        template: 'teaser-card-author-template',
        contentSpec: {
          title: contentExtractor.title,
          link: contentExtractor.link,
          link2: contentExtractor.link,
          text: contentExtractor.description,
          image: contentExtractor.image({crop: '16:9'})
        },
        contentEnrichments: [
          require('./enrichments/author_teaser')
        ]
      },
      gallery: {
        template: 'teaser-gallery-template',
        contentSpec: {
          title: contentExtractor.title,
          image: contentExtractor.image({crop: '16:9'})
        },
        contentEnrichments: [
          require('./enrichments/gallery_teaser')
        ]
      },
      'gallery-hero': {
        template: 'teaser-gallery-hero-template',
        contentSpec: {
          title: contentExtractor.title,
          text: contentExtractor.description,
          image: contentExtractor.image({crop: '16:9'})
        },
        contentEnrichments: [
          require('./enrichments/gallery_teaser')
        ]
      },
      video: {
        template: 'teaser-video-template',
        contentSpec: {
          title: contentExtractor.title,
          image: contentExtractor.image({crop: '16:9'})
        },
        contentEnrichments: [
          require('./enrichments/video_teaser')
        ]
      },
      'video-hero': {
        template: 'teaser-video-hero-template',
        contentSpec: {
          title: contentExtractor.title,
          text: contentExtractor.description,
          image: contentExtractor.image({crop: '16:9'})
        },
        contentEnrichments: [
          require('./enrichments/video_teaser')
        ]
      }
    }
  }
}
