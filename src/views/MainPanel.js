import React, { useState } from 'react';
import Button from '@enact/sandstone/Button';
import {Panel, Header} from '@enact/sandstone/Panels';
import ImageItem from '@enact/sandstone/ImageItem';
import Icon from '@enact/sandstone/Icon';

const MainPanel = (props) => {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    if (currentTab === 'home') {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ImageItem
              key={index}
              src="path/to/image.jpg"
              label={`Image ${index + 1}`}
              orientation="vertical"
              style={{ width: '150px', height: '150px' }}
            />
          ))}
        </div>
      );
    }
    // 다른 탭에 대한 콘텐츠 렌더링
    // ...
  };

  return (
    <Panel {...props}>

      <Header title="My Application" />
	  <div style={{ padding: '20px', height: '50vh', overflowY: 'auto' }}>
        {renderContent()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <Button style={{ flex: 1, minWidth: '80px' }} onClick={() => setCurrentTab('home')}>
          <Icon size="small" title="home">home</Icon> 홈
        </Button>
        <Button style={{ flex: 1, minWidth: '80px' }} onClick={() => setCurrentTab('menu')}>
          <Icon size="small" title="light">light</Icon> 관리
        </Button>
        <Button style={{ flex: 1, minWidth: '80px' }} onClick={() => setCurrentTab('analysis')}>
          <Icon size="small" title="oneminplay">oneminplay</Icon> 분석
        </Button>
        <Button style={{ flex: 1, minWidth: '80px' }} onClick={() => setCurrentTab('my')}>
          <Icon size="small" title="profile">profile</Icon> 마이
        </Button>
      </div>

    </Panel>
  );
};

export default MainPanel;
