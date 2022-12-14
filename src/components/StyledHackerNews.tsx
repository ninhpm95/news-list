import styled from 'styled-components';

// wrapper, used to wrap elements of the current news: title, author, link
const Wrapper = styled.div`
  margin: 5px;
  padding: 10px;  
  &:hover {
    cursor: pointer;
    border: solid black 1px;
    border-radius: 10px;    
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

// news title
const Title = styled.h2`
  margin: 0;
`;

// news author
const Author = styled.span`

`;

// news link
const Link = styled.a`
  float: right;
  color: black;  
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
