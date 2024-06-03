import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading = <>We are <span tw="text-primary-500">Hiring.</span></>,
  description = "We are looking forward to hire amazing talent & hardworking individuals for our team.",

}) => {
  const blogPosts = [
    {
      imageSrc:
        "https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/665d7b050022a273ad77/view?project=661d51c7e4d47fa7d45d&mode=admin",
      author: "Applied : 9",
      category: "Hiring",
      title: "Require Professional Event Planners",
      description: "Looking for Professional Event Planners who can handle : Costing , Clients , Hotel Bookings, On site Co-ordination",
      url: "https://wa.me/919823291463?text=I'm%20interested%20in%20applying%20for%20Event%20Planning"
    },
    {
      imageSrc:
        "https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/665d97120033226ebe87/view?project=661d51c7e4d47fa7d45d&mode=admin",
      author: "Applied : 23",
      category: "Hiring",
      title: "Require Dedicated Event Co-ordinators",
      description: "Looking for Event Co-odinators who can handle : On-site Co-odination , Truck loading/unloading , Execution",
      url: "https://wa.me/919823291463?text=I'm%20interested%20in%20applying%20for%20Event%20Co-ordination"
    },
    {
      imageSrc:
        "https://cloud.appwrite.io/v1/storage/buckets/6620f76347a6c75a350d/files/665d98950007340577c0/view?project=661d51c7e4d47fa7d45d&mode=admin",
      author: "Applied : 3",
      category: "Hiring",
      title: "Require Experienced Wedding Planners",
      description: "Should be able to handle clients , Planning weddings, Hotel Bookings, Costing , On site Co-ordination & Execution",
      url: "https://wa.me/919823291463?text=I'm%20interested%20in%20applying%20for%20Wedding%20Planning"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                    <Meta>
                      <TagIcon />
                      <div>{post.category}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Apply now</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
