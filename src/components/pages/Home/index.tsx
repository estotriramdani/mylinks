import { useEffect } from 'react';
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

const Home = () => {
  useEffect(() => {
    document.title = 'My Link';
  }, []);
  const history = useHistory();
  return (
    <div>
      <Wrapper>
        <Screen>
          <PageHeader>
            <Button
              width="40px"
              height="40px"
              color="#2274a5"
              boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
              onClick={() => history.push('/add')}>
              <i className="bi bi-plus-lg"></i>
            </Button>
            <Text fontSize="1.5em" fontWeight="500" color="white">
              My Links
            </Text>
          </PageHeader>
          <Content>
            {[1, 3, 4, 5, 6, 7, 8, 9, 0, 1, 11, 2, 2, 4, 5].map((item) => {
              return (
                <>
                  <LinkItem key={item}>
                    <Text fontWeight="600">My Website</Text>
                    <Text fontWeight="300" fontSize="0.9em">
                      https://estotriramdani.github.io
                    </Text>
                    <Gap height={8} />
                    <ButtonGroupWrapper>
                      <Button
                        width="30px"
                        height="30px"
                        color={colors.red[100]}>
                        <i
                          className="bi bi-trash"
                          style={{ fontSize: '0.9em' }}></i>
                      </Button>
                      <a
                        href="https://esto.com"
                        target="_blank"
                        rel="noreferrer">
                        <Button width="30px" height="30px" color="#059E54">
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
            <Gap height={40} />
          </Content>
          <FloatingButtonWrapper>
            <Button
              onClick={() => history.push('/add')}
              width="200px"
              height="50px"
              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
              color="white"
              backgroundColor="#2274a5">
              Add Link
            </Button>
          </FloatingButtonWrapper>
        </Screen>
      </Wrapper>
    </div>
  );
};

export default Home;
