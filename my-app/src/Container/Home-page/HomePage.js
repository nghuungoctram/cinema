import HomePageMenu from './HomePageMenu/HomePageMenu'
import HomePageTop from './HomePageTop/HomePageTop'
import HomePageSlideShow from './HomePageSlideShow/HomePageSlideShow'
import HomePageBottom from './HomePageBottom/HomePageBottom'
import Footer from '../Before-login/ContenBottom/ContenBottom'
function HomePage() {
    return (
        <div>
            <HomePageMenu />
            <HomePageTop />
            <HomePageSlideShow />
            <HomePageBottom />
            <Footer />
        </div>
    )
}

export default HomePage
