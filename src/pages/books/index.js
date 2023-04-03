import Card from 'react-bootstrap/card';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getBooks } from '@/utils/book';
import Layout from '@/components/Layout';

const Book = ({ books }) => {
    return (
        <Layout>
            {books.map((book, index) => {
                return (
                    <Card className="my-3 shadow" key={index}>
                        <Card.Body>
                            <Card.Title style={{ textTransform: 'uppercase' }}>
                                {book.bookName}
                            </Card.Title>
                            <Card.Text>{book.bookContent}</Card.Text>
                            <Link href="/books">
                                <Button variant="dark">Back</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </Layout>
    );
};

export const getStaticProps = async () => {
    const books = await getBooks();
    // console.log(books);
    return {
        props: {
            books,
        },
    };
};

export default Book;
