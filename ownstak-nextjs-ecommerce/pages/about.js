import Layout from '../components/Layout/Layout';
import PageLayout from '../components/PageLayout/PageLayout';
import { PageTitle, PageText, PromiseBox, PromiseList, PromiseListItem } from '../components/Typography/Typography';
import { CheckIcon } from '../components/Icons/Icons';

export default function About() {
  return (
    <Layout title="About Us">
      <PageLayout narrow>
        <PageTitle>About FurnitureLand</PageTitle>
        <PageText>
          Welcome to FurnitureLand, where exceptional design meets uncompromising quality. 
          Since our founding, we've been dedicated to creating furniture that transforms 
          houses into homes and offices into inspiring workspaces.
        </PageText>
        <PageText>
          Our carefully curated collection features pieces from renowned designers and 
          emerging talents alike, all united by a commitment to sustainability, 
          craftsmanship, and timeless style.
        </PageText>
        <PageText>
          Every piece in our collection is selected for its quality, beauty, and 
          functionality. We believe that great furniture should not only look beautiful 
          but also stand the test of time, providing comfort and style for years to come.
        </PageText>
        
        <PromiseBox title="Our Promise to You">
          <PromiseList>
            <PromiseListItem icon={<CheckIcon />}>
              Premium quality materials and construction
            </PromiseListItem>
            <PromiseListItem icon={<CheckIcon />}>
              Sustainable and eco-friendly manufacturing
            </PromiseListItem>
            <PromiseListItem icon={<CheckIcon />}>
              Expert customer service and support
            </PromiseListItem>
            <PromiseListItem icon={<CheckIcon />}>
              White-glove delivery and setup service
            </PromiseListItem>
            <PromiseListItem icon={<CheckIcon />}>
              30-day satisfaction guarantee
            </PromiseListItem>
          </PromiseList>
        </PromiseBox>
      </PageLayout>
    </Layout>
  );
} 

export function getStaticProps() {
  return {
    props: {},
  };
}