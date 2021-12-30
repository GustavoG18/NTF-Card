import { 
  Wrapper, 
  ColumnContainer, 
  RowContainer,
  Image, 
  Title,
  Text,
  Price,
  Time,
  Line,
  CommentImage
} from './NTFCard.styles';

const NTFCard = () => {
  return(
    <>
      <Wrapper>
        <ColumnContainer>
          <Image />
          <Title> Equilibrium #3429 </Title>
          <Text> Our Equilibrium collection promotes balance and calm. </Text>
          <RowContainer>
            <Price>0.041 ETH</Price>
            <Time> 3 days left </Time>
          </RowContainer>
          <Line />
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '15px'}}>
            <CommentImage />
            <Text style={{margin: '0 0 0 20px'}}>Creation of</Text>
            <Text style={{margin: '0 0 0 4px', color: '#FFFFF !important', opacity: '100%'}}>Gustavo Guerrero</Text>
          </div>
        </ColumnContainer>
      </Wrapper>
    </>
  );
};

export default NTFCard;