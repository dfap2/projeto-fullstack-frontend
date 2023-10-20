import img from "../../../../assets/images/fronSideCar.svg";
import { StyledAnnouncementCard } from "./style";

interface IAnnouncementCard {
    id: string;
    key: string;
}

const AnnouncementCard = ({ id, key }: IAnnouncementCard) => {
    return (
        <>
            <StyledAnnouncementCard id={id} key={key}>
                <div className="image-container">
                    <img src={img} alt="Car" />
                </div>
                <div className="description">
                    <h3 className="heading-7-600">Maserati - Ghibli</h3>
                    <p className="body-2-400">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem...
                    </p>
                    <div className="user-container">
                        <span className="user-initials">SL</span>
                        <span className="body-2-500">Samuel Leão</span>
                    </div>
                    <div className="description-footer">
                        <div>
                            <span className="body-2-500 colored-footer">
                                0 KM
                            </span>{" "}
                            <span className="body-2-500 colored-footer">
                                2019
                            </span>{" "}
                        </div>
                        <span className="heading-7-500 price">
                            R$ 00.000,00
                        </span>
                    </div>
                </div>
            </StyledAnnouncementCard>
        </>
    );
};

export default AnnouncementCard;
