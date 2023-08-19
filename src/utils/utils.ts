import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SECRET as string,
  accessToken: process.env.CONTENTFUL_TOKEN as string,
});

// Retrieve the list of blog posts from Contentful
const getEntries = async () => {
  const response = await client.getEntries({
    content_type: 'eshkonTask',
  });

  return response.items;
};

export default getEntries;
