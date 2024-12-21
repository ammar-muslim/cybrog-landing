import "../GamingLibirary/GamingLibirary.css"

import GamingLibiraryData from '../../Data/GamingLibiraryData';


import {GamingLibiraryCard , SectionHeader , SectionWrapper} from '../../components/index';


export const GamingLibirary = () => {

  const cards = GamingLibiraryData.map((card) => (
    <GamingLibiraryCard
      key={card.id}
      img={card.img}
      title={card.title}
      category={card.category}
      date_added={card.dateAdded}
      hours_played={card.hoursPlayed}
      download={card.currentlyDownloaded}
    />
  ));

  return (
    <SectionWrapper>
    <SectionHeader>Gaming Libirary</SectionHeader>
    <div className="gaming-libirary-cards">
      {cards}
    </div>
  </SectionWrapper>  )
}


export default GamingLibirary