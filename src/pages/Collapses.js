import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd'
import '../Style/Collaps.css'


const text = ("Yukti can provide guidance on career choices, resume building, job search strategies, interview preparation, and professional development.")
const text1 = ("You can simply ask Yukti for career advice by typing or speaking your questions and concerns. It will provide tailored responses based on your queries.")
const text2 = ("Yes, Yukti's responses are customized to your specific needs and circumstances, offering advice and recommendations relevant to your career goals.")
let text3 = ("Yes, Yukti can assist you in creating a career roadmap and setting achievable goals for your professional growth.")


const items = ()=>[
  {
    key: '1',
    label: <p className='collaps-label'>What can Yukti help me with regarding my career?</p>,
    children: <p className='collaps-p'>{text}</p>,
  },
  {
    key: '2',
    label: <p className='collaps-label'>How can I get career advice from Yukti?</p>,
    children: <p className='collaps-p'>{text1}</p>,
  },  {
    key: '3',
    label: <p className='collaps-label'>Is the career guidance provided by Yukti personalized to my unique situation?</p>,
    children: <p className='collaps-p'>{text2}</p>,
  },  {
    key: '4',
    label: <p className='collaps-label'>Can Yukti help me with long-term career planning?</p>,
    children: <p className='collaps-p'>{text3}</p>,
  },

];

const Collapses = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={items(panelStyle)}
    />
  );
};
export default Collapses;
