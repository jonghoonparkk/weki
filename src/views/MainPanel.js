import React, { useState } from 'react';
import Button from '@enact/sandstone/Button';
import {Panel, Header} from '@enact/sandstone/Panels';
import ImageItem from '@enact/sandstone/ImageItem';
import Icon from '@enact/sandstone/Icon';
import { FiFrown, FiMeh, FiSmile } from "react-icons/fi";
import { RiWaterFlashLine } from "react-icons/ri";
import { MdFace } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";

const MainPanel = (props) => {
  const [currentTab, setCurrentTab] = useState('home');

  const renderContent = () => {
    if (currentTab === 'home') {
		return (
		  <div style={{ padding: '20px', textAlign: 'center' }}>
			<h2>관리</h2>
			<p>한눈에 관리하는 나만의 농장</p>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
			  {Array.from({ length: 6 }).map((_, index) => (
				<div key={index} style={{ width: 'calc(50% - 10px)', marginBottom: '20px' }}>
				  <ImageItem
					src={`path/to/image${index + 1}.jpg`} // 이미지 경로를 알맞게 수정
					label={`${index + 1} 번 구역`}
					orientation="vertical"
					style={{ width: '100%', height: 'auto' }}
				  />
				</div>
			  ))}
			</div>
		  </div>
		);
    } else if (currentTab === 'menu') {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>재배 환경</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
			<FiFrown size={100} title="happy" style={{ margin: '10px' }} />
   			<FiMeh size={100} title="neutral" style={{ margin: '10px' }} />
   			<FiSmile size={100} title="sad" style={{ margin: '10px' }} />
          </div>
          <p>물이 부족해요</p>
          <p>물주기 버튼을 눌러서 물을 주세요</p>
          <Button  style={{ padding: 0, width: 'auto', height: 'auto' }}>
			<RiWaterFlashLine size={200} title="sad" style={{ margin: '10px' }} />
          </Button>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div>
              <h3>현재 상태</h3>
              <p>대기 온도: 20°C</p>
              <p>토양 온도: 15°C</p>
              <p>대기 습도: 50%</p>
              <p style={{ color: 'red' }}>토양 습도: 10%</p>
              <p>조명: 3단계</p>
              <p>조명 지속 시간: 16시간</p>
            </div>
            <div>
              <h3>표준 환경</h3>
              <p>대기 온도: 20°C</p>
              <p>토양 온도: 15°C</p>
              <p>대기 습도: 50%</p>
              <p>토양 습도: 30%</p>
              <p>조명: 3단계</p>
              <p>조명 지속 시간: 16시간</p>
            </div>
          </div>
        </div>
      );
    } else if (currentTab === 'analysis') {
		return (
		  <div style={{ padding: '20px', textAlign: 'center' }}>
			<h2>분석</h2>
			<p>데이터 분석을 통한 똑똑한 농장 관리</p>
			<div style={{ margin: '20px 0' }}>
			  {/* 그래프 영역 */}
			  <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}>
				{/* 실제 그래프는 chart 라이브러리 등을 사용해 구현 */}
				<p>그래프가 표시될 영역</p>
			  </div>
			</div>
			<div style={{ textAlign: 'left' }}>
			  <h3>실시간 카메라 보기</h3>
			  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
				<p>1번 구역</p>
				<p>2번 구역</p>
				<p>3번 구역</p>
				<p>4번 구역</p>
			  </div>
			  <h3>데이터 분석 및 보고서</h3>
			  <h4>수확물 관리</h4>
			  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
				<p>성장 패턴</p>
				<p>수확 시기 예측</p>
			  </div>
			  <h4>에너지 사용 최적화</h4>
			  <div style={{ border: '1px solid #ccc', padding: '10px' }}>
				<p>일간 보고서</p>
				<p>주간 보고서</p>
				<p>월간 보고서</p>
			  </div>
			</div>
		  </div>
		);
	  } else if (currentTab === 'my') {
		return (
		  <div style={{ padding: '20px' }}>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
			  <MdFace size={60} style={{ marginRight: '10px' }} />
			  <div>
				<h3>박종훈</h3>
			  </div>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
			  <div>회원구분</div>
			  <div>일반</div>
			</div>
			<div style={{ marginBottom: '20px' }}>
			  <h4>내 정보</h4>
			  <div>기본정보</div>
			  <div>주소</div>
			</div>
			<div style={{ marginBottom: '20px' }}>
			  <h4>내 포인트</h4>
			  <div>13000P</div>
			</div>
			<div>
			  <h4>포인트 적립 내역</h4>
			  {Array.from({ length: 5 }).map((_, index) => (
				<div key={index} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
				  <div>
					<p>물주기</p>
					<p>1번 구역 물주기. 토양 습도 24%에서 27%로 상승!</p>
				  </div>
				  <div>
					<p>+100P 적립</p>
					<p>적용일자 2024.06.23</p>
				  </div>
				</div>
			  ))}
			</div>
		  </div>
		);
	  }
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
          <Icon size="small" title="nowplaying">nowplaying</Icon> 분석
        </Button>
        <Button style={{ flex: 1, minWidth: '80px' }} onClick={() => setCurrentTab('my')}>
          <Icon size="small" title="profile">profile</Icon> 마이
        </Button>
      </div>
    </Panel>
  );
};

export default MainPanel;
