import AnnouncementCard from "./Announcement";
import { StyledAnnouncementList } from "./style";

const AnnouncementList = () => {
    return (
        <StyledAnnouncementList>
            <AnnouncementCard id="teste" key={crypto.randomUUID()} />
            <AnnouncementCard id="teste2" key={crypto.randomUUID()} />
        </StyledAnnouncementList>
    );
};

export default AnnouncementList;
