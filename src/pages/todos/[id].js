import Layout from '@/components/Layout';
import axios from 'axios';
import Card from 'react-bootstrap/card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from 'next/router';
import spinnerStyles from '../../styles/Spinner.module.css';
const TodoItem = ({ todo }) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <Spinner
                animation="border"
                role="status"
                variant="dark"
                className={spinnerStyles.spinnerLg}
            >
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }
    return (
        <Layout>
            <Card className="my-3 shadow">
                <Card.Body>
                    <Card.Title>{todo?.title}</Card.Title>
                    {/* <Card.Text>{todo.body}</Card.Text> */}
                    <Link href="/todos">
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    );
};
export const getStaticPaths = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
    const paths = data.map((todo) => ({
        params: {
            id: `${todo.id}`,
        },
    }));
    console.log(paths);
    // const paths = data.map((todo) => `/todos/${todo.id}`);
    //console.log(paths); //[ '/todos/1', '/todos/2', '/todos/3' ]
    return {
        paths: paths,
        fallback: true,
    };
};
export const getStaticProps = async ({ params }) => {
    console.log('getStaticProps', params);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    return {
        props: {
            todo: res.data,
        },
    };
};
export default TodoItem;
