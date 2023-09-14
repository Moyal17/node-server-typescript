const domainPath = /https?:\/\/([^\/]+)\/(.+)/; // domain + path
const domainPathExt = /https?:\/\/([^\/]+)\/(.+)\.(\w+)/; // domain + path + ext

/**
 example: "https://test-bucket-node-1.s3.eu-central-1.amazonaws.com/test/1694700974850_test_image.jpeg";
 domain: https://test-bucket-node-1.s3.eu-central-1.amazonaws.com,
 path: test/1694700974850_test_image.jpeg,
 */
export const getDomainPathFromUrl = (url: string) => {
  const match = url.match(domainPath);
  if (match) {
    return {
      domain: match[1],
      path: match[2],
    };
  } else {
    console.log('No match found.');
    return null;
  }
};

/**
 example: "https://test-bucket-node-1.s3.eu-central-1.amazonaws.com/test/1694700974850_test_image.jpeg";
 domain: https://test-bucket-node-1.s3.eu-central-1.amazonaws.com,
 path: test/1694700974850_test_image.jpeg,
 extension: jpeg
 */
export const getDomainPathExtFromUrl = (url: string) => {
  const match = url.match(domainPathExt);
  if (match) {
    return {
      domain: match[1],
      path: `${match[2]}.${match[3]}`,
      extension: match[3],
    };
  } else {
    console.log('No match found.');
    return null;
  }
};
