import AnnouncementCard from "./AnnouncementCard";
import { StyledAnnouncementList } from "./style";

const AnnouncementsList = () => {
    return (
        <StyledAnnouncementList>
            <AnnouncementCard id="teste" key={crypto.randomUUID()} />
            <AnnouncementCard id="teste2" key={crypto.randomUUID()} />
        </StyledAnnouncementList>
    );
};

export default AnnouncementsList;
