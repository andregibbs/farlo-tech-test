import styled from 'styled-components';

export const ShowHeroTitle = styled.h1`
  padding: 0 20px;
  font-size: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ShowCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  &.sold-out {
    background-color: #f0f0f0;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ShowImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ShowDetails = styled.div`
  text-align: center;
  height: 100%;
`;

export const ShowTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.5rem;
`;

export const ShowSubtitle = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

export const BookNowButton = styled.a`
  padding: 10px;
  background: linear-gradient(90deg, #ff7b00, #ff4500);
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
  display: block;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #ff4500, #ff7b00);
  }
`;

export const SoldOutLabel = styled.div`
  padding: 10px;
  background: #ddd;
  color: #999;
  text-align: center;
  font-weight: bold;
  border-radius: 0 0 8px 8px;
`;
