import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function BlogPost() {
  const { query } = useRouter();
  const { slug } = query;

  // Demo placeholder content
  const mockContent = `
  # ${slug?.replaceAll('-', ' ')}

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl a urna pellentesque, 
  at lobortis augue commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  `;

  return (
    <Layout title={`Blog: ${slug || 'Loading...'}`}>
      <section className="max-w-3xl mx-auto px-4 py-10 text-gray-100">
        {slug ? (
          <article className="prose prose-invert">
            <div dangerouslySetInnerHTML={{ __html: mockContent }} />
          </article>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </Layout>
  );
}
