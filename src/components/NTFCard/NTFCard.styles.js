import styled from "styled-components";
import equilibrium from '../../assets/image-equilibrium.jpg';
import iconEthereum from '../../assets/icon-ethereum.svg';
import time from '../../assets/icon-clock.svg';
import photoProfile from '../../assets/image-avatar.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 27%;
  background-color: ${(props) => 
    props.theme.colors.neutral['darkBlueCard']
  };
  border-radius: 10px;
  box-shadow: ${(props) => 
    `0px 15px 15px 15px ${props.theme.colors.neutral['darkBlueShadow']}`
  };
  @media (max-width: 1000px){
    width: 280px;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 89%;
  width: 89%;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100%;
`;

export const Image = styled.div`
  background-image: url(${equilibrium});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 35vh;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => 
    props.theme.colors.neutral['white']
  };
  font-family: ${(props) => 
    props.theme.fonts['main']
  };
  font-weight: ${(props) => 
    props.theme.weights[600]
  };
  font-size: ${(props) => 
    props.theme.fontSize.title[25]
  };
`;

export const Text = styled.p`
  color: ${(props) => 
    props.theme.colors.neutral['white']
  };
  font-family: ${(props) => 
    props.theme.fonts['main']
  };
  font-weight: ${(props) => 
    props.theme.weights[200]
  };
  font-size: ${(props) => 
    props.theme.fontSize.paragraph[18]
  };
  opacity: 70%;
  margin-top: 5px;
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => 
    props.theme.colors.primary['cyan']
  };
  font-family: ${(props) => 
    props.theme.fonts['main']
  };
  font-weight: ${(props) => 
    props.theme.weights[400]
  };
  font-size: ${(props) => 
    props.theme.fontSize.paragraph[18]
  };
  :before{
    content: url(${iconEthereum});
    display:flex;
    background-position: center;
    background-size: cover;
    align-items: center;
    margin-right: 10px;
  }
`;

export const Line = styled.hr`
  background: ${(props) => 
    props.theme.colors.primary['cyan']
  };
  height: 0.1px;
  width: 100%;
  opacity: 30%;
`

/// Delete this.
export const Time = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => 
    props.theme.colors.primary['softBlue']
  };
  font-family: ${(props) => 
    props.theme.fonts['main']
  };
  font-weight: ${(props) => 
    props.theme.weights[400]
  };
  font-size: ${(props) => 
    props.theme.fontSize.paragraph[18]
  };
  :before{
    content: url(${time});
    display:flex;
    background-position: center;
    background-size: cover;
    align-items: center;
    margin-right: 10px;
  }
`;

export const CommentImage = styled.div`
  background: url(${photoProfile});
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  border: 1px white solid;
  height: 35px;
  width: 35px;
`;