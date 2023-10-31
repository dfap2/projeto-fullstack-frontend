import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imageUrl from "../../assets/images/announcementPage.svg";
import { StyledAnnouncementPage, StyledMain } from "./style";

const AnnouncementPage = () => {
    return (
        <StyledAnnouncementPage>
            <Header />
            <StyledMain>
                <div className="main-content-container">
                    <div className="cover-image">
                        <img src={imageUrl} alt="announcement-cover" />
                    </div>

                    <div className="announcement-title-container">
                        <div className="announcement-title-details">
                            <h3 className="heading-6-600">
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes
                                Benz A 200
                            </h3>

                            <div>
                                <div>
                                    <span className="year-kilometers">
                                        2013
                                    </span>
                                    <span className="year-kilometers">
                                        0 Km
                                    </span>
                                </div>
                                <span>R$ 00.000,00</span>
                            </div>
                        </div>
                        <button></button>
                    </div>

                    <div className="announcement-description">
                        <div>
                            <h3 className="heading-6-600">Descrição</h3>
                            <p className="body-1-400">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>

                    <div className="new-comment-container">
                        <div className="comment-user">
                            <span className="user-initials">JL</span>
                            <span className="body-2-500 user-name">
                                Samuel Leão
                            </span>
                        </div>
                        <div className="comment-input-box">
                            <input type="text" name="" id="" />
                            <button>Comentar</button>
                        </div>
                    </div>
                </div>

                <aside>
                    <div className="photos-container">
                        <h3 className="heading-6-600">Fotos</h3>
                        <div className="photos">
                            <img src={imageUrl} alt="" />
                            <img src={imageUrl} alt="" />
                            <img src={imageUrl} alt="" />
                            <img src={imageUrl} alt="" />
                            <img src={imageUrl} alt="" />
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>

                    <div className="announcement-owner">
                        <span className="user-initials">SL</span>
                        <h3 className="heading-6-600">Samuel Leão</h3>
                        <p className="body-1-400">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's
                        </p>
                        <button>Ver todos anúncios</button>
                    </div>
                </aside>
            </StyledMain>
            <Footer />
        </StyledAnnouncementPage>
    );
};

export default AnnouncementPage;
