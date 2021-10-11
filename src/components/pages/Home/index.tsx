import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import colors from '../../../utils/colors';
import {
  Button,
  Text,
  ButtonGroupWrapper,
  FloatingButtonWrapper,
  Gap,
  LinkItem,
} from '../../atoms';
import { Wrapper, Screen, Content, PageHeader } from '../../container';

interface ItemTypes {
  id: number;
  title: string;
  link: string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = 'My Link';
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (isLoading) {
      const links = JSON.parse(localStorage.getItem('mylinks')!);
      if (links) {
        setData(links);
      }
    }
    return () => {
      setIsLoading(false);
    };
  }, [data, isLoading]);

  const handleDelete = (e: number) => {
    const filteredData = data.filter((data: ItemTypes) => data.id !== e);
    setData(filteredData);
    localStorage.setItem('mylinks', JSON.stringify(filteredData));
  };

  const history = useHistory();
  return (
    <div>
      <Wrapper>
        <Screen>
          <PageHeader>
            <Button
              width="40px"
              height="40px"
              color={colors.blue[300]}
              boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
              onClick={() => history.push('/add')}>
              <i className="bi bi-plus-lg"></i>
            </Button>
            <Text fontSize="1.5em" fontWeight="500" color="white">
              My Links
            </Text>
          </PageHeader>
          <Content>
            {data.map((item: ItemTypes) => {
              return (
                <>
                  <LinkItem key={item.id}>
                    <Text fontWeight="600">{item.title}</Text>
                    <Text fontWeight="300" fontSize="0.9em">
                      {item.link}
                    </Text>
                    <Gap height={8} />
                    <ButtonGroupWrapper>
                      <Button
                        width="30px"
                        height="30px"
                        color={colors.red[300]}
                        onClick={() => handleDelete(item.id)}>
                        <i
                          className="bi bi-trash"
                          style={{ fontSize: '0.9em' }}></i>
                      </Button>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        <Button
                          width="30px"
                          height="30px"
                          color={colors.green[100]}>
                          <i
                            className="bi bi-eye"
                            style={{ fontSize: '0.9em' }}></i>
                        </Button>
                      </a>
                    </ButtonGroupWrapper>
                  </LinkItem>
                  <Gap height={10} />
                </>
              );
            })}
            {data.length === 0 ? (
              <LinkItem>
                <Text fontWeight="600">No links</Text>
                <Text fontWeight="300" fontSize="0.9em">
                  Go add some!
                </Text>
              </LinkItem>
            ) : (
              ''
            )}
            <Gap height={40} />
          </Content>
          <FloatingButtonWrapper>
            <Button
              onClick={() => history.push('/add')}
              width="200px"
              height="50px"
              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
              color="white"
              backgroundColor={colors.blue[300]}>
              Add Link
            </Button>
          </FloatingButtonWrapper>
        </Screen>
      </Wrapper>
    </div>
  );
};

export default Home;
