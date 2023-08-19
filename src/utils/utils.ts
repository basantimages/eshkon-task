import { createClient } from 'contentful';
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET,
};

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
