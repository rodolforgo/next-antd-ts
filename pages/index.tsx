import { Button, Space, DatePicker } from 'antd';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

export const Home = ({ posts }: Props) => {
  const onChange = () => { };
  return (
    <div style={{ padding: 100 }}>
      <Space direction="vertical">

        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />

        <h1>Blog</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}><a href={`blog-ssg/${post.id}`}>{post.title}</a></li>
                ))};
            </ul>

      </Space>
    </div>
  );
}

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  return {
    props: {
      posts
    },
    revalidate: 7200 
  };
};