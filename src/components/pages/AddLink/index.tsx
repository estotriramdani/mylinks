import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Text, Gap } from '../../atoms';
import { Wrapper, Screen, Content, PageHeader } from '../../container';
const AddLink = () => {
  useEffect(() => {
    document.title = 'Add New Link';
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
              onClick={() => history.push('/')}>
              <i className="bi bi-arrow-left"></i>
            </Button>
            <Text fontSize="1.5em" fontWeight="500" color="white">
              Add New Link
            </Text>
          </PageHeader>
          <Content>
            <Gap height={40} />
          </Content>
        </Screen>
      </Wrapper>
    </div>
  );
};

export default AddLink;
