export async function fetchGraphQL(
  query: string,
  tag: string[] = ['other'],
): Promise<any> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      next: { tags: tag, revalidate: 24 * 3600 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    },
  );

  return response.json();
}