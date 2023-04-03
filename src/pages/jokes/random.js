import Layout from '@/components/Layout';
import Card from 'react-bootstrap/card';
import Link from 'next/link';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const Random = ({ joke }) => {
    return (
        <Layout>
            <Card className="my-3 shadow">
                <Card.Body>
                    <Card.Title>{`Here's your random joke for today`}</Card.Title>
                    <Card.Text>{joke.value}</Card.Text>
                    <Link href="/">
                        <Button variant="dark">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    );
};
export const getServerSideProps = async () => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    let joke = res.data;
    // joke = false;
    if (!joke) {
        return {
            notFound: true,
        };
        // return {
        //     redirect: {
        //         destination: '/',
        //         permanent: false,
        //     },
        // };
    }
    return {
        props: {
            joke,
        },
    };
};
export default Random;
