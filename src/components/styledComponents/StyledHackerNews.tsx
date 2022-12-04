import styled from 'styled-components';

const Wrapper = styled.div`
border-radius: 10px;

padding: 5px;
margin: 5px;
&:hover {
  border: solid black 1px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`;

const Title = styled.h2`
margin: 0;

`;

const Author = styled.span`

`;

const Link = styled.a`
color: black;
float: right;
`;


function StyledHackerNews({title, author, url}: {title: string, author: string, url: string}) {
  return (
    <div>
      {title && author ?
        <Wrapper>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Link href={url}>
            <i className="fa fa-external-link"></i>
          </Link>
        </Wrapper>
        :
        <></>
      }
    </div>
    
  );
}

export default StyledHackerNews;
