export const calculateReadingTime = (htmlContent: string): number => {
  // Remove HTML tags
  const textContent = htmlContent.replace(/<[^>]*>/g, '');
  const wpm = 265; // average word per minute reading;
  const wordCount = textContent.split(/\s+/).filter((word) => word.length > 0).length;
  return Math.ceil(wordCount / wpm);
};
