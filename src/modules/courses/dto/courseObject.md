
## Course Document Model

```javascript
const course = {
  uri: "mastering-python-programming",
  title: "Mastering Python Programming",
  subtitle: "A complete guide to Python programming for beginners and professionals.",
  content: "",
  template: "CourseCard",
  order: 1,
  duration: 1200, // in seconds (20:00)
  category: [{uri: 'programming', title: 'Programming' }],
  itemCollection: [], // instructor card
  thumbnail: "https://example.com/path/to/thumbnail.jpg",
  source: "https://example.com/path/to/video.mp4",
  price: 59.90,
  currency: "ILS",
  rating: 9.8,
  numberOfRatings: 345,
  isBestSeller: true,
  isDraft: false,
  isRemoved: false,
  publishedAt: "2023-09-11",
  updatedAt: "2023-09-11",
  createdAt: "2023-09-10",
  sections:  [
    {
      sectionId: "1",
      title: "Introduction",
      duration: 3600,    // 60 minutes in seconds
      lectures: [
        {
          lectureId: "1.1",
          title: "What is Python?",
          type: "video",
          duration: 900, // "15 minutes",
          thumbnail: "https://example.com/path/to/video1.jpg",
          source: "https://example.com/path/to/video1.mp4"
        },
        {
          lectureId: "1.2",
          title: "Python's Popularity",
          type: "article",
          duration: 1200, // "20 minutes",
          thumbnail: "https://example.com/path/to/article1.jpg"
        }
        // ... other lectures
      ]
    }
    // ... other sections
  ],
}

```
