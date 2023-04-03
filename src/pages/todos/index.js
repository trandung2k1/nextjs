import Layout from '@/components/Layout';
import axios from 'axios';
import Card from 'react-bootstrap/card';
import Link from 'next/link';
const Todos = ({ todos }) => {
    return (
        <Layout>
            <h1>Todos</h1>
            {todos.map((todo) => (
                <Card key={todo.id} className="my-3 shadow">
                    <Card.Body>
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.body}</Card.Text>
                        <Link href={`todos/${todo.id}`}>
                            <Card.Title>See more</Card.Title>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100');
    return {
        props: {
            todos: data,
        },
        revalidate: 1,
    };
};

export default Todos;
