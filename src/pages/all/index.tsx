import { AllCard, TopContainer, IntroCard, AllContainer, WelcomeCard } from './allStyles';

const All = () => {
  return (
    <AllContainer>
      <TopContainer>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <IntroCard>
            <img src="mecomputer.png" style={{height: '50%'}}/>
            <h3>ALL</h3>
          </IntroCard>
          <IntroCard>
            <img src="medplusprimary.png" style={{height: '50%'}}/>
            <img src="TDSCprimary.png" style={{height: '50%'}}/>
            {/* <h3>ALL</h3> */}
          </IntroCard>
        </div>
        <WelcomeCard>
          <h3>ALL</h3>
        </WelcomeCard>
      </TopContainer>
      <TopContainer>
        <AllCard>
          <h3>ALL</h3>
        </AllCard>
        <AllCard>
          <h3>ALL</h3>
        </AllCard>
        <AllCard>
          <h3>ALL</h3>
        </AllCard>
      </TopContainer>
    </AllContainer>
  )
}

export default All