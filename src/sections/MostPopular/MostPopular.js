import './MostPopular.css';
import mostPopularData from '../../Data/MostPopularData';

import {Card , SectionHeader , SectionWrapper} from '../../components/index';



const MostPopular = () => {
  const cards = mostPopularData.map((card) => (
    <Card
      key={card.id}
      img={card.img}
      title={card.title}
      category={card.category}
      rate={card.rate}
      downloads={card.downloads}
    />
  ));

  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className="most-popular-items">
        {cards}
      </div>
    </SectionWrapper>
  );
};

export default MostPopular;
