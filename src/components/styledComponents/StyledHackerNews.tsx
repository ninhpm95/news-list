import styled from 'styled-components';

const Wrapper = styled.div`
background-color: rgb(24, 49, 83);
border-radius: 5px;
padding: 5px;
margin: 5px;
`;

const Title = styled.h2`
margin: 0;
color: white;
`;

const Author = styled.span`
color: white;
`;

const Link = styled.a`
color: white;
float: right;
`;


function StyledHackerNews({title, author, link}: {title: string, author: string, link: string}) {
  return (
    <div>
      {title && author ?
        <Wrapper>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Link href={link}>
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
