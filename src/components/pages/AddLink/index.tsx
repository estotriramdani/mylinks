import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import colors from '../../../utils/colors';
import { Button, Text, Gap, ButtonGradient } from '../../atoms';
import { Wrapper, Screen, Content, PageHeader } from '../../container';

const Input = styled.input`
  border: solid 2px ${colors.blue[200]};
  border-radius: 10px;
  outline: none;
  width: 100%;
  padding: 10px;
  color: ${colors.blue[300]};
  transition: all 0.2s;
  :focus {
    border: solid 2px ${colors.blue[300]};
  }
`;

const AddLink = () => {
  const [data, setData] = useState({
    title: '',
    link: '',
  });
  const onSubmit = () => {
    if (data.title === '' || data.link === '') {
      toast.warning('All forms should be filled');
    } else {
      let id = 0;
      let links = JSON.parse(localStorage.getItem('mylinks')!);
      if (links) {
        id = links.length;
      } else {
        links = [];
      }
      const readyData = {
        id,
        title: data.title,
        link: data.link,
      };
      links.push(readyData);
      localStorage.setItem('mylinks', JSON.stringify(links));
      toast.success('Link saved!');
      setData({
        link: '',
        title: '',
      });
    }
  };
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
              color={colors.blue[300]}
              boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
              onClick={() => history.push('/')}>
              <i className="bi bi-arrow-left"></i>
            </Button>
            <Text fontSize="1.5em" fontWeight="500" color="white">
              Add New Link
            </Text>
          </PageHeader>
          <Content>
            <Gap height={10} />
            <Input
              placeholder="Title link"
              autoFocus
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <Gap height={10} />
            <Input
              placeholder="Full link"
              value={data.link}
              onChange={(e) => setData({ ...data, link: e.target.value })}
            />
            <Gap height={15} />
            <ButtonGradient
              color={colors.white}
              onClick={onSubmit}
              height="44px">
              Save
            </ButtonGradient>
          </Content>
        </Screen>
      </Wrapper>
    </div>
  );
};

export default AddLink;
