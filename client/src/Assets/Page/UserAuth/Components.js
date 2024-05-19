import styled from 'styled-components';


export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 850px;
    max-width: 100%;
    min-height: 520px;
`;

export const ForgotPasswordContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 425px;
    max-width: 100%;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const SeekerContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${props => props.ChangeRole !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    ` 
    : null}
`;


export const RecruiterContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    ${props => (props.ChangeRole !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 0 0 10px;
`;

export const Title2 = styled.h2`
    font-weight: bold;
    margin: 0;
`;

export const Input = styled.input`
    border-radius: 10px;
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const Button = styled.button`
  border-radius: 12px;
  border: 1px solid ${(props) => props.borderColor || '#FCA34D'};
  background-color: ${(props) => props.backgroundColor || '#FCA34D'};
  color: ${(props) => props.color || '#ffffff'};
  font-size: ${(props) => props.fontSize || '12px'};
  font-weight: bold;
  padding: ${(props) => props.padding || '12px 40px'};
  letter-spacing: 1px;
  margin: ${(props) => props.margin || '15px 0'};
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  width: ${(props) => props.width || 'auto'};
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
    background-color: transparent;
    border-color: #ffffff;
`;

export const Anchor = styled.a`
    color: #333;
    font-size: 12px;
    text-decoration: none;
    align-self: flex-end;
    span {
        color: #6c63ff;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`;


export const OverlayContainer = styled.div`
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${props =>
    props.ChangeRole !== true ? `transform: translateX(-100%);` : null}
`;

export const LoginOverlay = styled.div`
    background: #FCA34D;
    background: -webkit-linear-gradient(to right, #ff4b2b, #FCA34D);
    background: linear-gradient(to right, #ff4b2b, #FCA34D);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${props => (props.ChangeRole !== true ? `transform: translateX(50%);` : null)}
`;

export const SignUpOverlay = styled.div`
    background: #FCA34D;
    background: -webkit-linear-gradient(to right, #51C0DC, #130160);
    background: linear-gradient(to right, #51C0DC, #130160);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${props => (props.ChangeRole !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
    transform: translateX(-20%);
    ${props => props.ChangeRole !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.ChangeRole !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px
`;

export const SideBySide = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 30px;
    align-items: center;
`;

export const gap = styled.div`
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 20px
`;


export const linebyline = styled.div`
    width: 100%;
    justify-content: center;
    gap: 50px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
`;