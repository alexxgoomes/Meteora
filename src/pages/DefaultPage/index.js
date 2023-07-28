import Banner from 'components/Banner';
import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
    return (
        <>
            <Header />
            <Container>
                <Banner />
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}